import { URLFilterPostsByField } from '../../config';
import type { AllPostsData } from '../../@types/posts';
import { fetchJson } from '../../utils/fetchJson';

export async function getAllPostsByCategory(
  query = '',
  category: string,
): Promise<AllPostsData> {
  const URL = URLFilterPostsByField('category', category);
  const searchURL = `${URL}${query}`;
  const posts = await fetchJson<AllPostsData>(searchURL);

  if (!posts) {
    return { data: [], meta: null };
  }

  return posts;
}
