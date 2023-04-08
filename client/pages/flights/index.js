import React from "react";
import AppLayout from "../../components/Layout/AppLayout";
import FlightsList from "../../components/Flights/FlightsList";

import Form from "../../components/Flights/Form/Form";

const Flights = () => {
  return (
    <AppLayout>
      <main className=' lg:w-[1232px] mx-auto  mt-10 mb-40 sm:mb-60 '>
        {/* <div className=' bg-white rounded-md py-8 px-6 my-10 '>
          {" "}
          <Form />
        </div> */}
        <FlightsList />
      </main>
    </AppLayout>
  );
};

export default Flights;
