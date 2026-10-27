import { useSearchParams } from 'react-router-dom'
import { Lightbulb } from 'lucide-react'
import { PROGRAMAS } from '../data/ejercicios'
import { IconBadge, Disclaimer } from '../components/ui'
import type { ProgramaEjercicioId } from '../types'

export function Ejercicios() {
  const [params, setParams] = useSearchParams()
  const id = (params.get('p') as ProgramaEjercicioId | null) ?? 'prehab'
  const prog = PROGRAMAS.find((p) => p.id === id) ?? PROGRAMAS[0]

  return (
    <div className="fade-in">
      <h1 className="font-display text-[40px] leading-tight">Ejercicios</h1>
      <p className="mb-4 text-[15px]" style={{ color: 'var(--color-ink-2)' }}>Elige el programa que te corresponde.</p>

      <div className="scroll-x -mx-4 mb-5 flex gap-2 px-4" role="tablist">
        {PROGRAMAS.map((p) => {
          const on = p.id === prog.id
          return (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setParams({ p: p.id }, { replace: true })}
              className="chip pressable"
              style={{ background: on ? p.color : 'var(--color-surface)', color: on ? '#fff' : 'var(--color-ink-2)', border: '1px solid var(--color-line)', padding: '9px 14px' }}
            >
              <p.icono size={16} aria-hidden /> {p.nombre}
            </button>
          )
        })}
      </div>

      <header className="card-soft mb-5 flex gap-4 p-5" style={{ background: prog.fondo }}>
        <IconBadge icon={prog.icono} color={prog.color} bg="#fff" size={52} />
        <div>
          <p className="eyebrow" style={{ color: prog.color }}>{prog.para}</p>
          <h2 className="font-display text-[30px] leading-tight">{prog.nombre}</h2>
          <p className="mt-1 text-[15px]" style={{ color: 'var(--color-ink-2)' }}>{prog.intro}</p>
        </div>
      </header>

      <div className="space-y-6">
        {prog.fases.map((f, i) => (
          <section key={f.titulo}>
            <div className="mb-2.5 flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[14px] font-bold" style={{ background: prog.color, color: '#fff' }}>{i + 1}</span>
              <div>
                <h3 className="text-[17px] font-bold leading-tight">{f.titulo}</h3>
                <p className="text-[13px]" style={{ color: 'var(--color-ink-3)' }}>{f.cuando}</p>
              </div>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {f.ejercicios.map((e) => (
                <div key={e.nombre} className="card p-4">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-bold leading-snug">{e.nombre}</p>
                    <span className="chip" style={{ background: prog.fondo, color: prog.color, padding: '3px 10px', fontSize: 12 }}>{e.pauta}</span>
                  </div>
                  <p className="mt-1.5 text-[14px]" style={{ color: 'var(--color-ink-2)' }}>{e.como}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {prog.nota && (
        <p className="mt-5 flex gap-2.5 rounded-2xl p-4 text-[14px]" style={{ background: 'var(--color-warn-bg)', color: 'var(--color-ink-2)' }}>
          <Lightbulb size={20} className="shrink-0" style={{ color: 'var(--color-warn)' }} aria-hidden />
          {prog.nota}
        </p>
      )}

      <p className="mt-4 text-[13px]" style={{ color: 'var(--color-ink-3)' }}>
        Para si notas dolor intenso, mareo o falta de aire. Ante cualquier duda, consulta con tu equipo.
      </p>
      <Disclaimer />
    </div>
  )
}
