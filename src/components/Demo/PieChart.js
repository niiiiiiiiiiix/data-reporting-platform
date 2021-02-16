import React from "react";
import { Pie, defaults } from "react-chartjs-2";
import "chart.piecelabel.js"; //https://github.com/emn178/chartjs-plugin-labels
import {
  allGenders,
  countGender,
  percentageGender,
} from "./Dataset/genderData";

console.log(percentageGender);

defaults.global.legend.position = "bottom";

const PieChart = () => {
  return (
    <div>
      <Pie
        data={{
          labels: allGenders,

          datasets: [
            {
              data: countGender,
              backgroundColor: [
                "#003f5c",
                "#2f4b7c",
                "#665191",
                "#a05195",
                "#d45087",
                "#f95d6a",
                "#ff7c43",
                "#ffa600",
              ],
              borderColor: [
                "#003f5c",
                "#2f4b7c",
                "#665191",
                "#a05195",
                "#d45087",
                "#f95d6a",
                "#ff7c43",
                "#ffa600",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          pieceLabel: {
            render: "percentage",
            fontColor: "#fff",
            precision: 1,
            position: "border",
            fontStyle: "bold",
          },
          title: {
            display: true,
            text: "Gender Distribution",
          },
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  display: false,
                },
                gridLines: {
                  display: false,
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
