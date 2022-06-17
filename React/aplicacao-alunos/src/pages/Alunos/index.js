import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProfilePicture from '../../components/ProfilePicture';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { AlunoContainer } from './styled';
import Loading from '../../components/Loading';

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

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>

      <AlunoContainer>
        {alunos.map((aluno) => (
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
              <Link to={`/aluno/${aluno.id}/delete`}>
                <FaWindowClose />
              </Link>
            </div>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}

export default Alunos;
