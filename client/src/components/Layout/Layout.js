import React from "react";
import Header from "../Header/Header";
import Month from "../Month/Month";
import { Text, Wrapper } from "./styles";

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Month />
    </Wrapper>
  );
};

export default Layout;
