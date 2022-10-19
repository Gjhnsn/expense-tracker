import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseList from "./ExpenseList/ExpenseList";
import { HeightContainer, Wrapper } from "./styles";

const ExpenseWrapper = () => {

  const [openExpenseForm, setOpenExpenseForm] = useState(false)

  return (
    <Wrapper>
      <HeightContainer>
        <ExpenseList />
        <ExpenseForm openExpenseForm={openExpenseForm} setOpenExpenseForm={setOpenExpenseForm} />
      </HeightContainer>
    </Wrapper>
  );
};

export default ExpenseWrapper;
