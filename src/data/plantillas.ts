import { Bandage, Droplet, Pill, Footprints, Salad, Heart, Syringe, Wind, ShowerHead, Waves } from 'lucide-react'
import type { Cuidado, Hito, Vuelta } from '../types'

/* ── Cuidados reutilizables ─────────────────────────────────────────── */

export const C_HERIDA_LAPAROSCOPIA: Cuidado = {
  icono: Bandage,
  titulo: 'Pequeñas incisiones',
  texto:
    'Tendrás 3–5 incisiones de menos de 1–2 cm. Puedes ducharte desde el día siguiente: deja correr el agua y jabón, sin frotar, y sécalas con toques. Los apósitos se retiran a las 48 h. Las tiras adhesivas se caen solas.',
}

export const C_HERIDA_LAPAROTOMIA: Cuidado = {
  icono: Bandage,
  titulo: 'Herida abdominal',
  texto:
    'Ducha diaria desde las 24–48 h, secando con toques. Las grapas o puntos se retiran a los 7–10 días en tu centro de salud. Al toser o levantarte, sujeta la herida con un cojín. Evita el sol directo sobre la cicatriz durante un año.',
}

export const C_HERIDA_VAGINAL: Cuidado = {
  icono: Droplet,
  titulo: 'Puntos vaginales',
  texto:
    'Los puntos son reabsorbibles: en 3–6 semanas puedes notar que salen pequeños hilos o un flujo amarillento o rosado; es normal. Lava la zona genital solo con agua y un gel suave, de delante hacia atrás. No uses duchas vaginales.',
}

export const C_SANGRADO: Cuidado = {
  icono: Droplet,
  titulo: 'Sangrado vaginal',
  texto:
    'Es normal un manchado escaso, marrón o rosado, que puede durar hasta 4–6 semanas. Usa compresas, nunca tampones ni copa menstrual hasta que te lo indique tu equipo.',
}

export const C_DOLOR: Cuidado = {
  icono: Pill,
  titulo: 'Analgesia pautada',
  texto:
    'Toma la analgesia con horario fijo los primeros días, aunque no tengas mucho dolor: así te moverás mejor y te recuperarás antes. Después, solo si la necesitas. Si te han pautado opioides, úsalos el menor tiempo posible.',
}

export const C_CAMINAR: Cuidado = {
  icono: Footprints,
  titulo: 'Moverte es parte del tratamiento',
  texto:
    'Levántate el mismo día de la operación y camina varias veces al día, aumentando cada día. Caminar previene trombos y neumonías, ayuda a que el intestino funcione y reduce el cansancio.',
}

export const C_INTESTINO: Cuidado = {
  icono: Salad,
  titulo: 'Evita el estreñimiento',
  texto:
    'Bebe 1,5–2 litros de agua al día, toma fruta, verdura e integrales y camina. No hagas fuerza al defecar: apoya los pies en un taburete. Si en 2–3 días no has hecho deposición, usa el laxante suave que te hayan recomendado.',
}

export const C_RESPIRAR: Cuidado = {
  icono: Wind,
  titulo: 'Respiración profunda',
  texto:
    'Haz 10 respiraciones profundas cada hora mientras estés despierta, y tose sujetando la herida. Así mantienes los pulmones bien ventilados.',
}

export const C_HEPARINA: Cuidado = {
  icono: Syringe,
  titulo: 'Prevención de trombosis',
  texto:
    'Tras la cirugía oncológica abdominal suele pautarse heparina subcutánea durante 4 semanas (28 días). Te enseñarán a ponértela antes del alta. No la suspendas sin consultar.',
}

export const C_SEXUALIDAD: Cuidado = {
  icono: Heart,
  titulo: 'Sexualidad y bienestar',
  texto:
    'Puedes tener caricias e intimidad desde el principio. Para la penetración, espera el tiempo indicado. Al reanudarla, usa lubricante de base acuosa y empieza con suavidad. Si notas dolor o sequedad persistente, coméntalo: tiene solución.',
}

export const C_DUCHA: Cuidado = {
  icono: ShowerHead,
  titulo: 'Higiene',
  texto: 'Ducha diaria. Evita baños de inmersión, piscina, mar y jacuzzi durante el tiempo indicado para reducir el riesgo de infección.',
}

