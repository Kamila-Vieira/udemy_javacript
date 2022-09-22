import { DiscussionEmbed } from 'disqus-react';
import { SITE_URL } from '../../config';
import { Container } from './styles';

interface PostCommentsProps {
  slug: string;
  title: string;
}

export function PostComments({ slug, title }: PostCommentsProps) {
  return (
    <Container>
      <DiscussionEmbed
        shortname="blog-next-5"
        config={{
          title,
          url: `${SITE_URL}/post/${slug}`,
          identifier: slug,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
}
