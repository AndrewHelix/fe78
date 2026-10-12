import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
  }
/* #root {
  width: 1126px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  border-inline: 1px solid var(--border);
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
} */

body {
  margin: 0;
}

h1,
h2 {
  font-weight: 500;
}

h1 {
  font-size: 56px;
  letter-spacing: -1.68px;
  margin: 32px 0;
}
h2 {
  font-size: 24px;
  line-height: 118%;
  letter-spacing: -0.24px;
  margin: 0 0 8px;
}
p {
  margin: 0;
}
`;
