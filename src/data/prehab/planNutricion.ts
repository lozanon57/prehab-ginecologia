import { Egg, Fish, Beef, Milk, Bean, Drumstick, Nut, CupSoda, Beaker, Salad, GlassWater, Wheat, Apple, Droplet } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Alimento {
  icono: LucideIcon
  nombre: string
  racion: string
  proteina: number
}

export const ALIMENTOS_PROTEICOS: Alimento[] = [
  { icono: Egg, nombre: 'Huevos', racion: '2 unidades', proteina: 13 },
  { icono: Drumstick, nombre: 'Pollo o pavo', racion: '100 g', proteina: 28 },
  { icono: Fish, nombre: 'Pescado', racion: '120 g', proteina: 24 },
  { icono: Beef, nombre: 'Carne magra', racion: '100 g', proteina: 26 },
  { icono: Bean, nombre: 'Legumbres cocidas', racion: '1 plato (200 g)', proteina: 16 },
  { icono: Milk, nombre: 'Yogur griego o skyr', racion: '1 tarrina (150 g)', proteina: 15 },
  { icono: Milk, nombre: 'Queso fresco o requesón', racion: '100 g', proteina: 12 },
  { icono: Nut, nombre: 'Frutos secos', racion: '1 puñado (30 g)', proteina: 6 },
  { icono: CupSoda, nombre: 'Leche o bebida de soja', racion: '1 vaso (250 ml)', proteina: 8 },
]

/** Objetivo diario de proteína preoperatorio: 1,2–1,5 g/kg (ESPEN). */
export function objetivoProteina(peso: number): { min: number; max: number; porComida: number } {
  const min = Math.round(peso * 1.2)
  const max = Math.round(peso * 1.5)
  return { min, max, porComida: Math.round(max / 4) }
}

export interface PreguntaCribado {
  id: string
  texto: string
}

export const CRIBADO: PreguntaCribado[] = [
  { id: 'peso', texto: '¿Has perdido peso sin proponértelo en los últimos 3–6 meses (más de 3–5 kg)?' },
  { id: 'ingesta', texto: '¿Llevas más de una semana comiendo la mitad o menos de lo habitual?' },
  { id: 'apetito', texto: '¿Tienes poco apetito, náuseas o te sacias enseguida?' },
]

export interface SemanaNutricion {
  semana: number
  icono: LucideIcon
  titulo: string
  porQue: string
  acciones: string[]
}

export const SEMANAS_NUTRICION: SemanaNutricion[] = [
  {
    semana: 1,
    icono: Beaker,
    titulo: 'Proteína en cada comida',
    porQue: 'La cirugía consume músculo. Llegar con buenas reservas de proteína ayuda a cicatrizar y a recuperar la fuerza.',
    acciones: [
      'Incluye una fuente de proteína en desayuno, comida, merienda y cena.',
      'Toma un yogur, leche o queso tras el ejercicio.',
      'Si comes poco, empieza el plato por la proteína.',
    ],
  },
  {
    semana: 2,
    icono: Droplet,
    titulo: 'Hierro y anemia',
    porQue: 'Las reglas abundantes y los miomas causan anemia con frecuencia. Corregirla antes de operarte reduce las transfusiones.',
    acciones: [
      'Come carne, pescado, legumbres y verduras de hoja verde, acompañados de fruta rica en vitamina C.',
      'Si te han pautado hierro oral, tómalo lejos del café, el té y los lácteos. Tomarlo en días alternos puede absorberse mejor y sentar mejor: pregúntalo.',
      'Comprueba que tienes la analítica de control antes de la cirugía.',
    ],
  },
  {
    semana: 3,
    icono: GlassWater,
    titulo: 'Intestino, hidratación y alcohol',
    porQue: 'Un intestino que funciona bien hace más cómodo el postoperatorio y protege el suelo pélvico.',
    acciones: [
      'Bebe 1,5–2 litros de agua al día.',
      'Fruta, verdura, legumbres e integrales cada día para la fibra.',
      'Cero alcohol desde ahora hasta después de la cirugía.',
    ],
  },
  {
    semana: 4,
    icono: Salad,
    titulo: 'Prepara tu recuperación',
    porQue: 'Tras la cirugía tendrás menos energía para cocinar. Dejarlo organizado facilita comer bien en casa.',
    acciones: [
      'Congela 4–6 raciones de comidas completas con proteína.',
      'Ten a mano yogures, huevos, fruta, caldos y algún batido proteico.',
      'Repasa el ayuno: sólidos hasta 6 h antes y líquidos claros hasta 2 h antes.',
    ],
  },
]

export const PLATO = [
  { icono: Salad, parte: 'Mitad del plato', texto: 'Verduras y hortalizas' },
  { icono: Beef, parte: 'Un cuarto', texto: 'Proteína: pescado, huevo, carne, legumbre' },
  { icono: Wheat, parte: 'Un cuarto', texto: 'Cereales integrales, patata o pan' },
  { icono: Apple, parte: 'De postre', texto: 'Fruta o yogur' },
]
