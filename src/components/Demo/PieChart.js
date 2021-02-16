import React from "react";
import { Pie, defaults } from "react-chartjs-2";
import { allGenders, allShirtSize, allIncome } from "./Dataset/extractedData";

console.log(allGenders);
console.log(allShirtSize);
console.log(allIncome);

defaults.global.legend.position = "bottom";

const PieChart = () => {
  return (
    <div>
      <Pie
        data={{
          labels: ["Item 1", "Item 2", "Item 3"],

          datasets: [
            {
              label: "January",
              data: [12, 19, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(11, 156, 49, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(11, 156, 49, 1)",
              ],
              borderWidth: 1,
            },
            {
              label: "February",
              data: [30, 33, 20],
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(11, 156, 49, 0.8)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(11, 156, 49, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          title: {
            display: true,
            text: "Sales figure",
          },
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  max: 50,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default PieChart;
