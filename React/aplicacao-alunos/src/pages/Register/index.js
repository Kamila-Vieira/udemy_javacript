import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import { FaExclamationCircle } from 'react-icons/fa';
import Loading from '../../components/Loading';
import { Container } from '../../styles/GlobalStyles';
import { Form, ConfirmDelete, DeleteUserAsk } from './styled';

import * as actions from '../../store/modules/register/actions';
import { deleteRequest } from '../../store/modules/deleteUser/actions';
import * as colors from '../../config/colors';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loggedUserId = useSelector((state) => state.auth.user?.id);
  const loggedUserName = useSelector((state) => state.auth.user?.nome);
  const loggedUserEmail = useSelector((state) => state.auth.user?.email);
  const isLoading = useSelector((state) => state.register.isLoading);
  const isDeleting = useSelector((state) => state.deleteUser.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(false);

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

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    dispatch(deleteRequest({ navigate }));
  };

  return (
    <Container>
      <Loading isLoading={isLoading || isDeleting} />

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

      {loggedUserId && (
        <>
          <ConfirmDelete hidden={!confirmDelete}>
            <strong>
              Você tem certeza que deseja prosseguir, esta ação é irreversível?
              <FaExclamationCircle
                color={colors.warningColor}
                cursor="pointer"
                size={14}
              />
            </strong>

            <div>
              <button type="button" onClick={handleDeleteUser}>
                Sim
              </button>
              <button type="button" onClick={() => setConfirmDelete(false)}>
                Não
              </button>
            </div>
          </ConfirmDelete>

          <DeleteUserAsk
            type="button"
            onClick={() => setConfirmDelete(true)}
            hidden={confirmDelete}
          >
            Deletar conta
          </DeleteUserAsk>
        </>
      )}
    </Container>
  );
}

export default Register;
