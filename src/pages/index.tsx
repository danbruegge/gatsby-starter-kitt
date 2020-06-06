import React, { FC } from "react";
import { graphql } from "gatsby";

import { Metadata } from "-/types/metadata";
import { Layout } from "-/components/Layout";
import { Link } from "-/components/Link";

interface IndexProps {
  index: {
    title: string;
  };
}

const IndexPage: FC<Metadata<IndexProps>> = ({ data }) => {
  const page = data.site.siteMetadata.pages.index;

  return (
    <Layout title={page.title}>
      <Link to="/subpage">Go to /subpage</Link>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        pages {
          index {
            title
          }
        }
      }
    }
  }
`;
