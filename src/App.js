import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/Header";
import World from './Components/World'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Fetchdata from "./Components/Fetchdata";
import LineCharts from "./Components/countryChart";
import Button from "@material-ui/core/Button";
import Footer from "./Components/Footer";
import WorldChart from './Components/WorldChart';
import TableData from './Components/TableData';


const App = () => {
  const [country, setCountry] = useState();
  const [cases, setData] = useState({
    countryName: "",
    lastUpdate: "",
    confirmedCases: "",
    recoveredCases: "",
    totalDeaths: "",
    recoveryRate: "",
    deathRate: "",
  });

  //All over the world//

  const [covidCase, setCases] = useState({
    worldConfirmed: "",
    worldRecovered: "",
    worldDeaths: "",
  });
  useEffect(() => {
    async function getWorldData() {
      const resp = await axios.get("https://covid19.mathdro.id/api");
      setCases({
        worldConfirmed: resp.data.confirmed.value,
        worldRecovered: resp.data.recovered.value,
        worldDeaths: resp.data.deaths.value,
      });
    }
    getWorldData();
  }, []);

  //Countrywise  data
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://covid19.mathdro.id/api/countries/${country}`
      );
      console.log(response);
      setData({
        countryName: country,
        lastUpdate: response.data.lastUpdate,
        confirmedCases: response.data.confirmed.value,
        recoveredCases: response.data.recovered.value,
        totalDeaths: response.data.deaths.value,
        recoveryRate: (
          (response.data.recovered.value / response.data.confirmed.value) *
          100
        ).toFixed(2),
        deathRate: (
          (response.data.deaths.value / response.data.confirmed.value) *
          100
        ).toFixed(2),
      });
    }
    getData();
  }, [country]);

  let name = "";
  const inputEvent = (event) => {
    name = event.target.value;
  };

  return (
    <>
      <div>
        <Header />
        <div className="row ml-5 mt-3 enter_city">
          <input
            className="col-sm-2"
            type="text"
            name="countryName"
            placeholder="Enter Your Country...."
            onChange={inputEvent}
            autoComplete="off"
          />
          <Button
            className="col-sm-2 btn"
            variant="contained"
            color="primary"
            onClick={() => {
              setCountry(name);
            }}
          >
            Search
          </Button>
        </div>
      </div>
      <div className="container">
        {country ? (
          <div className="main row mt-2 ml-5">
            <div className="card col-sm-5">
              <p className="card-header main_header">
                <h5>
                  Country: <span>{cases.countryName}</span>
                </h5>
                <p>
                  Last Update:
                  <span>{new Date(cases.lastUpdate).toDateString()}</span>
                </p>
              </p>
              <Fetchdata
                country={cases.countryName}
                confirmedCases={cases.confirmedCases}
                recoveredCases={cases.recoveredCases}
                totalDeaths={cases.totalDeaths}
                recoveryRate={cases.recoveryRate}
                deathRate={cases.deathRate}
                lastUpdate={cases.lastUpdate}
                
              />
            </div>
            <div className="col-sm-6 mt-5">
              <LineCharts
                country={cases.countryName}
                confirmedCases={cases.confirmedCases}
                recoveredCases={cases.recoveredCases}
                totalDeaths={cases.totalDeaths}
                recoveryRate={cases.recoveryRate}
                deathRate={cases.deathRate}
                lastUpdate={cases.lastUpdate}
              />
            </div>
          </div>
        ) : (
          <div className="main row mt-2 ml-5">
            <div className="card col-sm-5">
            
              <World
                worldConfirmed={covidCase.worldConfirmed}
                worldRecovered={covidCase.worldRecovered}
                worldDeaths={covidCase.worldDeaths}
              />
            </div>
            <div className="col-sm-6 mt-5">
              <WorldChart
                worldConfirmed={covidCase.worldConfirmed}
                worldRecovered={covidCase.worldRecovered}
                worldDeaths={covidCase.worldDeaths}
              />
            </div>
          </div>
        )}
      </div>

      <div className="container  mt-5">
        <TableData/>
      </div>
      <Footer />
    </>
  );
};
export default App;
