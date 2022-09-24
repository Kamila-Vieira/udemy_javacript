import { CATEGORIES_URL } from '../../config';
import { fetchJson } from '../../utils/fetchJson';
import { AllCategoriesData } from '../../@types/categories';

export async function getAllCategories(query = ''): Promise<AllCategoriesData> {
  const searchURL = `${CATEGORIES_URL}${query}`;

  const categories = await fetchJson<AllCategoriesData>(searchURL);

  if (!categories || !categories?.data) {
    return { data: [], meta: null };
  }

  return categories;
}
