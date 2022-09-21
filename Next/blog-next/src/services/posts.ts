import { POSTS_URL } from '../config';
import type { AllPostsData } from '../@types/posts';
import { fetchJson } from '../utils/fetchJson';

export async function getAllPosts(): Promise<AllPostsData> {
  const posts = await fetchJson<AllPostsData>(POSTS_URL);

  return posts;
}
