import React, { useState } from "react";
import "../styles/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
//ID generator
import { v4 as uuidv4 } from "uuid";

const NewExpense = (props) => {
  //Getting added ExpenseData
  const expenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: uuidv4(),
    };
    //Lifting added expenseData up to App.js
    props.onSaveExpense(expenseData);
    setIsAddingNewExpense(false);
  };
  const [isAddingNewExpense, setIsAddingNewExpense] = useState(false);

  const openAddExpenseWindow = () => {
    setIsAddingNewExpense(true);
  };
  const closeAddExpenseWindow = () => {
    setIsAddingNewExpense(false);
  };
  return (
    <div className="new-expense">
      {!isAddingNewExpense && (
        <button onClick={openAddExpenseWindow}>add a New Expense</button>
      )}
      {isAddingNewExpense && (
        <ExpenseForm
          onExpenseDataSubmit={expenseDataHandler}
          onCancel={closeAddExpenseWindow}
        />
      )}
    </div>
  );
};

export default NewExpense;