export const C_SUELO_PELVICO: Cuidado = {
  icono: Waves,
  titulo: 'Protege tu suelo pélvico',
  texto:
    'Evita cargar peso y los esfuerzos que te hagan apretar el abdomen. Al toser o estornudar, contrae antes el suelo pélvico. Cuando tu equipo lo indique, inicia los ejercicios de suelo pélvico de la sección Ejercicios.',
}

/* ── Etapas de recuperación por tipo de abordaje ────────────────────── */

export const HITOS_LAPAROSCOPIA: Hito[] = [
  {
    desde: 0, hasta: 0, titulo: 'El mismo día',
    items: [
      'Empezarás a beber agua a las pocas horas y podrás comer algo ligero esa misma tarde.',
      'Te ayudarán a sentarte y a dar los primeros pasos.',
      'La sonda urinaria, si la llevas, se retira en las primeras horas.',
      'Es frecuente un dolor en el hombro por el gas utilizado: mejora caminando.',
    ],
  },
  {
    desde: 1, hasta: 2, titulo: 'Alta a casa',
    items: [
      'La mayoría de pacientes se van a casa a las 24 h o el mismo día.',
      'Camina al menos 4–6 veces al día por casa.',
      'Dieta normal, con abundante líquido.',
      'Toma la analgesia pautada.',
    ],
  },
  {
    desde: 3, hasta: 13, titulo: 'Primeras dos semanas',
    items: [
      'Aumenta cada día los paseos: de 10 a 30 minutos.',
      'Notarás cansancio por la tarde; descansa sin quedarte en cama todo el día.',
      'Puedes subir escaleras y hacer tareas ligeras.',
      'Revisión o resultados: tu equipo te citará.',
    ],
  },
  {
    desde: 14, hasta: 41, titulo: 'Semanas 2 a 6',
    items: [
      'Recuperarás poco a poco tu energía habitual.',
      'Retoma el trabajo de oficina según te encuentres (habitualmente 2–4 semanas).',
      'Sigue sin cargar pesos ni hacer abdominales.',
    ],
  },
  {
    desde: 42, hasta: 365, titulo: 'A partir de la semana 6',
    items: [
      'Vuelta progresiva a toda tu actividad, deporte incluido.',
      'Relaciones con penetración si tu equipo lo ha confirmado.',
    ],
  },
]

export const HITOS_LAPAROTOMIA: Hito[] = [
  {
    desde: 0, hasta: 0, titulo: 'El mismo día',
    items: [
      'Podrás beber a las pocas horas de la cirugía.',
      'Te sentarás en el sillón y harás ejercicios de respiración.',
      'Masca chicle 3 veces al día: ayuda a despertar el intestino.',
    ],
  },
  {
    desde: 1, hasta: 1, titulo: 'Día 1',
    items: [
      'Dieta ligera y suplemento proteico si te lo ofrecen.',
      'Camina por el pasillo al menos 3–4 veces, con ayuda.',
      'Se retira la sonda urinaria y, si es posible, el suero.',
    ],
  },
  {
    desde: 2, hasta: 4, titulo: 'Días 2–4: hacia el alta',
    items: [
      'Dieta normal en cuanto la toleres.',
      'Pasa la mayor parte del día fuera de la cama.',
      'Criterios de alta: comes, caminas, el dolor está controlado con pastillas y has expulsado gases.',
    ],
  },
  {
    desde: 5, hasta: 13, titulo: 'Primeras dos semanas en casa',
    items: [
      'Paseos cortos y frecuentes, aumentando cada día.',
      'Retirada de grapas o puntos a los 7–10 días.',
      'Duerme lo que necesites; el cansancio es normal.',
    ],
  },
  {
    desde: 14, hasta: 41, titulo: 'Semanas 2 a 6',
    items: [
      'Paseos de 30–45 minutos diarios.',
      'Tareas domésticas ligeras; nada de cargar pesos.',
      'Visita de revisión con tu ginecólogo/a.',
    ],
  },
  {
    desde: 42, hasta: 365, titulo: 'A partir de la semana 6–8',
    items: [
      'Vuelta progresiva al trabajo y al deporte.',
      'Puedes empezar ejercicios de abdomen suaves.',
    ],
  },
]

