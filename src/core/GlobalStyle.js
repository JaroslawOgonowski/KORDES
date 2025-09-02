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
    width: 100%;
    
  
};

*, ::after, ::before {
  box-sizing: inherit;
};

html {
  scroll-behavior: smooth;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  margin: 0;
    overflow-x: hidden;
}
`

