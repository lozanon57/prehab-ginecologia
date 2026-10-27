import { Link } from 'react-router-dom'
import { Check, Gauge, Target, ArrowRight, Footprints, Dumbbell, Zap, StretchHorizontal, Coffee } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useApp } from '../../store'
import { NIVELES } from '../../data/prehab/valoracion'
import type { Nivel } from '../../data/prehab/valoracion'
import { planEjercicio, DIAS_SEMANA, TIPO_ESTILO } from '../../data/prehab/planEjercicio'
import type { TipoSesion } from '../../data/prehab/planEjercicio'
import { ProgressRing } from '../../components/ui'

const ICONOS: Record<TipoSesion, LucideIcon> = {
  aerobico: Footprints,
  intervalos: Zap,
  fuerza: Dumbbell,
  flexibilidad: StretchHorizontal,
  descanso: Coffee,
}

interface TabEjercicioProps {
  nivel: Nivel
  semana: number
}

export function TabEjercicio({ nivel, semana }: TabEjercicioProps) {
  const { hechos, toggle } = useApp()
  const plan = planEjercicio(nivel)[semana - 1]
  const cfg = NIVELES[nivel]
  const clave = (i: number) => `ej:s${semana}:d${i}`
  const activos = plan.dias.map((d, i) => ({ d, i })).filter(({ d }) => d.tipo !== 'descanso')
  const hechas = activos.filter(({ i }) => hechos[clave(i)]).length

  return (
    <div className="space-y-4">
      <div className="card flex items-center gap-4 p-4">
        <ProgressRing value={hechas / activos.length} label={`${hechas} de ${activos.length} sesiones`} />
        <div className="flex-1">
          <p className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wide" style={{ color: 'var(--color-plum)' }}>
            <Target size={14} aria-hidden /> Objetivo de la semana {semana}
          </p>
          <p className="text-[15px] font-semibold leading-snug">{plan.objetivo}</p>
          <p className="mt-0.5 text-[13px]" style={{ color: 'var(--color-ink-3)' }}>{hechas} de {activos.length} sesiones hechas</p>
        </div>
      </div>

      <div className="flex gap-3 rounded-2xl p-4" style={{ background: cfg.fondo }}>
        <Gauge size={22} className="shrink-0" style={{ color: cfg.color }} aria-hidden />
        <p className="text-[14px]" style={{ color: 'var(--color-ink-2)' }}>
          <strong style={{ color: 'var(--color-ink)' }}>Intensidad: Borg {cfg.borg[0]}–{cfg.borg[1]}.</strong> {cfg.borgTexto} Si notas dolor
          en el pecho, mareo o falta de aire desproporcionada, para y consulta.
        </p>
      </div>

      <ol className="space-y-2">
        {plan.dias.map((d, i) => {
          const est = TIPO_ESTILO[d.tipo]
          const Icono = ICONOS[d.tipo]
          const hecho = !!hechos[clave(i)]
          const descanso = d.tipo === 'descanso'
          return (
            <li key={i} className="card flex gap-3 p-3.5" style={hecho ? { background: 'var(--color-ok-bg)' } : undefined}>
              <span className="flex w-12 shrink-0 flex-col items-center">
                <span className="text-[11px] font-bold uppercase" style={{ color: 'var(--color-ink-3)' }}>{DIAS_SEMANA[i].slice(0, 3)}</span>
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: est.fondo, color: est.color }} aria-hidden>
                  <Icono size={20} />
                </span>
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <p className="font-bold">{d.titulo}</p>
                  <p className="text-[13px] font-semibold" style={{ color: est.color }}>{d.duracion}</p>
                </div>
                <p className="text-[14px]" style={{ color: 'var(--color-ink-2)' }}>{d.detalle}</p>
              </div>
              {!descanso && (
                <button
                  type="button"
                  onClick={() => toggle(clave(i))}
                  aria-pressed={hecho}
                  aria-label={`${hecho ? 'Desmarcar' : 'Marcar'} ${DIAS_SEMANA[i]}`}
                  className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                  style={{ background: hecho ? 'var(--color-ok)' : 'transparent', border: hecho ? 'none' : '2px solid var(--color-line)', color: '#fff' }}
                >
                  {hecho && <Check size={18} strokeWidth={3} />}
                </button>
              )}
            </li>
          )
        })}
      </ol>

      <Link to="/ejercicios?p=prehab" className="card pressable flex items-center justify-between p-4 font-bold no-underline" style={{ color: 'var(--color-ink)' }}>
        Cómo hacer cada ejercicio de fuerza <ArrowRight size={18} aria-hidden />
      </Link>
    </div>
  )
}
