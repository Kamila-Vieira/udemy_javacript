import { POSTS_URL } from '../../config';
import type { AllPostsData } from '../../@types/posts';
import { fetchJson } from '../../utils/fetchJson';

export async function getAllPosts(query = ''): Promise<AllPostsData> {
  const searchURL = `${POSTS_URL}${query}`;

  const posts = await fetchJson<AllPostsData>(searchURL);

  if (!posts || !posts?.data) {
    return { data: [], meta: null };
  }

  return posts;
}
