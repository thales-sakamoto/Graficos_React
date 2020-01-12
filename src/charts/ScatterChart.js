import React, { Component } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line
} from "recharts";

const data = {
  list1: [
    { x: 10, y: 180 },
    { x: 20, y: 200 },
    { x: 50, y: 380 },
    { x: 70, y: 50 },
    { x: 90, y: 200 },
    { x: 210, y: 50 }
  ],
  list2: [
    { x: 10, y: 600 },
    { x: 50, y: 1000 },
    { x: 60, y: 800 },
    { x: 65, y: 450 },
    { x: 80, y: 380 },
    { x: 90, y: 450 },
    { x: 110, y: 615 },
    { x: 140, y: 480 },
    { x: 240, y: 400 },
    { x: 320, y: 600 }
  ],
  list3: [
    { x: 6, y: 120 },
    { x: 35, y: 1100 },
    { x: 350, y: 1350 },
    { x: 420, y: 1250 }
  ],
  divider1: [{ x: 0, y: 380 }, { x: 1000, y: 380 }],
  divider2: [{ x: 0, y: 650 }, { x: 1000, y: 650 }]
};

export default class Chart extends Component {
  render() {
    const { list1, list2, list3 } = data;
    return (
      <ScatterChart
        width={600}
        height={400}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey={"x"} name="stature" unit="cm" />
        <YAxis type="number" dataKey={"y"} name="weight" unit="kg" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Line type="monotone" dataKey={list2} stroke="#8884d8" />
        <Scatter
          name="Median"
          data={list1}
          fill="#8884d8"
          line
          shape="circle"
        />
        <Scatter name="Hypo" data={list2} fill="red" line shape="circle" />
        <Scatter name="Hypo" data={list3} fill="green" shape="circle" />
        <Scatter
          data={data.divider1}
          fill="orange"
          line
          shape={<div />}
          legendType="none"
        />
        <Scatter
          data={data.divider2}
          fill="orange"
          line
          shape={<div />}
          legendType="none"
        />
      </ScatterChart>
    );
  }
}
