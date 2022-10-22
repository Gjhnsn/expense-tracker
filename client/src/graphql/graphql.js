import { gql } from "@apollo/client";

export const GET_EXPENSES = gql`
  query getExpenses {
    getExpenses {
      id
      name
      dueDate
      recurring
      amount
    }
  }
`;

export const ADD_EXPENSE = gql`
  mutation addExpense(
    $name: String!
    $dueDate: String
    $recurring: Boolean
    $amount: String!
  ) {
    addExpense(
      expenseInput: {
        name: $name
        dueDate: $dueDate
        recurring: $recurring
        amount: $amount
      }
    ) {
      id
      name
      dueDate
      recurring
      amount
    }
  }
`;

export const UPDATE_EXPENSE = gql`
  mutation updateExpense(
    $expenseId: ID!
    $name: String!
    $dueDate: String
    $recurring: Boolean
    $amount: String!
  ) {
    updateExpense(
      expenseInput: {
        expenseId: $expenseId
        name: $name
        dueDate: $dueDate
        recurring: $recurring
        amount: $amount
      }
    ) {
      id
      name
      dueDate
      recurring
      amount
    }
  }
`
// ----- id or string
export const DELETE_EXPENSE = gql`
  mutation ($expenseId: String!) {
    deleteExpense(expenseId: $expenseId) {
      id
      name
      dueDate
      recurring
      amount
    }
  }
`
