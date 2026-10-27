import { Link } from 'react-router-dom'
import { Globe, Mail, UserRound, ExternalLink, Building2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { AUTOR } from '../config'

interface EnlaceProps {
  href: string
  icon: LucideIcon
  label: string
}

function Enlace({ href, icon: Icon, label }: EnlaceProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="chip pressable no-underline" style={{ background: 'var(--color-plum-soft)', color: 'var(--color-plum)', padding: '8px 12px' }}>
      <Icon size={15} aria-hidden /> {label}
    </a>
  )
}

/** Tarjeta de autoría para la página de Información. */
export function AutorCard() {
  return (
    <section id="autor" className="card overflow-hidden">
      <div className="p-5" style={{ background: 'linear-gradient(150deg, var(--color-plum-soft), #fff 75%)' }}>
        <p className="eyebrow" style={{ color: 'var(--color-plum)' }}>Creador de la aplicación</p>
        <h2 className="font-display mt-1 text-[30px] leading-tight">{AUTOR.nombre}</h2>
        <p className="text-[14px] font-bold" style={{ color: 'var(--color-ink-2)' }}>{AUTOR.titulos}</p>
        <p className="mt-2 text-[15px] font-semibold">{AUTOR.cargo}</p>
        <p className="text-[14px]" style={{ color: 'var(--color-ink-2)' }}>{AUTOR.area}</p>
      </div>
      <div className="p-5 pt-3">
        <ul className="space-y-2">
          {AUTOR.afiliaciones.map((a) => (
            <li key={a} className="flex gap-2.5 text-[14px]" style={{ color: 'var(--color-ink-2)' }}>
              <Building2 size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--color-plum)' }} aria-hidden />
              {a}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          <Enlace href={AUTOR.web} icon={Globe} label="drlozanolominchar.com" />
          <Enlace href={AUTOR.orcid} icon={ExternalLink} label="ORCID" />
          <Enlace href={AUTOR.linkedin} icon={UserRound} label="LinkedIn" />
          <Enlace href={AUTOR.institutoWeb} icon={Globe} label="Instituto Quenet-Torrent" />
          <Enlace href={`mailto:${AUTOR.email}`} icon={Mail} label={AUTOR.email} />
        </div>
      </div>
    </section>
  )
}

/** Línea breve de autoría para el pie de página. */
export function AutorPie() {
  return (
    <p className="mt-3 text-center text-[12px]" style={{ color: 'var(--color-ink-3)' }}>
      App creada por{' '}
      <Link to="/informacion" className="font-semibold" style={{ color: 'var(--color-plum)' }}>{AUTOR.nombre}</Link>
    </p>
  )
}
