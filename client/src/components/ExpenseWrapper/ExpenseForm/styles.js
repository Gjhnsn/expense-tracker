// expense form styles

import styled, { keyframes } from "styled-components";
import { BiDollar } from "react-icons/bi";

export const Container = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  border-radius: 10px;
  padding: ${(props) => (props.openExpenseForm ? "25px" : "0 25px")};
  width: 48%;
  color: white;
  font-size: 30px;
  color: ${(props) => props.theme.headerText};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  height: ${(props) => props.openExpenseForm && "100%"};
  transition: all 0.2s ease-in;
`;

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin-right: 15px;
  }

  p {
    align-self: flex-end;
    margin-right: auto;
    color: ${(props) => props.theme.mutedColor};
    font-size: 20px;
    padding-bottom: 3px;
  }
`;

export const DueDate = styled.div.attrs({
  className: "react-select-container",
})`
  width: 100%;
  color: ${(props) => props.theme.headerText};
  font-size: 12px;
`;

export const customSelectStyles = {
  option: (provided, state) => ({
    backgroundColor: `#343434`,
    borderBottom: "1px solid #959595",
    color: `#D9D9D9`,
    padding: 10,
    fontSize: `12px`,
    "&:hover": {
      backgroundColor: "#5B7861",
    },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    "&:hover": {
      color: `#252525`,
      cursor: "pointer",
    },
  }),
  menuList: (provided) => ({
    ...provided,
    backgroundColor: `${(props) => props.theme.mutedColor}`,
    padding: 0,
    width: "100%",
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "13px",
  }),
  valueContainer: () => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingLeft: "9px",
  }),

  control: () => ({
    // none of react-select's styles are passed to <Control />

    width: "100%",
    height: "33px",
    display: "flex",
    alignItems: "center",
    backgroundColor: `#343434`,
    borderRadius: "5px",
    fontSize: `14px`,
  }),
  singleValue: (_, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { opacity, transition };
  },
};

export const AmountWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  span {
    font-size: 20px;
    position: absolute;
    padding: 0 9px;
    height: 100%;
    display: flex;
    align-items: center;
    border-right: 1px solid ${(props) => props.theme.headerText};
  }

  input {
    width: 100%;
    padding-left: 38px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const DollarIcon = styled(BiDollar)`
  position: absolute;
  font-size: 14px;
  margin-left: 9px;
  color: ${(props) => props.theme.headerText};
  border-right: 1px solid white;
`;

export const RecurBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 30px;
`;

export const YesOption = styled.div`
  box-shadow: 0px 0px 0px 3px inset ${(props) => props.theme.body};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 5px;
  background-color: ${(props) => {
    if (props.recurringPayment === null) {
      return;
    } else if (props.recurringPayment) {
      return props.theme.body;
    }
  }};
  cursor: pointer;
`;

export const NoOption = styled.div`
  box-shadow: 0px 0px 0px 3px inset ${(props) => props.theme.body};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 5px;
  background-color: ${(props) => {
    if (props.recurringPayment === null) {
      return;
    } else if (!props.recurringPayment) {
      return props.theme.body;
    }
  }};
  cursor: pointer;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButton = styled.div`
  background-color: ${(props) => props.theme.body};
  padding: 5px 30px;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  margin-top: auto;
`;

const onStart = keyframes`
{
  0% {
      opacity: 0;
      transform: translateY(15px);
  }
100% {
    transform: translateY(0);
    opacity: 1;
}
}`;

export const ErrorMsg = styled.div`
  font-size: 16px;
  align-self: center;
  margin-right: 10px;
  color: ${(props) => props.theme.mutedColor};
  animation: ${onStart} 0.5s 1 ease forwards;
`;
