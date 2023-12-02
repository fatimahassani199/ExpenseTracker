import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenceHandler = (expenceDate) => {
    const newExpenceDate = {
      ...expenceDate,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(newExpenceDate);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenceData={saveExpenceHandler} />
    </div>
  );
};

export default NewExpense;
