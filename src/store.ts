import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Nivel } from './data/prehab/valoracion'

interface AppState {
  cirugiaId: string | null
  fechaCirugia: string | null
  horaCirugia: string | null
  hechos: Record<string, boolean>
  /** Nivel de actividad basal obtenido en la valoración */
  nivel: Nivel | null
  peso: number | null
  /** Respuestas del cribado nutricional (id de pregunta → sí/no) */
  cribado: Record<string, boolean>
  /** Termómetro de malestar emocional por semana (0–10) */
  malestar: Record<number, number>
  setCirugia: (id: string | null) => void
  setFecha: (fecha: string | null) => void
  setHora: (hora: string | null) => void
  toggle: (key: string) => void
  setNivel: (nivel: Nivel | null) => void
  setPeso: (peso: number | null) => void
  setCribado: (id: string, valor: boolean) => void
  setMalestar: (semana: number, valor: number) => void
  reiniciar: () => void
}

const INICIAL = {
  cirugiaId: null,
  fechaCirugia: null,
  horaCirugia: null,
  hechos: {},
  nivel: null,
  peso: null,
  cribado: {},
  malestar: {},
}

export const useApp = create<AppState>()(
  persist(
    (set) => ({
      ...INICIAL,
      setCirugia: (id) => set({ cirugiaId: id }),
      setFecha: (fecha) => set({ fechaCirugia: fecha }),
      setHora: (hora) => set({ horaCirugia: hora }),
      toggle: (key) => set((s) => ({ hechos: { ...s.hechos, [key]: !s.hechos[key] } })),
      setNivel: (nivel) => set({ nivel }),
      setPeso: (peso) => set({ peso }),
      setCribado: (id, valor) => set((s) => ({ cribado: { ...s.cribado, [id]: valor } })),
      setMalestar: (semana, valor) => set((s) => ({ malestar: { ...s.malestar, [semana]: valor } })),
      reiniciar: () => set(INICIAL),
    }),
    { name: 'cuidarte-gine-store' },
  ),
)
