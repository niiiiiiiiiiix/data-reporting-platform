import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: [],
        }}
        height={400}
        width={600}
      />
    </div>
  );
};

export default BarChart;
