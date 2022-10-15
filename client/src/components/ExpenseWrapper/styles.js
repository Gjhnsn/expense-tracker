import styled from "styled-components";

export const Wrapper = styled.div`
   position: relative;
   height: 100%;
   border: 1px solid purple;
   display: flex;
   flex-direction: column;
   flex-grow: 1;
   margin-bottom: 100px;
`

export const HeightContainer = styled.div`
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    grid-auto-rows: min-content; */
    position: absolute;
    min-height: 300px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    top: 0;
    bottom: 0;
`