export const HITOS_VAGINAL: Hito[] = [
  {
    desde: 0, hasta: 0, titulo: 'El mismo día',
    items: [
      'Puede que lleves una gasa en la vagina (taponamiento) y una sonda urinaria hasta el día siguiente.',
      'Comerás y te levantarás a las pocas horas.',
    ],
  },
  {
    desde: 1, hasta: 1, titulo: 'Día 1: alta',
    items: [
      'Se retiran el taponamiento y la sonda.',
      'Comprobaremos que orinas bien y vacías la vejiga antes del alta.',
      'Si no orinas bien, puedes irte con sonda unos días: es frecuente y se resuelve.',
    ],
  },
  {
    desde: 2, hasta: 13, titulo: 'Primeras dos semanas',
    items: [
      'Camina a diario, pero evita estar mucho tiempo de pie quieta.',
      'Prioriza que el intestino funcione sin hacer fuerza.',
      'Nota de pesadez o molestia vaginal: es normal.',
    ],
  },
  {
    desde: 14, hasta: 41, titulo: 'Semanas 2 a 6',
    items: [
      'Actividad ligera y trabajo sin esfuerzo físico.',
      'Sigue sin cargar pesos ni hacer abdominales.',
      'Pueden salir restos de los puntos: es normal.',
    ],
  },
  {
    desde: 42, hasta: 365, titulo: 'A partir de la semana 6',
    items: [
      'Revisión con tu ginecólogo/a.',
      'Reanuda relaciones y deporte suave si te lo confirman.',
      'Mantén de por vida los ejercicios de suelo pélvico.',
    ],
  },
]

export const HITOS_AMBULATORIA: Hito[] = [
  {
    desde: 0, hasta: 0, titulo: 'El mismo día',
    items: [
      'Te irás a casa a las pocas horas, siempre acompañada.',
      'No conduzcas ni firmes documentos importantes en 24 h si has recibido sedación.',
      'Dieta normal en cuanto te apetezca.',
    ],
  },
  {
    desde: 1, hasta: 3, titulo: 'Primeros días',
    items: [
      'Puedes hacer vida normal tranquila.',
      'Molestias tipo regla: toma el analgésico recomendado.',
      'Usa compresas, no tampones.',
    ],
  },
  {
    desde: 4, hasta: 27, titulo: 'Hasta la revisión',
    items: [
      'Vida y trabajo normales.',
      'Evita baños, piscina y relaciones con penetración el tiempo indicado.',
      'Tu equipo te dará el resultado de la anatomía patológica.',
    ],
  },
  {
    desde: 28, hasta: 365, titulo: 'Después',
    items: ['Sin restricciones salvo indicación. Acude a los controles programados.'],
  },
]

/* ── Retorno a actividades ──────────────────────────────────────────── */

export const VUELTA_LAPAROSCOPIA: Vuelta = {
  ducha: 'Desde el día siguiente · sin baños 4 semanas',
  conducir: '1–2 semanas, cuando puedas frenar de golpe sin dolor',
  esfuerzos: 'Nada de más de 5 kg durante 4 semanas',
  relaciones: 'Con penetración a las 6 semanas',
  trabajo: '2–4 semanas según tu trabajo',
  deporte: 'Caminar desde ya · resto a las 4–6 semanas',
}

export const VUELTA_LAPAROTOMIA: Vuelta = {
  ducha: 'A las 24–48 h · sin baños 6 semanas',
  conducir: '3–4 semanas',
  esfuerzos: 'Nada de más de 5 kg durante 6 semanas',
  relaciones: 'Con penetración a las 6–8 semanas',
  trabajo: '4–8 semanas',
  deporte: 'Caminar desde ya · resto a las 6–8 semanas',
}

export const VUELTA_VAGINAL: Vuelta = {
  ducha: 'Desde el día siguiente · sin baños 6 semanas',
  conducir: '1–2 semanas',
  esfuerzos: 'Evita cargar peso 6 semanas',
  relaciones: 'Con penetración a las 6 semanas',
  trabajo: '2–6 semanas según esfuerzo físico',
  deporte: 'Caminar desde ya · impacto a partir de 3 meses',
}
