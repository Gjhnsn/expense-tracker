import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import { DELETE_EXPENSE, GET_EXPENSES } from "../../../graphql/graphql";
import {
  Container,
  Footer,
  GridLayout,
  Header,
  NoDateIcon,
  RecurIcon,
  ScrollContainer,
} from "./styles";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const ExpenseList = ({
  setIsEdit,
  setOpenExpenseForm,
  setCurrentExpense,
  setExpenseName,
  setRecurringPayment,
  setDateChosen,
  setExpenseAmount,
  setErrorMessage,
}) => {
  const { loading, data, refetch } = useQuery(GET_EXPENSES);

  const [deleteExpense] = useMutation(DELETE_EXPENSE, {
    refetchQueries: [{ query: GET_EXPENSES }, "getExpenses"],
    update(cache, result) {
      const data = cache.readQuery({
        query: GET_EXPENSES,
      });
      const cachedExpenses = [...data.getExpenses];
      cachedExpenses.map(
        (obj) => result.data.deleteExpense.id === obj.id || obj
      );
      cache.writeQuery({
        query: GET_EXPENSES,
        data: { getExpenses: cachedExpenses },
      });
    },
  });

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

  const expenses = [...data?.getExpenses]
    .sort((a, b) => a.dueDate - b.dueDate)
    .map((expense) => {
      return (
        <li order={expense.amount} key={expense.name}>
          <GridLayout>
            <div>
              <p>{expense.name}</p>
              {expense.recurring === true && <RecurIcon />}
            </div>
            <p>
              {expense.dueDate !== "n/a" ? (
                currMonth + "/" + expense.dueDate
              ) : (
                <NoDateIcon />
              )}
            </p>
            <p>${Number(expense.amount).toFixed(2)}</p>
            <p>
              <AiOutlineEdit
                onClick={() => onEdit(expense)}
                style={{ cursor: "pointer" }}
              />{" "}
              <AiOutlineDelete
                onClick={() =>
                  deleteExpense({ variables: { expenseId: expense.id } })
                }
                style={{ cursor: "pointer", marginLeft: "10px" }}
              />
            </p>
          </GridLayout>
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
        {data?.getExpenses.length > 0 ? <p>Total: ${totalOfExpenses()}</p> : <p>$0.00</p>}
      </Footer>
    </Container>
  );
};

export default ExpenseList;
