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

  // option for 2 decimals
  // function limitDecimalPlaces(e, count) {
  //   if (e.target.value.indexOf('.') == -1) { return; }
  //   if ((e.target.value.length - e.target.value.indexOf('.')) > count) {
  //     e.target.value = parseFloat(e.target.value).toFixed(count);
  //   }
  // }

  function naturalRound(e) {
    let dec = e.target.value.indexOf(".");
    let tooLong = e.target.value.length > dec + 3;
    // let invalidNum = isNaN(parseFloat(e.target.value));

    if (dec >= 0 && tooLong) {
      e.target.value = e.target.value.slice(0, -1);
    }
  }

  // prevent scroll for number increase
  //   document.addEventListener("wheel", function(event){
  //     if(document.activeElement.type === "number"){
  //         document.activeElement.blur();
  //     }
  // });

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
          <BsPlusSquare onClick={() => setOpenExpenseForm(true)} />
        )}
        {openExpenseForm && (
          <FormContainer>
            <FormHeader>
              {isEdit ? (
                <>
                  <h3>Edit Expense</h3>
                  <p>{currentExpense.name}</p>
                </>
              ) : (
                <h3>Add New Expense</h3>
              )}
              <BsXSquare onClick={closeAndClearForm} />
            </FormHeader>
            {/* 
---------------HERE
*/}
            <label>Name</label>
            <input
              type="text"
              name="name"
              key={isEdit ? currentExpense.name : 1}
              // placeholder="Expense name..."
              // defaultValue={isEdit ? currentExpense.name : expenseName}
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
            />

            <label>Due Date</label>

            <Select
              options={dueDateOptions}
              styles={customSelectStyles}
              maxMenuHeight={200}
              // placeholder={!isEdit && 'Select date...'}

              // value={dateChosen}
              key={isEdit && currentExpense.dueDate}
              // defaultValue={
              //   isEdit && {
              //     label: currentExpense.dueDate,
              //     value: currentExpense.dueDate,
              //   }
              // }
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
                // placeholder="Expense total..."
                onKeyPress={preventNegative}
                key={isEdit && currentExpense.amount}
                // defaultValue={isEdit ? currentExpense.amount : expenseAmount}
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
