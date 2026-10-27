import { Flower2, Microscope, Ribbon, Sparkles, Activity, CircleDot, Droplets, Hand, Baby, Utensils, Network } from 'lucide-react'
import type { Cirugia, Cuidado } from '../types'
import {
  C_HERIDA_LAPAROSCOPIA, C_HERIDA_LAPAROTOMIA, C_SANGRADO, C_DOLOR, C_CAMINAR, C_INTESTINO,
  C_RESPIRAR, C_HEPARINA, C_SEXUALIDAD,
  HITOS_LAPAROSCOPIA, HITOS_LAPAROTOMIA, VUELTA_LAPAROSCOPIA, VUELTA_LAPAROTOMIA,
} from './plantillas'

const C_LINFEDEMA_PIERNAS: Cuidado = {
  icono: Network,
  titulo: 'Cuida tus piernas',
  texto:
    'Si te han extirpado ganglios pélvicos, puede aparecer hinchazón en piernas o pubis (linfedema). Hidrata la piel, evita heridas y picaduras, no estés mucho tiempo de pie quieta y camina. Si notas hinchazón persistente, consulta: el tratamiento precoz funciona mejor.',
}

const C_VEJIGA: Cuidado = {
  icono: Droplets,
  titulo: 'Reeducación de la vejiga',
  texto:
    'Tras la histerectomía radical, la vejiga puede tardar semanas en recuperar su sensibilidad. Es posible que vayas a casa con sonda o que te enseñen a vaciarla. Orina cada 3 horas con horario, aunque no tengas ganas, y consulta si notas que no vacías bien.',
}

const C_DRENAJE_MAMA: Cuidado = {
  icono: Droplets,
  titulo: 'Cuidado del drenaje',
  texto:
    'Llevarás uno o dos drenajes. Sujétalos a la ropa con un imperdible, vacíalos y anota cada día la cantidad. Se retiran cuando drenan poco (habitualmente < 30–50 ml en 24 h), en 1–2 semanas. Ducha según te indiquen, protegiendo el punto de salida.',
}

const C_BRAZO: Cuidado = {
  icono: Hand,
  titulo: 'Movilidad del brazo',
  texto:
    'Usa el brazo para comer, peinarte o vestirte desde el primer día. Mientras lleves drenaje, no lo levantes por encima del hombro (90°). Tras retirarlo, haz los ejercicios de hombro hasta recuperar la movilidad completa (sección Ejercicios).',
}

const C_LINFEDEMA_BRAZO: Cuidado = {
  icono: Network,
  titulo: 'Prevención del linfedema del brazo',
  texto:
    'Tras extirpar los ganglios de la axila, cuida la piel del brazo: hidrátala, usa guantes en el jardín y la cocina, y trata enseguida cualquier herida. El ejercicio progresivo, incluido el de fuerza, es seguro y recomendable. Consulta si notas pesadez o hinchazón.',
}

const C_SUJETADOR: Cuidado = {
  icono: Ribbon,
  titulo: 'Sujetador y prótesis',
  texto:
    'Un sujetador sin aros, de algodón y cierre delantero, aporta comodidad. Hasta que cicatrice puedes usar una prótesis provisional ligera; la definitiva, a las 6–8 semanas. La enfermera te informará de opciones y ayudas.',
}

const C_EMBARAZO: Cuidado = {
  icono: Baby,
  titulo: 'Si deseas embarazo',
  texto:
    'No hay un plazo único: según la profundidad de los miomas, tu equipo te recomendará esperar entre 3 y 12 meses antes de buscar embarazo. Puede aconsejarse una cesárea programada. Informa siempre de la miomectomía a quien controle tu embarazo.',
}

const C_DIETA_INTESTINO: Cuidado = {
  icono: Utensils,
  titulo: 'Si te han operado el intestino',
  texto:
    'Si la endometriosis afectaba al recto o colon, sigue una dieta baja en fibra las primeras 2–4 semanas: comidas pequeñas y frecuentes, bien masticadas. Es normal un ritmo intestinal irregular durante semanas. Si llevas un estoma temporal, la enfermera estomaterapeuta te enseñará sus cuidados.',
}

