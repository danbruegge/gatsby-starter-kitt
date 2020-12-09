import React, { FC } from "react";
import { graphql } from "gatsby";

import { Metadata, Pages } from "-/types/metadata";
import { Layout } from "-/components/Layout";
import { Link } from "-/components/Link";

interface IndexProps {
  index: {
    title: string;
  };
}

const IndexPage: FC<Metadata<Pages<IndexProps>>> = ({ data }) => {
  const page = data.site.siteMetadata.pages.index;

  return (
    <Layout title={page.title}>
      <nav>
        <ul>
          <li>
            <Link to="/subpage">/subpage</Link>
          </li>
          <li>
            <Link to="/mdx-page">/mdx-page</Link>
          </li>
        </ul>
      </nav>
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
