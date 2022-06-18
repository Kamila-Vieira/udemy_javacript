import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../components/Loading';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

import * as actions from '../../store/modules/register/actions';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loggedUserId = useSelector((state) => state.auth.user?.id);
  const loggedUserName = useSelector((state) => state.auth.user?.nome);
  const loggedUserEmail = useSelector((state) => state.auth.user?.email);
  const isLoading = useSelector((state) => state.register.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!loggedUserId) return;

    setNome(loggedUserName);
    setEmail(loggedUserEmail);
  }, [loggedUserEmail, loggedUserId, loggedUserName]);

  const handleSubmit = async (e) => {
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

    if (!loggedUserId && (password.length < 6 || password.length > 50)) {
      hasFormErrors = true;
      toast.error('A senha deve ter entre 6 e 50 caracteres', {
        closeToast: !hasFormErrors,
      });
    }

    if (hasFormErrors) return;

    dispatch(
      actions.registerRequest({
        nome,
        email,
        password,
        id: loggedUserId,
        navigate,
        dispatchLogout: loggedUserId && email !== loggedUserEmail,
      })
    );
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>{loggedUserId ? 'Editar Conta' : 'Crie sua conta'}</h1>

      <Form onSubmit={handleSubmit}>
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

        <button type="submit">
          {loggedUserId ? 'Salvar dados' : 'Criar minha conta'}
        </button>
      </Form>
    </Container>
  );
}

export default Register;
