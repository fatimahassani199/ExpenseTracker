import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  const [selectedFilterYear, setSelectedFilterYear] = useState("2020");
  const selectedYearHandler = (selectedYear) => {
    setSelectedFilterYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        year={selectedFilterYear}
        onYearChnage={selectedYearHandler}
      />
      {props.items.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
      ;
    </Card>
  );
}
export default Expenses;
