import { Thermometer, Droplet, Wind, Footprints, Bandage, CircleDot, Flame, Frown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Senal {
  icono: LucideIcon
  titulo: string
  texto: string
  emergencia?: boolean
}

export const SENALES_ALARMA: Senal[] = [
  { icono: Wind, titulo: 'Falta de aire o dolor en el pecho', texto: 'Dificultad para respirar de forma repentina, dolor torácico o tos con sangre.', emergencia: true },
  { icono: Droplet, titulo: 'Sangrado abundante', texto: 'Empapas más de una compresa por hora durante 2 horas, o expulsas coágulos grandes.', emergencia: true },
  { icono: Thermometer, titulo: 'Fiebre', texto: 'Temperatura de 38 °C o más, o escalofríos.' },
  { icono: Footprints, titulo: 'Pierna hinchada o dolorosa', texto: 'Dolor en la pantorrilla, o una pierna hinchada, caliente o enrojecida.' },
  { icono: Bandage, titulo: 'Problemas en la herida', texto: 'Enrojecimiento que se extiende, calor, supuración o la herida se abre.' },
  { icono: Flame, titulo: 'Flujo maloliente', texto: 'Flujo vaginal con mal olor o aspecto purulento.' },
  { icono: CircleDot, titulo: 'Problemas para orinar', texto: 'No puedes orinar, orinas muy poco con dolor en el bajo vientre o tienes escozor intenso.' },
  { icono: Frown, titulo: 'Dolor o vómitos que no ceden', texto: 'Dolor creciente pese a la analgesia, vómitos persistentes o abdomen hinchado sin expulsar gases.' },
]
