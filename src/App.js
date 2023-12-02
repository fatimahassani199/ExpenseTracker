import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const INIT_EXPENSES = [
  {
    title: "Car insurance",
    amount: 188.55,
    date: new Date(2023, 5, 23),
  },
  {
    title: "New Phone",
    amount: 200.2,
    date: new Date(2023, 11, 2),
  },
  {
    title: "Drive lessence",
    amount: 250,
    date: new Date(2023, 11, 20),
  },
  {
    title: "Camping",
    amount: 50.6,
    date: new Date(2024, 0, 23),
  },
];
function App() {
  // use the state to reload the componenet when and item is added
  const [expenses, setExpenses] = useState(INIT_EXPENSES);

  const addNewExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
