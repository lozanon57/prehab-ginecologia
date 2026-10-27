import { CigaretteOff, Wine, Footprints, Dumbbell, Wind, Salad, Droplet, Stethoscope, Pill, Home, Moon, GlassWater, Clock, ShowerHead, Brain } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface TareaPrep {
  id: string
  icono: LucideIcon
  titulo: string
  texto: string
}

export interface EtapaPrep {
  id: string
  cuando: string
  titulo: string
  /** Días antes de la cirugía en que empieza esta etapa */
  desdeDias: number
  tareas: TareaPrep[]
}

export const ETAPAS_PREP: EtapaPrep[] = [
  {
    id: 'semanas',
    cuando: '4–6 semanas antes',
    titulo: 'Ponte en forma para la cirugía',
    desdeDias: 42,
    tareas: [
      { id: 'tabaco', icono: CigaretteOff, titulo: 'Deja de fumar', texto: 'Al menos 4 semanas antes reduce las complicaciones de la herida y pulmonares. Dejarlo en cualquier momento merece la pena: pide ayuda en tu centro de salud.' },
      { id: 'alcohol', icono: Wine, titulo: 'Evita el alcohol', texto: 'Suspéndelo al menos 4 semanas antes de la cirugía.' },
      { id: 'caminar', icono: Footprints, titulo: 'Camina cada día', texto: '30 minutos diarios a paso ligero (que puedas hablar pero no cantar). Si partes de poco, empieza con 10 minutos y suma.' },
      { id: 'fuerza', icono: Dumbbell, titulo: 'Ejercicios de fuerza', texto: '2–3 días por semana: sentadillas a una silla, elevaciones de talones, flexiones en la pared. Ver la sección Ejercicios.' },
      { id: 'respira', icono: Wind, titulo: 'Entrena tu respiración', texto: '10 respiraciones profundas, 3 veces al día. Prepara tus pulmones para la anestesia.' },
      { id: 'proteina', icono: Salad, titulo: 'Proteína en cada comida', texto: 'Huevos, pescado, carne, legumbres, lácteos. Si has perdido peso sin querer o comes poco, coméntalo: puede necesitar suplementos.' },
      { id: 'anemia', icono: Droplet, titulo: 'Revisa si tienes anemia', texto: 'Si tus reglas son abundantes o tienes miomas, pide un análisis. Corregir la anemia con hierro antes de operarte reduce la necesidad de transfusión.' },
      { id: 'mente', icono: Brain, titulo: 'Cuida tu bienestar emocional', texto: 'Es normal sentir miedo o ansiedad. Respira, habla de ello y pregunta lo que necesites: estar informada reduce la ansiedad.' },
    ],
  },
  {
    id: 'semana',
    cuando: '1–2 semanas antes',
    titulo: 'Organiza los detalles',
    desdeDias: 14,
    tareas: [
      { id: 'anestesia', icono: Stethoscope, titulo: 'Consulta de preanestesia', texto: 'Lleva la lista de tu medicación. Te dirán qué tomar y qué suspender.' },
      { id: 'medicacion', icono: Pill, titulo: 'Anticoagulantes y antiagregantes', texto: 'Si los tomas, sigue exactamente las instrucciones de suspensión que te den. No los suspendas por tu cuenta.' },
      { id: 'casa', icono: Home, titulo: 'Prepara tu casa', texto: 'Organiza quién te acompañará los primeros días, deja comidas preparadas y lo de uso diario a mano para no agacharte ni cargar.' },
      { id: 'bolsa', icono: Moon, titulo: 'Bolsa para el hospital', texto: 'Ropa cómoda y holgada, compresas, calzado cerrado para caminar, cargador y tu medicación habitual.' },
    ],
  },
  {
    id: 'vispera',
    cuando: 'El día antes',
    titulo: 'Víspera de la cirugía',
    desdeDias: 1,
    tareas: [
      { id: 'cena', icono: Salad, titulo: 'Cena normal', texto: 'Puedes cenar con normalidad. No necesitas preparación intestinal salvo que tu equipo te la indique expresamente.' },
      { id: 'ducha', icono: ShowerHead, titulo: 'Ducha', texto: 'Dúchate la noche antes o esa mañana. No te rasures ni depiles la zona: si hace falta, lo harán en el hospital.' },
      { id: 'descanso', icono: Moon, titulo: 'Descansa', texto: 'Si te han pautado algo para dormir, tómalo. Quita esmalte de uñas, joyas y piercings.' },
    ],
  },
  {
    id: 'dia',
    cuando: 'El día de la cirugía',
    titulo: 'Ayuno inteligente',
    desdeDias: 0,
    tareas: [
      { id: 'solidos', icono: Clock, titulo: 'Sólidos hasta 6 h antes', texto: 'Una comida ligera, sin grasas ni fritos.' },
      { id: 'liquidos', icono: GlassWater, titulo: 'Líquidos claros hasta 2 h antes', texto: 'Agua, infusiones, café o té sin leche, zumos sin pulpa. No pasar sed reduce el malestar.' },
      { id: 'carbohidratos', icono: GlassWater, titulo: 'Bebida de carbohidratos', texto: 'Si te la entregan, tómala 2–3 h antes. Si eres diabética, sigue la indicación específica de anestesia.' },
    ],
  },
]

export const PRINCIPIOS_ERAS = [
  { titulo: 'Llegar en forma', texto: 'Ejercicio, nutrición, sin tabaco ni alcohol y sin anemia.' },
  { titulo: 'Ayunar lo justo', texto: 'Comer hasta 6 h y beber líquidos claros hasta 2 h antes.' },
  { titulo: 'Cirugía menos agresiva', texto: 'Mínimamente invasiva siempre que sea posible, sin drenajes ni sondas innecesarios.' },
  { titulo: 'Recuperarse activa', texto: 'Comer, levantarse y caminar desde el mismo día.' },
]
