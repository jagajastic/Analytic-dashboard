import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Table = () => {
  const [driverData, setDriverData] = useState([]);
  useEffect(() => {
    axios.get('/api/drivers').then(info => {
      let result = info.data.data;
      setDriverData(result);
    });
  }, []);

  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    axios.get('/api/trips').then(data => {
      let result = data.data.data;
      setData(result);
    });
  }, []);

  function dd() {
    const driversInformation = driverData;
    const trinpsInformayion = data;
    let tripDetails = [];
    for (let index = 0; index < trinpsInformayion.length; index++) {
      const currentDriverIndex = driversInformation.find(
        drive => drive.driverID === trinpsInformayion[index].driverID,
      );
      try {
        if (currentDriverIndex['name']) {
          trinpsInformayion[index].driverName = currentDriverIndex.name;
          tripDetails.push(trinpsInformayion[index]);
        } else {
          trinpsInformayion[index].driverName = 'Driver do not Exist';
          tripDetails.push(trinpsInformayion[index]);
        }
      } catch (e) {}
    }
    return tripDetails;
  }
  const tableData = dd();

  return (
    <div className="table-responsive any-tableClass rounded ">
      <table className="table table-striped bg-light">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Driver name</th>
            <th scope="col">Username</th>
            <th scope="col">Trip bill</th>
            <th scope="col">Views</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((tripinfo, index) => {
            {
              /* console.log(tripinfo.user.name); */
            }
            return (
              <tr key={tripinfo.tripID}>
                <th scope="row">{index + 1}</th>
                <td>{tripinfo.driverName}</td>
                <td>{tripinfo.user.name}</td>
                <td>₦{tripinfo.billedAmount}</td>
                <td>
                  <Link
                    to={
                      '/trips/' + tripinfo.driverID + '/' + tripinfo.user.name
                    }
                    id={tripinfo}
                  >
                    <button className="btn btn-primary btn-sm">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
