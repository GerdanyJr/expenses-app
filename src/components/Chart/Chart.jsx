import './Chart.css'
import ChartBar from "./ChartBar"

const Chart = props => {
    const valueArray = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...valueArray);
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    value={dataPoint.value}
                    key={dataPoint.label}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />)}
        </div>
    )
};

export default Chart;