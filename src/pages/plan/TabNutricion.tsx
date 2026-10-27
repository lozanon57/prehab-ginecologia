import { AlertTriangle, Scale } from 'lucide-react'
import { useApp } from '../../store'
import { ALIMENTOS_PROTEICOS, CRIBADO, PLATO, SEMANAS_NUTRICION, objetivoProteina } from '../../data/prehab/planNutricion'
import { CheckRow, IconBadge } from '../../components/ui'

const PESO_MIN = 30
const PESO_MAX = 250

export function TabNutricion({ semana }: { semana: number }) {
  const { peso, setPeso, cribado, setCribado, hechos, toggle } = useApp()
  const foco = SEMANAS_NUTRICION[semana - 1]
  const pesoValido = peso != null && peso >= PESO_MIN && peso <= PESO_MAX
  const obj = pesoValido ? objetivoProteina(peso) : null
  const enRiesgo = CRIBADO.some((q) => cribado[q.id])

  return (
    <div className="space-y-6">
      <section className="rounded-[22px] p-5" style={{ background: 'var(--color-sage-bg)' }}>
        <div className="flex items-start gap-3">
          <IconBadge icon={foco.icono} color="var(--color-sage)" bg="#fff" size={46} />
          <div>
            <p className="eyebrow" style={{ color: 'var(--color-sage)' }}>Foco de la semana {semana}</p>
            <h2 className="font-display text-[28px] leading-tight">{foco.titulo}</h2>
          </div>
        </div>
        <p className="mt-2 text-[15px]" style={{ color: 'var(--color-ink-2)' }}>{foco.porQue}</p>
        <div className="mt-3 space-y-2">
          {foco.acciones.map((a, i) => (
            <CheckRow key={a} checked={!!hechos[`nu:s${semana}:${i}`]} onToggle={() => toggle(`nu:s${semana}:${i}`)} icon={foco.icono} title={`Acción ${i + 1}`} text={a} />
          ))}
        </div>
      </section>

      <section className="card p-5">
        <h3 className="font-display text-[26px] leading-tight">¿Cuánta proteína necesito?</h3>
        <label className="mt-3 flex items-center gap-3 rounded-2xl px-4 py-3" style={{ background: 'var(--color-surface-2)' }}>
          <Scale size={20} style={{ color: 'var(--color-sage)' }} aria-hidden />
          <span className="flex-1 text-[15px] font-semibold">Tu peso</span>
          <input
            type="number"
            inputMode="decimal"
            min={PESO_MIN}
            max={PESO_MAX}
            value={peso ?? ''}
            onChange={(e) => setPeso(e.target.value ? Number(e.target.value) : null)}
            className="w-20 rounded-xl border-0 bg-white px-3 py-2 text-right text-[16px] font-bold"
            style={{ fontFamily: 'inherit' }}
            aria-label="Peso en kilos"
          />
          <span className="text-[14px] font-semibold" style={{ color: 'var(--color-ink-2)' }}>kg</span>
        </label>
        {peso != null && !pesoValido && (
          <p className="mt-2 text-[13px]" style={{ color: 'var(--color-alert)' }}>Introduce un peso entre {PESO_MIN} y {PESO_MAX} kg.</p>
        )}
        {obj && (
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <div className="rounded-2xl p-4" style={{ background: 'var(--color-sage-bg)' }}>
              <p className="text-[12px] font-bold uppercase tracking-wide" style={{ color: 'var(--color-ink-3)' }}>Al día</p>
              <p className="font-display text-[36px] leading-none" style={{ color: 'var(--color-sage)' }}>{obj.min}–{obj.max} g</p>
            </div>
            <div className="rounded-2xl p-4" style={{ background: 'var(--color-sage-bg)' }}>
              <p className="text-[12px] font-bold uppercase tracking-wide" style={{ color: 'var(--color-ink-3)' }}>Por comida (×4)</p>
              <p className="font-display text-[36px] leading-none" style={{ color: 'var(--color-sage)' }}>~{obj.porComida} g</p>
            </div>
          </div>
        )}
        <p className="mt-4 mb-2 text-[14px] font-bold">Equivalencias aproximadas</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {ALIMENTOS_PROTEICOS.map((a) => (
            <div key={a.nombre} className="flex items-center gap-2.5 rounded-2xl p-2.5" style={{ border: '1px solid var(--color-line)' }}>
              <a.icono size={20} className="shrink-0" style={{ color: 'var(--color-sage)' }} aria-hidden />
              <div className="min-w-0">
                <p className="text-[13px] font-bold leading-tight">{a.nombre}</p>
                <p className="text-[12px]" style={{ color: 'var(--color-ink-3)' }}>{a.racion} · {a.proteina} g</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-5">
        <h3 className="font-display text-[26px] leading-tight">Cribado nutricional</h3>
        <p className="mt-1 text-[14px]" style={{ color: 'var(--color-ink-2)' }}>Responde con sinceridad: detectar a tiempo la desnutrición cambia el pronóstico.</p>
        <div className="mt-3 space-y-2">
          {CRIBADO.map((q) => (
            <div key={q.id} className="rounded-2xl p-3" style={{ background: 'var(--color-surface-2)' }}>
              <p className="text-[14px] font-semibold">{q.texto}</p>
              <div className="mt-2 flex gap-2">
                {[true, false].map((v) => (
                  <button
                    key={String(v)}
                    type="button"
                    onClick={() => setCribado(q.id, v)}
                    aria-pressed={cribado[q.id] === v}
                    className="flex-1 rounded-xl py-2 text-[14px] font-bold"
                    style={{ background: cribado[q.id] === v ? (v ? 'var(--color-warn)' : 'var(--color-ok)') : '#fff', color: cribado[q.id] === v ? '#fff' : 'var(--color-ink-2)' }}
                  >
                    {v ? 'Sí' : 'No'}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        {enRiesgo && (
          <p className="mt-3 flex gap-2.5 rounded-2xl p-3 text-[14px]" style={{ background: 'var(--color-warn-bg)', color: 'var(--color-ink)' }}>
            <AlertTriangle size={20} className="shrink-0" style={{ color: 'var(--color-warn)' }} aria-hidden />
            Puede que necesites una valoración nutricional y suplementos orales antes de la cirugía. Coméntalo con tu equipo en la
            próxima consulta.
          </p>
        )}
      </section>

      <section>
        <h3 className="font-display mb-3 text-[26px]">El plato equilibrado</h3>
        <div className="grid grid-cols-2 gap-2.5">
          {PLATO.map((p) => (
            <div key={p.parte} className="card p-4">
              <p.icono size={20} style={{ color: 'var(--color-sage)' }} aria-hidden />
              <p className="mt-2 text-[12px] font-bold uppercase tracking-wide" style={{ color: 'var(--color-ink-3)' }}>{p.parte}</p>
              <p className="text-[14px] font-semibold">{p.texto}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
