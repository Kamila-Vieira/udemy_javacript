import { Main } from '../../components/Main';
import { Container, Strong, Text } from './styles';

export default function NotFoundContent() {
  return (
    <Main>
      <Container>
        <Strong>404</Strong> <Text>Página não encontrada</Text>
      </Container>
    </Main>
  );
}
