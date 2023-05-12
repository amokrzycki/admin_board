import React from "react";
import { Header } from "../../components/index.jsx";
import { default as LineChart } from "../../components/Charts/LineChart.jsx";

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Inflation" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
