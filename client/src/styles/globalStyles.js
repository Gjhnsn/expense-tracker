import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: #343434;
        height: 100%;
    }

    h1 {
        color: #D9D9D9;
        font-size: 36px;
        font-family: 'Sora', sans-serif;
        font-weight: 300;
    }

    h3 {
        font-weight: 300;
        font-family: 'Sora', sans-serif;
    }

    label {
        font-size: 24px;
        margin-top: 25px;
        margin-bottom: 7px;
        }

    input {
        padding: 9px;
        background-color: ${(props) => props.theme.body};
        border: none;
        border-radius: 5px;
        color: white;
    }

    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
    outline: none;
    }   

    ul {
        list-style: none;
    }
    
    a {
        text-decoration: none;
        color: ${(props) => props.theme.headerText};
    }
`;

export const theme = {
  body: "#343434",
  headerText: "#D9D9D9",
  secondaryColor: "#434343",
  mutedColor: "#959595",
};
