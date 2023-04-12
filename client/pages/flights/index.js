import React from "react";
import AppLayout from "../../components/Layout/AppLayout";
import FlightsList from "../../components/Flights/FlightsList";
import fetcher from "../../utils/helpers";
import Form from "../../components/Flights/Form/Form";

const Flights = ({ flights }) => {
  return (
    <AppLayout>
      <main className=" lg:w-[1232px] mx-auto  mt-10 mb-40 sm:mb-60 ">
        {/* <div className=' bg-white rounded-md py-8 px-6 my-10 '>
          {" "}
          <Form />
        </div> */}
        <FlightsList flights={flights} />
      </main>
    </AppLayout>
  );
};

export default Flights;

export async function getServerSideProps() {
  const flightsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/flights?populate=*`
  );

  console.log(flightsResponse);
  return {
    props: {
      flights: flightsResponse,
    },
  };
}
