import React from "react";
import GenderPieChart from "./GenderPieChart";
import IncomeAreaChart from "./IncomeAreaChart";
import ShirtSizeBarChart from "./ShirtSizeBarChart";

function Demo() {
  return (
    <div>
      <h1>This is your demo page</h1>
      <div>
        <div>
          <GenderPieChart />
        </div>
        <div>
          <ShirtSizeBarChart />
        </div>
        <div>
          <IncomeAreaChart />
        </div>
      </div>

      <div>
        <data />
      </div>
    </div>
  );
}

export default Demo;
