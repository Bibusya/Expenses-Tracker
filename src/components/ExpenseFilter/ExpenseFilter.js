import React from "react";
import "../styles/ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const filteredYearHandler = (event) => {
    props.onFilter(event.target.value);
  };
  //Lifting selected year up to Expenses.js

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filteredYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
