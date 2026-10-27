import { Wind, ScanFace, Anchor, Sunrise } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Practica {
  nombre: string
  duracion: string
  pasos: string[]
  /** Si true, se muestra el temporizador de respiración guiada */
  guiada?: boolean
}

export interface Conversacion {
  tema: string
  texto: string
  preguntas: string[]
}

export interface SemanaMente {
  semana: number
  icono: LucideIcon
  titulo: string
  intro: string
  practica: Practica
  conversacion: Conversacion
  microhabito: string
}

export const SEMANAS_MENTE: SemanaMente[] = [
  {
    semana: 1,
    icono: Wind,
    titulo: 'Respirar y entender',
    intro: 'La incertidumbre alimenta la ansiedad. Esta semana aprendes a calmar el cuerpo con la respiración y a resolver tus dudas.',
    practica: {
      nombre: 'Respiración 4–6',
      duracion: '5 min, 2 veces al día',
      guiada: true,
      pasos: [
        'Siéntate cómoda, con los pies apoyados y una mano sobre el abdomen.',
        'Inspira por la nariz contando 4, notando cómo sube la mano.',
        'Espira despacio por la boca contando 6, como si soplaras una vela sin apagarla.',
        'Si te distraes, vuelve sin juzgarte a contar la respiración.',
      ],
    },
    conversacion: {
      tema: 'Pregunta todo lo que necesites',
      texto: 'Las pacientes bien informadas tienen menos ansiedad y se recuperan mejor. Apunta tus dudas para la próxima consulta.',
      preguntas: [
        '¿Qué me van a hacer exactamente y por qué?',
        '¿Cuántos días estaré ingresada y cuándo podré volver a mi vida?',
        '¿Qué cambios notaré en mi cuerpo, mis reglas o mi menopausia?',
      ],
    },
    microhabito: 'Escribe cada noche una preocupación y una cosa que hayas hecho bien hoy.',
  },
  {
    semana: 2,
    icono: ScanFace,
    titulo: 'Habitar el cuerpo',
    intro: 'El escáner corporal entrena la atención y ayuda a soltar la tensión acumulada. También aprenderás a detectar los pensamientos que se adelantan.',
    practica: {
      nombre: 'Escáner corporal',
      duracion: '10 min al día',
      pasos: [
        'Túmbate boca arriba y cierra los ojos. Haz 3 respiraciones lentas.',
        'Lleva la atención a los pies: nota temperatura, peso, hormigueo. Sin cambiar nada.',
        'Sube lentamente: piernas, pelvis, abdomen, pecho, brazos, cuello y cara.',
        'Donde notes tensión, imagina que el aire entra y la ablanda al espirar.',
        'Termina sintiendo el cuerpo entero respirando.',
      ],
    },
    conversacion: {
      tema: 'Pensamientos que se adelantan',
      texto: 'Ante una cirugía es normal imaginar lo peor. Con la técnica STOP puedes frenarlo: Para, Toma aire, Observa qué piensas y sientes, y Prosigue con lo que estabas haciendo.',
      preguntas: [
        '¿Qué pensamiento me está asustando?',
        '¿Qué datos reales tengo a favor y en contra?',
        '¿Qué le diría a una amiga que pensara lo mismo?',
      ],
    },
    microhabito: 'Usa STOP cada vez que notes que la mente se va al "y si…".',
  },
  {
    semana: 3,
    icono: Anchor,
    titulo: 'Cuidarte y dejarte cuidar',
    intro: 'La cirugía ginecológica y de mama puede tocar la imagen corporal, la sexualidad y la pareja. Hablarlo antes ayuda a vivirlo mejor.',
    practica: {
      nombre: 'Anclaje 5-4-3-2-1 y autocompasión',
      duracion: '5 min cuando lo necesites',
      pasos: [
        'Nombra 5 cosas que ves, 4 que puedes tocar, 3 que oyes, 2 que hueles y 1 que saboreas.',
        'Pon una mano sobre el pecho y respira despacio.',
        'Repítete: "Esto es difícil. No estoy sola. Me trato con la misma amabilidad que daría a otra persona".',
      ],
    },
    conversacion: {
      tema: 'Imagen corporal, sexualidad y red de apoyo',
      texto: 'Es legítimo preocuparte por cómo cambiará tu cuerpo o tu vida sexual. Coméntalo con tu equipo y con tu pareja: existen soluciones y apoyo especializado.',
      preguntas: [
        '¿Qué me preocupa de cómo me veré o me sentiré?',
        '¿Qué necesito de mi pareja o de mi familia estas semanas?',
        '¿Quién me puede ayudar en casa los primeros días?',
      ],
    },
    microhabito: 'Pide ayuda concreta a una persona esta semana (comidas, cuidados, compañía).',
  },
  {
    semana: 4,
    icono: Sunrise,
    titulo: 'Llegar serena',
    intro: 'Visualizar la recuperación prepara a la mente para colaborar con el cuerpo. Dormir bien estos días también cuenta.',
    practica: {
      nombre: 'Visualización de la recuperación',
      duracion: '10 min antes de dormir',
      pasos: [
        'Respira lento unas veces y relaja el cuerpo.',
        'Imagina que despiertas tras la operación: el equipo te atiende y todo ha ido bien.',
        'Visualízate bebiendo, levantándote y caminando por el pasillo ese mismo día.',
        'Imagínate en casa, paseando cada día un poco más, recuperando tu vida.',
        'Quédate con la sensación de capacidad y calma.',
      ],
    },
    conversacion: {
      tema: 'Tu plan para el día de la cirugía',
      texto: 'Tener un plan concreto reduce la sensación de pérdida de control.',
      preguntas: [
        '¿Quién me acompaña y quién me recoge?',
        '¿Qué me ayuda a calmarme? (música, una foto, auriculares)',
        '¿Tengo todo listo en casa para la vuelta?',
      ],
    },
    microhabito: 'Horario regular de sueño, sin pantallas la última hora, y la visualización al acostarte.',
  },
]

/** Termómetro de malestar emocional (NCCN): una puntuación ≥ 4 merece consultar con el equipo. */
export const UMBRAL_MALESTAR = 4
