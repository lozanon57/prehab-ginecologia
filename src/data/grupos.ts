import { Microscope, Ribbon, Flower2, Sparkles, Layers, Search } from 'lucide-react'
import type { Grupo, GrupoId } from '../types'

export const GRUPOS: Grupo[] = [
  {
    id: 'oncologia',
    nombre: 'Cáncer ginecológico',
    descripcion: 'Cérvix y endometrio',
    icono: Microscope,
    color: 'var(--color-plum)',
    fondo: 'var(--color-plum-soft)',
  },
  {
    id: 'mama',
    nombre: 'Mama',
    descripcion: 'Mastectomía y cirugía axilar',
    icono: Ribbon,
    color: 'var(--color-clay)',
    fondo: 'var(--color-clay-bg)',
  },
  {
    id: 'utero',
    nombre: 'Útero y miomas',
    descripcion: 'Histerectomía y miomectomía',
    icono: Flower2,
    color: 'var(--color-lilac)',
    fondo: 'var(--color-lilac-bg)',
  },
  {
    id: 'endometriosis',
    nombre: 'Endometriosis',
    descripcion: 'Superficial y profunda',
    icono: Sparkles,
    color: 'var(--color-sky)',
    fondo: 'var(--color-sky-bg)',
  },
  {
    id: 'suelo',
    nombre: 'Suelo pélvico',
    descripcion: 'Prolapso e incontinencia',
    icono: Layers,
    color: 'var(--color-sage)',
    fondo: 'var(--color-sage-bg)',
  },
  {
    id: 'diagnostica',
    nombre: 'Cirugía ambulatoria',
    descripcion: 'Conización, legrado, histeroscopia',
    icono: Search,
    color: 'var(--color-warn)',
    fondo: 'var(--color-warn-bg)',
  },
]

export const getGrupo = (id: GrupoId): Grupo => GRUPOS.find((g) => g.id === id) ?? GRUPOS[0]
