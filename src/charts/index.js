import React from "react";

import BarChart from "./BarChart";
import JointScatterChart from "./JointScatterChart";
import ScatterChart from "./ScatterChart";
import PieChartTwoLevel from "./PieChartTwoLevel";

const Charts = () => (
  <div>
    <PieChartTwoLevel />
    <BarChart />
    <JointScatterChart />
    <ScatterChart />
  </div>
);

export default Charts;
