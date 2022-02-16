import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --pink-300: #E28888;
    --pink-100: #ff9b9d;

    --neutral-900: #333333;
    --neutral-700: #98959a;
    --neutral-300: #d3d3d3;
    --neutral-100: #E8E8E8;
    --neutral-0: #ffffff;

    --background-0: #374a51;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background-0);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  img {
    transition: transform 0.25s ease;
  }

  img:active {
    -webkit-transform: scale(1.4);
    transform: scale(1.4);
  }

  
  &::-webkit-scrollbar {
    width: 9px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: .25rem;
    background-color: #94979a;
  }
  `;
