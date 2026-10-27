import { Dumbbell, Wind, Waves, Hand, Footprints } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ProgramaEjercicioId } from '../types'

export interface Ejercicio {
  nombre: string
  pauta: string
  como: string
}

export interface Fase {
  titulo: string
  cuando: string
  ejercicios: Ejercicio[]
}

export interface ProgramaEjercicio {
  id: ProgramaEjercicioId
  nombre: string
  para: string
  icono: LucideIcon
  color: string
  fondo: string
  intro: string
  fases: Fase[]
  nota?: string
}

export const PROGRAMAS: ProgramaEjercicio[] = [
  {
    id: 'prehab',
    nombre: 'Prehabilitación',
    para: 'Antes de la cirugía',
    icono: Dumbbell,
    color: 'var(--color-plum)',
    fondo: 'var(--color-plum-soft)',
    intro: 'Llegar en mejor forma física a la cirugía acelera la recuperación. Combina caminar a diario con fuerza 2–3 veces por semana. Ajusta siempre a cómo te encuentres.',
    fases: [
      {
        titulo: 'Aeróbico',
        cuando: 'Cada día',
        ejercicios: [
          { nombre: 'Caminar a paso ligero', pauta: '30 min · 5–7 días/semana', como: 'Debes poder hablar pero no cantar. Puedes dividirlo en 3 paseos de 10 minutos.' },
          { nombre: 'Escaleras o bicicleta estática', pauta: '10–20 min · alternativa', como: 'Si llueve o prefieres hacerlo en casa.' },
        ],
      },
      {
        titulo: 'Fuerza',
        cuando: '2–3 días/semana',
        ejercicios: [
          { nombre: 'Sentarse y levantarse de una silla', pauta: '3 series × 10', como: 'Sin ayudarte de las manos si puedes. Espalda recta.' },
          { nombre: 'Flexiones en la pared', pauta: '3 series × 10', como: 'Manos a la altura de los hombros, cuerpo recto, dobla los codos.' },
          { nombre: 'Elevación de talones', pauta: '3 series × 15', como: 'Apoyada en el respaldo de una silla, sube de puntillas despacio.' },
          { nombre: 'Puente de glúteos', pauta: '3 series × 10', como: 'Tumbada boca arriba con rodillas dobladas, eleva la cadera y baja despacio.' },
        ],
      },
    ],
  },
  {
    id: 'respiratorio',
    nombre: 'Respiración',
    para: 'Antes y después',
    icono: Wind,
    color: 'var(--color-sky)',
    fondo: 'var(--color-sky-bg)',
    intro: 'Mantener los pulmones bien ventilados previene complicaciones tras la anestesia y ayuda a gestionar la ansiedad.',
    fases: [
      {
        titulo: 'Respiración diafragmática',
        cuando: '3 veces al día · cada hora tras la cirugía',
        ejercicios: [
          { nombre: 'Respiración profunda', pauta: '10 repeticiones', como: 'Una mano en el abdomen. Coge aire por la nariz hinchando la tripa, mantén 3 segundos y suéltalo despacio por la boca.' },
          { nombre: 'Tos asistida', pauta: '2–3 veces', como: 'Tras la cirugía, sujeta la herida con un cojín y tose con fuerza para movilizar secreciones.' },
          { nombre: 'Respiración 4-7-8', pauta: '4 ciclos', como: 'Inspira en 4 segundos, retén 7, espira en 8. Útil para dormir y calmar la ansiedad.' },
        ],
      },
    ],
  },
  {
    id: 'piernas',
    nombre: 'Circulación de piernas',
    para: 'Después de la cirugía',
    icono: Footprints,
    color: 'var(--color-lilac)',
    fondo: 'var(--color-lilac-bg)',
    intro: 'Activar la circulación de las piernas previene trombos y ayuda en la prevención del linfedema tras extirpar ganglios pélvicos.',
    fases: [
      {
        titulo: 'En la cama o el sillón',
        cuando: 'Cada hora mientras estés despierta',
        ejercicios: [
          { nombre: 'Bombeo de tobillos', pauta: '20 veces', como: 'Lleva los pies hacia ti y luego estíralos como una bailarina.' },
          { nombre: 'Círculos de tobillo', pauta: '10 en cada sentido', como: 'Dibuja círculos lentos con los pies.' },
          { nombre: 'Contracción de cuádriceps', pauta: '10 × 5 segundos', como: 'Aprieta la rodilla contra la cama tensando el muslo.' },
        ],
      },
    ],
  },
  {
    id: 'suelo',
    nombre: 'Suelo pélvico',
    para: 'Prolapso, incontinencia y tras histerectomía',
    icono: Waves,
    color: 'var(--color-sage)',
    fondo: 'var(--color-sage-bg)',
    intro: 'Los ejercicios de suelo pélvico mejoran los síntomas de prolapso e incontinencia y la función a largo plazo. Tras una cirugía vaginal, empieza cuando tu equipo lo indique (habitualmente a las 4–6 semanas).',
    fases: [
      {
        titulo: 'Aprende a localizarlo',
        cuando: 'Primero',
        ejercicios: [
          { nombre: 'Identificar la musculatura', pauta: 'Unas pocas veces', como: 'Contrae como si quisieras cortar el chorro de orina o retener un gas. No aprietes glúteos ni abdomen, y no contengas la respiración. No lo practiques mientras orinas.' },
        ],
      },
      {
        titulo: 'Entrenamiento diario',
        cuando: '3 veces al día · al menos 16 semanas',
        ejercicios: [
          { nombre: 'Contracciones lentas', pauta: '8–12 × 5–10 segundos', como: 'Contrae, mantén, y relaja por completo el mismo tiempo antes de repetir.' },
          { nombre: 'Contracciones rápidas', pauta: '10 repeticiones', como: 'Contrae fuerte y suelta enseguida.' },
          { nombre: 'El "truco" (knack)', pauta: 'Siempre', como: 'Contrae el suelo pélvico justo antes de toser, estornudar o levantar algo.' },
        ],
      },
    ],
    nota: 'Lo ideal es aprenderlos con una fisioterapeuta de suelo pélvico. Son útiles para tu suelo pélvico, aunque no son imprescindibles para el éxito de la cirugía.',
  },
  {
    id: 'hombro',
    nombre: 'Hombro tras cirugía de mama',
    para: 'Mastectomía y cirugía axilar',
    icono: Hand,
    color: 'var(--color-clay)',
    fondo: 'var(--color-clay-bg)',
    intro: 'Empezar pronto recupera antes la movilidad del hombro, pero la elevación completa con el drenaje puesto aumenta el líquido drenado. Por eso se progresa por fases.',
    fases: [
      {
        titulo: 'Fase 1 · con drenaje',
        cuando: 'Días 1–7 o hasta retirar el drenaje',
        ejercicios: [
          { nombre: 'Mano, muñeca y codo', pauta: '10 veces, 3 veces al día', como: 'Abre y cierra el puño, gira la muñeca, dobla y estira el codo.' },
          { nombre: 'Encoger y rodar hombros', pauta: '10 veces', como: 'Sube los hombros hacia las orejas y relaja; haz círculos hacia atrás.' },
          { nombre: 'Elevación hasta 90°', pauta: '10 veces', como: 'Sube el brazo por delante solo hasta la altura del hombro.' },
        ],
      },
      {
        titulo: 'Fase 2 · sin drenaje',
        cuando: 'Desde la semana 1–2',
        ejercicios: [
          { nombre: 'Subir la pared con los dedos', pauta: '10 veces, 2–3 veces al día', como: 'De frente a la pared, sube los dedos como una araña, cada día un poco más alto.' },
          { nombre: 'Manos a la nuca', pauta: '10 veces', como: 'Entrelaza las manos tras la nuca y abre y cierra los codos.' },
          { nombre: 'Manos a la espalda', pauta: '10 veces', como: 'Lleva la mano del lado operado a la espalda y súbela poco a poco.' },
        ],
      },
      {
        titulo: 'Fase 3 · fuerza',
        cuando: 'Desde la semana 4–6',
        ejercicios: [
          { nombre: 'Fuerza progresiva con bandas o pesas ligeras', pauta: '2–3 días/semana', como: 'Es segura y no aumenta el riesgo de linfedema. Empieza con poco peso y aumenta poco a poco.' },
        ],
      },
    ],
    nota: 'Si a las 4–6 semanas no has recuperado la movilidad, notas un "cordón" en la axila o dolor, pide valoración por fisioterapia. Si te han hecho reconstrucción, sigue las indicaciones de cirugía plástica.',
  },
]

export const getPrograma = (id: ProgramaEjercicioId): ProgramaEjercicio | undefined => PROGRAMAS.find((p) => p.id === id)
