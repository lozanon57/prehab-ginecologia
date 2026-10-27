const MS_DIA = 86_400_000

/** Días enteros entre hoy y la fecha de cirugía (negativo = faltan días; 0 = hoy; positivo = días tras la cirugía). */
export function diaRelativo(fechaISO: string, hoy: Date = new Date()): number {
  const [y, m, d] = fechaISO.split('-').map(Number)
  const cirugia = Date.UTC(y, m - 1, d)
  const base = Date.UTC(hoy.getFullYear(), hoy.getMonth(), hoy.getDate())
  return Math.round((base - cirugia) / MS_DIA)
}

export function formatoFecha(fechaISO: string): string {
  const [y, m, d] = fechaISO.split('-').map(Number)
  const texto = new Date(y, m - 1, d).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })
  return texto.charAt(0).toUpperCase() + texto.slice(1)
}

/** Resta horas a una hora "HH:MM" y devuelve "HH:MM" (con indicación si cae el día anterior). */
export function restarHoras(hora: string, horas: number): { hora: string; diaAnterior: boolean } {
  const [h, m] = hora.split(':').map(Number)
  let total = h * 60 + m - horas * 60
  const diaAnterior = total < 0
  if (diaAnterior) total += 24 * 60
  const hh = String(Math.floor(total / 60)).padStart(2, '0')
  const mm = String(total % 60).padStart(2, '0')
  return { hora: `${hh}:${mm}`, diaAnterior }
}

export function etiquetaDia(dia: number): string {
  if (dia === 0) return 'Día de la cirugía'
  if (dia < 0) return `Faltan ${-dia} ${dia === -1 ? 'día' : 'días'}`
  if (dia < 7) return `Día ${dia} tras la cirugía`
  return `Día ${dia} · semana ${Math.floor(dia / 7) + 1}`
}
