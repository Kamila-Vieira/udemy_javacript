import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';

function Register() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerSubmit = async (e) => {
    e.preventDefault();
    let hasFormErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      hasFormErrors = true;
      toast.error('O nome deve ter entre 3 e 255 caracteres', {
        closeToast: !hasFormErrors,
      });
    }

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

    try {
      await axios.post('/users', { nome, email, password });

      toast.success('Cadastro realizado com sucesso!', {
        onClose: () => navigate('/login'),
      });
    } catch (error) {
      const status = get(error, 'response.status', 0);
      const errors = get(error, 'response.data.errors', []);
      if (status === 400) errors.map((err) => toast.error(err));
    }
  };

  return (
    <Container>
      <h1>Crie sua conta</h1>

      <Form onSubmit={handlerSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            placeholder="Seu nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            value={email}
            placeholder="Seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            placeholder="Sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}

export default Register;
