import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --green-1: #50AC25;
  --green-2: #006A40;
  --blue-1: #003F7C;
  --blue-2: #0052A1;
  --blue-3: #002A53;
  --black-1: #000000;
  --black: #000000;
  --black-2: #1C1C1C;
  --golden-1: #8B7842;
  --golden-2: #bfaf7b;
  --beige-1: #faf2f2;
  --grey-7: #dadada;
  --grey-6: #eef1fd;
  --grey-5: #EBEFFF;
  --grey-4: #121214;
  --grey-3: #212529;
  --grey-2: #FcFcFc;
  --grey-1: #898988;
  --grey-0: #F1F1F1;
  --white: #FFFFFF;
  --red-2: #ff9090;
  --red-1: #E83F5B;
  --green-3: #3FE864;
  --transparent: #ffffff00;
  --shadow: rgba(0, 0, 0, 0.25);
}
  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: Inter, sans-serif;
    background-color: var(--black-2);
  }

  a, button {
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }

  `

export const ResetCSS = createGlobalStyle`

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ::-webkit-scrollbar {
  width: 7px;
  }
  ::-webkit-scrollbar-track {
    background: var(--grey-0);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--white);
    border-radius: 20px;     
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`