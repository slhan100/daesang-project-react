import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const PolarAreaChart = ({ title = '극좌표 영역 차트', data, options = {} }) => {
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
    scales: {
      r: {
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <PolarArea data={data} options={{ ...defaultOptions, ...options }} />
    </div>
  );
};

export default PolarAreaChart; 