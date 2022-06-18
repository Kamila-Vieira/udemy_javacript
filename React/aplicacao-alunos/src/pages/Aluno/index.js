import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { FaEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { isEmail, isInt, isFloat } from 'validator';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { loginFailure } from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';
import ProfilePicture from '../../components/ProfilePicture';
import { Form, ProfilePictureEdit, Title } from './styled';

function Aluno() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [nome, setNome] = useState('');
  const [fotos, setFotos] = useState([]);
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setFotos(get(data, 'Fotos', []));
        setNome(data?.nome || '');
        setSobrenome(data?.sobrenome || '');
        setEmail(data?.email || '');
        setIdade(data?.idade || '');
        setPeso(data?.peso || '');
        setAltura(data?.altura || '');
        setIsLoading(false);
      } catch (error) {
        const errors = get(error, 'response.data.errors', []);
        const status = get(error, 'response.status', 0);

        if (status === 400) {
          errors.map((err) => toast.error(err));
        } else {
          toast.error('Erro desconhecido');
        }

        navigate('/');
      }
    })();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasFormErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      hasFormErrors = true;
      toast.error('O nome deve ter entre 3 e 255 caracteres', {
        closeToast: !hasFormErrors,
      });
    }

    if (sobrenome.length < 3 || sobrenome.length > 255) {
      hasFormErrors = true;
      toast.error('O sobrenome deve ter entre 3 e 255 caracteres', {
        closeToast: !hasFormErrors,
      });
    }

    if (!isEmail(email)) {
      hasFormErrors = true;
      toast.error('O e-mail inválido', {
        closeToast: !hasFormErrors,
      });
    }

    if (!isInt(String(idade))) {
      hasFormErrors = true;
      toast.error('Idade precisa ser um número inteiro', {
        closeToast: !hasFormErrors,
      });
    }

    if (!isFloat(String(peso))) {
      hasFormErrors = true;
      toast.error('Peso precisa ser um número inteiro ou de ponto flutuante', {
        closeToast: !hasFormErrors,
      });
    }

    if (!isFloat(String(altura))) {
      hasFormErrors = true;
      toast.error(
        'Altura precisa ser um número inteiro ou de ponto flutuante',
        {
          closeToast: !hasFormErrors,
        }
      );
    }

    if (hasFormErrors) return;

    const alunoData = {
      nome,
      sobrenome,
      idade: Number(idade),
      email,
      peso: Number(peso),
      altura: Number(altura),
    };

    try {
      setIsLoading(true);
      if (id) {
        await axios.put(`/alunos/${id}`, { ...alunoData });
        toast.success('Aluno(a) alterado(a) com sucesso');
        navigate('/');
      } else {
        const { data } = await axios.post(`/alunos`, { ...alunoData });
        toast.success('Aluno(a) criado(a) com sucesso');
        navigate(`/aluno/${data.id}/edit`);
      }
      setIsLoading(false);
    } catch (error) {
      const status = get(error, 'response.status', 0);
      const data = get(error, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((err) => toast.error(err));
      } else {
        toast.error('Erro desconhecido');
      }

      if (status === 401) {
        toast.error('Você precisa fazer login');
        dispatch(loginFailure());
      }
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{id ? `Editar aluno` : 'Novo aluno'}</Title>

      {id && (
        <ProfilePictureEdit>
          <ProfilePicture urls={fotos} name={nome} size={180} />
          <Link to={`/fotos/aluno_id=${id}`}>
            <FaEdit />
          </Link>
        </ProfilePictureEdit>
      )}

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Sobrenome"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          placeholder="Idade"
        />
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Peso"
        />
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Altura"
        />
        <button type="submit">Enviar dados</button>
      </Form>
    </Container>
  );
}

export default Aluno;
