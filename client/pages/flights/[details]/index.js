import ViewDetails from "../../../components/Flights/ViewDetails";
import AppLayout from "../../../components/Layout/AppLayout";
import axios from "axios";

const PassengerDetails = ({ flight }) => {
  return (
    <AppLayout>
      <main className='w-full lg:w-[1232px] mx-auto mb-60 mt-12'>
        <ViewDetails flight={flight} />
      </main>
    </AppLayout>
  );
};

export default PassengerDetails;

export async function getServerSideProps(context) {
  const { params } = context;

  const id = params.details;

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/flights/${id}?populate=*`,
    {
      headers: {
        Authorization: "bearer" + process.env.NEXT_APP_API_TOKEN,
      },
    }
  );

  return {
    props: {
      flight: res.data.data,
    },
  };
}
