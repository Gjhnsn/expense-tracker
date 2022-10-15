import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: #343434;
        height: 100%;
    }

    h1 {
        color: #D9D9D9;
        font-size: 36px;
    }

    h3 {
        font-weight: 300;
    }

    ul {
        list-style: none;
    }
`;

export const theme = {
  body: "#343434",
  headerText: '#D9D9D9',
  secondaryColor: '#434343',
  mutedColor: '#959595'
};
