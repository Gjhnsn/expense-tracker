import React from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseList from "./ExpenseList/ExpenseList";
import { HeightContainer, Wrapper } from "./styles";

const ExpenseWrapper = () => {
  return (
    <Wrapper>
      <HeightContainer>
        <ExpenseList />
        <ExpenseForm />
      </HeightContainer>
    </Wrapper>
  );
};

export default ExpenseWrapper;
