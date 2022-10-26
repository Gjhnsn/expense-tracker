import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_EXPENSES } from "../../../graphql/graphql";
import {
  Container,
  DeleteIcon,
  Footer,
  GridLayout,
  Header,
  NoDateIcon,
  RecurIcon,
  ScrollContainer,
} from "./styles";
import { AiOutlineEdit } from "react-icons/ai";
import DeleteModal from "../../DeleteModal/DeleteModal";

const ExpenseList = ({
  setIsEdit,
  setOpenExpenseForm,
  setCurrentExpense,
  setExpenseName,
  setRecurringPayment,
  setDateChosen,
  setExpenseAmount,
  setErrorMessage,
  currentExpense,
}) => {
  const [deleteModal, setDeleteModal] = useState(false);

  const { loading, data, refetch } = useQuery(GET_EXPENSES);

  // replace with spinner
  if (loading) return <p>Loading...</p>;

  const date = new Date();
  const currMonth = date.getMonth() + 1;

  const onEdit = (expense) => {
    setOpenExpenseForm(true);
    setIsEdit(true);
    setErrorMessage(false);
    setCurrentExpense(expense);
    setExpenseName(expense.name);
    setDateChosen(expense.dueDate);
    setExpenseAmount(expense.amount);
    setRecurringPayment(expense.recurring);
  };

  const handleOpenDeleteModal = (expense) => {
    setDeleteModal((prev) => !prev);
    setCurrentExpense(expense);
    setOpenExpenseForm(false);
  };

  const expenses = [...data?.getExpenses]
    .sort((a, b) => (a.dueDate === "n/a" ? -1 : a.dueDate - b.dueDate))
    .map((expense) => {
      return (
        <li order={expense.amount} key={expense.name}>
          <GridLayout
            currentExpense={currentExpense}
            expense={expense}
            deleteModal={deleteModal}
          >
            <div>
              <p>{expense.name}</p>
              {expense.recurring === true && <RecurIcon />}
            </div>
            <p>
              {expense.dueDate.length < 1 || expense.dueDate.length > 2 ? (
                <NoDateIcon />
              ) : (
                currMonth + "/" + expense.dueDate
              )}
            </p>
            <p>${Number(expense.amount).toFixed(2)}</p>
            <p>
              <AiOutlineEdit
                onClick={() => onEdit(expense)}
                style={{ cursor: "pointer" }}
              />{" "}
              <DeleteIcon
                onClick={() => handleOpenDeleteModal(expense)}
                style={{ marginLeft: "10px" }}
              />
            </p>
          </GridLayout>
          <DeleteModal
            setOpenExpenseForm={setOpenExpenseForm}
            currentExpense={currentExpense}
            expense={expense}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
          />
        </li>
      );
    });

  // ------ convert expense amount to numbers and add total of array
  const totalOfExpenses = () => {
    if (data.getExpenses.length > 0) {
      const expenseAmountList = data?.getExpenses.map(
        (expense) => expense.amount
      );
      const convertedAmountList = expenseAmountList?.map((price) =>
        Number(price)
      );
      const expenseTotal = convertedAmountList?.reduce((accumulator, value) => {
        return accumulator + value;
      });
      return expenseTotal.toFixed(2);
    }
  };

  return (
    <Container>
      <Header>
        <h3>Name</h3>
        <h3>Due</h3>
        <h3>Amount</h3>
        <h3>Action</h3>
      </Header>
      <ScrollContainer>
        <ul>{expenses}</ul>
      </ScrollContainer>
      <Footer>
        {data?.getExpenses.length > 0 ? (
          <p>Total: ${totalOfExpenses()}</p>
        ) : (
          <p>$0.00</p>
        )}
      </Footer>
    </Container>
  );
};

export default ExpenseList;
