import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
// import ExpensesList from './ExpensesList';
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  let filterInfoText = "2019, 2021 & 2022";

  if (filteredYear === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (filteredYear === "2020") {
    filterInfoText = "2019, 2021 & 2022";
  } else if (filterInfoText === "2021") {
    filterInfoText = "2019, 2020 & 2022";
  } else {
    filterInfoText = "2019, 2020 & 2021";
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />

        {/* <p>Data for years {filterInfoText} is hidden.</p> */}
      </div>
    </div>
  );
}

export default Expenses;
