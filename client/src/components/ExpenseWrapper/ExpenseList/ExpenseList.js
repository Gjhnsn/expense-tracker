import React from "react";
import { Container, GridLayout } from "./styles";

const ExpenseList = () => {
  return (
    <Container>
      <GridLayout style={{borderBottom: '1px solid black'}}>
        <h3>Name</h3>
        <h3>Due</h3>
        <h3>Amount</h3>
        <h3 style={{ justifySelf: "flex-end" }}>Action</h3>
      </GridLayout>
      <ul>
        <li>
          <GridLayout>hello</GridLayout>
        </li>
      </ul>
    </Container>
  );
};

export default ExpenseList;
