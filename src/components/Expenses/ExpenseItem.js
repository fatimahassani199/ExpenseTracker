// useState is a function (React hook) that allows us to defined values as state
// where the changes to thies values should reflect in the component to be called again
// they must be called directly incide the component function
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
// you can use just one attrebute in react funstion which is (props)
function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
