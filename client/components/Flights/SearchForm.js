import { useEffect, useRef, useState } from "react";
import { cities } from "../../utils/data";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Form from "./Form/Form";

const SearchForm = () => {
  const [citiesList, setCitiesList] = useState({
    from: false,
    to: false,
  });

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departure: format(new Date(), "y-MM-dd"),
    return: format(new Date(), "y-MM-dd"),
    pax: [],
  });

  const modalRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  });

  const hideOnClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModal(false);
    }
  };

  const handleInput = (e) => {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    setFormData({ ...formData, [name]: value });

    const newFilter = cities.filter((word) => {
      return word.city.toLowerCase().includes(value.toLowerCase());
    });

    if (name === "from") {
      setCitiesList({ ...citiesList, from: true });
      setFromCitiesData(newFilter);
    }
    if (name === "to") {
      setCitiesList({ ...citiesList, to: true });
      setToCitiesData(newFilter);
    }
  };

  return (
    <div className='absolute top-[140px] sm:top-[500px] bg-white  md:shadow-xl rounded-lg  py-6 px-10  w-full lg:w-[1282px] sm:mb-10'>
      <div className='flex flex-wrap justify-start gap-x-4 mb-4 -ml-2'>
        <div className='mx-1'>
          <input
            type='radio'
            id='one'
            name='type'
            value={"OneWay"}
            onChange={(e) => handleInput(e)}
            className='appearance-none peer'
            checked={formData.type === "OneWay"}
          />
          <label
            htmlFor='one'
            className=' cursor-pointer capitalize   text-sm  px-4 py-2 peer-checked:bg-brand-clr  rounded-md'>
            One Way
          </label>
        </div>
        <div className='border-r'></div>
        <div className='mx-1'>
          <input
            type='radio'
            id='round'
            name='type'
            value={"Return"}
            onChange={(e) => handleInput(e)}
            className='appearance-none peer'
            checked={formData.type === "Return"}
          />
          <label
            htmlFor='round'
            className='cursor-pointer capitalize   text-sm  px-4 py-2 peer-checked:bg-brand-clr  rounded-md'>
            round trip
          </label>
        </div>
      </div>

      <Form />
    </div>
  );
};

export default SearchForm;
