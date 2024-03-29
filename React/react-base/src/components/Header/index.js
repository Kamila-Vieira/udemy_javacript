import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav, Strong } from './styles';

export default function Header() {
  const { botaoClicado } = useSelector((state) => state.example);

  return (
    <Nav>
      <Strong>{botaoClicado ? 'Botão clicado' : 'Botão não clicado'}</Strong>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/user">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
