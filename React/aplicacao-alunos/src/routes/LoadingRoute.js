import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function LoadingRoute() {
  const isLoading = useSelector((state) => state.auth.isLoading);

  console.log('isLoading', isLoading);

  return isLoading ? <h1>Carregando...</h1> : <Outlet />;
}
