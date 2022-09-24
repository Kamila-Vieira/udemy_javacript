export const API_URL = 'https://agile-beach-37189.herokuapp.com';

export const POSTS_URL = `${API_URL}/api/posts?populate=*`;
export const CATEGORIES_URL = `${API_URL}/api/categories?populate=*`;
export const AUTHORS_URL = `${API_URL}/api/authors?populate=*`;

export const SITE_NAME = 'Meu Blog Next';
export const SITE_URL = 'https://blog-next-strapi.netlify.app';

//https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering
export const URLFilterPostsByField = (field: string, value?: string) => {
  return `${POSTS_URL}&filters[${field}][name]=${value}`;
};
