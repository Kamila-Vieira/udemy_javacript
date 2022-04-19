import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import history from '../../services/history';

function Page404() {
  history.push('/');

  return (
    <Container>
      <h1>Está página não existe!</h1>
    </Container>
  );
}

export default Page404;
