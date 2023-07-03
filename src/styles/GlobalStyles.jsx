import { css } from '@emotion/react';
// import { theme } from 'styles/theme';

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    ${
      '' /* background-image: linear-gradient(to bottom right, #4e54c8, #8f94fb); */
    }
    ${'' /* background-color: #212121; */}
    ${'' /* background: ${theme.colors.mainBackground}; */}
    min-height: 100vh;

    font-style: normal;

    background-image: url('https://cdn.pixabay.com/photo/2013/07/13/12/34/book-159880_1280.png');
    background-size: cover; /* Растягивает изображение на всю площадь фона */
    background-repeat: no-repeat;
    color: yellow;

    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
      pointer-events: none;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
    ${'' /* box-shadow: ${({ theme }) => theme.shadows.small}; */}
    ${'' /* text-shadow: ${theme.shadows.small}; */}
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    ${'' /* color: white; */}
  }

  ul,
  ol {
    padding-left: 0;
    margin: 0;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
