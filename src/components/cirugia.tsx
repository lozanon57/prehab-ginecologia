import { Link } from 'react-router-dom'
import { ChevronRight, BedDouble, Clock, ShowerHead, Car, Weight, Heart, Briefcase, Activity, CheckCircle2 } from 'lucide-react'
import type { Cirugia, Hito, Vuelta } from '../types'
import { getGrupo } from '../data/grupos'
import { IconBadge } from './ui'

export function ProgramaTag({ programa }: { programa: Cirugia['programa'] }) {
  const eras = programa === 'eras'
  return (
    <span
      className="chip"
      style={{ background: eras ? 'var(--color-plum-soft)' : 'var(--color-sage-bg)', color: eras ? 'var(--color-plum)' : 'var(--color-sage)', padding: '3px 10px', fontSize: 12 }}
    >
      {eras ? 'Programa ERAS' : 'Cuidados postoperatorios'}
    </span>
  )
}

export function SurgeryCard({ c, selected = false }: { c: Cirugia; selected?: boolean }) {
  const g = getGrupo(c.grupo)
  return (
    <Link
      to={`/cirugia/${c.id}`}
      className="card pressable flex items-center gap-3 p-3.5 no-underline"
      style={{ color: 'var(--color-ink)', borderColor: selected ? 'var(--color-plum)' : undefined, borderWidth: selected ? 2 : 1 }}
    >
      <IconBadge icon={c.icono} color={g.color} bg={g.fondo} />
      <span className="min-w-0 flex-1">
        <span className="block font-bold leading-snug">{c.nombre}</span>
        <span className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px]" style={{ color: 'var(--color-ink-2)' }}>
          <span className="inline-flex items-center gap-1"><BedDouble size={14} aria-hidden />{c.ingreso}</span>
          <span className="inline-flex items-center gap-1"><Clock size={14} aria-hidden />{c.recuperacion}</span>
        </span>
      </span>
      {selected ? <CheckCircle2 size={22} style={{ color: 'var(--color-plum)' }} aria-label="Tu cirugía" /> : <ChevronRight size={20} style={{ color: 'var(--color-ink-3)' }} aria-hidden />}
    </Link>
  )
}

interface TimelineProps {
  hitos: Hito[]
  diaActual?: number | null
}

export function RecoveryTimeline({ hitos, diaActual }: TimelineProps) {
  return (
    <ol className="relative ml-1">
      {hitos.map((h, i) => {
        const activo = diaActual != null && diaActual >= h.desde && diaActual <= h.hasta
        const pasado = diaActual != null && diaActual > h.hasta
        const last = i === hitos.length - 1
        return (
          <li key={h.titulo} className="relative pb-5 pl-9">
            {!last && <span className="absolute left-[11px] top-7 bottom-0 w-[2px]" style={{ background: pasado ? 'var(--color-plum)' : 'var(--color-line)' }} aria-hidden />}
            <span
              className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full"
              style={{
                background: activo || pasado ? 'var(--color-plum)' : 'var(--color-surface)',
                border: activo || pasado ? 'none' : '2px solid var(--color-line)',
                boxShadow: activo ? '0 0 0 6px var(--color-plum-soft)' : 'none',
              }}
              aria-hidden
            >
              {pasado && <CheckCircle2 size={14} color="#fff" />}
            </span>
            <div className={activo ? 'card p-4' : ''} style={activo ? { borderColor: 'var(--color-plum)' } : undefined}>
              <p className="eyebrow" style={{ color: activo ? 'var(--color-plum)' : 'var(--color-ink-3)' }}>
                {activo ? 'Estás aquí · ' : ''}{rango(h)}
              </p>
              <h3 className="text-[17px] font-bold">{h.titulo}</h3>
              <ul className="mt-1.5 space-y-1">
                {h.items.map((it) => (
                  <li key={it} className="flex gap-2 text-[15px]" style={{ color: 'var(--color-ink-2)' }}>
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--color-plum)' }} aria-hidden />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

function rango(h: Hito): string {
  if (h.desde === 0 && h.hasta === 0) return 'Día 0'
  if (h.hasta >= 365) return `Desde el día ${h.desde}`
  if (h.desde === h.hasta) return `Día ${h.desde}`
  return `Días ${h.desde}–${h.hasta}`
}

const VUELTA_ITEMS: { key: keyof Vuelta; label: string; icon: typeof Car }[] = [
  { key: 'ducha', label: 'Ducha y baño', icon: ShowerHead },
  { key: 'conducir', label: 'Conducir', icon: Car },
  { key: 'esfuerzos', label: 'Cargar peso', icon: Weight },
  { key: 'relaciones', label: 'Relaciones', icon: Heart },
  { key: 'trabajo', label: 'Trabajo', icon: Briefcase },
  { key: 'deporte', label: 'Deporte', icon: Activity },
]

export function VueltaGrid({ vuelta }: { vuelta: Vuelta }) {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
      {VUELTA_ITEMS.map(({ key, label, icon: Icon }) => (
        <div key={key} className="card p-3.5">
          <Icon size={20} style={{ color: 'var(--color-plum)' }} aria-hidden />
          <p className="mt-2 text-[12px] font-bold uppercase tracking-wide" style={{ color: 'var(--color-ink-3)' }}>{label}</p>
          <p className="mt-0.5 text-[14px] font-semibold leading-snug">{vuelta[key]}</p>
        </div>
      ))}
    </div>
  )
}
