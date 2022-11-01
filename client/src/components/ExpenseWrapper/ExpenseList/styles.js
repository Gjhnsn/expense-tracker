//expense list styles

import styled, { keyframes } from "styled-components";
import { SlRefresh } from "react-icons/sl";
import { AiOutlineMinus, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { motion } from "framer-motion";
import { uiSize } from "../../../utils/mobileScreens";

export const Container = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  border-radius: 10px;
  padding: 25px;
  width: 48%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  @media ${uiSize.tablet} {
    width: 650px;
    min-height: none;
  }

  @media ${uiSize.mobileLandscape} {
    width: 100%;
  }

`;

export const ScrollContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
`;

export const Header = styled.div`
  width: 100%;
  margin: 0;
  padding: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 0.5fr;
  margin-bottom: 5px;
  color: ${(props) => props.theme.mutedColor};
  border-bottom: 1px solid ${(props) => props.theme.body};

  @media ${uiSize.tablet} {
    grid-template-columns: 1.5fr 1fr 1fr 0.5fr;
  }

  & :last-child {
    margin-left: auto;
  }
`;

export const GridLayout = styled.div`
  color: ${(props) =>
    props.currentExpense === props.expense && props.deleteModal
      ? "#ed5e68"
      : props.theme.headerText};
  width: 100%;
  margin: 0;
  padding: 10px 10px 15px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 0.5fr;
  margin-bottom: 5px;
  border-bottom: 1px solid #585858;

  @media ${uiSize.tablet} {
    align-items: center;
    grid-template-columns: 1.5fr 1fr 1fr 0.5fr;
    font-size: 16px;
  }

`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.p`
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${uiSize.bigTablet} {
    max-width: 140px;
  }

  @media ${uiSize.mobileLandscape} {
    max-width: 100px;
  }

  @media ${uiSize.mobile} {
    max-width: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const RecurIcon = styled(SlRefresh)`
  color: ${(props) => props.theme.mutedColor};
  font-size: 12px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const NoDateIcon = styled(AiOutlineMinus)`
  color: ${(props) => props.theme.mutedColor};
  font-size: 16px;
`;

export const AmountP = styled.p`
  max-width: 95px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${uiSize.mobile} {
    max-width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ActionIconBar = styled.div`
  margin-right: 5px;
  margin-left: auto;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media ${uiSize.tablet} {
    margin-right: 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  cursor: pointer;
  margin-left: 20px;

  @media ${uiSize.tablet} {
    margin-left: 0;
    margin-top: 10px;
  }

  &:hover {
    color: #ed5e68;
    transition: color 0.2s ease;
  }
`;

export const EditIcon = styled(AiOutlineEdit)`
  cursor: pointer;
  &:hover {
    color: #5B7861;
  }
`

export const Footer = styled.div`
  width: 100%;
  bottom: 0;
  text-align: right;
  color: ${(props) => props.theme.mutedColor};
  margin-top: auto;
  padding: 25px 10px 0 0;
  border-top: 1px solid ${(props) => props.theme.body};
`;

export const DeleteDialoge = styled(motion.div)`
  position: absolute;
  padding: 10px;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 10px;
  background-color: #ed5e68;
  color: ${(props) => props.theme.headerText};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const ConfirmBar = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  font-size: 45px;

  p {
    font-size: 16px;
    margin-bottom: 15px;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;
