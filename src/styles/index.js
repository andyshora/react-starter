import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  ${styledNormalize}

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    font-size: 62.5%;
    font-family: Lato, sans-serif;
  }
  body {
    font-family: Lato, sans-serif;
    min-width: 375px;
    line-height: 1;
    font-size: 1.4rem;
    font-weight: 300;
    overflow-x: hidden;
  }
  h1, h2, h3, h4, h5 {
    font-family: Poppins, sans-serif;
    font-weight: 300;
  }
  p {
    line-height: 1.4;
    font-size: 1.6rem;
    margin: 1rem 0;
  }
  h1 {
    font-size: 4.6rem;
    line-height: 5.4rem;
    margin: 1.6rem 0 1rem;
  }
  h2 {
    font-size: 2.4rem;
    line-height: 3rem;
    margin: 1rem 0;
    font-weight: 400;
  }
  h3, h4, h5 {
    font-size: 1.8rem;
    line-height: 2.4rem;
    text-transform: uppercase;
    margin: 1.6rem 0 1rem;
    font-weight: 400;
    letter-spacing: 1px;
  }
  .nav-link--active {
    text-decoration: underline;
    font-weight: bold;
  }
  button {
    background: black;
    text-transform: uppercase;
    color: white;
    padding: 1rem 1.5rem;
    font-size: 1.3rem;
    line-height: 2rem;
    border: none;
    outline: none;
    cursor: pointer;
    white-space: nowrap;
    display: flex;
    text-decoration: none;

    > span {
      text-decoration: none;
    }

    > svg {
      margin-right: 1rem;
    }
  }
  button:active {
    background: rgb(66, 66, 66);
    box-shadow: inset 0 0 10px black;
  }
  button:disabled {
    background: rgb(222, 222, 222);
    cursor: default;
  }
  input[type=text],
  input[type=email] {
    padding: 1rem;
    border: 1px solid black;
    line-height: 1.8rem;
    outline: none;
    min-width: 180px;

    &:active, &:focus {
      border: 1px solid ${theme.colors.a1};
    }

    &:disabled {
      opacity: 0.2;
    }
  }
`
