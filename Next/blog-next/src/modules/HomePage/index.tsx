import { MainContainer } from '../../components/MainContainer';
import type { PostData } from '../../@types/post';
import { PostsGridContent } from '../../components/PostsGridContent';

export interface HomePageProps {
  posts: PostData[];
}

export function HomePage({ posts }: HomePageProps) {
  return (
    <MainContainer>
      <PostsGridContent posts={posts} />
    </MainContainer>
  );
}
