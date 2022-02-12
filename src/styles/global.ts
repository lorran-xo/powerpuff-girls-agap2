import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue-800: #247ED8;
    --blue-400: #5697D8;
    --blue-100: #E4EEFB;

    --red-1000: #CC0000;
    --red-400: #E50A24;
    --red-100: #F23C51;

    --green-800: #5C8C39;
    --green-400: #7AA65A;
    --green-200: #68B578;
    --green-100: #9AC879;

    --yellow-800: #FFD335;
    --yellow-400: #F6DB7B;
    --yellow-100: #FDFFF2;

    --orange-800: #F16E26;
    --orange-400: #F68335;
    --orange-100: #F69E62;

    --purple-800: #B92A9A;
    --purple-400: #B65FA3;
    --purple-100: #E5C5DE;

    --neutral-900: #E9E9E9;
    --neutral-800: #4D4F50;
    --neutral-700: #95989A;
    --neutral-600: #929597;
    --neutral-400: #C4C4C4;
    --neutral-100: #E8E8E8;
    --neutral-0: #ffffff;

    --background-0: #F9F9F9
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

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
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
