import * as Style from './styles';

interface MainProps {
  children: React.ReactNode;
}

export function Main({ children }: MainProps) {
  return <Style.Container>{children}</Style.Container>;
}
