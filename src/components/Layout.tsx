import React, { FC } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { theme } from "-/theme";
import { fonts } from "-/fonts";
import { Head } from "-/components/Head";

const GlobalStyle = createGlobalStyle`
  ${fonts}

  html, body {
    margin: 0;
  }

  body {
    background-color: ${(props) => props.theme.background.color};
    color: ${(props) => props.theme.text.color};
    font-family: "Fira Mono", monospace;
    font-size: ${(props) => props.theme.fontSize.mobile};
  }

  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
  }

  main > h1 {
    text-align: center;
  }

  ${({ theme }) => `
    @media (${theme.breakpoints.desktop}) {
      body {
        font-size: ${theme.fontSize.desktop};
      }
    }
  `}
`;

interface Props {
  title: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  const { site } = useStaticQuery(query);

  return (
    <>
      <Head title={title} />
      <ThemeProvider theme={theme}>
        <>
          <main>
            <h1>{site.siteMetadata.title}</h1>
            {children}
          </main>
          <GlobalStyle />
        </>
      </ThemeProvider>
    </>
  );
};

const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
