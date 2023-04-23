import { createGlobalStyle } from "styled-components"

export const ResetStyle = createGlobalStyle`
  *:where(:not(iframe, canvas, img, video):not(svg *)) {
    all: unset;
    display: revert;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  ol, ul {
    list-style: none;
  }
`
