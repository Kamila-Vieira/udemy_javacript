import * as Styled from './styles';

interface PostDetailsProps {
  date: string;
  author: string;
  category: string;
}

export function PostDetails({ date, author, category }: PostDetailsProps) {
  return (
    <Styled.Container>
      Publicado em
      <Styled.Date>{date}</Styled.Date>
      por {author} em
      <Styled.Category href="">
        <a>{category}</a>
      </Styled.Category>
    </Styled.Container>
  );
}
