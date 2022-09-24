import Link from 'next/link';
import * as Styled from './styles';

interface PostCardProps {
  title: string;
  slug: string;
  cover: string;
}

export function PostCard({ title, slug, cover }: PostCardProps) {
  return (
    <Styled.Container>
      <Styled.Cover>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>
            <Styled.Image src={cover} alt={title} />
          </a>
        </Link>
      </Styled.Cover>

      <Styled.Heading>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>{title}</a>
        </Link>
      </Styled.Heading>
    </Styled.Container>
  );
}
