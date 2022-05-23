import React, { useEffect } from 'react';
// import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';
import axios from '../../services/axios';

function Login() {
  // toast.success('Oiiiiii', { toastId: 'toastSuccess' });
  // toast.error('Oiiiiii', { toastId: 'toastError' });

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get('/alunos');

      console.log(data);
    }

    getData();
  }, []);

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
