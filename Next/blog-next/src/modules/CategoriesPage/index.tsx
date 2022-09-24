import { MainContainer } from '../../components/MainContainer';
import type { PostData } from '../../@types/post';
import { PostsGridContent } from '../../components/PostsGridContent';
import { Heading } from './styles';

export interface CategoriesPageProps {
  posts: PostData[];
  category: string;
}

export function CategoriesPage({ posts, category }: CategoriesPageProps) {
  return (
    <MainContainer>
      <Heading>Categoria: {category}</Heading>
      <PostsGridContent posts={posts} />
    </MainContainer>
  );
}
