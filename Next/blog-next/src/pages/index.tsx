import { GetStaticProps } from 'next';
import type { PostData } from '../@types/post';
import { CustomPageHead } from '../components/CustomPageHead';
import { HomePage } from '../modules/HomePage';
import { getAllPosts } from '../services/api';

export interface HomeProps {
  posts: PostData[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <CustomPageHead description="Este é meu blog de estudo de next" />

      <HomePage posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(
    '&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=10',
  );

  return {
    props: {
      posts: posts.data,
    },
  };
};
