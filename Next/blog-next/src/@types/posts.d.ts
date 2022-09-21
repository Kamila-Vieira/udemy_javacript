import type { PostData } from './post';

export interface AllPostsData {
  data: PostData[];
  meta: AllPostsMetadata;
}

export interface AllPostsMetadata {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
