import { NavLink, Outlet, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { House, Stethoscope, CalendarCheck, Dumbbell, Siren, Info } from 'lucide-react'
import { CONFIG } from '../config'

const NAV = [
  { to: '/', label: 'Inicio', icon: House, end: true },
  { to: '/cirugias', label: 'Cirugías', icon: Stethoscope, end: false },
  { to: '/preparacion', label: 'Preparación', icon: CalendarCheck, end: false },
  { to: '/ejercicios', label: 'Ejercicios', icon: Dumbbell, end: false },
  { to: '/alarma', label: 'Alarma', icon: Siren, end: false },
]

export function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
      <rect width="64" height="64" rx="20" fill="var(--color-plum)" />
      <path d="M32 14c-6 7-10 12-10 18a10 10 0 0 0 20 0c0-6-4-11-10-18z" fill="var(--color-blush)" />
      <circle cx="32" cy="33" r="4" fill="var(--color-plum)" />
    </svg>
  )
}

export function Shell() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="glass sticky top-0 z-40" style={{ borderBottom: '1px solid var(--color-line)' }}>
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2.5 no-underline" style={{ color: 'var(--color-ink)' }}>
            <Logo />
            <span className="leading-tight">
              <span className="font-display block text-[22px]">{CONFIG.appName}</span>
              <span className="block text-[11px] font-semibold" style={{ color: 'var(--color-ink-3)' }}>
                {CONFIG.servicio}{CONFIG.centro ? ` · ${CONFIG.centro}` : ''}
              </span>
            </span>
          </Link>
          <Link to="/informacion" aria-label="Información y fuentes" className="inline-flex h-11 w-11 items-center justify-center rounded-full" style={{ background: 'var(--color-surface-2)', color: 'var(--color-plum)' }}>
            <Info size={20} />
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-32 pt-5">
        <Outlet />
      </main>

      <nav className="glass fixed inset-x-0 bottom-0 z-40 safe-bottom" style={{ borderTop: '1px solid var(--color-line)' }} aria-label="Navegación principal">
        <div className="mx-auto grid h-[68px] max-w-3xl grid-cols-5">
          {NAV.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className="flex flex-col items-center justify-center gap-1 no-underline"
              style={({ isActive }) => ({ color: isActive ? (to === '/alarma' ? 'var(--color-alert)' : 'var(--color-plum)') : 'var(--color-ink-3)' })}
            >
              {({ isActive }) => (
                <>
                  <span
                    className="inline-flex h-8 w-14 items-center justify-center rounded-full"
                    style={{ background: isActive ? (to === '/alarma' ? 'var(--color-alert-bg)' : 'var(--color-plum-soft)') : 'transparent', transition: 'background 160ms' }}
                  >
                    <Icon size={21} strokeWidth={isActive ? 2.3 : 1.8} />
                  </span>
                  <span className="text-[11px] font-semibold">{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
