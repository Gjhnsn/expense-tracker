import React from "react";
import { useQuery, useMutation } from "@apollo/client";

import { AnimatePresence } from "framer-motion";
import { ConfirmBar, DeleteDialoge } from "./styles";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { DELETE_EXPENSE, GET_EXPENSES } from "../../graphql/graphql";

const DeleteModal = ({ currentExpense, deleteModal, setDeleteModal }) => {
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

  const modalVariants = {
    enter: { width: "150px" },
    exit: {
      width: "0%",
      padding: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  const handleDelete = () => {
    deleteExpense({ variables: { expenseId: currentExpense.id } });
    setDeleteModal((prev) => !prev);
  };

  return (
    <AnimatePresence>
      {deleteModal && (
        <DeleteDialoge
          key="modal"
          variants={modalVariants}
          initial={"exit"}
          animate={"enter"}
          exit={"exit"}
          transition={{ stiffness: 250 }}
        >
          <ConfirmBar
            key="content"
            initial={{ y: -75, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 75, opacity: 0 }}
            transition={{ delay: 0.2, stiffness: 250 }}
          >
            <p>Delete Expense?</p>
            <div>
              <AiOutlineCloseCircle
                onClick={() => setDeleteModal((prev) => !prev)}
                style={{ cursor: "pointer" }}
              />
              <AiOutlineCheckCircle
                onClick={() => handleDelete()}
                style={{ cursor: "pointer" }}
              />
            </div>
          </ConfirmBar>
        </DeleteDialoge>
      )}
    </AnimatePresence>
  );
};

export default DeleteModal;
