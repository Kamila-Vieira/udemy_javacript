import { GetStaticPaths, GetStaticProps } from 'next';
import { PostData } from '../../@types/post';
import PostPage from '../../modules/PostPage';
import { getAllPosts, getPostsBySlug } from '../../services/api';

interface PostProps {
  post: PostData | null;
}

export default function Post({ post }: PostProps) {
  return <PostPage post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.data.map(({ attributes: { slug } }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPostsBySlug(params.slug);
  const post = posts.data.length > 0 ? posts.data[0] : null;

  return {
    props: {
      post,
    },
  };
};
