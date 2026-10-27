import { useEffect, useState } from 'react'
import { Play, Pause } from 'lucide-react'

const INSPIRAR_S = 4
const ESPIRAR_S = 6
const CICLOS = 10

type Fase = 'inspira' | 'espira'

interface Estado {
  activo: boolean
  fase: Fase
  segundos: number
  ciclo: number
}

const INICIAL: Estado = { activo: false, fase: 'inspira', segundos: INSPIRAR_S, ciclo: 0 }

/** Avanza un segundo el temporizador; función pura. */
function avanzar(e: Estado): Estado {
  if (e.segundos > 1) return { ...e, segundos: e.segundos - 1 }
  if (e.fase === 'inspira') return { ...e, fase: 'espira', segundos: ESPIRAR_S }
  const ciclo = e.ciclo + 1
  return { activo: ciclo < CICLOS, fase: 'inspira', segundos: INSPIRAR_S, ciclo }
}

/** Respiración guiada 4–6: círculo que crece al inspirar y se reduce al espirar. */
export function RespiracionGuiada() {
  const [estado, setEstado] = useState<Estado>(INICIAL)
  const { activo, fase, segundos, ciclo } = estado

  useEffect(() => {
    if (!activo) return
    const id = window.setInterval(() => setEstado(avanzar), 1000)
    return () => window.clearInterval(id)
  }, [activo])

  const iniciar = () =>
    setEstado((e) => {
      if (e.activo) return { ...e, activo: false }
      const base = e.ciclo >= CICLOS ? INICIAL : e
      return { ...base, activo: true, fase: 'inspira', segundos: INSPIRAR_S }
    })

  const escala = !activo ? 0.7 : fase === 'inspira' ? 1 : 0.6
  const duracion = fase === 'inspira' ? INSPIRAR_S : ESPIRAR_S

  return (
    <div className="flex flex-col items-center rounded-[22px] p-5" style={{ background: 'var(--color-lilac-bg)' }}>
      <div className="relative flex h-48 w-48 items-center justify-center">
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, #fff 0%, var(--color-blush) 60%, var(--color-lilac) 100%)',
            transform: `scale(${escala})`,
            transition: `transform ${activo ? duracion : 0.4}s ease-in-out`,
            opacity: 0.9,
          }}
          aria-hidden
        />
        <span className="relative text-center" aria-live="polite">
          <span className="font-display block text-[30px] leading-none" style={{ color: 'var(--color-plum-deep)' }}>
            {activo ? (fase === 'inspira' ? 'Inspira' : 'Espira') : ciclo >= CICLOS ? 'Muy bien' : 'Preparada'}
          </span>
          {activo && <span className="mt-1 block text-[22px] font-bold" style={{ color: 'var(--color-plum)' }}>{segundos}</span>}
        </span>
      </div>
      <p className="mt-2 text-[13px] font-semibold" style={{ color: 'var(--color-ink-2)' }}>
        Ciclo {Math.min(ciclo + (activo ? 1 : 0), CICLOS)} de {CICLOS}
      </p>
      <button
        type="button"
        onClick={iniciar}
        className="pressable mt-3 flex h-12 items-center gap-2 rounded-full px-6 font-bold"
        style={{ background: 'var(--color-lilac)', color: '#fff' }}
      >
        {activo ? <><Pause size={18} aria-hidden /> Pausar</> : <><Play size={18} aria-hidden /> {ciclo > 0 && ciclo < CICLOS ? 'Continuar' : 'Empezar'}</>}
      </button>
    </div>
  )
}
