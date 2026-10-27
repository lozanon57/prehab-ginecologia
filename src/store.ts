import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  cirugiaId: string | null
  fechaCirugia: string | null
  horaCirugia: string | null
  hechos: Record<string, boolean>
  setCirugia: (id: string | null) => void
  setFecha: (fecha: string | null) => void
  setHora: (hora: string | null) => void
  toggle: (key: string) => void
  reiniciar: () => void
}

export const useApp = create<AppState>()(
  persist(
    (set) => ({
      cirugiaId: null,
      fechaCirugia: null,
      horaCirugia: null,
      hechos: {},
      setCirugia: (id) => set({ cirugiaId: id }),
      setFecha: (fecha) => set({ fechaCirugia: fecha }),
      setHora: (hora) => set({ horaCirugia: hora }),
      toggle: (key) => set((s) => ({ hechos: { ...s.hechos, [key]: !s.hechos[key] } })),
      reiniciar: () => set({ cirugiaId: null, fechaCirugia: null, horaCirugia: null, hechos: {} }),
    }),
    { name: 'cuidarte-gine-store' },
  ),
)
