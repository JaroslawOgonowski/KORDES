import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Saira', sans-serif;
  position: relative;
  margin: 0;
  padding: 0;
  background-color:rgb(253, 253, 253);
  color:rgb(22, 2, 2);
  overflow-x: hidden;
};

*, ::after, ::before {
  box-sizing: inherit;
};

html {
  scroll-behavior: smooth;
}
`

