import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/public/Home';
import Programacao from './pages/public/Programacao';
import Sobre from './pages/public/Sobre';
import Contato from './pages/public/Contato';

import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/Dashboard';
import PrivateRoute from './components/PrivateRoute.tsx';
import Erro from './pages/public/Erro';
import EditarProgramacao from './pages/admin/EditarProgramacao.tsx';
import EditarAtracoes from './pages/admin/EditarAtracoes.tsx';
import Mapa from './pages/public/Mapa.tsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programacao" element={<Programacao />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />

        <Route path='/admin' element={<AdminLogin />}/>
        <Route path="/admin/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/admin/atracoes" element={<PrivateRoute><EditarAtracoes /></PrivateRoute>} />
        <Route path="/admin/programacao" element={<PrivateRoute><EditarProgramacao /></PrivateRoute>} />

        <Route path="*" element={<Erro/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
