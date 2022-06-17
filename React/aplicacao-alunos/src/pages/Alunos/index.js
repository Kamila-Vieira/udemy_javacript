import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { FaEdit, FaWindowClose, FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ProfilePicture from '../../components/ProfilePicture';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import { AlunoContainer } from './styled';
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
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      await setAlunos(novosAlunos);
    } catch (error) {
      const errors = get(error, 'response.data.errors', []);
      errors.map((err) => toast.error(err));
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>

      <AlunoContainer>
        {alunos.length > 0 ? (
          alunos.map((aluno, index) => (
            <div key={String(aluno.id)}>
              <div>
                <ProfilePicture
                  name={aluno.nome}
                  url={get(aluno, 'Fotos[0].url', '')}
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
