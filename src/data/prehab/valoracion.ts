import { Sprout, Leaf, Trees } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Nivel = 'inicial' | 'intermedio' | 'avanzado'

export interface Pregunta {
  texto: string
  opciones: string[]
}

/** Tres preguntas sobre la actividad habitual previa al diagnóstico; cada opción puntúa 0, 1 o 2. */
export const PREGUNTAS: Pregunta[] = [
  {
    texto: '¿Cuánto te mueves en un día normal?',
    opciones: ['Poco: paso casi todo el día sentada', 'Algo: camino 20–40 minutos al día', 'Mucho: más de 45 minutos o trabajo de pie'],
  },
  {
    texto: '¿Haces ejercicio o deporte de forma regular?',
    opciones: ['No, casi nunca', '1–2 veces por semana', '3 o más veces por semana'],
  },
  {
    texto: '¿Cómo te sientes al subir dos pisos de escaleras?',
    opciones: ['Tengo que parar o me ahogo mucho', 'Llego cansada, pero sin parar', 'Los subo sin problema'],
  },
]

export function calcularNivel(respuestas: number[]): Nivel {
  const total = respuestas.reduce((a, b) => a + b, 0)
  if (total <= 2) return 'inicial'
  if (total <= 4) return 'intermedio'
  return 'avanzado'
}

export interface NivelConfig {
  nombre: string
  descripcion: string
  icono: LucideIcon
  color: string
  fondo: string
  /** Rango de esfuerzo percibido en la escala de Borg 6–20 */
  borg: [number, number]
  borgTexto: string
}

export const NIVELES: Record<Nivel, NivelConfig> = {
  inicial: {
    nombre: 'Punto de partida',
    descripcion: 'Sesiones cortas y suaves que crecen semana a semana. Ideal si partes de poca actividad.',
    icono: Sprout,
    color: 'var(--color-sage)',
    fondo: 'var(--color-sage-bg)',
    borg: [11, 12],
    borgTexto: 'Ligero: puedes hablar y cantar.',
  },
  intermedio: {
    nombre: 'En marcha',
    descripcion: 'Plan equilibrado de caminar a buen ritmo y fuerza, con progresión semanal.',
    icono: Leaf,
    color: 'var(--color-sky)',
    fondo: 'var(--color-sky-bg)',
    borg: [12, 14],
    borgTexto: 'Moderado: puedes hablar, pero no cantar.',
  },
  avanzado: {
    nombre: 'En forma',
    descripcion: 'Entrenamiento con intervalos y fuerza con carga para llegar a la cirugía en tu mejor forma.',
    icono: Trees,
    color: 'var(--color-plum)',
    fondo: 'var(--color-plum-soft)',
    borg: [13, 15],
    borgTexto: 'Algo duro: hablas con frases cortas.',
  },
}

/** Semana del programa de 4 semanas según los días que faltan para la cirugía (1–4). */
export function semanaPorFecha(diasHastaCirugia: number | null): number {
  if (diasHastaCirugia == null || diasHastaCirugia > 28) return 1
  if (diasHastaCirugia <= 0) return 4
  return Math.min(4, Math.max(1, 5 - Math.ceil(diasHastaCirugia / 7)))
}
