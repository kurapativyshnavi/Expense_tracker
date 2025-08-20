import React, { useEffect, useState } from 'react';
import CustomPieChart from '../Charts/CustomPieChart';
//import { COLORS } from '../../constants';

const COLORS = ["#875CF5","#FA2C37","#FF6900","#4f39f6"];

// Changed prop name from totalIncome to last60DaysTotal for clarity
const RecentIncomeWithChart = ({ data, last60DaysTotal }) => {
  const [chartData, setChartData] = useState([]);

  const prepareChartData = () => {
    const dataArr = data?.map((item) => ({
        name: item?.source,
        amount: item?.amount,
    }));

    setChartData(dataArr);
  }

  useEffect(() => {
    prepareChartData();
    return () => {};
  }, [data]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 60 Days Income</h5>
      </div>

      <CustomPieChart
        data={chartData}
        label="Last 60 Days Income"
        totalAmount={`$${last60DaysTotal}`}  // Changed from totalIncome to last60DaysTotal
        showTextAnchor
        colors={COLORS}
      />
    </div>
  );
};

export default RecentIncomeWithChart;
