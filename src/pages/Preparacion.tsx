import { ETAPAS_PREP, PRINCIPIOS_ERAS } from '../data/preparacion'
import { useApp } from '../store'
import { CheckRow, ProgressRing } from '../components/ui'
import { FastingCalculator } from '../components/fechas'
import { diaRelativo } from '../lib/fechas'

/** Checklist ERAS por etapas, mostrado como pestaña de Mi plan. */
export function ChecklistEras() {
  const { hechos, toggle, fechaCirugia } = useApp()
  const todas = ETAPAS_PREP.flatMap((e) => e.tareas)
  const completas = todas.filter((t) => hechos[`prep:${t.id}`]).length
  const diasFaltan = fechaCirugia ? -diaRelativo(fechaCirugia) : null

  return (
    <div className="fade-in space-y-7">
      <header>
        <p className="eyebrow" style={{ color: 'var(--color-plum)' }}>Programa ERAS</p>
        <h2 className="font-display text-[32px] leading-tight">Checklist de preparación</h2>
        <p className="mt-2 text-[15px]" style={{ color: 'var(--color-ink-2)' }}>
          ERAS (recuperación intensificada) es un conjunto de medidas, avaladas por la evidencia, que reducen complicaciones y
          acortan la recuperación. Tú eres parte activa del equipo.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-2.5">
        {PRINCIPIOS_ERAS.map((p, i) => (
          <div key={p.titulo} className="card p-4">
            <p className="font-display text-[30px] leading-none" style={{ color: 'var(--color-blush)', WebkitTextStroke: '1px var(--color-plum)' }}>0{i + 1}</p>
            <p className="mt-2 font-bold leading-tight">{p.titulo}</p>
            <p className="mt-1 text-[13px]" style={{ color: 'var(--color-ink-2)' }}>{p.texto}</p>
          </div>
        ))}
      </div>

      <div className="card flex items-center gap-4 p-5">
        <ProgressRing value={completas / todas.length} size={72} label={`${completas} de ${todas.length} tareas`} />
        <div>
          <p className="text-[17px] font-bold">Tu checklist de preparación</p>
          <p className="text-[14px]" style={{ color: 'var(--color-ink-2)' }}>
            {completas} de {todas.length} tareas completadas
            {diasFaltan != null && diasFaltan > 0 ? ` · faltan ${diasFaltan} días` : ''}
          </p>
        </div>
      </div>

      {ETAPAS_PREP.map((etapa) => {
        const activa = diasFaltan != null && diasFaltan >= 0 && diasFaltan <= etapa.desdeDias
        return (
          <section key={etapa.id}>
            <p className="eyebrow" style={{ color: activa ? 'var(--color-plum)' : 'var(--color-ink-3)' }}>{etapa.cuando}</p>
            <h2 className="font-display mb-3 text-[28px] leading-tight">{etapa.titulo}</h2>
            {etapa.id === 'dia' && <div className="mb-3"><FastingCalculator /></div>}
            <div className="space-y-2">
              {etapa.tareas.map((t) => (
                <CheckRow key={t.id} checked={!!hechos[`prep:${t.id}`]} onToggle={() => toggle(`prep:${t.id}`)} icon={t.icono} title={t.titulo} text={t.texto} />
              ))}
            </div>
          </section>
        )
      })}

    </div>
  )
}
