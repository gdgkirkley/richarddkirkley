import React from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import OpenSansRegularWoff2 from "../../fonts/open-sans-v18-latin-regular.woff2";
import OpenSansRegularWoff from "../../fonts/open-sans-v18-latin-regular.woff";
import OpenSansRegularItalicWoff2 from "../../fonts/open-sans-v18-latin-italic.woff2";
import OpenSansRegularItalicWoff from "../../fonts/open-sans-v18-latin-italic.woff";

import PlayfairDisplayWoff2 from "../../fonts/playfair-display-v21-latin-regular.woff2";
import PlayfairDisplayWoff from "../../fonts/playfair-display-v21-latin-regular.woff";
import Header from "./Header";

const theme = {
  primary: "#950714",
  primaryDark: "#54040B",
  primaryLight: "#A10815",
  accent: "#002F47",
  grey1: "#222222",
  grey2: "#3B3B3B",
  grey3: "#535353",
  grey4: "#6E6E6E",
  grey5: "#878787",
  grey6: "#A1A1A1",
  grey7: "#BABABA",
  grey8: "#D4D4D4",
  grey9: "#EDEDED",
  grey10: "#F6F6F6",
  fontSize: {
    smallPrint: "0.64rem",
    information: "0.8rem",
    reading: "1rem",
    emphasis: "1.25rem",
    highLevel: "1.563rem",
    subHeading: "1.953rem",
    title: "2.441rem",
    display: "3.052rem",
  },
};

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      src: local(''),
          url(${OpenSansRegularWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url(${OpenSansRegularWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    @font-face {
      font-family: 'Open Sans';
      font-style: italic;
      font-weight: 400;
      src: local(''),
          url(${OpenSansRegularItalicWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url(${OpenSansRegularItalicWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    @font-face {
      font-family: 'Playfair Display';
      font-style: normal;
      font-weight: 400;
      src: local(''),
          url(${PlayfairDisplayWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url(${PlayfairDisplayWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    html {
        box-sizing: border-box;
        font-size: 18px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1rem;
        color: ${theme.grey3};
        line-height: 1.5;
        font-family: "Open Sans", Arial, Helvetica, sans-serif;
        font-weight: 400;
        min-height: 100vh;
        background: ${theme.grey10};
    }
    /* Remove margin for the main div that Gatsby mounts into*/
    > div {
        margin-top: 0;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: "Playfair Display", 'Times New Roman', Times, serif;
      font-weight: 400;
      color: ${theme.grey1};
      margin: 0;
      & * {
          margin-top: 0.5rem;
      }
    }

    h1 {
        font-size: ${theme.fontSize.display};
    }

    h2 {
        font-size: ${theme.fontSize.title};
    }

    h3 {
        font-size: ${theme.fontSize.subHeading};
    }

    h4 {
        font-size: ${theme.fontSize.highLevel};
    }

    nav {
      a {
        color: ${theme.grey3};

        &:hover {
            color: ${theme.primary};
        }
      }
    }

    a {
        text-decoration: none;
        color: ${theme.primary};

        &:hover {
            color: ${theme.primaryDark};
        }
    }

    main {
        margin: 2rem auto 4rem;
        max-width: 90vw;
        width: ${theme.maxWidth};
        z-index: 2;
      
      & h1 {
        &:nth-of-type(1) {
          margin: 2rem 0;
        }
      }
    }

    footer {
      text-align: center;
      color: ${theme.grey6};
      padding: 20px 0px;
      font-weight: 300;
    }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <html lang="en" />
        <title>Richard D Kirkley Photography</title>
        <meta name="description" content="Photography by Richard D Kirkley" />
      </Helmet>
      <Header />
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} Richard D Kirkley & Family</footer>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Layout;
