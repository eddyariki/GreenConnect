import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChart() {
  return (
    <Line
      data={{
        labels: [
          "06/09",
          "07/09",
          "08/09",
          "09/09",
          "10/09",
          "11/09",
          "12/09",
          "13/09",
          "14/09",
          "15/09",
          "16/09",
          "17/09",
          "18/09",
          "19/09",
        ],
        datasets: [
          {
            data: [
              0, 100, 200, -100, 0, -200, 0, 300, 500, 900, 300, 1200, 1400,
              1100,
            ],
            label: "P/L ($)",
            borderColor: "#818181",
            fill: false,
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
        elements: {
          line: {
            tension: 0.4,
          },
        },
      }}
    />
  );
}
