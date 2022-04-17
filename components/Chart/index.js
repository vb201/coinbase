import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { Wrapper } from "./Chart.styles";

const data = {
  labels: [
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
  ],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#3773f5",
      borderColor: "#3773f5",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#3773f5",
      pointBackgroundColor: "#3773f5",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#3773f5",
      pointHoverBorderColor: "#3773f5",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [60, 90, 80, 75, 56, 66, 45, 67, 97, 72],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const BalanceChart = () => {
  return (
    <Wrapper>
      <Line data={data} options={options} width={400} height={150} />
    </Wrapper>
  );
};

export default BalanceChart;
