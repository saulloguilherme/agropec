import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/public/Home';
import Eventos from './components/AttractionsCarousel.tsx';
import EventoDetalhe from './pages/public/EventoDetalhe';
import Expositores from './pages/public/Expositores';
import ExpositorDetalhe from './pages/public/ExpositorDetalhe';
import Programacao from './pages/public/Programacao';
import Sobre from './pages/public/Sobre';
import Contato from './pages/public/Contato';

import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/Dashboard';
import EditarEventos from './pages/admin/EditarEventos';
import EditarExpositores from './pages/admin/EditarExpositores';
import EditarHome from './pages/admin/EditarHome';

import PrivateRoute from './components/PrivateRoute.tsx';
import Erro from './pages/public/Erro';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/eventos/:id" element={<EventoDetalhe />} />
        <Route path="/expositores" element={<Expositores />} />
        <Route path="/expositores/:id" element={<ExpositorDetalhe />} />
        <Route path="/programacao" element={<Programacao />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />

        <Route path="/admin" element={<AdminLogin />} />        
        <Route path="/admin/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        
        <Route path="/admin/eventos" element={
          <PrivateRoute>
            <EditarEventos />
          </PrivateRoute>
        } />
        
        <Route path="/admin/expositores" element={
          <PrivateRoute>
            <EditarExpositores />
          </PrivateRoute>
        } />
        
        <Route path="/admin/editar-home" element={
          <PrivateRoute>
            <EditarHome />
          </PrivateRoute>
        } />


        <Route path="*" element={<Erro/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
