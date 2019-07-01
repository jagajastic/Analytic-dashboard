import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';

function Piechart() {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    axios.get('/api/stats').then(data => {
      setData(data.data.data);
    });
  }, []);

  const state = {
    chartData: {
      labels: ['Cash Trip', 'Non-Cash Trips'],
      datasets: [
        {
          label: 'Population (millions)',
          backgroundColor: ['#5ad007', '#ffce56'],
          data: [data.noOfCashTrips, data.noOfNonCashTrips],
        },
      ],
    },
  };
  return (
    <div className="chart shadow-lg p-4  rounded bg-light">
      <h4>Trips</h4>
      <Doughnut data={state.chartData} option={{}} />
    </div>
  );
}

export default Piechart;
