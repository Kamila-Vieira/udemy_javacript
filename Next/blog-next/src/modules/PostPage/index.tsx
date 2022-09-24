import type { PostData } from '../../@types/post';
import { MainContainer } from '../../components/MainContainer';
import * as Styled from './styles';
import { PostContent } from '../../components/PostContent';
import { formatDate } from '../../utils/formatDate';
import { PostDetails } from '../../components/PostDetails';
import { PostComments } from '../../components/PostComments';

interface PostPageProps {
  post: PostData | null;
}

export default function PostPage({ post }: PostPageProps) {
  const coverSrc =
    post?.attributes?.cover.data.attributes.formats?.large?.url ||
    post?.attributes?.cover.data.attributes.formats?.medium?.url ||
    post?.attributes?.cover.data.attributes.formats?.small?.url ||
    '';

  return (
    <MainContainer>
      <Styled.Container>
        <Styled.Heading>{post?.attributes?.title}</Styled.Heading>

        <Styled.Cover src={coverSrc} alt={post?.attributes?.title} />

        <PostDetails
          date={formatDate(post?.attributes?.publishedAt)}
          author={post?.attributes?.author.data.attributes.name}
          category={post?.attributes?.category.data.attributes.name}
        />

        <PostContent content={post?.attributes?.content} />

        <PostComments
          title={post?.attributes?.title}
          slug={post?.attributes?.slug}
        />
      </Styled.Container>
    </MainContainer>
  );
}
