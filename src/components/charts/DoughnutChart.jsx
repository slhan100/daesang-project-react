import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const DoughnutChart = ({ title = '도넛 차트', data, options = {} }) => {
  const defaultOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <div className="chart-container">
      <Doughnut data={data} options={{ ...defaultOptions, ...options }} />
    </div>
  );
};

export default DoughnutChart; 