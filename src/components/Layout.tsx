import React, { FC } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { normalize } from "styled-normalize";

import { theme } from "-/theme";
import { fonts } from "-/fonts";
import { Head } from "-/components/Head";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${fonts}

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
  }

  main > h1 {
    text-align: center;
  }

  blockquote {
    background-color: ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.light};
    padding: 0 1em;
    border-left: 0.5em solid ${(props) => props.theme.colors.primary};
    border-radius: 0.5em;
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
  const data = useStaticQuery<GatsbyTypes.Query>(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Head title={title} />
      <ThemeProvider theme={theme}>
        <>
          <main>
            <h1>{data.site?.siteMetadata?.title ?? "No Title"}</h1>
            {children}
          </main>
          <GlobalStyle />
        </>
      </ThemeProvider>
    </>
  );
};

// `require.resolve` needs an default export to wrap `<Layout />` around and mdx file.
export default Layout;
