import React from 'react';
import { Container } from '../../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';

function Login() {
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
    </Container>
  );
}

export default Login;
