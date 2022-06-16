import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { AlunoContainer, ProfilePicture } from './styled';

function Alunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    (async () => {
      const getData = await axios.get('/alunos');
      setAlunos(getData.data);
    })();
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>

      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <div>
              <ProfilePicture>
                {get(aluno, 'Fotos[0].url', false) ? (
                  <img src={aluno.Fotos[0].url} alt={aluno.nome} />
                ) : (
                  <FaUserCircle size={36} />
                )}
              </ProfilePicture>
              <span>{aluno.nome}</span>
              <span>{aluno.email}</span>
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
