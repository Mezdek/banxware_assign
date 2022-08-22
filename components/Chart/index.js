import style from "./style.module.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Index({ balanceHistory }) {
  const dates = [];
  const balance = [];
  for (let i = 0; i < balanceHistory.length; i++) {
    dates.push(balanceHistory[i].date);
    balance.push(balanceHistory[i].balance);
  }
  const data = {
    labels: dates,
    datasets: [
      {
        label: "Balance",
        backgroundColor: "rgb(112, 191, 130)",
        borderColor: "rgb(112, 191, 130)",
        data: balance,
      },
    ],
  };
  return (
    <div className={style.main}>
      <Line data={data} />
    </div>
  );
}
