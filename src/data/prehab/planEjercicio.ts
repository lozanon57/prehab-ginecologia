import type { Nivel } from './valoracion'

export type TipoSesion = 'aerobico' | 'intervalos' | 'fuerza' | 'flexibilidad' | 'descanso'

export interface Sesion {
  tipo: TipoSesion
  titulo: string
  duracion: string
  detalle: string
}

export interface SemanaEjercicio {
  semana: number
  objetivo: string
  dias: Sesion[]
}

export const DIAS_SEMANA = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

interface Parametros {
  /** Minutos de caminata por semana 1–4 */
  minutos: number[]
  /** Series y repeticiones de fuerza por semana 1–4 */
  fuerza: string[]
  /** Distribución de la semana (lunes→domingo) */
  patron: TipoSesion[][]
}

const PARAMETROS: Record<Nivel, Parametros> = {
  inicial: {
    minutos: [10, 15, 20, 25],
    fuerza: ['2 series × 8', '2 series × 10', '2 series × 12', '3 series × 10'],
    patron: [
      ['aerobico', 'fuerza', 'flexibilidad', 'aerobico', 'fuerza', 'aerobico', 'descanso'],
      ['aerobico', 'fuerza', 'aerobico', 'flexibilidad', 'fuerza', 'aerobico', 'descanso'],
      ['aerobico', 'fuerza', 'aerobico', 'aerobico', 'fuerza', 'aerobico', 'descanso'],
      ['aerobico', 'fuerza', 'aerobico', 'aerobico', 'fuerza', 'aerobico', 'descanso'],
    ],
  },
  intermedio: {
    minutos: [25, 30, 35, 40],
    fuerza: ['3 series × 10', '3 series × 12', '3 series × 12 con banda', '3 series × 15 con banda'],
    patron: [
      ['aerobico', 'fuerza', 'aerobico', 'fuerza', 'aerobico', 'aerobico', 'descanso'],
      ['aerobico', 'fuerza', 'aerobico', 'fuerza', 'aerobico', 'flexibilidad', 'aerobico'],
      ['intervalos', 'fuerza', 'aerobico', 'fuerza', 'intervalos', 'aerobico', 'descanso'],
      ['intervalos', 'fuerza', 'aerobico', 'fuerza', 'intervalos', 'aerobico', 'flexibilidad'],
    ],
  },
  avanzado: {
    minutos: [35, 40, 45, 45],
    fuerza: ['3 series × 12 con carga', '3 series × 12 con más carga', '4 series × 10 con carga', '3 series × 12 (mantener)'],
    patron: [
      ['intervalos', 'fuerza', 'aerobico', 'fuerza', 'intervalos', 'aerobico', 'descanso'],
      ['intervalos', 'fuerza', 'aerobico', 'fuerza', 'intervalos', 'fuerza', 'aerobico'],
      ['intervalos', 'fuerza', 'aerobico', 'fuerza', 'intervalos', 'fuerza', 'aerobico'],
      ['intervalos', 'fuerza', 'aerobico', 'fuerza', 'aerobico', 'flexibilidad', 'descanso'],
    ],
  },
}

const INTERVALOS: Record<Nivel, string[]> = {
  inicial: ['', '', '', ''],
  intermedio: ['', '', '4 × (2 min rápido + 2 min suave)', '5 × (2 min rápido + 2 min suave)'],
  avanzado: [
    '4 × (2 min rápido + 2 min suave)',
    '5 × (2 min rápido + 2 min suave)',
    '6 × (2 min rápido + 1,5 min suave)',
    '4 × (2 min rápido + 2 min suave)',
  ],
}

const OBJETIVOS = [
  'Crear el hábito: muévete casi todos los días, aunque sea poco.',
  'Aumentar el tiempo: suma unos minutos a cada sesión.',
  'Ganar intensidad: el esfuerzo debe notarse, sin agotarte.',
  'Consolidar y llegar descansada: mantén el ritmo y reduce la última semana si estás cansada.',
]

const CIRCUITO_FUERZA =
  'Sentadilla a una silla · flexiones en la pared · elevación de talones · puente de glúteos · remo con banda o botellas de agua. Descansa 1 minuto entre series.'

function sesion(tipo: TipoSesion, nivel: Nivel, semanaIdx: number): Sesion {
  const p = PARAMETROS[nivel]
  const minutos = p.minutos[semanaIdx]
  switch (tipo) {
    case 'aerobico':
      return {
        tipo,
        titulo: 'Caminar',
        duracion: `${minutos} min`,
        detalle:
          nivel === 'inicial'
            ? 'A paso cómodo. Si no puedes seguido, haz 2–3 tramos cortos con descanso. Bici estática o piscina también valen.'
            : 'A paso ligero, sin parar. Puedes usar bici estática, elíptica o nadar.',
      }
    case 'intervalos':
      return {
        tipo,
        titulo: 'Caminar con intervalos',
        duracion: `${minutos} min`,
        detalle: `5 min de calentamiento, después ${INTERVALOS[nivel][semanaIdx]}, y vuelta a la calma. "Rápido" = te cuesta hablar.`,
      }
    case 'fuerza':
      return { tipo, titulo: 'Circuito de fuerza', duracion: p.fuerza[semanaIdx], detalle: CIRCUITO_FUERZA }
    case 'flexibilidad':
      return {
        tipo,
        titulo: 'Estiramientos y respiración',
        duracion: '15 min',
        detalle: 'Estira piernas, espalda y hombros 30 s cada zona, sin rebotes. Termina con 10 respiraciones diafragmáticas.',
      }
    case 'descanso':
      return { tipo, titulo: 'Descanso activo', duracion: 'Libre', detalle: 'Un paseo tranquilo si te apetece. Descansar también es parte del plan.' }
  }
}

export function planEjercicio(nivel: Nivel): SemanaEjercicio[] {
  return PARAMETROS[nivel].patron.map((patron, i) => ({
    semana: i + 1,
    objetivo: OBJETIVOS[i],
    dias: patron.map((tipo) => sesion(tipo, nivel, i)),
  }))
}

export const TIPO_ESTILO: Record<TipoSesion, { color: string; fondo: string; etiqueta: string }> = {
  aerobico: { color: 'var(--color-sky)', fondo: 'var(--color-sky-bg)', etiqueta: 'Aeróbico' },
  intervalos: { color: 'var(--color-plum)', fondo: 'var(--color-plum-soft)', etiqueta: 'Intervalos' },
  fuerza: { color: 'var(--color-clay)', fondo: 'var(--color-clay-bg)', etiqueta: 'Fuerza' },
  flexibilidad: { color: 'var(--color-lilac)', fondo: 'var(--color-lilac-bg)', etiqueta: 'Flexibilidad' },
  descanso: { color: 'var(--color-ink-3)', fondo: 'var(--color-surface-2)', etiqueta: 'Descanso' },
}
