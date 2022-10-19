import { useQuery } from "@apollo/client";
import React from "react";
import { GET_EXPENSES } from "../../../graphql/graphql";
import {
  Container,
  Footer,
  GridLayout,
  Header,
  RecurIcon,
  ScrollContainer,
} from "./styles";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const ExpenseList = () => {
  const { loading, data } = useQuery(GET_EXPENSES);

  // replace with spinner
  if (loading) return <p>Loading...</p>;

  const expenses = data?.getExpenses.map((expense) => {
    return (
      <li key={expense.name}>
        <GridLayout>
          <div>
            <p>{expense.name}</p>
            {expense.recurring === true && <RecurIcon />}
          </div>
          <p>{expense.dueDate}</p>
          <p>{expense.amount}</p>
          <p>
            <AiOutlineEdit style={{ cursor: "pointer" }} />{" "}
            <AiOutlineDelete style={{ cursor: "pointer" }} />
          </p>
        </GridLayout>
      </li>
    );
  });

  return (
    <Container>
      <Header style={{ borderBottom: "1px solid black" }}>
        <h3>Name</h3>
        <h3>Due</h3>
        <h3>Amount</h3>
        <h3>Action</h3>
      </Header>
      <ScrollContainer>
        <ul>{expenses}</ul>
      </ScrollContainer>
      <Footer>
        <p>Total: $2,330</p>
      </Footer>
    </Container>
  );
};

export default ExpenseList;
