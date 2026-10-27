import { MessageCircleHeart, Sparkle, Thermometer, HeartHandshake } from 'lucide-react'
import { useApp } from '../../store'
import { SEMANAS_MENTE, UMBRAL_MALESTAR } from '../../data/prehab/planMente'
import { DIAS_SEMANA } from '../../data/prehab/planEjercicio'
import { RespiracionGuiada } from '../../components/Respiracion'
import { IconBadge } from '../../components/ui'

export function TabMente({ semana }: { semana: number }) {
  const { hechos, toggle, malestar, setMalestar } = useApp()
  const s = SEMANAS_MENTE[semana - 1]
  const valor = malestar[semana]
  const clave = (i: number) => `me:s${semana}:d${i}`
  const practicados = DIAS_SEMANA.filter((_, i) => hechos[clave(i)]).length

  return (
    <div className="space-y-6">
      <section className="card p-5">
        <h3 className="flex items-center gap-2 text-[17px] font-bold">
          <Thermometer size={20} style={{ color: 'var(--color-lilac)' }} aria-hidden /> ¿Cuánto malestar emocional has sentido esta semana?
        </h3>
        <p className="mt-1 text-[13px]" style={{ color: 'var(--color-ink-3)' }}>0 = ninguno · 10 = extremo</p>
        <div className="mt-3 grid grid-cols-11 gap-1" role="radiogroup" aria-label="Termómetro de malestar">
          {Array.from({ length: 11 }, (_, n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={valor === n}
              onClick={() => setMalestar(semana, n)}
              className="aspect-square rounded-lg text-[13px] font-bold"
              style={{
                background: valor === n ? (n >= UMBRAL_MALESTAR ? 'var(--color-warn)' : 'var(--color-lilac)') : 'var(--color-surface-2)',
                color: valor === n ? '#fff' : 'var(--color-ink-2)',
              }}
            >
              {n}
            </button>
          ))}
        </div>
        {valor != null && (
          <p
            className="mt-3 flex gap-2.5 rounded-2xl p-3 text-[14px]"
            style={{ background: valor >= UMBRAL_MALESTAR ? 'var(--color-warn-bg)' : 'var(--color-ok-bg)' }}
          >
            <HeartHandshake size={20} className="shrink-0" style={{ color: valor >= UMBRAL_MALESTAR ? 'var(--color-warn)' : 'var(--color-ok)' }} aria-hidden />
            {valor >= UMBRAL_MALESTAR
              ? 'Una puntuación de 4 o más indica un malestar que merece atención. Coméntalo con tu equipo: pueden ofrecerte apoyo psicológico especializado.'
              : 'Bien. Sigue con tus prácticas: ayudan a mantener la calma hasta la cirugía.'}
          </p>
        )}
      </section>

      <section className="rounded-[22px] p-5" style={{ background: 'var(--color-lilac-bg)' }}>
        <div className="flex items-start gap-3">
          <IconBadge icon={s.icono} color="var(--color-lilac)" bg="#fff" size={46} />
          <div>
            <p className="eyebrow" style={{ color: 'var(--color-lilac)' }}>Semana {semana}</p>
            <h2 className="font-display text-[30px] leading-tight">{s.titulo}</h2>
          </div>
        </div>
        <p className="mt-2 text-[15px]" style={{ color: 'var(--color-ink-2)' }}>{s.intro}</p>
      </section>

      <section className="card p-5">
        <p className="eyebrow" style={{ color: 'var(--color-lilac)' }}>Práctica de mindfulness · {s.practica.duracion}</p>
        <h3 className="font-display text-[26px] leading-tight">{s.practica.nombre}</h3>
        <ol className="mt-3 space-y-2.5">
          {s.practica.pasos.map((p, i) => (
            <li key={p} className="flex gap-3 text-[15px]">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px] font-bold" style={{ background: 'var(--color-lilac-bg)', color: 'var(--color-lilac)' }}>{i + 1}</span>
              <span style={{ color: 'var(--color-ink-2)' }}>{p}</span>
            </li>
          ))}
        </ol>
        {s.practica.guiada && <div className="mt-4"><RespiracionGuiada /></div>}
        <p className="mt-4 mb-2 text-[13px] font-bold" style={{ color: 'var(--color-ink-2)' }}>Días practicados: {practicados} de 7</p>
        <div className="grid grid-cols-7 gap-1.5">
          {DIAS_SEMANA.map((d, i) => {
            const on = !!hechos[clave(i)]
            return (
              <button
                key={d}
                type="button"
                onClick={() => toggle(clave(i))}
                aria-pressed={on}
                aria-label={`Práctica del ${d}`}
                className="rounded-xl py-2 text-[12px] font-bold"
                style={{ background: on ? 'var(--color-lilac)' : 'var(--color-surface-2)', color: on ? '#fff' : 'var(--color-ink-3)' }}
              >
                {d.slice(0, 2)}
              </button>
            )
          })}
        </div>
      </section>

      <section className="card p-5">
        <p className="eyebrow flex items-center gap-1.5" style={{ color: 'var(--color-plum)' }}>
          <MessageCircleHeart size={14} aria-hidden /> Counselling
        </p>
        <h3 className="font-display text-[26px] leading-tight">{s.conversacion.tema}</h3>
        <p className="mt-1 text-[15px]" style={{ color: 'var(--color-ink-2)' }}>{s.conversacion.texto}</p>
        <p className="mt-3 mb-2 text-[14px] font-bold">Para reflexionar o hablar:</p>
        <ul className="space-y-2">
          {s.conversacion.preguntas.map((q) => (
            <li key={q} className="rounded-2xl p-3 text-[15px] italic" style={{ background: 'var(--color-plum-soft)', color: 'var(--color-plum-deep)' }}>{q}</li>
          ))}
        </ul>
      </section>

      <section className="flex gap-3 rounded-[22px] p-4" style={{ background: 'var(--color-warn-bg)' }}>
        <Sparkle size={22} className="shrink-0" style={{ color: 'var(--color-warn)' }} aria-hidden />
        <p className="text-[15px]"><strong>Microhábito:</strong> {s.microhabito}</p>
      </section>
    </div>
  )
}
