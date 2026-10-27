import { BookOpen, ExternalLink, ShieldCheck, Lock } from 'lucide-react'
import { REFERENCIAS } from '../data/referencias'
import { CONFIG } from '../config'
import { IconBadge } from '../components/ui'

const FAQ = [
  { p: '¿Qué es ERAS?', r: 'Son las siglas en inglés de "recuperación intensificada tras la cirugía": un conjunto de medidas antes, durante y después de la operación que, aplicadas juntas, reducen complicaciones, dolor y días de ingreso.' },
  { p: '¿Por qué no tengo que ayunar desde la noche anterior?', r: 'El ayuno prolongado no aporta seguridad y aumenta la sed, el malestar y la resistencia a la insulina. Comer hasta 6 horas y beber líquidos claros hasta 2 horas antes es seguro.' },
  { p: '¿Por qué me piden caminar el mismo día?', r: 'Moverse pronto previene trombos y neumonías, ayuda a que el intestino funcione y reduce la pérdida de fuerza muscular.' },
  { p: '¿Mi cirugía necesita preparación ERAS?', r: 'Las cirugías mayores (histerectomía, cáncer ginecológico, mama, miomectomía y endometriosis) se benefician de la preparación. En la cirugía de suelo pélvico y la ambulatoria basta con seguir los cuidados postoperatorios.' },
]

export function Informacion() {
  const temas = [...new Set(REFERENCIAS.map((r) => r.tema))]
  return (
    <div className="fade-in space-y-7">
      <header>
        <h1 className="font-display text-[40px] leading-tight">Información</h1>
        <p className="mt-1 text-[15px]" style={{ color: 'var(--color-ink-2)' }}>{CONFIG.appName} · {CONFIG.servicio}</p>
      </header>

      <section className="space-y-2">
        {FAQ.map((f) => (
          <details key={f.p} className="card group p-4">
            <summary className="cursor-pointer list-none font-bold">{f.p}</summary>
            <p className="mt-2 text-[15px]" style={{ color: 'var(--color-ink-2)' }}>{f.r}</p>
          </details>
        ))}
      </section>

      <section className="grid gap-2.5 sm:grid-cols-2">
        <div className="card flex gap-3 p-4">
          <IconBadge icon={ShieldCheck} color="var(--color-sage)" bg="var(--color-sage-bg)" size={40} />
          <p className="text-[14px]" style={{ color: 'var(--color-ink-2)' }}>
            Contenido elaborado a partir de las guías de la ERAS Society, ACOG, AAGL y ESHRE y de ensayos clínicos verificados.
            Los plazos son orientativos.
          </p>
        </div>
        <div className="card flex gap-3 p-4">
          <IconBadge icon={Lock} color="var(--color-sky)" bg="var(--color-sky-bg)" size={40} />
          <p className="text-[14px]" style={{ color: 'var(--color-ink-2)' }}>
            Tu cirugía, fecha y progreso se guardan solo en este dispositivo. No se envía ningún dato personal.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display mb-3 flex items-center gap-2 text-[28px]"><BookOpen size={22} aria-hidden /> Fuentes</h2>
        <div className="space-y-5">
          {temas.map((t) => (
            <div key={t}>
              <p className="eyebrow mb-1.5" style={{ color: 'var(--color-plum)' }}>{t}</p>
              <ul className="space-y-1.5">
                {REFERENCIAS.filter((r) => r.tema === t).map((r) => (
                  <li key={r.pmid} className="text-[13px] leading-relaxed" style={{ color: 'var(--color-ink-2)' }}>
                    {r.cita}{' '}
                    <a href={`https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-0.5 font-semibold" style={{ color: 'var(--color-plum)' }}>
                      PMID {r.pmid}<ExternalLink size={11} aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <p className="text-center text-[12px]" style={{ color: 'var(--color-ink-3)' }}>
        Esta aplicación es informativa y no sustituye la valoración de tu equipo médico. Versión 1.0 · 2026
      </p>
    </div>
  )
}
