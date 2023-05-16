import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

:root {
  --green-credifit: #00919d;
  --orange-credifit: #ff7500;
  --grey-credifit: #edf0ef;
  --white-fixed: #FFFFFF;
  --grey-bg: #f5f5f5;
}

body, html,label,input,textarea {
 font-family: "Inter", sans-serif;
}

h1,h2,h3,h4,h5,h6 {
  font-family: "Lexend", sans-serif;
}

li {
    list-style: none;
}

button {
    cursor: pointer;
    :hover {
    filter: brightness(75%);
    transition: 0.3s;
    }
    :active {
    filter: brightness(1.6);
    transition: 0.3s;
    }
}

`;

export default GlobalStyle;
