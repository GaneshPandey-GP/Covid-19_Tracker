import React from 'react';
import { Bar } from "react-chartjs-2";
import "../index.css";

const WorldChart = (probs)=>{
    const data = {
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
          {
            label:"People",
            data: [probs.worldConfirmed, probs.worldRecovered, probs.worldDeaths],
            borderColor: ["rgba(256,206,86,0.2)"],
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
          },
          
        ],
      };
    const options = 
    { 
        legend: {display: false},
        title: { display: true, text:`Current state of the World`},
    }
    return <Bar options={options} data={data} />;
}
export default WorldChart;