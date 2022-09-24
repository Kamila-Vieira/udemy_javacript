import * as Style from './styles';

interface MainContainerProps {
  children: React.ReactNode;
}

export function MainContainer({ children }: MainContainerProps) {
  return <Style.Container>{children}</Style.Container>;
}
