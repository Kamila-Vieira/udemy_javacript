import { PostData } from '../../@types/post';
import { Main } from '../../components/Main';
import { Container } from './styles';

interface PostPageProps {
  post: PostData | null;
}

export default function PostPage({ post }: PostPageProps) {
  return (
    <Main>
      <Container>Post Page: {post.attributes.title}</Container>
    </Main>
  );
}
