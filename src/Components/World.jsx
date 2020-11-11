import React from "react";
import "../index.css";
import CountUp from "react-countup";

const World = (probs) => {
  return (
    <>

      <div className="card-body data_container">
      <h5 className="card-title update">World Update</h5>
        <h4 className="textStyle"> Confirmed Cases:</h4>
        <h4 className="textStyleWhite">
          <CountUp
            start={0}
            end={probs.worldConfirmed}
            duration={2.0}
            seperator=","
          />
        </h4>
        <h4 className="textStyle">Active Cases:</h4>
        <h4 className="textStyleWhite">
          <CountUp
            start={0}
            end={
              probs.worldConfirmed - (probs.worldRecovered + probs.worldDeaths)
            }
            duration={2.0}
            seperator=","
          />
        </h4>
        <h4 className="textStyle"> Total Recovered:</h4>
        <h4 className="textStyleGreen">
          <CountUp
            start={0}
            end={probs.worldRecovered}
            duration={2.0}
            seperator=","
          />
        </h4>

        <h4 className="textStyle">recovery Rate:</h4>
        <h4 className="textStyleGreen">
          {((probs.worldRecovered / probs.worldConfirmed) * 100).toFixed(2)}%
        </h4>

        <h4 className="textStyle"> Total Deaths:</h4>
        <h4 className="textStyleRed">
          <CountUp
            start={0}
            end={probs.worldDeaths}
            duration={2.0}
            seperator=","
          />
        </h4>

        <h4 className="textStyle">death Rate:</h4>
        <h4 className="textStyleRed">
          {((probs.worldDeaths / probs.worldConfirmed) * 100).toFixed(2)}%
        </h4>
      </div>
    </>
  );
};

export default World;
