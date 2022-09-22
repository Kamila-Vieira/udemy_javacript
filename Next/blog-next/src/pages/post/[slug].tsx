import { GetStaticPaths, GetStaticProps } from 'next';
import { PostData } from '../../@types/post';
import { CustomPageHead } from '../../components/CustomPageHead';
import { SITE_NAME } from '../../config';
import PostPage from '../../modules/PostPage';
import { getAllPosts, getPostsBySlug } from '../../services/api';
import { removeMarkdown } from '../../utils/removeMarkdown';

interface PostProps {
  post: PostData | null;
}

export default function Post({ post }: PostProps) {
  const { title, content } = post.attributes;

  return (
    <>
      <CustomPageHead
        title={`${SITE_NAME}: ${title}`}
        description={`${removeMarkdown(content).slice(0, 150)}`}
      />

      <PostPage post={post} />
    </>
  );
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

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getPostsBySlug(context.params.slug);
  const post = posts.data.length > 0 ? posts.data[0] : null;

  return {
    props: {
      post,
    },
  };
};
