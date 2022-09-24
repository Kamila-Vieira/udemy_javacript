import { POSTS_URL } from '../../config';
import type { AllPostsData } from '../../@types/posts';
import { fetchJson } from '../../utils/fetchJson';

export async function getPostsBySlug(
  slug: string | string[],
): Promise<AllPostsData> {
  const slugString: string = Array.isArray(slug) ? slug[0] : slug;
  const searchURL = `${POSTS_URL}&filters[slug]=${slugString}`;

  const posts = await fetchJson<AllPostsData>(searchURL);

  if (!posts) {
    return { data: [], meta: null };
  }

  return posts;
}
