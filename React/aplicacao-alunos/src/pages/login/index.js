import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';
import * as exempleActions from '../../store/modules/example/actions';
// import { toast } from 'react-toastify';
//import axios from '../../services/axios';

function Login() {
  const dispatch = useDispatch();
  // toast.success('Oiiiiii', { toastId: 'toastSuccess' });
  // toast.error('Oiiiiii', { toastId: 'toastError' });

  // useEffect(() => {
  //   async function getData() {
  //     const { data } = await axios.get('/alunos');

  //     console.log(data);
  //   }

  //   getData();
  // }, []);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(exempleActions.clicaBotaoRequest());
  };

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
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}

export default Login;
