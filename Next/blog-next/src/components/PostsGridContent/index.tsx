import { Container } from './styles';
import { PostCard } from '../../components/PostCard';
import type { PostData } from '../../@types/post';

export interface PostsGridContentProps {
  posts: PostData[];
}

export function PostsGridContent({ posts }: PostsGridContentProps) {
  return (
    <Container>
      {posts.map(
        ({
          attributes: {
            title,
            slug,
            cover: { data: coverData },
          },
        }) => {
          const coverFormats = coverData?.attributes?.formats;
          const cover = coverFormats['small']?.url || '';
          return (
            <PostCard
              {...{
                title,
                slug,
                cover,
              }}
              key={slug}
            />
          );
        },
      )}
    </Container>
  );
}
