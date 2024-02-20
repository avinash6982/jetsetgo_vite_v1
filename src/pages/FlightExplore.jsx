import { useSearchParams } from "react-router-dom";

import FlightChoose from "../components/FlightChoose";
import SelectDetails from "../components/SelectDetails";
import { useLayoutEffect } from "react";

const FlightExplore = () => {
  const [searchParams] = useSearchParams();

  const getParamsObject = () => {
    const paramsObject = {};
    for (const [key, value] of searchParams.entries()) {
      paramsObject[key] = value;
    }
    return paramsObject;
  };

  useLayoutEffect(() => {
    console.warn(getParamsObject());
  }, []);

  return (
    <>
      <div className="px-8 w-full flex flex-col">
        <div className="mt-10">
          <SelectDetails />
        </div>
        <div className="mt-16">
          <FlightChoose />
        </div>
      </div>
    </>
  );
};

export default FlightExplore;
