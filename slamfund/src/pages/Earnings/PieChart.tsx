import React from "react";
import { Pie } from "react-chartjs-2";

export default function PieChart() {
  return (
    <Pie
      data={{
        labels: ["Lakers", "Warriors", "TeamA", "TeamB"],
        datasets: [
          {
            label: "Win Ratio",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
            data: [0.5, 0.2, 0.2, 0.1],
          },
        ],
      }}
      height={200}
      width={200}
      options={{
        maintainAspectRatio: true,
        scales: {
          y: { display: false },
          x: { display: false },
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
