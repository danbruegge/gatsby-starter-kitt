export interface Metadata<T> {
  data: {
    site: {
      siteMetadata: T;
    };
  };
}

export interface Pages<T> {
  pages: T;
}
