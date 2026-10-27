import { CalendarDays, Clock, Utensils, GlassWater } from 'lucide-react'
import { useApp } from '../store'
import { restarHoras } from '../lib/fechas'

export function DateSetter() {
  const { fechaCirugia, setFecha } = useApp()
  return (
    <label className="flex items-center gap-3 rounded-2xl px-4 py-3" style={{ background: 'var(--color-surface-2)' }}>
      <CalendarDays size={20} style={{ color: 'var(--color-plum)' }} aria-hidden />
      <span className="flex-1 text-[14px] font-semibold">Fecha de cirugía</span>
      <input
        type="date"
        value={fechaCirugia ?? ''}
        onChange={(e) => setFecha(e.target.value || null)}
        className="rounded-xl border-0 bg-white px-3 py-2 text-[15px] font-semibold"
        style={{ color: 'var(--color-ink)', fontFamily: 'inherit' }}
      />
    </label>
  )
}

export function FastingCalculator() {
  const { horaCirugia, setHora } = useApp()
  const solidos = horaCirugia ? restarHoras(horaCirugia, 6) : null
  const liquidos = horaCirugia ? restarHoras(horaCirugia, 2) : null

  return (
    <div className="card overflow-hidden">
      <label className="flex items-center gap-3 p-4" style={{ background: 'var(--color-sky-bg)' }}>
        <Clock size={20} style={{ color: 'var(--color-sky)' }} aria-hidden />
        <span className="flex-1 text-[15px] font-semibold">¿A qué hora te citan para la cirugía?</span>
        <input
          type="time"
          value={horaCirugia ?? ''}
          onChange={(e) => setHora(e.target.value || null)}
          className="rounded-xl border-0 bg-white px-3 py-2 text-[15px] font-semibold"
          style={{ fontFamily: 'inherit' }}
        />
      </label>
      <div className="grid grid-cols-2 divide-x" style={{ borderColor: 'var(--color-line)' }}>
        <FastTile icon={Utensils} label="Última comida" value={solidos?.hora} note={solidos?.diaAnterior ? 'día anterior' : 'sólidos ligeros'} />
        <FastTile icon={GlassWater} label="Últimos líquidos claros" value={liquidos?.hora} note={liquidos?.diaAnterior ? 'día anterior' : 'agua, infusión, zumo sin pulpa'} />
      </div>
      <p className="px-4 pb-4 text-[12px]" style={{ color: 'var(--color-ink-3)' }}>
        Calculado a partir de la hora de la cirugía. Si te han dado otra pauta, sigue siempre la de tu equipo.
      </p>
    </div>
  )
}

interface FastTileProps {
  icon: typeof Clock
  label: string
  value?: string
  note: string
}

function FastTile({ icon: Icon, label, value, note }: FastTileProps) {
  return (
    <div className="p-4" style={{ borderColor: 'var(--color-line)' }}>
      <p className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wide" style={{ color: 'var(--color-ink-3)' }}>
        <Icon size={14} aria-hidden />{label}
      </p>
      <p className="font-display mt-1 text-[38px] leading-none" style={{ color: 'var(--color-sky)' }}>{value ?? '--:--'}</p>
      <p className="mt-1 text-[13px]" style={{ color: 'var(--color-ink-2)' }}>{note}</p>
    </div>
  )
}
