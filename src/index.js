import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Chart from "./charts";

function App() {
  return (
    <div className="App">
      <Chart />
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
