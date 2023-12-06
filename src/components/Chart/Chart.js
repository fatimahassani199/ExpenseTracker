import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  let amountArray = props.dataPoints.map((dataPoint) => dataPoint.value);
  let maxAmount = Math.max(...amountArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxAmount}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
