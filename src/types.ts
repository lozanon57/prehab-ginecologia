import type { LucideIcon } from 'lucide-react'

export type Programa = 'eras' | 'postop'

export type GrupoId = 'oncologia' | 'mama' | 'utero' | 'endometriosis' | 'suelo' | 'diagnostica'

export interface Grupo {
  id: GrupoId
  nombre: string
  descripcion: string
  icono: LucideIcon
  color: string
  fondo: string
}

/** Una etapa de la recuperación, en días desde la cirugía (día 0 = día de la operación). */
export interface Hito {
  desde: number
  hasta: number
  titulo: string
  items: string[]
}

export interface Cuidado {
  icono: LucideIcon
  titulo: string
  texto: string
}

/** Cuándo se puede retomar cada actividad. */
export interface Vuelta {
  ducha: string
  conducir: string
  esfuerzos: string
  relaciones: string
  trabajo: string
  deporte: string
}

export interface Cirugia {
  id: string
  nombre: string
  grupo: GrupoId
  programa: Programa
  icono: LucideIcon
  abordaje: string
  resumen: string
  ingreso: string
  recuperacion: string
  vuelta: Vuelta
  hitos: Hito[]
  cuidados: Cuidado[]
  esperable: string[]
  alarmaEspecifica: string[]
  prepEspecifica?: string[]
  ejercicios?: ProgramaEjercicioId[]
}

export type ProgramaEjercicioId = 'prehab' | 'respiratorio' | 'suelo' | 'hombro' | 'piernas'
