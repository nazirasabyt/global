import { useState, useEffect } from "react";
import { addOrUpdateItem, getLocalStorage } from "../../../utils/helpers";
import { useRouter } from "next/router";
import ViewDetails from "../../../components/Flights/ViewDetails";
import AppLayout from "../../../components/Layout/AppLayout";

const PassengerDetails = () => {
  const data = getLocalStorage();

  const [adults, setAdults] = useState([]);
  const [children, setChildren] = useState([]);
  const [infants, setInfants] = useState([]);
  const [formData, setFormData] = useState({
    adults: [],
    children: [],
    infants: [],
  });

  const router = useRouter();

  useEffect(() => {
    data.pax.map((el) => {
      if (el.adults > 0) {
        setAdults(el.adults);
      }
      if (el.children > 0) {
        setChildren(el.children);
      }
      if (el.infants > 0) {
        setInfants(el.infants);
      }
    });
  }, []);

  const handleInfantForm = (newData) => {
    setFormData({
      ...formData,
      infants: addOrUpdateItem(formData.infants, newData),
    });
  };
  const handleChildrenForm = (newData) => {
    setFormData({
      ...formData,
      children: addOrUpdateItem(formData.children, newData),
    });
  };
  const handleAdultForm = (newData) => {
    setFormData({
      ...formData,
      adults: addOrUpdateItem(formData.adults, newData),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData) {
      localStorage.setItem("passengersData", JSON.stringify(formData));
    }
    router.push("./details/payments");
  };

  return (
    <AppLayout>
      <main className='w-[1232px] mx-auto mb-60 mt-10'>
        <ViewDetails />
      </main>
    </AppLayout>
  );
};

export default PassengerDetails;
