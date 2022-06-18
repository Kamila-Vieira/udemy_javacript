import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import { Title, Form } from './styled';
import { loginFailure } from '../../store/modules/auth/actions';

function Fotos() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isValidImage, setIsValidImage] = useState(true);
  const [fotos, setFotos] = useState([]);
  const [foto, setFoto] = useState('');
  const [file, setFile] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setFotos(get(data, 'Fotos', []));
        setIsLoading(false);
      } catch (error) {
        const errors = get(error, 'response.data.errors', []);
        const status = get(error, 'response.status', 0);
        setIsLoading(false);
        if (status === 400) {
          errors.map((err) => toast.error(err));
        } else {
          toast.error('Erro desconhecido');
        }

        navigate('/');
      }
    })();
  }, [id, navigate]);

  useEffect(() => {
    setIsValidImage(!!foto);
  }, [foto]);

  useEffect(() => {
    if (fotos.length > 0) {
      fotos.forEach(async (item) => {
        setIsLoading(true);
        try {
          await axios.get(`/images/${item.filename}`);
          setFoto(item.url);
          // eslint-disable-next-line no-empty
        } catch (_error) {}
        setIsLoading(false);
      });
    }
  }, [fotos]);

  const handleSelectFile = (e) => {
    const fileSource = e.target.files[0];
    setFile(fileSource);
    const fileUrl = URL.createObjectURL(fileSource);
    setFoto(fileUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^(blob)/.test(foto)) {
      toast.error('Selecione uma nova imagem');
      return;
    }

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('picture', file);

    try {
      setIsLoading(true);
      await axios.post(`/fotos/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Foto salva com sucesso!');

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      const { status } = get(error, 'response', 0);

      if (status === 401) {
        dispatch(loginFailure());
        toast.error('Você precisa fazer login');
      } else {
        toast.error('Erro desconhecido');
      }
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>Fotos</Title>

      <Form onSubmit={handleSubmit} enctype="multipart/form-data">
        <label htmlFor="foto">
          {isValidImage ? (
            <img
              src={foto}
              alt="Foto"
              crossOrigin="anonymous"
              onError={() => setIsValidImage(false)}
            />
          ) : (
            'Selecionar imagem'
          )}
          <input
            type="file"
            id="foto"
            onChange={handleSelectFile}
            accept="image/png,image/jpeg"
          />
        </label>

        <button type="submit">Enviar foto</button>
      </Form>
    </Container>
  );
}

export default Fotos;
