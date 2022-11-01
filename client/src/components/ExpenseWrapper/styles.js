import styled from "styled-components";
import { uiSize } from "../../utils/mobileScreens";

export const Wrapper = styled.div`
   position: relative;
   max-height: 630px;
   display: flex;
   flex-direction: column;
   flex-grow: 1;

   @media ${uiSize.bigTablet} {
    height: auto;
}

@media ${uiSize.mobile} {

}
`

export const HeightContainer = styled.div`
    position: absolute;
    min-height: 450px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    top: 0;
    bottom: 0;
    padding-bottom: 80px;

@media ${uiSize.tablet} {
    position: relative;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end;
    min-height: auto;
    padding-bottom: 0;
    padding-bottom: 50px;
}
`