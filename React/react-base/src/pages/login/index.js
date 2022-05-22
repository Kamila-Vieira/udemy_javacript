import React from 'react';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';

function Login() {
  toast.success('Oiiiiii', { toastId: 'toastSuccess' });
  toast.error('Oiiiiii', { toastId: 'toastError' });

  return (
    <Container>
      <Title isRed>
        Login
        <small>is Red</small>
      </Title>
      <Title isRed={false}>
        Login
        <small>is not Red</small>
      </Title>
      <Paragraph />
      <button type="button">Enviar</button>
    </Container>
  );
}

export default Login;
