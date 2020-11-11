import React from "react";
import CountUp from "react-countup";

const Fetchdata = (probs) => {
  return (
    <>
      <div className="card-body data_container">
        <h4 className="textStyle"> Confirmed Cases:</h4>
        <h4 className="textStyleWhite">
          <CountUp
            start={0}
            end={probs.confirmedCases}
            duration={2.0}
            seperator=","
          />
        </h4>

        <h4 className="textStyle"> Total Recovered:</h4>
        <h4 className="textStyleGreen">
          <CountUp
            start={0}
            end={probs.recoveredCases}
            duration={2.0}
            seperator=","
          />
        </h4>

        <h4 className="textStyle"> Total Deaths:</h4>
        <h4 className="textStyleRed">
      
          <CountUp
            start={0}
            end={probs.totalDeaths}
            duration={2.0}
            seperator=","
          />
        </h4>

        <h4 className="textStyle">Active Cases:</h4>
        <h4 className="textStyleWhite">
          <CountUp
            start={0}
            end={probs.activeCase}
            duration={2.0}
            seperator=","
          />
        </h4>

        <h4 className="textStyle">recovery Rate:</h4>
        <h4 className="textStyleGreen">{probs.recoveryRate}%</h4>

        <h4 className="textStyle">death Rate:</h4>
        <h4 className="textStyleRed">{probs.deathRate}%</h4>
      </div>
    </>
  );
};
export default Fetchdata;
