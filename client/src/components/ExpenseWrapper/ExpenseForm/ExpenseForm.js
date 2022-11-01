import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { BsPlusSquare, BsXSquare } from "react-icons/bs";
import Select from "react-select";
import {
  GET_EXPENSES,
  ADD_EXPENSE,
  UPDATE_EXPENSE,
} from "../../../graphql/graphql";

import {
  Container,
  FormContainer,
  FormHeader,
  NoOption,
  RecurBox,
  SubmitButton,
  YesOption,
  customSelectStyles,
  AmountWrapper,
  Footer,
  ErrorMsg,
  CurrName,
  CloseButton,
} from "./styles";

const ExpenseForm = ({
  openExpenseForm,
  setOpenExpenseForm,
  isEdit,
  currentExpense,
  setIsEdit,
  expenseName,
  setExpenseName,
  recurringPayment,
  setRecurringPayment,
  dateChosen,
  setDateChosen,
  expenseAmount,
  setExpenseAmount,
  errorMessage,
  setErrorMessage,
  setDeleteModal
}) => {
  const [addExpense] = useMutation(ADD_EXPENSE, {
    refetchQueries: [{ query: GET_EXPENSES }, "getExpenses"],
  });

  const [updateExpense] = useMutation(UPDATE_EXPENSE, {
    refetchQueries: [{ query: GET_EXPENSES }, "getExpenses"],
  });

  const options = ["n/a"];

  const daysInMonth = () => {
    let now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  };

  console.log(daysInMonth());

  for (let i = 1; i <= daysInMonth(); i++) {
    options.push(i);
  }

  const dueDateOptions = options.map((date) => ({ value: date, label: date }));

  // ------------------------------ Validation

  const preventNegative = (e) => {
    var key = e.key;
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      e.preventDefault();
    }
  };

  function naturalRound(e) {
    let dec = e.target.value.indexOf(".");
    let tooLong = e.target.value.length > dec + 3;
    // let invalidNum = isNaN(parseFloat(e.target.value));

    if (dec >= 0 && tooLong) {
      e.target.value = e.target.value.slice(0, -1);
    }
  }

  const handleDateChange = (date) => {
    setDateChosen(date.value.toString());
  };

  const closeAndClearForm = () => {
    setOpenExpenseForm(false);
    setExpenseName("");
    setDateChosen("");
    setExpenseAmount("");
    setRecurringPayment(null);
    setIsEdit(false);
    setErrorMessage(false);
  };

  const validateExpense = () => {
    if (expenseName.trim() === "" || expenseAmount === "") {
      setErrorMessage(true);
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    if (validateExpense()) {
      setErrorMessage(false);
      if (isEdit) {
        updateExpense({
          variables: {
            expenseId: currentExpense.id,
            name: expenseName,
            dueDate: dateChosen,
            recurring: recurringPayment,
            amount: expenseAmount,
          },
        });
      } else {
        addExpense({
          variables: {
            name: expenseName,
            dueDate: dateChosen,
            recurring: recurringPayment,
            amount: expenseAmount,
          },
        });
      }
      closeAndClearForm();
    }
  };

  const renderErrorMessage = () => {
    return (
      <ErrorMsg>
        <p>Please enter an expense name and amount</p>
      </ErrorMsg>
    );
  };

  return (
    <>
      <Container openExpenseForm={openExpenseForm}>
        {!openExpenseForm && (
          <BsPlusSquare style={{cursor: 'pointer'}} onClick={() => [setOpenExpenseForm(true), setDeleteModal(false)]} />
        )}
        {openExpenseForm && (
          <FormContainer>
            <FormHeader>
              {isEdit ? (
                <>
                  <h3>Edit Expense</h3>
                  <CurrName>{currentExpense.name}</CurrName>
                </>
              ) : (
                <h3>Add New Expense</h3>
              )}
              <CloseButton onClick={closeAndClearForm} />
            </FormHeader>
            {/* 
---------------HERE
*/}
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              key={isEdit ? currentExpense.name : 1}
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
            />

            <label>Due Date</label>

            <Select
              options={dueDateOptions}
              styles={customSelectStyles}
              maxMenuHeight={200}
              key={isEdit && currentExpense.dueDate}
              value={{ label: dateChosen, value: dateChosen }}
              onChange={handleDateChange}
            />

            <label>Amount</label>
            <AmountWrapper>
              <span>$</span>
              <input
                type="number"
                name="amount"
                step="0.01"
                min="0.01"
                onKeyPress={preventNegative}
                key={isEdit && currentExpense.amount}
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
                onInput={(e) => naturalRound(e)}
              />
            </AmountWrapper>
            <label>Recurring Payment?</label>
            <RecurBox>
              <NoOption
                currentExpense={currentExpense && currentExpense}
                isEdit={isEdit}
                recurringPayment={recurringPayment}
                onClick={() => setRecurringPayment(false)}
              >
                <p>No</p>
              </NoOption>
              <YesOption
                currentExpense={currentExpense && currentExpense}
                isEdit={isEdit}
                recurringPayment={recurringPayment}
                onClick={() => setRecurringPayment(true)}
              >
                <p>Yes</p>
              </YesOption>
            </RecurBox>
            <Footer>
              {errorMessage && renderErrorMessage()}
              <SubmitButton onClick={onSubmit}>
                <p>Submit</p>
              </SubmitButton>
            </Footer>
          </FormContainer>
        )}
      </Container>
    </>
  );
};

export default ExpenseForm;
