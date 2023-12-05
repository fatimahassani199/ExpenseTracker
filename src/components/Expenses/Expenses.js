import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
function Expenses(props) {
  const [selectedFilterYear, setSelectedFilterYear] = useState("2020");
  const selectedYearHandler = (selectedYear) => {
    setSelectedFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedFilterYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        year={selectedFilterYear}
        onYearChnage={selectedYearHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
