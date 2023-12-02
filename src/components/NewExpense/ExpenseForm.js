import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredExpense, setEnteredExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  // functions handler
  const enteredTitleHandler = (event) => {
    setEnteredExpense((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const enteredAmountHandler = (event) => {
    setEnteredExpense((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };
  const enteredDateHandler = (event) => {
    setEnteredExpense((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let newExpense = {
      ...enteredExpense,
      date: new Date(enteredExpense.date),
    };

    props.onSaveExpenceData(newExpense);

    setEnteredExpense({
      title: "",
      amount: "",
      date: "",
    });
  };

  // two way binding  value={enteredExpense.title} we can listen to the changes and pass a new value back into the input
  // The return
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredExpense.title}
            onChange={enteredTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredExpense.amount}
            onChange={enteredAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={enteredExpense.date}
            onChange={enteredDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
