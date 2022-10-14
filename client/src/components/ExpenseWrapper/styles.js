import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   flex-flow: column;
`

export const HeightContainer = styled.div`
     border: 1px solid purple;
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    grid-auto-rows: min-content; */
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`