import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail, isInt, isFloat } from 'validator';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import { Form } from './styled';

function Aluno() {
  const { id } = useParams();

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          setIsLoading(true);
          const getData = await axios.get(`/alunos/${id}`);
          setNome(getData?.data?.nome || '');
          setSobrenome(getData?.data?.sobrenome || '');
          setEmail(getData?.data?.email || '');
          setIdade(getData?.data?.idade || '');
          setPeso(getData?.data?.peso || '');
          setAltura(getData?.data?.altura || '');
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [id]);

  const handleSubmit = (e) => {
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

    console.log({
      nome,
      sobrenome,
      idade: Number(idade),
      email,
      peso: Number(peso),
      altura: Number(altura),
    });
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? `Editar aluno ${nome}` : 'Novo aluno'}</h1>

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
