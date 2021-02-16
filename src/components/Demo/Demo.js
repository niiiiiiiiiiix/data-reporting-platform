import React from "react";
import BarChart from "./BarChart";
import data from "./data";

function Demo() {
  return (
    <div>
      <h1>This is your demo page</h1>
      <div>
        <BarChart />
      </div>
      <div>
        <data />
      </div>
    </div>
  );
}

export default Demo;
