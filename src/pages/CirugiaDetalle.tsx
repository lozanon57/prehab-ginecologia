import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BedDouble, Clock, Stethoscope, Check, Siren, Sparkles, Utensils, Users, Car, Shirt, Info } from 'lucide-react'
import { getCirugia } from '../data/cirugias'
import { getGrupo } from '../data/grupos'
import { getPrograma } from '../data/ejercicios'
import { useApp } from '../store'
import { diaRelativo } from '../lib/fechas'
import { IconBadge, Disclaimer } from '../components/ui'
import { ProgramaTag, RecoveryTimeline, VueltaGrid } from '../components/cirugia'
import { FastingCalculator } from '../components/fechas'
import type { Cirugia } from '../types'

type Tab = 'antes' | 'recuperacion' | 'cuidados' | 'alarma'

const TABS: { id: Tab; label: string }[] = [
  { id: 'antes', label: 'Antes' },
  { id: 'recuperacion', label: 'Recuperación' },
  { id: 'cuidados', label: 'Cuidados' },
  { id: 'alarma', label: 'Alarma' },
]

export function CirugiaDetalle() {
  const { id } = useParams<{ id: string }>()
  const [params, setParams] = useSearchParams()
  const c = getCirugia(id)
  const { cirugiaId, setCirugia, fechaCirugia } = useApp()
  if (!c) return <Navigate to="/cirugias" replace />

  const tab = (params.get('tab') as Tab | null) ?? 'antes'
  const g = getGrupo(c.grupo)
  const esMia = cirugiaId === c.id
  const dia = esMia && fechaCirugia ? diaRelativo(fechaCirugia) : null

  return (
    <div className="fade-in">
      <Link to="/cirugias" className="mb-3 inline-flex items-center gap-1.5 text-[14px] font-semibold no-underline" style={{ color: 'var(--color-ink-2)' }}>
        <ArrowLeft size={16} aria-hidden /> Cirugías
      </Link>

      <header className="card-soft p-5" style={{ background: `linear-gradient(150deg, ${g.fondo}, #fff 80%)`, border: '1px solid var(--color-line)' }}>
        <div className="flex items-start gap-3">
          <IconBadge icon={c.icono} color={g.color} bg="#fff" size={52} />
          <div className="min-w-0">
            <ProgramaTag programa={c.programa} />
            <h1 className="font-display mt-1.5 text-[32px] leading-[1.05]">{c.nombre}</h1>
          </div>
        </div>
        <p className="mt-3 text-[15px]" style={{ color: 'var(--color-ink-2)' }}>{c.resumen}</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <Dato icon={Stethoscope} label="Abordaje" value={c.abordaje} />
          <Dato icon={BedDouble} label="Ingreso" value={c.ingreso} />
          <Dato icon={Clock} label="Recuperación" value={c.recuperacion} />
        </div>
        <button
          type="button"
          onClick={() => setCirugia(esMia ? null : c.id)}
          className="pressable mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-2xl font-bold"
          style={{ background: esMia ? 'var(--color-ok-bg)' : 'var(--color-plum)', color: esMia ? 'var(--color-ok)' : '#fff' }}
        >
          {esMia ? <><Check size={18} aria-hidden /> Es mi cirugía</> : 'Esta es mi cirugía'}
        </button>
      </header>

      <div role="tablist" className="glass sticky top-16 z-30 -mx-4 mt-4 flex gap-1 px-4 py-2">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            aria-selected={tab === t.id}
            onClick={() => setParams({ tab: t.id }, { replace: true })}
            className="flex-1 rounded-full py-2.5 text-[14px] font-bold"
            style={{
              background: tab === t.id ? (t.id === 'alarma' ? 'var(--color-alert)' : 'var(--color-ink)') : 'transparent',
              color: tab === t.id ? '#fff' : t.id === 'alarma' ? 'var(--color-alert)' : 'var(--color-ink-2)',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {tab === 'antes' && <TabAntes c={c} />}
        {tab === 'recuperacion' && (
          <>
            {dia == null && (
              <p className="mb-4 flex gap-2 rounded-2xl p-3 text-[14px]" style={{ background: 'var(--color-sky-bg)', color: 'var(--color-sky)' }}>
                <Info size={18} className="shrink-0" aria-hidden />
                Marca esta cirugía como tuya e indica la fecha en Inicio para ver en qué punto de la recuperación estás.
              </p>
            )}
            <RecoveryTimeline hitos={c.hitos} diaActual={dia} />
          </>
        )}
        {tab === 'cuidados' && <TabCuidados c={c} />}
        {tab === 'alarma' && <TabAlarma c={c} />}
      </div>

      <Disclaimer />
    </div>
  )
}

function Dato({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: string }) {
  return (
    <div className="rounded-2xl p-2.5" style={{ background: 'rgba(255,255,255,.75)' }}>
      <Icon size={16} style={{ color: 'var(--color-plum)' }} aria-hidden />
      <p className="mt-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: 'var(--color-ink-3)' }}>{label}</p>
      <p className="text-[13px] font-semibold leading-snug">{value}</p>
    </div>
  )
}

function Lista({ items, color = 'var(--color-plum)' }: { items: string[]; color?: string }) {
  return (
    <ul className="space-y-2">
      {items.map((it) => (
        <li key={it} className="flex gap-2.5 text-[15px]">
          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: color }} aria-hidden />
          <span style={{ color: 'var(--color-ink-2)' }}>{it}</span>
        </li>
      ))}
    </ul>
  )
}

