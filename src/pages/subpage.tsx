import React, { FC } from "react";
import { graphql } from "gatsby";

import { Metadata } from "-/types/metadata";
import { Layout } from "-/components/Layout";
import { Link } from "-/components/Link";

interface SubpageProps {
  subpage: {
    title: string;
  };
}

const Subpage: FC<Metadata<SubpageProps>> = ({ data }) => {
  const page = data.site.siteMetadata.pages.subpage;

  return (
    <Layout title={page.title}>
      <Link to={"/"} color="secondary">
        Go to /
      </Link>
    </Layout>
  );
};

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
