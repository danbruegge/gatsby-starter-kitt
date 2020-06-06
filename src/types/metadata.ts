export interface Metadata<T> {
  data: {
    site: {
      siteMetadata: {
        pages: T;
      };
    };
  };
}
