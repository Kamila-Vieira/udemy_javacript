import type { PostSimpleDataAttributes } from './post';

export interface AllCategoriesData {
  data: CategoryData[];
  meta: AllCategoriesMetadata;
}

export interface AllCategoriesMetadata {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface CategoryData {
  id: ID;
  attributes: CategoryDataAttributes;
}

export interface CategoryDataAttributes {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  posts: PostSimpleDataAttributes[];
}
