import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

function Demo() {
  return (
    <div>
      <h1>This is your demo page</h1>
      <div>
        {/* <div>
          <BarChart />
        </div> */}
        <div>
          <PieChart />
        </div>
      </div>

      <div>
        <data />
      </div>
    </div>
  );
}

export default Demo;
