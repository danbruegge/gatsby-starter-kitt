import React, { FC } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import { theme } from "-/theme";
import { fonts } from "-/fonts";
import { Head } from "-/components/Head";
import { Container } from "-/components/Container";
import { Kitt } from "-/components/Kitt";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${fonts}

  html, body {
    background-color: ${(props) => props.theme.background.color};
    color: ${(props) => props.theme.text.color};
    font-family: "Fira Mono", monospace;
    font-size: ${(props) => props.theme.fontSize.mobile};
  }

  ${({ theme }) => `
    @media (${theme.breakpoints.desktop}) {
      html, body {
        font-size: ${theme.fontSize.desktop};
      }
    }
  `}
`;

interface Props {
  title: string;
  pageContext: GatsbyTypes.SitePageContext;
}

export const Layout: FC<Props> = ({ children, title, pageContext }) => (
  <>
    <Head title={title ?? pageContext?.frontmatter?.title} />
    <ThemeProvider theme={theme}>
      <>
        <header>
          <Kitt />
        </header>
        <main>
          <Container>{children}</Container>
        </main>
        <GlobalStyle />
      </>
    </ThemeProvider>
  </>
);

// `require.resolve` needs an default export to wrap `<Layout />` around and mdx file.
export default Layout;
