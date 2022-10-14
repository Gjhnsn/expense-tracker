//expense list styles

import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.secondaryColor};
    border-radius: 10px;
    padding: 25px;
    width: 48%;
    height: 100%;
    
`

export const GridLayout = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr .5fr;
    margin-bottom: 15px;
`