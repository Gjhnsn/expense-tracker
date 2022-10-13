import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: #343434;
    }

    h1 {
        color: #D9D9D9;
        font-size: 36px;
    }
`;

export const theme = {
  body: "#343434",
  headerText: '#D9D9D9'
};
