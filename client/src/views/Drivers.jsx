import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import VehicleDetails from '../components/vehicleData';

const Drivers = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/drivers').then(response => {
      let result = response.data.data;
      setData(result);
      setCurrentDriver(result[0]);
    });
  }, []);
  const drivers = data;
  const [currentDriver, setCurrentDriver] = useState([]);
  function currentDriverDetails(id) {
    const currentDriver = drivers.find(driver => driver.driverID === id);
    setCurrentDriver(currentDriver);
  }
  return (
    <div className="row m-md-2 bd-less">
      <div className="anyClass col-md-2">
        <ul>
          {drivers.map((driver, index) => {
            return (
              <Link key={index} to={`/drivers/${driver.driverID}`}>
                <li onClick={() => currentDriverDetails(driver.driverID)}>
                  <span className="text-circle">
                    {driver.name[0].toUpperCase()}
                  </span>{' '}
                  {driver.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="col bg-white shadow-top">
        <div className="m-md-5 p-md-4 m-4 ">
          <h1>{currentDriver.name || ''}</h1>
          <p>{new Date(currentDriver.DOB).toLocaleDateString() || ' '}</p>
          <p>{currentDriver.gender}</p>
          <p>{currentDriver.phone}</p>
          <p>{currentDriver.email}</p>
          <p>{currentDriver.address}</p>
          <p>{currentDriver.agent}</p>
          <p>
            <VehicleDetails vehicleID={currentDriver.vehicleID} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Drivers;
