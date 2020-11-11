import React, { useState, useEffect } from "react";
import axios from 'axios';
const TableData = () => {
  const [rate, setRate] = useState([]);

  useEffect(() => {
    async function getRate() {
      const res = await axios.get("https://covid19-api.org/api/status");
      setRate(res.data);
    }

    getRate();
  }, []);

  return (
    <>
      <div className="card  All-country-data" style={{ overflowX: "auto" }}>
        <table className="country" style={{ width: "100%" }}>
          <tr className="card-header">
            <th>Country</th>
            <th>Confirmed</th>
            <th>Recovered</th>
            <th>Deaths</th>
            <th>Active Cases</th>
          </tr>
          {rate.map((caseData, index) => {
            return (
              <tr
                key={index}
                className="card-body"
                style={{ marginLeft: "730px", color: "blue" }}
              >
                <td>{caseData.country}</td>
                <td>{caseData.cases}</td>
                <td>{caseData.recovered}</td>
                <td>{caseData.deaths}</td>
                <td>
                  {caseData.cases - (caseData.recovered + caseData.deaths)}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default TableData;