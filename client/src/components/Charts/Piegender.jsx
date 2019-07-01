import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

function Piegender() {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    axios.get('/api/stats').then(data => {
      setData(data.data.data);
    });
  }, []);

  const state = {
    chartData: {
      labels: ['Male', 'Female'],
      datasets: [
        {
          label: 'Population (millions)',
          backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
          data: [data.male, data.female],
        },
      ],
    },
  };
  return (
    <div className="chart shadow-lg p-4  rounded bg-light">
      <h4>Customers</h4>
      <Pie data={state.chartData} option={{}} />
    </div>
  );
}

export default Piegender;
