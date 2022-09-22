import { Main } from '../Main';
import { Container, Strong, Text } from './styles';

export function NotFoundPage() {
  return (
    <Main>
      <Container>
        <Strong>404</Strong> <Text>Página não encontrada</Text>
      </Container>
    </Main>
  );
}
