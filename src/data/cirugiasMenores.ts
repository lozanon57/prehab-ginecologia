import { Layers, Anchor, Shell, Scissors, Ribbon, CircleDot, Search, Armchair, FileText } from 'lucide-react'
import type { Cirugia, Cuidado, Vuelta } from '../types'
import {
  C_HERIDA_VAGINAL, C_DOLOR, C_CAMINAR, C_INTESTINO, C_SEXUALIDAD, C_DUCHA, C_SUELO_PELVICO,
  HITOS_VAGINAL, HITOS_AMBULATORIA, VUELTA_VAGINAL,
} from './plantillas'

const C_ACTIVIDAD_LIBERAL: Cuidado = {
  icono: Armchair,
  titulo: 'Actividad a tu ritmo',
  texto:
    'Los estudios muestran que retomar las actividades cotidianas de forma progresiva, guiándote por cómo te encuentras, no empeora el resultado de la cirugía. Evita los grandes esfuerzos y el levantamiento de pesos importantes las primeras 6 semanas, sin obsesionarte con un peso exacto.',
}

const C_ORINA: Cuidado = {
  icono: CircleDot,
  titulo: 'Vigila cómo orinas',
  texto:
    'Orina cada 3–4 horas, sin empujar. Si el chorro es muy débil, notas que no vacías bien o no consigues orinar, consulta: a veces hace falta una sonda unos días y se resuelve.',
}

const C_RESULTADO: Cuidado = {
  icono: FileText,
  titulo: 'Resultado de la biopsia',
  texto:
    'El tejido extraído se analiza en Anatomía Patológica. Tu equipo te dará el resultado en consulta, habitualmente en 2–4 semanas, y te explicará el seguimiento.',
}

const VUELTA_AMBULATORIA: Vuelta = {
  ducha: 'Desde el mismo día · sin baños hasta que cese el sangrado',
  conducir: 'Al día siguiente (no en 24 h tras sedación)',
  esfuerzos: 'Sin limitaciones especiales',
  relaciones: 'Cuando cese el sangrado, habitualmente 1–2 semanas',
  trabajo: '1–3 días',
  deporte: 'Cuando te encuentres bien, a partir de pocos días',
}

const ESPERABLE_VAGINAL = [
  'Flujo rosado o amarillento y restos de puntos hasta 4–6 semanas.',
  'Sensación de pesadez o de "algo" en la vagina las primeras semanas.',
  'Molestia al sentarte los primeros días.',
]

const ALARMA_VAGINAL = [
  'No puedes orinar o la vejiga está llena y dolorosa.',
  'Flujo maloliente o con pus.',
  'Sangrado rojo abundante (más de una compresa por hora).',
]

