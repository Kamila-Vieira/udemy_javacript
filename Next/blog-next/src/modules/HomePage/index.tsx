import type { HomePageProps } from './types';
import { Container } from './styles';
import { Main } from '../../components/Main';
import { PostCard } from '../../components/PostCard';

export function HomePage({ posts }: HomePageProps) {
  return (
    <Main>
      <Container>
        {posts.map(
          ({
            attributes: {
              title,
              slug,
              cover: { data: coverData },
            },
          }) => {
            const coverFormats = coverData?.attributes?.formats;
            const cover = coverFormats['small']?.url || '';
            return (
              <PostCard
                {...{
                  title,
                  slug,
                  cover,
                }}
                key={slug}
              />
            );
          },
        )}
      </Container>
    </Main>
  );
}
