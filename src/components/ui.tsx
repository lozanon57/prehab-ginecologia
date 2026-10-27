import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { Check } from 'lucide-react'

interface IconBadgeProps {
  icon: LucideIcon
  color: string
  bg: string
  size?: number
}

export function IconBadge({ icon: Icon, color, bg, size = 44 }: IconBadgeProps) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center"
      style={{ width: size, height: size, borderRadius: size * 0.36, background: bg, color }}
      aria-hidden
    >
      <Icon size={Math.round(size * 0.5)} strokeWidth={1.8} />
    </span>
  )
}

interface SectionTitleProps {
  eyebrow?: string
  title: string
  action?: ReactNode
}

export function SectionTitle({ eyebrow, title, action }: SectionTitleProps) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <div>
        {eyebrow && <p className="eyebrow" style={{ color: 'var(--color-ink-3)' }}>{eyebrow}</p>}
        <h2 className="font-display text-[28px] leading-tight">{title}</h2>
      </div>
      {action}
    </div>
  )
}

interface CheckRowProps {
  checked: boolean
  onToggle: () => void
  icon: LucideIcon
  title: string
  text: string
}

export function CheckRow({ checked, onToggle, icon: Icon, title, text }: CheckRowProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={checked}
      className="pressable flex w-full items-start gap-3 rounded-2xl p-3 text-left"
      style={{ background: checked ? 'var(--color-ok-bg)' : 'var(--color-surface)', border: '1px solid var(--color-line)' }}
    >
      <span
        className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
        style={{
          background: checked ? 'var(--color-ok)' : 'transparent',
          border: checked ? 'none' : '2px solid var(--color-line)',
          color: '#fff',
        }}
        aria-hidden
      >
        {checked && <Check size={16} strokeWidth={3} />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2 font-semibold" style={{ textDecoration: checked ? 'line-through' : 'none', color: checked ? 'var(--color-ink-2)' : 'var(--color-ink)' }}>
          <Icon size={16} strokeWidth={2} style={{ color: 'var(--color-plum)' }} aria-hidden />
          {title}
        </span>
        <span className="mt-0.5 block text-[14px]" style={{ color: 'var(--color-ink-2)' }}>{text}</span>
      </span>
    </button>
  )
}

interface RingProps {
  value: number
  size?: number
  label?: string
}

export function ProgressRing({ value, size = 64, label }: RingProps) {
  const stroke = 6
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const pct = Math.max(0, Math.min(1, value))
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }} role="img" aria-label={label ?? `${Math.round(pct * 100)} %`}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-plum-soft)" strokeWidth={stroke} />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-plum)" strokeWidth={stroke}
          strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - pct)}
          style={{ transition: 'stroke-dashoffset 400ms ease' }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[13px] font-bold" style={{ color: 'var(--color-plum)' }}>
        {Math.round(pct * 100)}%
      </span>
    </div>
  )
}

interface PillProps {
  children: ReactNode
  color?: string
  bg?: string
}

export function Pill({ children, color = 'var(--color-ink-2)', bg = 'var(--color-surface-2)' }: PillProps) {
  return <span className="chip" style={{ color, background: bg }}>{children}</span>
}

export function Disclaimer() {
  return (
    <p className="mt-8 text-center text-[12px] leading-relaxed" style={{ color: 'var(--color-ink-3)' }}>
      Información orientativa basada en guías ERAS y evidencia científica. No sustituye las indicaciones de tu equipo,
      que puede adaptarlas a tu caso.
    </p>
  )
}
