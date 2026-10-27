import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { CIRUGIAS } from '../data/cirugias'
import { GRUPOS } from '../data/grupos'
import { useApp } from '../store'
import { SurgeryCard } from '../components/cirugia'
import { IconBadge } from '../components/ui'
import type { GrupoId, Programa } from '../types'

type Filtro = 'todas' | Programa

const FILTROS: { id: Filtro; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'eras', label: 'Programa ERAS' },
  { id: 'postop', label: 'Cuidados postoperatorios' },
]

const normalizar = (s: string): string => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

export function Cirugias() {
  const [params, setParams] = useSearchParams()
  const grupoParam = params.get('grupo') as GrupoId | null
  const [q, setQ] = useState('')
  const [filtro, setFiltro] = useState<Filtro>('todas')
  const { cirugiaId } = useApp()

  const lista = useMemo(() => {
    const nq = normalizar(q.trim())
    return CIRUGIAS.filter((c) =>
      (filtro === 'todas' || c.programa === filtro) &&
      (!grupoParam || c.grupo === grupoParam) &&
      (!nq || normalizar(`${c.nombre} ${c.abordaje} ${c.resumen}`).includes(nq)),
    )
  }, [q, filtro, grupoParam])

  const grupos = GRUPOS.filter((g) => lista.some((c) => c.grupo === g.id))

  return (
    <div className="fade-in">
      <h1 className="font-display text-[40px] leading-tight">Cirugías</h1>
      <p className="mb-4 text-[15px]" style={{ color: 'var(--color-ink-2)' }}>Busca tu intervención para ver tu guía personalizada.</p>

      <div className="relative mb-3">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--color-ink-3)' }} aria-hidden />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar: histerectomía, mama, prolapso…"
          aria-label="Buscar cirugía"
          className="h-13 w-full rounded-2xl py-3.5 pl-11 pr-4 text-[16px]"
          style={{ background: 'var(--color-surface)', border: '1px solid var(--color-line)', fontFamily: 'inherit' }}
        />
      </div>

      <div className="scroll-x -mx-4 mb-5 flex gap-2 px-4">
        {FILTROS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFiltro(f.id)}
            className="chip pressable"
            aria-pressed={filtro === f.id}
            style={{
              background: filtro === f.id ? 'var(--color-plum)' : 'var(--color-surface)',
              color: filtro === f.id ? '#fff' : 'var(--color-ink-2)',
              border: '1px solid var(--color-line)',
              padding: '9px 14px',
            }}
          >
            {f.label}
          </button>
        ))}
        {grupoParam && (
          <button type="button" onClick={() => setParams({})} className="chip pressable" style={{ background: 'var(--color-plum-soft)', color: 'var(--color-plum)', padding: '9px 14px' }}>
            {GRUPOS.find((g) => g.id === grupoParam)?.nombre} <X size={14} aria-label="Quitar filtro" />
          </button>
        )}
      </div>

      {lista.length === 0 && (
        <p className="card p-6 text-center" style={{ color: 'var(--color-ink-2)' }}>No hay resultados. Prueba con otra palabra.</p>
      )}

      <div className="space-y-6">
        {grupos.map((g) => (
          <section key={g.id}>
            <div className="mb-2.5 flex items-center gap-2.5">
              <IconBadge icon={g.icono} color={g.color} bg={g.fondo} size={30} />
              <h2 className="text-[17px] font-bold">{g.nombre}</h2>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {lista.filter((c) => c.grupo === g.id).map((c) => (
                <SurgeryCard key={c.id} c={c} selected={c.id === cirugiaId} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
