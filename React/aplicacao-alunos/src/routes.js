import React from 'react';
import { Route, Routes as BrowserRoutes } from 'react-router-dom';

import Aluno from './pages/Aluno';
import Alunos from './pages/Alunos';
import Fotos from './pages/Fotos';
import Register from './pages/Register';
import LoginContent from './pages/Login';
import Logout from './pages/Logout';
import Page404 from './pages/Page404';
import PrivateRoute from './pages/PrivateRoute';

export default function Routes() {
  return (
    <BrowserRoutes>
      <Route path="*" element={<Page404 />} />
      <Route path="/" element={<Alunos />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginContent />} />
      <Route path="/logout" element={<Logout />} />
      <Route element={<PrivateRoute />}>
        <Route path="/aluno/:id/edit" element={<Aluno />} />
        <Route path="/aluno" element={<Aluno />} />
        <Route path="/fotos/aluno_id=:id" element={<Fotos />} />
      </Route>
    </BrowserRoutes>
  );
}
