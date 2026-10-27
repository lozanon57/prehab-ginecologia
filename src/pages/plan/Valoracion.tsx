import { useState } from 'react'
import { ArrowLeft, Dumbbell, Salad, Brain, ArrowRight } from 'lucide-react'
import { PREGUNTAS, NIVELES, calcularNivel } from '../../data/prehab/valoracion'
import type { Nivel } from '../../data/prehab/valoracion'
import { IconBadge } from '../../components/ui'

const PILARES = [
  { icono: Dumbbell, titulo: 'Ejercicio', texto: 'Aeróbico y fuerza, adaptado a tu forma física.', color: 'var(--color-sky)', fondo: 'var(--color-sky-bg)' },
  { icono: Salad, titulo: 'Nutrición', texto: 'Proteína, hierro y un intestino a punto.', color: 'var(--color-sage)', fondo: 'var(--color-sage-bg)' },
  { icono: Brain, titulo: 'Mente', texto: 'Mindfulness y counselling para llegar serena.', color: 'var(--color-lilac)', fondo: 'var(--color-lilac-bg)' },
]

interface ValoracionProps {
  onFin: (nivel: Nivel) => void
}

export function Valoracion({ onFin }: ValoracionProps) {
  const [paso, setPaso] = useState(0)
  const [respuestas, setRespuestas] = useState<number[]>([])

  if (paso === 0) {
    return (
      <div className="fade-in space-y-5">
        <header>
          <p className="eyebrow" style={{ color: 'var(--color-plum)' }}>Prehabilitación · 4 semanas</p>
          <h1 className="font-display text-[40px] leading-tight">Tu plan personalizado</h1>
          <p className="mt-2 text-[15px]" style={{ color: 'var(--color-ink-2)' }}>
            Un programa de cuatro semanas que combina ejercicio, nutrición y bienestar emocional. Responde tres preguntas
            sobre tu actividad habitual y lo adaptaremos a tu punto de partida.
          </p>
        </header>
        <div className="grid gap-2.5 sm:grid-cols-3">
          {PILARES.map((p) => (
            <div key={p.titulo} className="card flex gap-3 p-4 sm:flex-col">
              <IconBadge icon={p.icono} color={p.color} bg={p.fondo} size={42} />
              <div>
                <p className="font-bold">{p.titulo}</p>
                <p className="text-[14px]" style={{ color: 'var(--color-ink-2)' }}>{p.texto}</p>
              </div>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => setPaso(1)} className="pressable flex h-14 w-full items-center justify-center gap-2 rounded-2xl text-[17px] font-bold" style={{ background: 'var(--color-plum)', color: '#fff' }}>
          Empezar valoración <ArrowRight size={18} aria-hidden />
        </button>
        <p className="text-center text-[13px]" style={{ color: 'var(--color-ink-3)' }}>Menos de un minuto · se guarda solo en tu dispositivo</p>
      </div>
    )
  }

  if (paso <= PREGUNTAS.length) {
    const q = PREGUNTAS[paso - 1]
    const responder = (valor: number) => {
      const nuevas = [...respuestas.slice(0, paso - 1), valor]
      setRespuestas(nuevas)
      setPaso(paso + 1)
    }
    return (
      <div className="fade-in" key={paso}>
        <button type="button" onClick={() => setPaso(paso - 1)} className="mb-4 inline-flex items-center gap-1.5 text-[14px] font-semibold" style={{ color: 'var(--color-ink-2)' }}>
          <ArrowLeft size={16} aria-hidden /> Atrás
        </button>
        <div className="mb-5 flex gap-1.5" aria-hidden>
          {PREGUNTAS.map((_, i) => (
            <span key={i} className="h-1.5 flex-1 rounded-full" style={{ background: i < paso ? 'var(--color-plum)' : 'var(--color-line)' }} />
          ))}
        </div>
        <p className="eyebrow" style={{ color: 'var(--color-ink-3)' }}>Pregunta {paso} de {PREGUNTAS.length}</p>
        <h2 className="font-display mb-5 text-[32px] leading-tight">{q.texto}</h2>
        <div className="space-y-2.5">
          {q.opciones.map((op, i) => (
            <button
              key={op}
              type="button"
              onClick={() => responder(i)}
              className="card pressable flex w-full items-center justify-between gap-3 p-4 text-left text-[16px] font-semibold"
              style={{ borderColor: respuestas[paso - 1] === i ? 'var(--color-plum)' : undefined }}
            >
              {op} <ArrowRight size={18} style={{ color: 'var(--color-ink-3)' }} aria-hidden />
            </button>
          ))}
        </div>
      </div>
    )
  }

  const nivel = calcularNivel(respuestas)
  const cfg = NIVELES[nivel]
  return (
    <div className="fade-in space-y-5 text-center">
      <div className="mx-auto mt-4 w-fit"><IconBadge icon={cfg.icono} color={cfg.color} bg={cfg.fondo} size={84} /></div>
      <p className="eyebrow" style={{ color: cfg.color }}>Tu nivel</p>
      <h2 className="font-display text-[42px] leading-none">{cfg.nombre}</h2>
      <p className="mx-auto max-w-sm text-[15px]" style={{ color: 'var(--color-ink-2)' }}>{cfg.descripcion}</p>
      <button type="button" onClick={() => onFin(nivel)} className="pressable flex h-14 w-full items-center justify-center gap-2 rounded-2xl text-[17px] font-bold" style={{ background: 'var(--color-plum)', color: '#fff' }}>
        Ver mi plan de 4 semanas <ArrowRight size={18} aria-hidden />
      </button>
      <button type="button" onClick={() => { setRespuestas([]); setPaso(1) }} className="text-[14px] font-semibold" style={{ color: 'var(--color-ink-2)' }}>
        Repetir valoración
      </button>
    </div>
  )
}
