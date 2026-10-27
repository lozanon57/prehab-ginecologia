import type { Cirugia } from '../types'
import { CIRUGIAS_ERAS } from './cirugiasEras'
import { CIRUGIAS_MENORES } from './cirugiasMenores'

export const CIRUGIAS: Cirugia[] = [...CIRUGIAS_ERAS, ...CIRUGIAS_MENORES]

export const getCirugia = (id: string | null | undefined): Cirugia | undefined =>
  id ? CIRUGIAS.find((c) => c.id === id) : undefined

/** Devuelve la etapa de recuperación que corresponde a un día postoperatorio. */
export function hitoActual(c: Cirugia, dia: number) {
  return c.hitos.find((h) => dia >= h.desde && dia <= h.hasta) ?? c.hitos[c.hitos.length - 1]
}
