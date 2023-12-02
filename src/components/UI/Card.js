import "./Card.css";

function Card(props) {
  // gives you the right to add as many classes as you want
  const classes = "card " + props.className;
  // give you the right to add tags between this component tag
  return <div className={classes}>{props.children}</div>;
}

export default Card;
