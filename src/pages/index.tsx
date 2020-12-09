import React, { FC } from "react";
import { graphql } from "gatsby";

import { Layout } from "-/components/Layout";
import { Link } from "-/components/Link";

interface Props {
  data: GatsbyTypes.Site;
}

const IndexPage: FC<Props> = ({ data }) => (
  <Layout
    title={data.siteMetadata?.pages?.index?.title || "Default Index Title"}
  >
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
