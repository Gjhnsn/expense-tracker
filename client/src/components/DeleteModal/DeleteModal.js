import React from "react";
import { useMutation } from "@apollo/client";

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

  const layoutShift = window.innerWidth > "1024";

  const modalVariants = layoutShift ? {
    enter: { width: "150px" },
    exit: {
      width: "0%",
      padding: 0,
      transition: {
        delay: 0.5,
      },
    },
  } : {
    enter: { width: "250px", height: '150px' },
    exit: {
      width: "0%",
      padding: 0,
      transition: {
        delay: 0.5,
      },
    },
  }
  ;

  const modalContentVariant = layoutShift ? {
    initial: { y: -75, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    exit: {
      y: 75, opacity: 0
    }
  } : {
    initial: { y: -25, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    exit: {
      y: 25, opacity: 0
    }
  }

  const handleDelete = () => {
    deleteExpense({ variables: { expenseId: currentExpense.id } });
    setDeleteModal((prev) => !prev);
  };

  return (
    <AnimatePresence>
      {deleteModal && (
        <>
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
            variants={modalContentVariant}
            initial={'initial'}
            animate={'enter'}
            exit={'exit'}
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
        </>
      )}
    </AnimatePresence>
  );
};

export default DeleteModal;
