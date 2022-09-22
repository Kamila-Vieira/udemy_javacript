import type { PostData } from '../../@types/post';
import { Main } from '../Main';
import * as Styled from './styles';
import { PostContent } from '../../components/PostContent';
import { formatDate } from '../../utils/formatDate';
import { PostDetails } from '../../components/PostDetails';
import { PostComments } from '../../components/PostComments';

interface PostPageProps {
  post: PostData | null;
}

export default function PostPage({ post: { attributes } }: PostPageProps) {
  const { title, slug, content, cover, publishedAt, author, category } =
    attributes;
  const coverSrc =
    cover.data.attributes.formats?.large?.url ||
    cover.data.attributes.formats?.medium?.url ||
    cover.data.attributes.formats?.small?.url ||
    '';

  return (
    <>
      <Main>
        <Styled.Container>
          <Styled.Heading>{title}</Styled.Heading>

          <Styled.Cover src={coverSrc} alt={title} />

          <PostDetails
            date={formatDate(publishedAt)}
            author={author.data.attributes.name}
            category={category.data.attributes.name}
          />

          <PostContent content={content} />

          <PostComments title={title} slug={slug} />
        </Styled.Container>
      </Main>
    </>
  );
}
