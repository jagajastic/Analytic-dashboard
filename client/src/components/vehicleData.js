import React, { useState, useEffect } from 'react';

const VehicleDetails = props => {
  const [data, setData] = useState([]);
  let arr = props.vehicleID;

  useEffect(() => {
    if (arr) {
      const vh = arr.map(id => {
        return fetch(`/api/vehicle/${id}`)
          .then(data => {
            return data.json();
          })
          .then(data => {
            return data.data;
          });
      });
      Promise.all(vh).then(data => {
        setData(data);
      });
    }
  }, [arr]);

  const carList = data;
  return (
    <div className="bg p-md-4 p-4 m-2 row row ">
      {carList.map((vehicle, index) => {
        return (
          <div key={index} className="col ">
            <b>
              VEHICLE {index + 1}
              <br />
            </b>
            <b>Manufacturer</b>
            <p>{vehicle.manufacturer}</p>
            <b>Plate Number</b>
            <p>{vehicle.plate}</p>
          </div>
        );
      })}
    </div>
  );
};

export default VehicleDetails;