const ANTES_POSTOP = [
  { icon: Utensils, t: 'Ayuno', d: 'Sólidos hasta 6 h antes y líquidos claros (agua, infusiones) hasta 2 h antes, salvo otra indicación.' },
  { icon: Users, t: 'Ven acompañada', d: 'Necesitarás que alguien te lleve a casa y te acompañe las primeras horas.' },
  { icon: Car, t: 'No conduzcas', d: 'No conduzcas en las 24 h siguientes si recibes sedación o anestesia.' },
  { icon: Shirt, t: 'Qué traer', d: 'Ropa cómoda, compresas, tu medicación habitual y los informes previos.' },
]

function TabAntes({ c }: { c: Cirugia }) {
  if (c.programa === 'postop') {
    return (
      <div className="space-y-3">
        <p className="text-[15px]" style={{ color: 'var(--color-ink-2)' }}>
          Esta intervención no requiere un programa de preparación especial. Solo ten en cuenta:
        </p>
        {ANTES_POSTOP.map(({ icon: Icon, t, d }) => (
          <div key={t} className="card flex gap-3 p-4">
            <IconBadge icon={Icon} color="var(--color-sage)" bg="var(--color-sage-bg)" size={40} />
            <div><p className="font-bold">{t}</p><p className="text-[14px]" style={{ color: 'var(--color-ink-2)' }}>{d}</p></div>
          </div>
        ))}
        <FastingCalculator />
      </div>
    )
  }
  return (
    <div className="space-y-4">
      <Link to="/plan" className="pressable flex items-center gap-4 rounded-[22px] p-5 no-underline" style={{ background: 'var(--color-plum)', color: '#fff' }}>
        <Sparkles size={28} aria-hidden />
        <span className="flex-1">
          <span className="block text-[18px] font-bold">Tu plan de prehabilitación</span>
          <span className="block text-[14px] opacity-85">4 semanas de ejercicio, nutrición y mindfulness adaptadas a tu nivel, más el checklist ERAS.</span>
        </span>
        <ArrowRight size={20} aria-hidden />
      </Link>
      {c.prepEspecifica && (
        <div className="card p-5">
          <h3 className="mb-2 text-[17px] font-bold">Específico de esta cirugía</h3>
          <Lista items={c.prepEspecifica} />
        </div>
      )}
      <FastingCalculator />
    </div>
  )
}

function TabCuidados({ c }: { c: Cirugia }) {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="font-display mb-3 text-[26px]">Vuelta a la normalidad</h3>
        <VueltaGrid vuelta={c.vuelta} />
        <p className="mt-2 text-[12px]" style={{ color: 'var(--color-ink-3)' }}>Plazos orientativos: tu equipo puede ajustarlos a tu caso.</p>
      </section>
      <section>
        <h3 className="font-display mb-3 text-[26px]">Tus cuidados</h3>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {c.cuidados.map((cu) => (
            <div key={cu.titulo} className="card p-4">
              <IconBadge icon={cu.icono} color="var(--color-plum)" bg="var(--color-plum-soft)" size={38} />
              <p className="mt-2.5 font-bold">{cu.titulo}</p>
              <p className="mt-1 text-[14px]" style={{ color: 'var(--color-ink-2)' }}>{cu.texto}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-[22px] p-5" style={{ background: 'var(--color-ok-bg)' }}>
        <h3 className="mb-2 text-[17px] font-bold" style={{ color: 'var(--color-ok)' }}>Es normal…</h3>
        <Lista items={c.esperable} color="var(--color-ok)" />
      </section>
      {c.ejercicios && (
        <section>
          <h3 className="font-display mb-3 text-[26px]">Ejercicios recomendados</h3>
          <div className="flex flex-wrap gap-2">
            {c.ejercicios.map((id) => {
              const p = getPrograma(id)
              if (!p) return null
              return (
                <Link key={id} to={`/ejercicios?p=${id}`} className="chip pressable no-underline" style={{ background: p.fondo, color: p.color, padding: '10px 14px' }}>
                  <p.icono size={16} aria-hidden /> {p.nombre}
                </Link>
              )
            })}
          </div>
        </section>
      )}
    </div>
  )
}

function TabAlarma({ c }: { c: Cirugia }) {
  return (
    <div className="space-y-4">
      <div className="rounded-[22px] p-5" style={{ background: 'var(--color-alert-bg)' }}>
        <h3 className="mb-2 flex items-center gap-2 text-[17px] font-bold" style={{ color: 'var(--color-alert)' }}>
          <Siren size={20} aria-hidden /> Consulta si, tras esta cirugía, notas:
        </h3>
        <Lista items={c.alarmaEspecifica} color="var(--color-alert)" />
      </div>
      <Link to="/alarma" className="card pressable flex items-center justify-between p-4 font-bold no-underline" style={{ color: 'var(--color-ink)' }}>
        Ver todas las señales de alarma <ArrowRight size={18} aria-hidden />
      </Link>
    </div>
  )
}
