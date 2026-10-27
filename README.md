# Cuidarte · Cirugía Ginecológica

App para pacientes del Servicio de Ginecología: preparación ERAS para cirugía mayor y cuidados postoperatorios para suelo pélvico y cirugía ambulatoria.

- **Programa ERAS** (con preparación previa): histerectomía abdominal y laparoscópica, cáncer de cérvix y endometrio, mastectomía (± ganglio centinela / linfadenectomía), miomectomía laparoscópica y laparotómica, endometriosis y endometriosis profunda.
- **Cuidados postoperatorios**: cistocele, rectocele, fijación sacroespinosa, histeropexia, Manchester, TOT, conización, legrado, histeroscopia.

Stack: React + Vite + TypeScript + Tailwind v4 + Zustand + HashRouter, desplegado en GitHub Pages con Actions.
Datos institucionales en `src/config.ts`. Contenido en `src/data/`. Fuentes verificadas en PubMed en `src/data/referencias.ts`.

```bash
npm ci && npm run dev
```