export const CIRUGIAS_MENORES: Cirugia[] = [
  {
    id: 'cistocele',
    nombre: 'Corrección de cistocele (colporrafia anterior)',
    grupo: 'suelo',
    programa: 'postop',
    icono: Layers,
    abordaje: 'Vía vaginal',
    resumen:
      'Reparación de la pared anterior de la vagina para devolver la vejiga a su posición. Se realiza por la vagina, sin cicatrices externas.',
    ingreso: '0–1 noche',
    recuperacion: '2–6 semanas',
    vuelta: VUELTA_VAGINAL,
    hitos: HITOS_VAGINAL,
    cuidados: [C_HERIDA_VAGINAL, C_ORINA, C_INTESTINO, C_ACTIVIDAD_LIBERAL, C_SUELO_PELVICO, C_SEXUALIDAD],
    esperable: ESPERABLE_VAGINAL,
    alarmaEspecifica: ALARMA_VAGINAL,
    ejercicios: ['suelo'],
  },
  {
    id: 'rectocele',
    nombre: 'Corrección de rectocele (colporrafia posterior)',
    grupo: 'suelo',
    programa: 'postop',
    icono: Layers,
    abordaje: 'Vía vaginal',
    resumen:
      'Reparación de la pared posterior de la vagina, que separa la vagina del recto. Mejora la sensación de bulto y la dificultad para evacuar.',
    ingreso: '0–1 noche',
    recuperacion: '2–6 semanas',
    vuelta: VUELTA_VAGINAL,
    hitos: HITOS_VAGINAL,
    cuidados: [C_HERIDA_VAGINAL, C_INTESTINO, C_ACTIVIDAD_LIBERAL, C_SUELO_PELVICO, C_SEXUALIDAD],
    esperable: [...ESPERABLE_VAGINAL, 'Las primeras deposiciones pueden ser molestas: el laxante suave ayuda.'],
    alarmaEspecifica: [...ALARMA_VAGINAL, 'Salida de heces o gases por la vagina.'],
    ejercicios: ['suelo'],
  },
  {
    id: 'sacroespinoso',
    nombre: 'Fijación de cúpula al ligamento sacroespinoso',
    grupo: 'suelo',
    programa: 'postop',
    icono: Anchor,
    abordaje: 'Vía vaginal',
    resumen:
      'Se fija el fondo de la vagina (cúpula), tras una histerectomía previa, a un ligamento firme de la pelvis para corregir su descenso.',
    ingreso: '1–2 noches',
    recuperacion: '4–6 semanas',
    vuelta: VUELTA_VAGINAL,
    hitos: HITOS_VAGINAL,
    cuidados: [C_HERIDA_VAGINAL, C_DOLOR, C_ORINA, C_INTESTINO, C_ACTIVIDAD_LIBERAL, C_SEXUALIDAD],
    esperable: [
      ...ESPERABLE_VAGINAL,
      'Dolor en la nalga del lado operado, a veces hacia la pierna: es frecuente y suele ceder en semanas.',
    ],
    alarmaEspecifica: [...ALARMA_VAGINAL, 'Dolor en la nalga o la pierna muy intenso, o con pérdida de fuerza o sensibilidad.'],
    ejercicios: ['suelo'],
  },
  {
    id: 'histeropexia',
    nombre: 'Histeropexia',
    grupo: 'suelo',
    programa: 'postop',
    icono: Anchor,
    abordaje: 'Vía vaginal o laparoscópica',
    resumen:
      'Corrección del descenso del útero conservándolo: se fija a un ligamento de la pelvis (por ejemplo, el sacroespinoso). Evita la histerectomía cuando no es necesaria.',
    ingreso: '0–2 noches',
    recuperacion: '3–6 semanas',
    vuelta: VUELTA_VAGINAL,
    hitos: HITOS_VAGINAL,
    cuidados: [C_HERIDA_VAGINAL, C_DOLOR, C_ORINA, C_INTESTINO, C_ACTIVIDAD_LIBERAL, C_SEXUALIDAD],
    esperable: [...ESPERABLE_VAGINAL, 'Si la fijación es sacroespinosa, molestia en la nalga de un lado durante semanas.'],
    alarmaEspecifica: ALARMA_VAGINAL,
    ejercicios: ['suelo'],
  },
  {
    id: 'manchester',
    nombre: 'Cirugía de Manchester',
    grupo: 'suelo',
    programa: 'postop',
    icono: Shell,
    abordaje: 'Vía vaginal',
    resumen:
      'Corrección del prolapso uterino conservando el útero: se acorta el cuello uterino y se refuerzan sus ligamentos, junto a la pared anterior de la vagina. Si deseas un embarazo en el futuro, coméntalo antes de la cirugía.',
    ingreso: '1–2 noches',
    recuperacion: '4–6 semanas',
    vuelta: VUELTA_VAGINAL,
    hitos: HITOS_VAGINAL,
    cuidados: [C_HERIDA_VAGINAL, C_ORINA, C_INTESTINO, C_ACTIVIDAD_LIBERAL, C_SUELO_PELVICO, C_SEXUALIDAD],
    esperable: [...ESPERABLE_VAGINAL, 'Las reglas, si aún las tienes, continuarán con normalidad.'],
    alarmaEspecifica: ALARMA_VAGINAL,
    ejercicios: ['suelo'],
  },
  {
    id: 'banda-tot',
    nombre: 'Banda transobturadora (TOT)',
    grupo: 'suelo',
    programa: 'postop',
    icono: Ribbon,
    abordaje: 'Vía vaginal · mínimamente invasiva',
    resumen:
      'Colocación de una cinta bajo la uretra, a través de una pequeña incisión vaginal y dos punciones en las ingles, para tratar la incontinencia de orina de esfuerzo.',
    ingreso: 'Ambulatoria o 1 noche',
    recuperacion: '1–2 semanas',
    vuelta: {
      ducha: 'Desde el día siguiente · sin baños 4 semanas',
      conducir: 'En pocos días, cuando estés cómoda',
      esfuerzos: 'Evita grandes esfuerzos 4 semanas',
      relaciones: 'Con penetración a las 4–6 semanas',
      trabajo: '1–2 semanas',
      deporte: 'Suave a las 2 semanas · impacto a las 6 semanas',
    },
    hitos: [
      { desde: 0, hasta: 0, titulo: 'El mismo día', items: ['Antes del alta comprobaremos que orinas bien y que la vejiga queda vacía.', 'Puedes comer y caminar enseguida.'] },
      { desde: 1, hasta: 13, titulo: 'Primeras dos semanas', items: ['Molestia en ingles o cara interna del muslo: es habitual y mejora en 1–2 semanas.', 'El chorro puede ser algo más lento al principio.', 'Actividad ligera, sin esfuerzos.'] },
      { desde: 14, hasta: 41, titulo: 'Semanas 2 a 6', items: ['Vida normal sin grandes esfuerzos.', 'Revisión para valorar el resultado.'] },
      { desde: 42, hasta: 365, titulo: 'A partir de la semana 6', items: ['Sin restricciones.', 'Mantén los ejercicios de suelo pélvico.'] },
    ],
    cuidados: [C_HERIDA_VAGINAL, C_ORINA, C_INTESTINO, C_ACTIVIDAD_LIBERAL, C_SEXUALIDAD],
    esperable: ['Dolor en ingles o muslos 1–2 semanas.', 'Chorro de orina algo más lento al principio.', 'Manchado escaso unos días.'],
    alarmaEspecifica: [
      'No consigues orinar, o el chorro es muy débil y notas que no vacías.',
      'Dolor en la ingle o el muslo que empeora o dura más de 2–3 semanas.',
      'Notas la cinta en la vagina o tu pareja la nota (consulta, tiene solución).',
    ],
    ejercicios: ['suelo'],
  },
  {
    id: 'conizacion',
    nombre: 'Conización (asa diatérmica / LEEP)',
    grupo: 'diagnostica',
    programa: 'postop',
    icono: Scissors,
    abordaje: 'Vía vaginal · ambulatoria',
    resumen:
      'Extirpación de una pequeña porción del cuello del útero para tratar lesiones precancerosas y analizarlas. Dura unos minutos y suele hacerse con anestesia local o sedación.',
    ingreso: 'Ambulatoria',
    recuperacion: '1–2 días',
    vuelta: {
      ...VUELTA_AMBULATORIA,
      ducha: 'Desde el mismo día · sin baños ni piscina 4 semanas',
      relaciones: 'Sin penetración ni tampones 4 semanas',
    },
    hitos: HITOS_AMBULATORIA,
    cuidados: [C_RESULTADO, C_DUCHA, C_DOLOR],
    esperable: [
      'Flujo acuoso, rosado o marrón oscuro durante 2–4 semanas.',
      'Un sangrado algo mayor hacia los días 7–14, cuando se desprende la costra: si es escaso, es normal.',
      'Molestias tipo regla 1–2 días.',
    ],
    alarmaEspecifica: [
      'Sangrado más abundante que una regla fuerte, o con coágulos grandes.',
      'Flujo maloliente con fiebre o dolor pélvico.',
    ],
  },
  {
    id: 'legrado',
    nombre: 'Legrado uterino',
    grupo: 'diagnostica',
    programa: 'postop',
    icono: CircleDot,
    abordaje: 'Vía vaginal · ambulatoria',
    resumen:
      'Extracción del contenido o del revestimiento del útero, con fines diagnósticos o terapéuticos. Se realiza en pocos minutos con sedación.',
    ingreso: 'Ambulatoria',
    recuperacion: '1–3 días',
    vuelta: VUELTA_AMBULATORIA,
    hitos: HITOS_AMBULATORIA,
    cuidados: [C_RESULTADO, C_DUCHA, C_DOLOR, C_CAMINAR],
    esperable: ['Sangrado similar a una regla hasta 1–2 semanas.', 'Dolor tipo regla los primeros días.'],
    alarmaEspecifica: ['Sangrado que empapa más de una compresa por hora.', 'Dolor abdominal intenso o creciente con fiebre.'],
  },
  {
    id: 'histeroscopia',
    nombre: 'Histeroscopia',
    grupo: 'diagnostica',
    programa: 'postop',
    icono: Search,
    abordaje: 'Vía vaginal · sin incisiones',
    resumen:
      'Exploración del interior del útero con una cámara fina a través del cuello uterino. Permite diagnosticar y tratar pólipos, miomas pequeños, tabiques o adherencias en el mismo acto.',
    ingreso: 'Ambulatoria',
    recuperacion: '1–2 días',
    vuelta: VUELTA_AMBULATORIA,
    hitos: HITOS_AMBULATORIA,
    cuidados: [C_RESULTADO, C_DUCHA, C_DOLOR],
    esperable: [
      'Molestias tipo regla y manchado unos días.',
      'Si se extirpó un mioma o tabique, flujo durante 2–3 semanas.',
    ],
    alarmaEspecifica: ['Sangrado abundante con coágulos.', 'Dolor abdominal intenso o fiebre.'],
  },
]
