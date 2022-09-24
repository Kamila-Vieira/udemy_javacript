import { MainContainer } from '../../components/MainContainer';
import { Container, Strong, Text } from './styles';

export function NotFoundPage() {
  return (
    <MainContainer>
      <Container>
        <Strong>404</Strong> <Text>Página não encontrada</Text>
      </Container>
    </MainContainer>
  );
}
