import styled from "styled-components";

export const Wrapper = styled.div`
   position: relative;
   height: 100%;
   border: 1px solid purple;
   display: flex;
   flex-direction: column;
`

export const HeightContainer = styled.div`
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    grid-auto-rows: min-content; */
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`