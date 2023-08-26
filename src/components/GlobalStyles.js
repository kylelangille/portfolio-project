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

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Atkinson Hyperlegible', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
}

::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background: #ececec;
}

::-webkit-scrollbar-thumb {
  background: #333;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;
