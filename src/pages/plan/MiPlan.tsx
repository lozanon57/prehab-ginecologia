import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { RotateCcw } from 'lucide-react'
import { useApp } from '../../store'
import { NIVELES, semanaPorFecha } from '../../data/prehab/valoracion'
import { diaRelativo } from '../../lib/fechas'
import { IconBadge, Disclaimer } from '../../components/ui'
import { Valoracion } from './Valoracion'
import { TabEjercicio } from './TabEjercicio'
import { TabNutricion } from './TabNutricion'
import { TabMente } from './TabMente'
import { ChecklistEras } from '../Preparacion'

type Tab = 'ejercicio' | 'nutricion' | 'mente' | 'checklist'

const TABS: { id: Tab; label: string }[] = [
  { id: 'ejercicio', label: 'Ejercicio' },
  { id: 'nutricion', label: 'Nutrición' },
  { id: 'mente', label: 'Mente' },
  { id: 'checklist', label: 'Checklist' },
]

export function MiPlan() {
  const { nivel, setNivel, fechaCirugia } = useApp()
  const [params, setParams] = useSearchParams()
  const diasFaltan = fechaCirugia ? -diaRelativo(fechaCirugia) : null
  const [semana, setSemana] = useState(() => semanaPorFecha(diasFaltan))
  const tab = (params.get('tab') as Tab | null) ?? 'ejercicio'

  if (!nivel && tab !== 'checklist') return <Valoracion onFin={setNivel} />

  const cfg = nivel ? NIVELES[nivel] : null

  return (
    <div className="fade-in">
      <header className="mb-4">
        <p className="eyebrow" style={{ color: 'var(--color-plum)' }}>Prehabilitación · 4 semanas</p>
        <h1 className="font-display text-[40px] leading-tight">Mi plan</h1>
      </header>

      {cfg && (
        <div className="card mb-4 flex items-center gap-3 p-4">
          <IconBadge icon={cfg.icono} color={cfg.color} bg={cfg.fondo} size={44} />
          <div className="flex-1">
            <p className="text-[12px] font-bold uppercase tracking-wide" style={{ color: 'var(--color-ink-3)' }}>Tu nivel</p>
            <p className="font-bold">{cfg.nombre}</p>
          </div>
          <button type="button" onClick={() => setNivel(null)} className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[13px] font-semibold" style={{ background: 'var(--color-surface-2)', color: 'var(--color-ink-2)' }}>
            <RotateCcw size={14} aria-hidden /> Revalorar
          </button>
        </div>
      )}

      <div className="mb-1 grid grid-cols-4 gap-2" role="group" aria-label="Semana del programa">
        {[1, 2, 3, 4].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setSemana(n)}
            aria-pressed={semana === n}
            className="pressable rounded-2xl py-2.5 text-center"
            style={{
              background: semana === n ? 'var(--color-plum)' : 'var(--color-surface)',
              color: semana === n ? '#fff' : 'var(--color-ink)',
              border: '1px solid var(--color-line)',
            }}
          >
            <span className="block text-[11px] font-bold uppercase tracking-wide opacity-75">Semana</span>
            <span className="font-display block text-[26px] leading-none">{n}</span>
          </button>
        ))}
      </div>
      {diasFaltan != null && diasFaltan > 0 && (
        <p className="mb-2 text-[13px]" style={{ color: 'var(--color-ink-3)' }}>
          {diasFaltan > 28 ? `Faltan ${diasFaltan} días: empieza ya y repite la semana 4 hasta la cirugía.` : `Faltan ${diasFaltan} días para tu cirugía.`}
        </p>
      )}

      <div role="tablist" className="glass sticky top-16 z-30 -mx-4 mt-3 flex gap-1 px-4 py-2">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            aria-selected={tab === t.id}
            onClick={() => setParams({ tab: t.id }, { replace: true })}
            className="flex-1 rounded-full py-2.5 text-[14px] font-bold"
            style={{ background: tab === t.id ? 'var(--color-ink)' : 'transparent', color: tab === t.id ? '#fff' : 'var(--color-ink-2)' }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {tab === 'ejercicio' && nivel && <TabEjercicio nivel={nivel} semana={semana} />}
        {tab === 'nutricion' && <TabNutricion semana={semana} />}
        {tab === 'mente' && <TabMente semana={semana} />}
        {tab === 'checklist' && <ChecklistEras />}
      </div>

      <Disclaimer />
    </div>
  )
}
