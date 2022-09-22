export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const POSTS_URL = `${API_URL}/api/posts?populate=*`;
export const CATEGORIES_URL = `${API_URL}/api/categories?populate=*`;
export const AUTHORS_URL = `${API_URL}/api/authors?populate=*`;

export const SITE_NAME = 'Meu Blog Next';
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://127.0.0.1:3000';

//https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering
export const URLFilterPostsByField = (field: string, value?: string) => {
  return `${POSTS_URL}&filters[${field}][name]=${value}`;
};
