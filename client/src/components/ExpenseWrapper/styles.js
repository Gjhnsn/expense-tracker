import styled from "styled-components";

export const Wrapper = styled.div`
   position: relative;
   height: 100%;
   border: 1px solid purple;
   display: flex;
   flex-direction: column;
   flex-grow: 1;
`

export const HeightContainer = styled.div`
    position: absolute;
    min-height: 500px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    top: 0;
    bottom: 0;
    padding-bottom: 100px;
`