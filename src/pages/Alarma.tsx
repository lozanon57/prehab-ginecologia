import { Link } from 'react-router-dom'
import { Phone, Siren, ArrowRight } from 'lucide-react'
import { SENALES_ALARMA } from '../data/alarma'
import { CONFIG } from '../config'
import { useApp } from '../store'
import { getCirugia } from '../data/cirugias'
import { Disclaimer } from '../components/ui'

export function Alarma() {
  const { cirugiaId } = useApp()
  const c = getCirugia(cirugiaId)
  const emergencias = SENALES_ALARMA.filter((s) => s.emergencia)
  const resto = SENALES_ALARMA.filter((s) => !s.emergencia)

  return (
    <div className="fade-in space-y-6">
      <header className="rounded-[26px] p-6" style={{ background: 'var(--color-alert)', color: '#fff' }}>
        <Siren size={32} aria-hidden />
        <h1 className="font-display mt-2 text-[38px] leading-tight">Señales de alarma</h1>
        <p className="mt-1 text-[15px] opacity-90">Si notas alguno de estos síntomas, no esperes a la revisión.</p>
        <a href={`tel:${CONFIG.emergencias}`} className="pressable mt-4 flex h-14 items-center justify-center gap-2 rounded-2xl text-[18px] font-extrabold no-underline" style={{ background: '#fff', color: 'var(--color-alert)' }}>
          <Phone size={20} aria-hidden /> Llamar al {CONFIG.emergencias}
        </a>
        {CONFIG.telefonoServicio && (
          <a href={`tel:${CONFIG.telefonoServicio}`} className="mt-2 flex h-12 items-center justify-center gap-2 rounded-2xl font-bold no-underline" style={{ background: 'rgba(255,255,255,.15)', color: '#fff' }}>
            <Phone size={18} aria-hidden /> Llamar al servicio
          </a>
        )}
      </header>

      <section>
        <h2 className="mb-2.5 text-[17px] font-bold" style={{ color: 'var(--color-alert)' }}>Llama al {CONFIG.emergencias} o acude a Urgencias</h2>
        <div className="space-y-2.5">
          {emergencias.map((s) => <SenalCard key={s.titulo} {...s} fuerte />)}
        </div>
      </section>

      <section>
        <h2 className="mb-2.5 text-[17px] font-bold">Consulta el mismo día con tu equipo o en Urgencias</h2>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {resto.map((s) => <SenalCard key={s.titulo} {...s} />)}
        </div>
      </section>

      {c && (
        <Link to={`/cirugia/${c.id}?tab=alarma`} className="card pressable flex items-center justify-between gap-3 p-4 no-underline" style={{ color: 'var(--color-ink)' }}>
          <span><span className="block text-[13px]" style={{ color: 'var(--color-ink-3)' }}>Específico de tu cirugía</span><span className="font-bold">{c.nombre}</span></span>
          <ArrowRight size={18} aria-hidden />
        </Link>
      )}

      <Disclaimer />
    </div>
  )
}

interface SenalCardProps {
  icono: typeof Siren
  titulo: string
  texto: string
  fuerte?: boolean
}

function SenalCard({ icono: Icon, titulo, texto, fuerte = false }: SenalCardProps) {
  return (
    <div className="card flex gap-3 p-4" style={fuerte ? { borderColor: 'var(--color-alert)', background: 'var(--color-alert-bg)' } : undefined}>
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl" style={{ background: fuerte ? '#fff' : 'var(--color-alert-bg)', color: 'var(--color-alert)' }} aria-hidden>
        <Icon size={20} />
      </span>
      <div>
        <p className="font-bold">{titulo}</p>
        <p className="text-[14px]" style={{ color: 'var(--color-ink-2)' }}>{texto}</p>
      </div>
    </div>
  )
}
