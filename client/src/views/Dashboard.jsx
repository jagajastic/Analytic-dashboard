import React from 'react';

import Chart from '../components/Charts/Chart';
import Piechart from '../components/Charts/Piecash';
import Piegender from '../components/Charts/Piegender';
import Table from '../components/Table';
import './dashboard.css';

const Dashboard = props => {
  return (
    <div className="container p-md-4 mt-md-4 mb-md-4">
      <div className="row pb-md-4">
        <div className="col">
          <Piechart />
        </div>
        <div className="col">
          <Piegender />
        </div>
        <div className="col bg-light shadow-lg rounded">
          <Chart />
        </div>
      </div>
      <div className="row">
        <h3>Trips</h3>
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
