import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart() {
  return (
    <Bar
      data={{
        labels: ["moneyline", "spread", "o/u"],
        datasets: [
          {
            label: "bets won (%)",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
            data: [0.8, 0.15, 0.05],
          },
        ],
      }}
      height={200}
      width={200}
      options={{
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              count: 4,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      }}
    />
  );
}
