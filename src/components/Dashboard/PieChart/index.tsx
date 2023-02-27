import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";

interface PieChartProps {
  data: Array<Array<string | number>>;
  options: object;
}

const PieChart: React.FC<PieChartProps> = (props) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Chart
      chartType="PieChart"
      data={props.data}
      options={props.options}
      width="100%"
      height="400px"
      legendToggle
    />
  );
};

export default PieChart;
