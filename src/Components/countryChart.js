import React from "react";
import { Bar } from "react-chartjs-2";

const Charts = (probs) => {
  const data = {
    labels: ["Confirm", "Recover", "Death"],
    datasets: [
      {
        label: "people",
        data: [probs.confirmedCases, probs.recoveredCases, probs.totalDeaths],
        borderColor: ["rgba(256,206,86,0.2)"],
        backgroundColor: [
          "rgba(0, 0, 255, 0.5)",
          "rgba(0, 255, 0, 0.5)",
          "rgba(255, 0, 0, 0.5)",
        ],
      },
    ],
  };
  const options = {
    legend: { display: false },
    title: { display: true, text: `Current state in ${probs.country}` },
  };
  return <Bar options={options} data={data} />;
};
export default Charts;
