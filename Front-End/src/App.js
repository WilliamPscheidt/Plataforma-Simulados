import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoutes from "./Security/ProtectedRoutes";
import ProtectedRoutesAdmin from "./Security/ProtectedRoutesAdmin";

import Inicio from "./Pages/Public-Pages/Inicio";
import Login from './Pages/Public-Pages/Login'
import Dashboard from "./Pages/Dashboard/Dashboard";
import Perfil from "./Pages/Dashboard/Perfil";
import Provas from './Pages/Dashboard/Provas'
import ProblemaDetectado from "./Pages/Dashboard/ProblemaDetectado";
import Simulado from "./Pages/Dashboard/Simulado";

import AdminLogin from "./Pages/Admin-Pages/AdminLogin";
import AddPerguntas from "./Pages/Admin-Pages/AddPerguntas";
import EditarSimulados from "./Pages/Admin-Pages/EditarSimulados";
import AddAdmin from "./Pages/Admin-Pages/AddAdmin";

import Erro from "./Pages/Public-Pages/Erro";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acesso" element={<Login />} />
          <Route path="/admin/login/" element={<AdminLogin />} />
          <Route path="*" element={<Erro />} />

          <Route element={<ProtectedRoutes />} >
              <Route path="/provas" element={<Provas />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/simulado" element={<Simulado />} />
              <Route path="/problema" element={<ProblemaDetectado />} />
          </Route>

          <Route element={<ProtectedRoutesAdmin />} >
              <Route path="/admin/simulados/" element={<EditarSimulados />} />
              <Route path="/admin/adicionarperguntas/" element={<AddPerguntas />} />
              <Route path="/admin/gerenciarusuarios/" element={<AddAdmin />} />
          </Route>
          
        </Routes>
      </Router>
  );
}

export default App;
