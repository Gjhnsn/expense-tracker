//expense list styles

import styled from "styled-components";
import { SlRefresh } from 'react-icons/sl'


export const Container = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  border-radius: 10px 10px 0 0;
  padding: 25px;
  width: 48%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  border: green 1px solid;
`;

export const ScrollContainer = styled.div`
  border: 1px solid yellow;
  height: 100%;
  overflow-y: scroll;
`

export const Header = styled.div`
  width: 100%;
  margin: 0;
  padding: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 0.5fr;
  margin-bottom: 5px;
  color: ${(props) => props.theme.mutedColor};

  & :last-child {
    margin-left: auto;
  }
`;

export const GridLayout = styled.div`
  width: 100%;
  margin: 0;
  padding: 10px 10px 15px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 0.5fr;
  margin-bottom: 5px;
  color: ${(props) => props.theme.headerText};
  border-bottom: 1px solid #585858;

  & div :first-child {
    display: inline-block;
    margin-right: 10px;
  } 

  & :last-child {
    margin-left: auto;
  } 

  & p :last-child {
    margin-left: 10px;
  }
`; 

export const RecurIcon = styled(SlRefresh)`
  color: ${(props) => props.theme.mutedColor};
  font-size: 12px;
`

export const Footer = styled.div`
  width: 100%;
  bottom: 0;
  text-align: right;
  color: ${(props) => props.theme.mutedColor};
  margin-top: auto;
  padding: 25px 10px 0 0;
  border-top: 1px solid black;
`;
