import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

function Chart() {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    axios.get('/api/stats').then(data => {
      setData(data.data.data);
    });
  }, []);

  const state = {
    chartData: {
      labels: ['Total Bill', 'Cash Bill', 'Non-Cash Bill'],
      datasets: [
        {
          label: '# Earn',
          data: [
            data.billedTotal,
            data.cashBilledTotal,
            data.nonCashBilledTotal,
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
  };

  return (
    <div className="chart mt-md-3 bg-light">
      <h4>Total Earnings</h4>
      <Bar data={state.chartData} option={{}} />
    </div>
  );
}

export default Chart;
