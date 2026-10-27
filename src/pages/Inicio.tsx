import { Link } from 'react-router-dom'
import { ArrowRight, CalendarCheck, HeartPulse, Siren, Dumbbell, Sparkles, RotateCcw } from 'lucide-react'
import { useApp } from '../store'
import { getCirugia, hitoActual } from '../data/cirugias'
import { GRUPOS, getGrupo } from '../data/grupos'
import { ETAPAS_PREP } from '../data/preparacion'
import { diaRelativo, etiquetaDia, formatoFecha } from '../lib/fechas'
import { IconBadge, ProgressRing, Disclaimer } from '../components/ui'
import { ProgramaTag } from '../components/cirugia'
import { DateSetter } from '../components/fechas'
import type { Cirugia } from '../types'

export function Inicio() {
  const { cirugiaId } = useApp()
  const cirugia = getCirugia(cirugiaId)

  return (
    <div className="fade-in space-y-7">
      <section className="hero-grad -mx-4 -mt-5 px-4 pb-6 pt-7">
        <p className="eyebrow" style={{ color: 'var(--color-plum)' }}>Cirugía ginecológica y de mama</p>
        <h1 className="font-display mt-2 text-[44px] leading-[1.02]">
          Tu cirugía,<br /><em>paso a paso.</em>
        </h1>
        <p className="mt-3 max-w-md text-[16px]" style={{ color: 'var(--color-ink-2)' }}>
          Prepárate antes de la operación y recupérate con confianza después, con indicaciones basadas en la evidencia.
        </p>
      </section>

      {cirugia ? <MiCirugia c={cirugia} /> : <Bienvenida />}

      <section>
        <h2 className="font-display mb-3 text-[28px]">Explora por especialidad</h2>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {GRUPOS.map((g) => (
            <Link key={g.id} to={`/cirugias?grupo=${g.id}`} className="card pressable p-4 no-underline" style={{ color: 'var(--color-ink)' }}>
              <IconBadge icon={g.icono} color={g.color} bg={g.fondo} size={40} />
              <p className="mt-3 font-bold leading-tight">{g.nombre}</p>
              <p className="text-[13px]" style={{ color: 'var(--color-ink-2)' }}>{g.descripcion}</p>
            </Link>
          ))}
        </div>
      </section>

      <Link to="/alarma" className="pressable flex items-center gap-3 rounded-[22px] p-4 no-underline" style={{ background: 'var(--color-alert-bg)', color: 'var(--color-alert)' }}>
        <Siren size={26} aria-hidden />
        <span className="flex-1">
          <span className="block font-bold">Señales de alarma</span>
          <span className="block text-[14px]" style={{ color: 'var(--color-ink-2)' }}>Cuándo consultar de forma urgente</span>
        </span>
        <ArrowRight size={20} aria-hidden />
      </Link>

      <Disclaimer />
    </div>
  )
}

function Bienvenida() {
  return (
    <section className="space-y-3">
      <Link to="/cirugias" className="pressable flex items-center gap-4 rounded-[26px] p-5 no-underline" style={{ background: 'var(--color-plum)', color: '#fff' }}>
        <span className="flex-1">
          <span className="eyebrow block" style={{ color: 'var(--color-blush)' }}>Empieza aquí</span>
          <span className="font-display mt-1 block text-[28px] leading-tight">Elige tu cirugía</span>
          <span className="mt-1 block text-[14px] opacity-85">Verás tu preparación, tu recuperación día a día y tus cuidados.</span>
        </span>
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full" style={{ background: 'rgba(255,255,255,.15)' }}>
          <ArrowRight size={22} aria-hidden />
        </span>
      </Link>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="card p-4">
          <IconBadge icon={Sparkles} color="var(--color-plum)" bg="var(--color-plum-soft)" size={38} />
          <p className="mt-3 font-bold">Programa ERAS</p>
          <p className="text-[14px]" style={{ color: 'var(--color-ink-2)' }}>
            Para cirugía mayor: histerectomía, cáncer ginecológico, mama, miomas y endometriosis. Incluye preparación previa.
          </p>
        </div>
        <div className="card p-4">
          <IconBadge icon={HeartPulse} color="var(--color-sage)" bg="var(--color-sage-bg)" size={38} />
          <p className="mt-3 font-bold">Cuidados postoperatorios</p>
          <p className="text-[14px]" style={{ color: 'var(--color-ink-2)' }}>
            Para suelo pélvico y cirugía ambulatoria: prolapso, TOT, conización, legrado e histeroscopia.
          </p>
        </div>
      </div>
    </section>
  )
}

