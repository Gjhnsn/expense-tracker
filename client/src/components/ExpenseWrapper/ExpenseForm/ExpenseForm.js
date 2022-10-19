import React, { useState } from "react";
import { BsPlusSquare, BsXSquare } from "react-icons/bs";
import Select from "react-select";

import {
  Container,
  DueDate,
  FormContainer,
  FormHeader,
  NoOption,
  RecurBox,
  SubmitButton,
  YesOption,
  customSelectStyles,
  AmountWrapper,
  DollarIcon,
} from "./styles";

const ExpenseForm = ({ openExpenseForm, setOpenExpenseForm }) => {
  const [recurringPayment, setRecurringPayment] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [expenseName, setExpenseName] = useState("");
  const [dateChosen, setDateChosen] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const options = [];

  for (let i = 1; i <= 31; i++) {
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
    setDateChosen(date);
  };

  console.log(recurringPayment);

  const closeAndClearForm = () => {
    setOpenExpenseForm(false);
    setExpenseName('');
    setDateChosen('');
    setExpenseAmount('');
  }

  return (
    <>
      <Container openExpenseForm={openExpenseForm}>
        {!openExpenseForm && (
          <BsPlusSquare onClick={() => setOpenExpenseForm(true)} />
        )}
        {openExpenseForm && (
          <FormContainer>
            <FormHeader>
              <h3>Add New Expense</h3>
              <BsXSquare onClick={closeAndClearForm} />
            </FormHeader>

            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Expense name..."
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
            />

            <label>Due Date</label>

            <Select
              options={dueDateOptions}
              styles={customSelectStyles}
              maxMenuHeight={200}
              placeholder="Select date..."
              isClearable={true}
              value={dateChosen}
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
                placeholder="Expense total..."
                onKeyPress={preventNegative}
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
                onInput={(e) => naturalRound(e)}
              />
            </AmountWrapper>
            <label>Recurring Payment?</label>
            <RecurBox>
              <NoOption
                recurringPayment={recurringPayment}
                isSelected={isSelected}
                onClick={() => [
                  setRecurringPayment(false),
                  setIsSelected(true),
                ]}
              >
                <p>No</p>
              </NoOption>
              <YesOption
                recurringPayment={recurringPayment}
                isSelected={isSelected}
                onClick={() => [setRecurringPayment(true), setIsSelected(true)]}
              >
                <p>Yes</p>
              </YesOption>
            </RecurBox>
            <SubmitButton>
              <p>Submit</p>
            </SubmitButton>
          </FormContainer>
        )}
      </Container>
    </>
  );
};

export default ExpenseForm;
