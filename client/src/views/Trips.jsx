import React, { useState, useEffect } from 'react';
import VehicleDetails from '../components/vehicleData';
const Trips = props => {
  const [driverData, setDriverData] = useState([]);
  const [dataState, setDataState] = useState([]);

  useEffect(() => {
    const details = fetch('/api/drivers')
      .then(data => {
        return data.json();
      })
      .then(data => {
        return data.data;
      });
    Promise.all([details]).then(data => setDataState(data));
  }, [props.match.params.id]);
  useEffect(() => {
    dataState.forEach(data => {
      data.forEach(id => {
        if (id.driverID === props.match.params.id) {
          setDriverData(id);
        }
      });
    });
  }, [dataState, props.match.params.id]);
  return (
    <div className="h100">
      <div className="container mt-md-4">
        <div className="m-md-5 shadow-lg bg-white rounded p-md-5 mt-4 p-4">
          <div className="bg p-md-4 p-4 m-2">
            <h3>{driverData.name}</h3>
          </div>
          <div className="bg p-md-4 p-4 m-2 row card-text">
            <div className="col">
              <b>Date of Birth</b>
              <p>{driverData.DOB}</p>
              <b>Gender</b>
              <p>{driverData.gender}</p>
              <b>Phone number</b>
              <p>{driverData.phone}</p>
            </div>
            <div className="col">
              <b>Email</b>
              <p>{driverData.email}</p>
              <b>Address</b>
              <p>{driverData.address}</p>
              <b>Agent</b>
              <p>{driverData.agent}</p>
            </div>
          </div>
          <div className="bg p-md-4 p-4 m-2">
            <b>Username</b>
            <p>{props.match.params.user}</p>
          </div>
          <div>
            <VehicleDetails vehicleID={driverData.vehicleID} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trips;
