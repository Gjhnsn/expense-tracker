import React, { useState } from "react";
import { Backdrop } from "../DeleteModal/styles";
import ExpenseWrapper from "../ExpenseWrapper/ExpenseWrapper";
import Header from "../Header/Header";
import Month from "../Month/Month";
import { Content, Wrapper } from "./styles";

const Layout = () => {
    const [deleteModal, setDeleteModal] = useState(false);

  return (
    <Wrapper>
      {deleteModal && window.innerWidth < "1024" && <Backdrop />}
      <Header />
      <Content>
        <Month />
        <ExpenseWrapper deleteModal={deleteModal} setDeleteModal={setDeleteModal}/>
      </Content>
    </Wrapper>
  );
};

export default Layout;
