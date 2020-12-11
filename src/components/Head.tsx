import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  title: string;
}

export const Head: FC<Props> = ({ title }) => {
  const { site } = useStaticQuery(query);

  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`} defer={false}>
      <title>{title}</title>
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
  }
`;
