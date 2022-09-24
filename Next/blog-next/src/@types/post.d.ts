export type ID = number;

export interface PostAuthor {
  data: {
    id: ID;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

export interface PostCategory {
  data: {
    id: ID;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

export interface PostCover {
  data: {
    id: ID;
    attributes: PostCoverAttributes;
  };
}

interface PostCoverAttributes extends PostCoverFormat {
  alternativeText: string;
  caption: string;
  previewUrl: string | null;
  provider: string;
  createdAt: string;
  updatedAt: string;
  formats: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    large: PostCoverFormat;
  };
}

export interface PostCoverFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: PostCoverProvider;
}

type PostCoverProvider = {
  public_id: string;
  resource_type: string;
};

export interface PostData {
  id: ID;
  attributes: PostDataAttributes;
}

export interface PostSimpleDataAttributes {
  title: string;
  slug: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface PostDataAttributes extends PostSimpleDataAttributes {
  author: PostAuthor;
  category: PostCategory;
  cover: PostCover;
}
