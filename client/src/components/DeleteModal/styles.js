import styled from "styled-components";
import { motion } from "framer-motion";
import { uiSize } from "../../utils/mobileScreens";

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

  @media ${uiSize.tablet} {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
   }

  @media ${uiSize.tablet} {
    width: 100vw;
    height: 50%;
  }
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

export const Backdrop = styled.div`
  background-color: #322A31;
  position: fixed;
  opacity: 0.6;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: 1;
`;
