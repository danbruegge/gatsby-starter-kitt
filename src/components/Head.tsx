import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  currentPath?: string;
  title: string;
}

export const Head: FC<Props> = ({ title, currentPath = "No Title" }) => {
  const { site, allMdx } = useStaticQuery(query);

  const pageTitle =
    title ??
    allMdx.edges
      .filter(
        (edge: GatsbyTypes.MdxEdge) =>
          edge?.node?.frontmatter?.slug === currentPath
      )
      .map((edge: GatsbyTypes.MdxEdge) => edge?.node?.frontmatter?.title)[0];

  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`} defer={false}>
      <title>{pageTitle}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
  );
};

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;
