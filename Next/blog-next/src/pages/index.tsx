import { GetStaticProps } from 'next';
import type { PostData } from '../@types/post';
import { HomePage } from '../modules/HomePage';
import { getAllPosts } from '../services/posts';

export interface HomeProps {
  posts: PostData[];
}

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getAllPosts();

  return {
    props: {
      posts: posts.data,
    },
  };
};
