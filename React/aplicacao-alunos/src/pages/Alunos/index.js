import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { FaEdit, FaWindowClose, FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ProfilePicture from '../../components/ProfilePicture';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import { AlunoContainer, NovoAluno } from './styled';
import * as colors from '../../config/colors';

function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const getData = await axios.get('/alunos');
      setAlunos(getData.data);
      setIsLoading(false);
    })();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamationButton = e.currentTarget.nextElementSibling;
    exclamationButton.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      toast.success('Aluno deletado com sucesso!');
      setIsLoading(false);
    } catch (error) {
      const status = get(error, 'response.status', 0);

      if (status === 401) {
        toast.error('Você precisa fazer login!');
        //navigate('/login');
      } else {
        toast.error('Ocorreu um erro ao tentar excluir o aluno');
      }

      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>

      <NovoAluno to="/aluno">Novo aluno</NovoAluno>

      <AlunoContainer>
        {alunos.length > 0 ? (
          alunos.map((aluno, index) => (
            <div key={String(aluno.id)}>
              <div>
                <ProfilePicture
                  name={aluno.nome}
                  urls={get(aluno, 'Fotos', [])}
                />
                <div>
                  <span>{aluno.nome}</span>
                  <span>{aluno.email}</span>
                </div>
              </div>
              <div>
                <Link to={`/aluno/${aluno.id}/edit`}>
                  <FaEdit />
                </Link>

                <Link to="/" onClick={handleDeleteAsk}>
                  <FaWindowClose />
                </Link>

                <FaExclamationCircle
                  color={colors.warningColor}
                  display="none"
                  cursor="pointer"
                  onClick={(e) => handleDelete(e, aluno.id, index)}
                />
              </div>
            </div>
          ))
        ) : (
          <em>Lista de alunos vazia</em>
        )}
      </AlunoContainer>
    </Container>
  );
}

export default Alunos;
