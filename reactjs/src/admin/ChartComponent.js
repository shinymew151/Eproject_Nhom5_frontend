import React, { useEffect, useRef } from 'react';

import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Create your chart configuration here
    const chartConfig = {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'My Dataset',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    // Create the chart using the chart configuration
    const chart = new Chart(ctx, chartConfig);

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
