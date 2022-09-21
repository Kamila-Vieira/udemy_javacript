import Link from 'next/link';
import { SITE_NAME } from '../../config';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <Link href="/">
        <a>{SITE_NAME}</a>
      </Link>
    </Container>
  );
}
