import { GetServerSideProps } from 'next';
import { getAllPostsByCategory } from '../../services/api';
import type { PostData } from '../../@types/post';
import { CustomPageHead } from '../../components/CustomPageHead';
import { CategoriesPage } from '../../modules/CategoriesPage';

export interface CategoryProps {
  posts: PostData[];
  category: string;
}

export default function Category({ posts, category }: CategoryProps) {
  return (
    <>
      <CustomPageHead
        titleComplement={category}
        description="Este é meu blog de estudo de next"
      />

      <CategoriesPage posts={posts} category={category} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const category = Array.isArray(context.query.category)
    ? context.query.category[0]
    : context.query.category;

  const posts = await getAllPostsByCategory(
    '&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=10',
    category,
  );

  return {
    props: {
      category,
      posts: posts.data,
    },
  };
};
