import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  ChartData,
  ChartOptions,
  Chart,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { TransactionCategory } from "../../utility/enums";
Chart.register(ArcElement, Tooltip, Legend);

interface IDetailsProps {
  type: TransactionCategory;
}

const data: ChartData<"doughnut"> = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
  datasets: [
    {
      label: "Votes",
      data: [12, 19, 3, 5, 2], // Dummy data values
      backgroundColor: [
        "#FF6384", // Red
        "#36A2EB", // Blue
        "#FFCE56", // Yellow
        "#4BC0C0", // Green
        "#9966FF", // Purple
      ],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#4BC0C0",
        "#9966FF",
      ],
    },
  ],
};

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.label || "";
          const value = context.raw || 0; // Raw data value
          return `${label}: ${value}`;
        },
      },
    },
  },
};

const Details: React.FC<IDetailsProps> = ({ type }) => {
  return (
    <div
      className={`p-4 bg-white shadow-lg rounded-lg border-l-4 ${
        type === TransactionCategory.Income
          ? "border-green-500"
          : "border-red-500"
      }`}
    >
      <h2 className="text-lg font-bold mb-4">{type}</h2>
      <div className="mb-4">
        <p className="text-2xl font-semibold">${200}</p>
      </div>
      <div className="flex justify-center">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default Details;
