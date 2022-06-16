import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <Outlet />
  ) : (
    // eslint-disable-next-line no-restricted-globals
    <Navigate to="/login" replace />
  );
}
