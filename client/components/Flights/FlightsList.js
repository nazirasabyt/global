import React from "react";
import Filters from "./Filters/Filters";
import FilteredFlights from "./Filters/FilteredFlights";

const FlightsList = () => {
  return (
    <div className='flex gap-12'>
      <Filters />
      <FilteredFlights />
    </div>
  );
};

export default FlightsList;
