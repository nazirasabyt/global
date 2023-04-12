import React from "react";
import AppLayout from "../../components/Layout/AppLayout";
import FlightsList from "../../components/Flights/FlightsList";
import fetcher from "../../utils/helpers";
import Form from "../../components/Flights/Form/Form";
import axios from "axios";

const Flights = ({ flights }) => {
  return (
    <AppLayout>
      <main className=' lg:w-[1232px] mx-auto  mt-10 mb-40 sm:mb-60 '>
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
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/flights?populate=*`,
    {
      headers: {
        Authorization: "bearer" + process.env.NEXT_APP_API_TOKEN,
      },
    }
  );

  console.log(res.data);

  return {
    props: {
      flights: res.data,
    },
  };
}
