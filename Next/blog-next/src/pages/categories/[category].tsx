import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostsByCategory } from '../../services/api';
import type { PostData } from '../../@types/post';
import { CustomPageHead } from '../../components/CustomPageHead';
import { CategoriesPage } from '../../modules/CategoriesPage';
import { getAllCategories } from '../../services/api/getAllCategories';

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

export const getStaticProps: GetStaticProps = async (context) => {
  const category = Array.isArray(context.params.category)
    ? context.params.category[0]
    : context.params.category;

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

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategories();

  return {
    paths: categories.data.map(({ attributes: { name } }) => ({
      params: {
        category: name,
      },
    })),
    fallback: false,
  };
};
