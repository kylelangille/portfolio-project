import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* CSS Reset from Josh W. Comeau: https://www.joshwcomeau.com/css/custom-css-reset/ */
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#root,
#__next {
  isolation: isolate;
}

//
:root {
    --darkest: #1e2022;
    --dark: #52616a;
    --light: #c9d6de;
    --lightest: #f0f5f9;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Atkinson Hyperlegible', sans-serif;
    background: var(--dark);
}

`;
