//expense list styles

import styled, { keyframes } from "styled-components";
import { SlRefresh } from "react-icons/sl";
import { AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { motion } from "framer-motion";

export const Container = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  border-radius: 10px;
  padding: 25px;
  width: 48%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
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

  & div :first-child {
    display: inline-block;
    margin-right: 10px;
  }

  & :last-child {
    margin-left: auto;
  }
`;

export const RecurIcon = styled(SlRefresh)`
  color: ${(props) => props.theme.mutedColor};
  font-size: 12px;
`;

export const NoDateIcon = styled(AiOutlineMinus)`
  color: ${(props) => props.theme.mutedColor};
  font-size: 16px;
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  cursor: pointer;

  &:hover {
    color: #ed5e68;
    transition: color 0.2s ease;
  }
`;

export const Footer = styled.div`
  width: 100%;
  bottom: 0;
  text-align: right;
  color: ${(props) => props.theme.mutedColor};
  margin-top: auto;
  padding: 25px 10px 0 0;
  border-top: 1px solid ${(props) => props.theme.body};
`;

const showDelete = keyframes`
{
  0% {
      opacity: 0;
      transform: translateY(-75px);
  }
100% {
    transform: translateY(0);
    opacity: 1;
}
}`;

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
