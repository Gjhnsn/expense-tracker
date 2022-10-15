import React from "react";
import { Container, Footer, GridLayout, Header, HeightContainer } from "./styles";

const ExpenseList = () => {
  return (
    <Container>
      <Header style={{ borderBottom: "1px solid black" }}>
        <h3>Name</h3>
        <h3>Due</h3>
        <h3>Amount</h3>
        <h3 style={{ justifySelf: "flex-end" }}>Action</h3>
      </Header>
      <ul>
        <li>
          <GridLayout>
            <p>rent</p>
            <p>10/17</p>
            <p>$1800</p>
            <p></p>
          </GridLayout>
        </li>
        <li>
          <GridLayout>
            <p>rent</p>
            <p>10/17</p>
            <p>$1800</p>
            <p></p>
          </GridLayout>
        </li>
      </ul>
      <Footer>
        <p>Total: $2,330</p>
      </Footer>
    </Container>
  );
};

export default ExpenseList;
