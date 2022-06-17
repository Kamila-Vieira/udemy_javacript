import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasFormErrors = false;

    if (!isEmail(email)) {
      hasFormErrors = true;
      toast.error('O e-mail inválido', {
        closeToast: !hasFormErrors,
      });
    }

    if (password.length < 6 || password.length > 50) {
      hasFormErrors = true;
      toast.error('A senha deve ter entre 6 e 50 caracteres', {
        closeToast: !hasFormErrors,
      });
    }

    if (hasFormErrors) return;
    dispatch(actions.loginRequest({ email, password }));
    navigate('/');
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu e-mail"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Sua senha"
        />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}

export default Login;
