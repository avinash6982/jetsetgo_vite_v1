import { useSearchParams } from "react-router-dom";
import { useLayoutEffect, useState } from "react";

import FlightChoose from "../components/FlightChoose";
import SelectDetails from "../components/SelectDetails";
import { getRequest } from "../api";

const FlightExplore = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);

  const getParamsObject = () => {
    const paramsObject = {};
    for (const [key, value] of searchParams.entries()) {
      paramsObject[key] = value;
    }
    return paramsObject;
  };

  function getFlights() {
    getRequest()
      .then((res) => {
        if (res.data.message === "Success")
          setSearchResults(res.data.data.result);
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  useLayoutEffect(() => {
    getFlights(getParamsObject());
  }, []);

  return (
    <>
      <div className="px-8 w-full flex flex-col">
        <div className="mt-10">
          <SelectDetails />
        </div>
        <div className="mt-16">
          <FlightChoose flightsData={searchResults} />
        </div>
      </div>
    </>
  );
};

export default FlightExplore;
