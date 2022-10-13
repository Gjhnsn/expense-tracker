import React from "react";
import { MonthTitle } from "./styles";

const Month = () => {
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  return (
    <>
      <MonthTitle>{currentMonth.toUpperCase()}</MonthTitle>
    </>
  );
};

export default Month;
