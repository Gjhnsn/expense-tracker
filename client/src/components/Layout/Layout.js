import React from "react";
import ExpenseWrapper from "../ExpenseWrapper/ExpenseWrapper";
import Header from "../Header/Header";
import Month from "../Month/Month";
import { Text, Wrapper } from "./styles";

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Month />
      <ExpenseWrapper />
    </Wrapper>
  );
};

export default Layout;