function MiCirugia({ c }: { c: Cirugia }) {
  const { fechaCirugia, hechos, setCirugia } = useApp()
  const g = getGrupo(c.grupo)
  const dia = fechaCirugia ? diaRelativo(fechaCirugia) : null

  return (
    <section className="space-y-3">
      <div className="card p-5">
        <div className="flex items-start gap-3">
          <IconBadge icon={c.icono} color={g.color} bg={g.fondo} size={48} />
          <div className="min-w-0 flex-1">
            <p className="eyebrow" style={{ color: 'var(--color-ink-3)' }}>Mi cirugía</p>
            <h2 className="text-[19px] font-bold leading-snug">{c.nombre}</h2>
            <div className="mt-1.5"><ProgramaTag programa={c.programa} /></div>
          </div>
          <button type="button" onClick={() => setCirugia(null)} className="inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ background: 'var(--color-surface-2)', color: 'var(--color-ink-2)' }} aria-label="Cambiar de cirugía">
            <RotateCcw size={17} />
          </button>
        </div>
        <div className="mt-4"><DateSetter /></div>
        {dia != null && fechaCirugia && (
          <div className="mt-4">
            <p className="font-display text-[30px] leading-none" style={{ color: 'var(--color-plum)' }}>{etiquetaDia(dia)}</p>
            <p className="mt-1 text-[13px]" style={{ color: 'var(--color-ink-3)' }}>{formatoFecha(fechaCirugia)}</p>
          </div>
        )}
      </div>

      {dia != null && dia < 0 && c.programa === 'eras' && <HoyPreparacion dias={-dia} hechos={hechos} />}
      {dia != null && dia < 0 && c.programa === 'postop' && (
        <HoyCard titulo="Antes de tu cirugía" texto="Revisa las indicaciones de ayuno y lo que debes llevar. Ven acompañada: no podrás conducir de vuelta." to={`/cirugia/${c.id}`} cta="Ver indicaciones" />
      )}
      {dia != null && dia >= 0 && <HoyRecuperacion c={c} dia={dia} />}

      <div className="grid grid-cols-3 gap-2.5">
        <QuickLink to={`/cirugia/${c.id}`} icon={HeartPulse} label="Mi guía" />
        <QuickLink to={c.programa === 'eras' ? '/preparacion' : `/cirugia/${c.id}`} icon={CalendarCheck} label="Preparación" />
        <QuickLink to={`/ejercicios${c.ejercicios?.length ? `?p=${c.ejercicios[c.ejercicios.length - 1]}` : ''}`} icon={Dumbbell} label="Ejercicios" />
      </div>
    </section>
  )
}

function HoyPreparacion({ dias, hechos }: { dias: number; hechos: Record<string, boolean> }) {
  const etapa = [...ETAPAS_PREP].reverse().find((e) => dias <= e.desdeDias) ?? ETAPAS_PREP[0]
  const total = ETAPAS_PREP.flatMap((e) => e.tareas)
  const completas = total.filter((t) => hechos[`prep:${t.id}`]).length
  return (
    <Link to="/preparacion" className="card pressable flex items-center gap-4 p-5 no-underline" style={{ color: 'var(--color-ink)' }}>
      <ProgressRing value={completas / total.length} label={`${completas} de ${total.length} tareas completadas`} />
      <span className="flex-1">
        <span className="eyebrow block" style={{ color: 'var(--color-plum)' }}>Ahora toca · {etapa.cuando}</span>
        <span className="mt-0.5 block text-[17px] font-bold">{etapa.titulo}</span>
        <span className="block text-[14px]" style={{ color: 'var(--color-ink-2)' }}>{completas} de {total.length} tareas de preparación hechas</span>
      </span>
      <ArrowRight size={20} style={{ color: 'var(--color-ink-3)' }} aria-hidden />
    </Link>
  )
}

function HoyRecuperacion({ c, dia }: { c: Cirugia; dia: number }) {
  const h = hitoActual(c, dia)
  return (
    <div className="card p-5" style={{ background: 'linear-gradient(160deg, var(--color-plum-soft), #fff 70%)' }}>
      <p className="eyebrow" style={{ color: 'var(--color-plum)' }}>Tu recuperación hoy</p>
      <h3 className="mt-0.5 text-[19px] font-bold">{h.titulo}</h3>
      <ul className="mt-2 space-y-1.5">
        {h.items.map((it) => (
          <li key={it} className="flex gap-2 text-[15px]" style={{ color: 'var(--color-ink-2)' }}>
            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--color-plum)' }} aria-hidden />{it}
          </li>
        ))}
      </ul>
      <Link to={`/cirugia/${c.id}?tab=recuperacion`} className="mt-3 inline-flex items-center gap-1 text-[14px] font-bold no-underline" style={{ color: 'var(--color-plum)' }}>
        Ver todo el recorrido <ArrowRight size={16} aria-hidden />
      </Link>
    </div>
  )
}

interface HoyCardProps { titulo: string; texto: string; to: string; cta: string }

function HoyCard({ titulo, texto, to, cta }: HoyCardProps) {
  return (
    <div className="card p-5">
      <h3 className="text-[17px] font-bold">{titulo}</h3>
      <p className="mt-1 text-[15px]" style={{ color: 'var(--color-ink-2)' }}>{texto}</p>
      <Link to={to} className="mt-3 inline-flex items-center gap-1 text-[14px] font-bold no-underline" style={{ color: 'var(--color-plum)' }}>
        {cta} <ArrowRight size={16} aria-hidden />
      </Link>
    </div>
  )
}

function QuickLink({ to, icon: Icon, label }: { to: string; icon: typeof HeartPulse; label: string }) {
  return (
    <Link to={to} className="card pressable flex flex-col items-center gap-1.5 p-3.5 no-underline" style={{ color: 'var(--color-plum)' }}>
      <Icon size={22} aria-hidden />
      <span className="text-[13px] font-bold" style={{ color: 'var(--color-ink)' }}>{label}</span>
    </Link>
  )
}
