import * as Styled from './styles';

interface PostDetailsProps {
  date: string;
  author: string;
  category: string;
}

export function PostDetails({ date, author, category }: PostDetailsProps) {
  return (
    <Styled.Container>
      <Styled.Date>{date}</Styled.Date>
      <Styled.Author>{author}</Styled.Author>
      <Styled.Category href="">
        <a>{category}</a>
      </Styled.Category>
    </Styled.Container>
  );
}
