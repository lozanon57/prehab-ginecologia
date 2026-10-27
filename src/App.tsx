import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Shell } from './components/Shell'
import { Inicio } from './pages/Inicio'
import { Cirugias } from './pages/Cirugias'
import { CirugiaDetalle } from './pages/CirugiaDetalle'
import { Preparacion } from './pages/Preparacion'
import { Ejercicios } from './pages/Ejercicios'
import { Alarma } from './pages/Alarma'
import { Informacion } from './pages/Informacion'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<Inicio />} />
          <Route path="cirugias" element={<Cirugias />} />
          <Route path="cirugia/:id" element={<CirugiaDetalle />} />
          <Route path="preparacion" element={<Preparacion />} />
          <Route path="ejercicios" element={<Ejercicios />} />
          <Route path="alarma" element={<Alarma />} />
          <Route path="informacion" element={<Informacion />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
