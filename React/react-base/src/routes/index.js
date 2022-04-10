import React from 'react';
import { Route, Routes as BrowserRoutes } from 'react-router-dom';
import Login from '../pages/login';
import Page404 from '../pages/page404';

export default function Routes() {
  return (
    <BrowserRoutes>
      <Route exact path="/" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </BrowserRoutes>
  );
}
