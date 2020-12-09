import React, { FC } from "react";
import { graphql } from "gatsby";

import { Layout } from "-/components/Layout";
import { Link } from "-/components/Link";

interface Props {
  data: GatsbyTypes.Site;
}

const Subpage: FC<Props> = ({ data }) => (
  <Layout
    title={data.siteMetadata?.pages?.index?.title || "Default Subpage Title"}
  >
    <Link to={"/"} color="secondary">
      Go back to /
    </Link>
  </Layout>
);

export default Subpage;

export const query = graphql`
  query SubpagePageQuery {
    site {
      siteMetadata {
        pages {
          subpage {
            title
          }
        }
      }
    }
  }
`;
