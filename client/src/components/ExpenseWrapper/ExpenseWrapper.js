import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_EXPENSES } from "../../graphql/graphql";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseList from "./ExpenseList/ExpenseList";
import { HeightContainer, Wrapper } from "./styles";

const ExpenseWrapper = () => {
  const { loading, data } = useQuery(GET_EXPENSES);
  const [currentExpense, setCurrentExpense] = useState(null);
  const [expenseName, setExpenseName] = useState("");
  const [dateChosen, setDateChosen] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [recurringPayment, setRecurringPayment] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);

  const [openExpenseForm, setOpenExpenseForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Wrapper>
      <HeightContainer>
        <ExpenseList
          setIsEdit={setIsEdit}
          setOpenExpenseForm={setOpenExpenseForm}
          setCurrentExpense={setCurrentExpense}
          setExpenseName={setExpenseName}
          setRecurringPayment={setRecurringPayment}
          setDateChosen={setDateChosen}
          setExpenseAmount={setExpenseAmount}
          setErrorMessage={setErrorMessage}
          currentExpense={currentExpense}
        />
        <ExpenseForm
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          expenseAmount={expenseAmount}
          setExpenseAmount={setExpenseAmount}
          dateChosen={dateChosen}
          setDateChosen={setDateChosen}
          recurringPayment={recurringPayment}
          setRecurringPayment={setRecurringPayment}
          expenseName={expenseName}
          setExpenseName={setExpenseName}
          setIsEdit={setIsEdit}
          isEdit={isEdit}
          openExpenseForm={openExpenseForm}
          setOpenExpenseForm={setOpenExpenseForm}
          currentExpense={currentExpense}
        />
      </HeightContainer>
    </Wrapper>
  );
};

export default ExpenseWrapper;
