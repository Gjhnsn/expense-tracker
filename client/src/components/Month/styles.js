import styled from "styled-components";
import { uiSize } from "../../utils/mobileScreens";

export const MonthTitle = styled.h2`
    color: ${(props) => props.theme.headerText};
    font-size: 104px;
    font-weight: 400;
    margin: 20px 0 20px 0;

    @media ${uiSize.tablet} {
        margin: 50px auto 20px auto;
    }

    @media ${uiSize.mobileLandscape} {
    font-size: 64px;
  }
`