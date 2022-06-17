import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginFailure } from '../../store/modules/auth/actions';

export default function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginFailure());
    toast.success('Logout realizado com sucesso!');
  }, [dispatch]);

  return <Navigate to="/" replace />;
}
