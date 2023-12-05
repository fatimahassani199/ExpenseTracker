import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isAddingExpense, setIsAddingExpense] = useState(false);
  const saveExpenceHandler = (expenceDate) => {
    const newExpenceDate = {
      ...expenceDate,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(newExpenceDate);
    setIsAddingExpense(false);
  };

  const addingNewExpenseHandler = () => setIsAddingExpense(true);
  const cancelHandlerClicker = () => setIsAddingExpense(false);
  return (
    <div className="new-expense">
      {!isAddingExpense && (
        <button onClick={addingNewExpenseHandler}>Add New Expense</button>
      )}
      {isAddingExpense && (
        <ExpenseForm
          onSaveExpenceData={saveExpenceHandler}
          cancelHandler={cancelHandlerClicker}
        />
      )}
    </div>
  );
};

export default NewExpense;