const C_HORMONAL: Cuidado = {
  icono: CircleDot,
  titulo: 'Tratamiento a largo plazo',
  texto:
    'La endometriosis es una enfermedad crónica. Tras la cirugía, tu equipo puede recomendarte tratamiento hormonal para reducir el riesgo de que reaparezca. Llevar un diario de síntomas te ayudará en las revisiones.',
}

const ALARMA_LAPAROSCOPIA = [
  'Dolor abdominal que aumenta en lugar de disminuir, o abdomen hinchado y duro.',
  'Enrojecimiento, calor o supuración en alguna incisión.',
]

const PREP_ONCO = [
  'Tu caso se ha valorado en el Comité de Tumores; pregunta todas tus dudas sobre el plan.',
  'Si te van a extirpar ganglios, pregunta si se hará con la técnica del ganglio centinela.',
  'Si tienes deseo reproductivo, coméntalo antes de la cirugía: existen opciones.',
]

export const CIRUGIAS_ERAS: Cirugia[] = [
  {
    id: 'histerectomia-laparoscopica',
    nombre: 'Histerectomía laparoscópica',
    grupo: 'utero',
    programa: 'eras',
    icono: Flower2,
    abordaje: 'Laparoscopia',
    resumen:
      'Extirpación del útero (y a veces de trompas y ovarios) a través de pequeñas incisiones, con cámara. Es el abordaje de elección siempre que sea posible porque permite una recuperación más rápida.',
    ingreso: '0–1 noche',
    recuperacion: '2–4 semanas',
    vuelta: VUELTA_LAPAROSCOPIA,
    hitos: HITOS_LAPAROSCOPIA,
    cuidados: [C_HERIDA_LAPAROSCOPIA, C_SANGRADO, C_DOLOR, C_CAMINAR, C_INTESTINO, C_SEXUALIDAD],
    esperable: [
      'Dolor en hombros o bajo las costillas los primeros 2–3 días (por el gas).',
      'Manchado vaginal marrón o rosado hasta 4–6 semanas.',
      'Hinchazón abdominal y cansancio las primeras semanas.',
      'Si te han quitado los ovarios antes de la menopausia, pueden aparecer sofocos: coméntalo.',
    ],
    alarmaEspecifica: [
      ...ALARMA_LAPAROSCOPIA,
      'Salida brusca de líquido abundante o sangrado rojo por la vagina, sobre todo tras relaciones o esfuerzo.',
    ],
    ejercicios: ['prehab', 'respiratorio', 'suelo'],
  },
  {
    id: 'histerectomia-abdominal',
    nombre: 'Histerectomía abdominal',
    grupo: 'utero',
    programa: 'eras',
    icono: Flower2,
    abordaje: 'Laparotomía',
    resumen:
      'Extirpación del útero a través de una incisión en el abdomen, habitualmente horizontal por encima del pubis. Se elige cuando el útero es muy grande o hay cirugías previas que lo aconsejan.',
    ingreso: '2–3 noches',
    recuperacion: '6–8 semanas',
    vuelta: VUELTA_LAPAROTOMIA,
    hitos: HITOS_LAPAROTOMIA,
    cuidados: [C_HERIDA_LAPAROTOMIA, C_SANGRADO, C_DOLOR, C_CAMINAR, C_RESPIRAR, C_INTESTINO, C_SEXUALIDAD],
    esperable: [
      'Adormecimiento de la piel alrededor de la cicatriz durante meses.',
      'Manchado vaginal escaso hasta 4–6 semanas.',
      'Gases y digestiones lentas la primera semana.',
      'Cansancio que mejora semana a semana.',
    ],
    alarmaEspecifica: [
      'La herida se abre, supura o se enrojece.',
      'Vómitos repetidos o no expulsas gases en 24 h con abdomen hinchado.',
    ],
    ejercicios: ['prehab', 'respiratorio', 'suelo'],
  },
  {
    id: 'cancer-endometrio',
    nombre: 'Cirugía del cáncer de endometrio',
    grupo: 'oncologia',
    programa: 'eras',
    icono: Microscope,
    abordaje: 'Laparoscopia o robótica (a veces laparotomía)',
    resumen:
      'Histerectomía con extirpación de trompas y ovarios y estudio de los ganglios, generalmente con la técnica del ganglio centinela, que localiza solo los primeros ganglios y reduce el riesgo de linfedema. En la mayoría de casos se hace por laparoscopia.',
    ingreso: '1 noche (2–4 si es laparotomía)',
    recuperacion: '3–6 semanas',
    vuelta: VUELTA_LAPAROSCOPIA,
    hitos: HITOS_LAPAROSCOPIA,
    cuidados: [C_HERIDA_LAPAROSCOPIA, C_SANGRADO, C_DOLOR, C_CAMINAR, C_HEPARINA, C_LINFEDEMA_PIERNAS, C_SEXUALIDAD],
    esperable: [
      'Dolor de hombros los primeros días si fue por laparoscopia.',
      'Orina o piel teñidas de verde-azulado 24–48 h si se usó colorante para el ganglio centinela.',
      'Manchado vaginal escaso hasta 6 semanas.',
      'Sofocos si no eras menopáusica.',
    ],
    alarmaEspecifica: [
      ...ALARMA_LAPAROSCOPIA,
      'Hinchazón brusca y dolorosa de una pierna.',
    ],
    prepEspecifica: PREP_ONCO,
    ejercicios: ['prehab', 'respiratorio', 'piernas', 'suelo'],
  },
  {
    id: 'cancer-cervix',
    nombre: 'Cirugía del cáncer de cérvix',
    grupo: 'oncologia',
    programa: 'eras',
    icono: Microscope,
    abordaje: 'Laparotomía (abordaje abierto recomendado)',
    resumen:
      'Histerectomía radical: se extirpa el útero, el tejido que lo rodea (parametrios) y la parte alta de la vagina, junto con los ganglios pélvicos. En estadios iniciales seleccionados pueden plantearse técnicas que preservan la fertilidad.',
    ingreso: '3–5 noches',
    recuperacion: '6–8 semanas',
    vuelta: { ...VUELTA_LAPAROTOMIA, relaciones: 'Con penetración a las 8 semanas, tras revisión' },
    hitos: HITOS_LAPAROTOMIA,
    cuidados: [C_HERIDA_LAPAROTOMIA, C_VEJIGA, C_HEPARINA, C_LINFEDEMA_PIERNAS, C_CAMINAR, C_INTESTINO, C_SEXUALIDAD],
    esperable: [
      'Dificultad para notar las ganas de orinar o vaciar la vejiga: mejora en semanas o meses.',
      'Vagina algo más corta: con lubricante y paciencia, la vida sexual se recupera.',
      'Estreñimiento las primeras semanas.',
      'Hormigueo o adormecimiento en la cara interna del muslo.',
    ],
    alarmaEspecifica: [
      'No consigues orinar o la vejiga está llena y dolorosa.',
      'Salida de orina por la vagina.',
      'Hinchazón brusca y dolorosa de una pierna.',
    ],
    prepEspecifica: PREP_ONCO,
    ejercicios: ['prehab', 'respiratorio', 'piernas', 'suelo'],
  },
  {
    id: 'mastectomia',
    nombre: 'Mastectomía',
    grupo: 'mama',
    programa: 'eras',
    icono: Ribbon,
    abordaje: 'Cirugía de mama',
    resumen:
      'Extirpación completa de la mama. Puede acompañarse de reconstrucción en el mismo acto. En la consulta previa conocerás el tipo de mastectomía y las opciones de reconstrucción.',
    ingreso: '0–1 noche',
    recuperacion: '3–4 semanas',
    vuelta: {
      ducha: 'Según el drenaje · completa tras retirarlo',
      conducir: '2–3 semanas, cuando muevas el brazo sin dolor',
      esfuerzos: 'Sin cargar con ese brazo 3–4 semanas',
      relaciones: 'Cuando te sientas preparada',
      trabajo: '2–4 semanas',
      deporte: 'Caminar desde ya · resto a las 4–6 semanas',
    },
    hitos: [
      { desde: 0, hasta: 0, titulo: 'El mismo día', items: ['Comerás y te levantarás a las pocas horas.', 'Empieza a usar el brazo en gestos cotidianos.'] },
      { desde: 1, hasta: 1, titulo: 'Alta', items: ['Te enseñarán a vaciar y anotar el drenaje.', 'Recibirás la pauta de analgesia y de ejercicios.'] },
      { desde: 2, hasta: 13, titulo: 'Con el drenaje', items: ['Ejercicios suaves de hombro sin superar los 90°.', 'Anota el débito diario del drenaje.', 'Paseos diarios.'] },
      { desde: 14, hasta: 41, titulo: 'Tras retirar el drenaje', items: ['Ejercicios de hombro completos hasta recuperar movilidad.', 'Puede acumularse líquido (seroma): se drena en consulta si molesta.', 'Recibirás el resultado y el plan de tratamiento.'] },
      { desde: 42, hasta: 365, titulo: 'A partir de la semana 6', items: ['Actividad y deporte progresivos, incluida la fuerza.', 'Prótesis definitiva si la deseas.'] },
    ],
    cuidados: [C_DRENAJE_MAMA, C_BRAZO, C_SUJETADOR, C_DOLOR, C_CAMINAR],
    esperable: [
      'Adormecimiento o sensación extraña en la pared del tórax y la axila (puede durar meses).',
      'Sensación de tirantez al mover el brazo.',
      'Cansancio emocional: es normal y hay apoyo disponible.',
    ],
    alarmaEspecifica: [
      'La zona se hincha, se pone tensa o amoratada de forma rápida.',
      'El drenaje deja de funcionar y la zona se hincha, o sale sangre roja abundante.',
    ],
    prepEspecifica: ['Consigue un sujetador cómodo de cierre delantero y ropa que se abroche por delante.'],
    ejercicios: ['prehab', 'hombro'],
  },
  {
    id: 'mastectomia-bsgc',
    nombre: 'Mastectomía con biopsia de ganglio centinela',
    grupo: 'mama',
    programa: 'eras',
    icono: Ribbon,
    abordaje: 'Cirugía de mama y axila',
    resumen:
      'Mastectomía junto con la extirpación de los primeros ganglios de la axila (ganglio centinela), localizados con un trazador inyectado antes de la cirugía. Su riesgo de linfedema es bajo.',
    ingreso: '0–1 noche',
    recuperacion: '3–4 semanas',
    vuelta: {
      ducha: 'Según el drenaje · completa tras retirarlo',
      conducir: '2–3 semanas',
      esfuerzos: 'Sin cargar con ese brazo 3–4 semanas',
      relaciones: 'Cuando te sientas preparada',
      trabajo: '2–4 semanas',
      deporte: 'Caminar desde ya · resto a las 4–6 semanas',
    },
    hitos: [
      { desde: 0, hasta: 0, titulo: 'El mismo día', items: ['Puede que la orina se tiña de azul o verde si se usó colorante.', 'Usa el brazo en gestos cotidianos.'] },
      { desde: 1, hasta: 13, titulo: 'Primeras dos semanas', items: ['Cuida el drenaje y anota el débito.', 'Ejercicios de hombro hasta 90° mientras lleves drenaje.', 'Paseos diarios.'] },
      { desde: 14, hasta: 41, titulo: 'Semanas 2 a 6', items: ['Ejercicios de hombro completos.', 'Resultado del ganglio y plan de tratamiento.'] },
      { desde: 42, hasta: 365, titulo: 'A partir de la semana 6', items: ['Actividad y deporte sin restricciones.'] },
    ],
    cuidados: [C_DRENAJE_MAMA, C_BRAZO, C_SUJETADOR, C_DOLOR],
    esperable: [
      'Adormecimiento en la cara interna del brazo y la axila.',
      'Sensación de "cordón" bajo la axila al estirar el brazo: mejora con los ejercicios.',
    ],
    alarmaEspecifica: [
      'Hinchazón rápida, tensa o amoratada de la zona operada.',
      'Brazo hinchado, rojo y caliente.',
    ],
    prepEspecifica: ['La inyección del trazador puede hacerse el día antes o el mismo día; es poco molesta.'],
    ejercicios: ['prehab', 'hombro'],
  },
  {
    id: 'mastectomia-linfadenectomia',
    nombre: 'Mastectomía con linfadenectomía axilar',
    grupo: 'mama',
    programa: 'eras',
    icono: Ribbon,
    abordaje: 'Cirugía de mama y axila',
    resumen:
      'Mastectomía con extirpación de los ganglios de la axila. Requiere más atención a la movilidad del hombro y a la prevención del linfedema del brazo.',
    ingreso: '1–2 noches',
    recuperacion: '4–6 semanas',
    vuelta: {
      ducha: 'Según el drenaje · completa tras retirarlo',
      conducir: '3–4 semanas',
      esfuerzos: 'Sin cargar con ese brazo 4–6 semanas, luego progresivo',
      relaciones: 'Cuando te sientas preparada',
      trabajo: '4–6 semanas',
      deporte: 'Caminar desde ya · fuerza progresiva supervisada',
    },
    hitos: [
      { desde: 0, hasta: 1, titulo: 'Primeras 24–48 h', items: ['Levántate y camina.', 'Gestos cotidianos con el brazo, sin forzar.'] },
      { desde: 2, hasta: 13, titulo: 'Con el drenaje', items: ['El drenaje axilar suele mantenerse 1–2 semanas.', 'Ejercicios de hombro hasta 90°.'] },
      { desde: 14, hasta: 55, titulo: 'Tras retirar el drenaje', items: ['Ejercicios de hombro completos a diario.', 'Si tras 4–6 semanas no recuperas movilidad, pide valoración por fisioterapia.'] },
      { desde: 56, hasta: 365, titulo: 'A largo plazo', items: ['Mantén el ejercicio físico regular.', 'Revisa el brazo en cada control: medir a tiempo el linfedema es clave.'] },
    ],
    cuidados: [C_DRENAJE_MAMA, C_BRAZO, C_LINFEDEMA_BRAZO, C_SUJETADOR, C_DOLOR],
    esperable: [
      'Adormecimiento en la cara interna del brazo, que puede ser duradero.',
      'Acumulación de líquido en la axila (seroma) tras retirar el drenaje.',
      'Sensación de "cordón" al estirar el brazo.',
    ],
    alarmaEspecifica: [
      'Brazo hinchado, rojo y caliente, con o sin fiebre.',
      'Hinchazón rápida y tensa de la axila o el tórax.',
    ],
    ejercicios: ['prehab', 'hombro'],
  },
  {
    id: 'miomectomia-laparoscopica',
    nombre: 'Miomectomía laparoscópica',
    grupo: 'utero',
    programa: 'eras',
    icono: Flower2,
    abordaje: 'Laparoscopia',
    resumen:
      'Extirpación de los miomas conservando el útero, mediante pequeñas incisiones. Es especialmente importante corregir antes la anemia, frecuente cuando los miomas producen reglas abundantes.',
    ingreso: '0–1 noche',
    recuperacion: '2–4 semanas',
    vuelta: { ...VUELTA_LAPAROSCOPIA, relaciones: 'Con penetración a las 4–6 semanas' },
    hitos: HITOS_LAPAROSCOPIA,
    cuidados: [C_HERIDA_LAPAROSCOPIA, C_DOLOR, C_CAMINAR, C_INTESTINO, C_EMBARAZO],
    esperable: [
      'Dolor de hombros por el gas los primeros días.',
      'Sangrado vaginal escaso unos días.',
      'La siguiente regla puede ser algo diferente.',
    ],
    alarmaEspecifica: [...ALARMA_LAPAROSCOPIA, 'Mareo intenso, palidez o sensación de desmayo.'],
    prepEspecifica: ['Hazte un análisis para saber si tienes anemia: el hierro antes de la cirugía reduce la necesidad de transfusión.'],
    ejercicios: ['prehab', 'respiratorio'],
  },
  {
    id: 'miomectomia-laparotomica',
    nombre: 'Miomectomía laparotómica',
    grupo: 'utero',
    programa: 'eras',
    icono: Flower2,
    abordaje: 'Laparotomía',
    resumen:
      'Extirpación de los miomas conservando el útero, a través de una incisión abdominal. Se elige cuando los miomas son muy numerosos o grandes.',
    ingreso: '2–3 noches',
    recuperacion: '4–6 semanas',
    vuelta: VUELTA_LAPAROTOMIA,
    hitos: HITOS_LAPAROTOMIA,
    cuidados: [C_HERIDA_LAPAROTOMIA, C_DOLOR, C_CAMINAR, C_RESPIRAR, C_INTESTINO, C_EMBARAZO],
    esperable: ['Cansancio las primeras semanas.', 'Sangrado vaginal escaso unos días.', 'Adormecimiento alrededor de la cicatriz.'],
    alarmaEspecifica: ['La herida se abre, supura o se enrojece.', 'Mareo intenso, palidez o sensación de desmayo.'],
    prepEspecifica: ['Hazte un análisis para saber si tienes anemia: el hierro antes de la cirugía reduce la necesidad de transfusión.'],
    ejercicios: ['prehab', 'respiratorio'],
  },
  {
    id: 'endometriosis',
    nombre: 'Cirugía de endometriosis',
    grupo: 'endometriosis',
    programa: 'eras',
    icono: Sparkles,
    abordaje: 'Laparoscopia',
    resumen:
      'Extirpación de los focos de endometriosis y de los quistes de ovario (endometriomas), conservando el ovario sano. El objetivo es aliviar el dolor y, si lo deseas, mejorar la fertilidad.',
    ingreso: '0–1 noche',
    recuperacion: '1–3 semanas',
    vuelta: { ...VUELTA_LAPAROSCOPIA, relaciones: 'Cuando no haya molestias, habitualmente a las 2–4 semanas' },
    hitos: HITOS_LAPAROSCOPIA,
    cuidados: [C_HERIDA_LAPAROSCOPIA, C_DOLOR, C_CAMINAR, C_HORMONAL],
    esperable: ['Dolor de hombros por el gas.', 'Manchado escaso unos días.', 'La primera regla puede ser más dolorosa.'],
    alarmaEspecifica: ALARMA_LAPAROSCOPIA,
    ejercicios: ['prehab', 'respiratorio'],
  },
  {
    id: 'endometriosis-profunda',
    nombre: 'Cirugía de endometriosis profunda',
    grupo: 'endometriosis',
    programa: 'eras',
    icono: Activity,
    abordaje: 'Laparoscopia (equipo multidisciplinar)',
    resumen:
      'Extirpación de nódulos profundos que pueden afectar a intestino, vejiga, uréteres o nervios. Puede requerir cirugía intestinal o urológica en el mismo acto, por lo que la preparación ERAS cobra especial importancia.',
    ingreso: '2–7 noches',
    recuperacion: '4–6 semanas',
    vuelta: { ...VUELTA_LAPAROSCOPIA, trabajo: '4–6 semanas', relaciones: 'Con penetración a las 6–8 semanas' },
    hitos: HITOS_LAPAROSCOPIA,
    cuidados: [C_HERIDA_LAPAROSCOPIA, C_DIETA_INTESTINO, C_VEJIGA, C_DOLOR, C_CAMINAR, C_HORMONAL],
    esperable: [
      'Ritmo intestinal irregular durante semanas si se operó el intestino.',
      'Puede que lleves sonda urinaria o un catéter en el uréter (doble J) unas semanas.',
      'Cansancio prolongado: la recuperación es más lenta que en la cirugía de endometriosis superficial.',
    ],
    alarmaEspecifica: [
      ...ALARMA_LAPAROSCOPIA,
      'Fiebre, dolor abdominal creciente o mal estado general, sobre todo entre los días 3 y 10 (puede indicar una fuga en la sutura intestinal).',
      'Dolor lumbar intenso o no orinas.',
    ],
    prepEspecifica: [
      'Si se prevé cirugía intestinal, te indicarán si necesitas una preparación del intestino o antibióticos orales; no la hagas por tu cuenta.',
      'Te explicarán la posibilidad, poco frecuente, de un estoma temporal.',
    ],
    ejercicios: ['prehab', 'respiratorio', 'suelo'],
  },
]
