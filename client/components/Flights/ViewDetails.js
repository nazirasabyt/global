import Image from "next/image";
import React from "react";
import { IoAirplane, IoWifiSharp, IoFastFood } from "react-icons/io5";
import { RiTimerFill } from "react-icons/ri";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { BsFacebook, BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

const ViewDetails = () => {
  return (
    <div className='flex justify-between gap-10'>
      {/* <p>Turkey - Istanbul</p> */}

      <div className='flex flex-col gap-10'>
        <div className='flex flex-col w-[790px] h-[349px] bg-white rounded-lg shadow-lg p-8 gap-4'>
          <div className='flex justify-between'>
            <h1 className='text-2xl font-semibold'>Emirates A380 Airbus</h1>
            <h2 className='text-4xl text-salmon-clr font-semibold'>$240</h2>
          </div>
          <div className='flex justify-between'>
            <p className='text-md font-semibold'>Return Wed, Dec 8</p>
            <p className='text-gray-primary opacity-60'>2h 28m</p>
          </div>
          <div className='flex gap-28 items-center'>
            <div className='flex items-center py-4 px-8 gap-5 w-[262px] border border-brand-clr rounded-lg'>
              <Image src='/img/emirates.png' width={64} height={44} />
              <h2 className='flex flex-col text-2xl font-semibold'>
                Emirates{" "}
                <span className='text-gray-primary opacity-50 text-sm'>
                  Airbus A320
                </span>
              </h2>
            </div>
            <div className='flex  gap-6'>
              <IoAirplane size={30} />
              <IoWifiSharp size={30} />
              <IoFastFood size={30} />
              <RiTimerFill size={30} />
              <MdOutlineAirlineSeatReclineExtra size={30} />
            </div>
          </div>
          <div className='flex justify-center items-center gap-10 mt-6'>
            <p className='text-xl font-semibold'>12:00 pm</p>
            <p>Newark(EWR)</p>
            <IoAirplane size={30} />
            <p className='text-xl font-semibold'>12:00 pm</p>
            <p>Newark(EWR)</p>
          </div>
        </div>
        <div className='bg-white rounded-lg shadow-lg p-6 gap-4 flex flex-col'>
          <h1 className='text-2xl font-semibold'>Login or Sign up to book</h1>
          <input
            type='email'
            placeholder='Type you email'
            className='w-[742px] h-[50px] rounded-lg border pl-2'
          />
          <p className='text-xs'>
            We’ll call or text you to confirm your number. Standard message and
            data rates apply. Privacy Policy
          </p>
          <button className='bg-brand-clr py-2 px-4 rounded-md'>
            Continue
          </button>
          <p className='text-center text-gray-primary text-sm opacity-50 my-2'>
            Or login with
          </p>
          <div className=' flex gap-4 justify-center items-center '>
            <button className='py-4 px-6 border border-brand-clr sm:w-[160px] sm:h-[56px] flex justify-center '>
              <BsFacebook className='text-blue-600 ' />
            </button>
            <button className='py-4 px-6 border border-brand-clr sm:w-[160px] sm:h-[56px] flex justify-center'>
              <FcGoogle size={21} />
            </button>
            <button
              disabled={true}
              className='py-4 px-6 border border-brand-clr sm:w-[160px] sm:h-[56px] flex justify-center'>
              <AiFillApple size={21} />
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-[450px] h-[469.5px] bg-white rounded-lg shadow-lg p-6  gap-6'>
        <div className='flex items-center gap-6'>
          <Image src='/img/plane.png' width={120} height={120} alt='Airplane' />

          <div className='flex flex-col justify-center items-start'>
            <p>Economy</p>
            <h2 className='text-xl font-semibold'>Emirates A380 Airbus</h2>
            <div className='flex gap-2 mt-5'>
              <button className='border border-brand-clr py-1 px-2 rounded-md text-xs'>
                4.2
              </button>
              <h3 className='font-semibold w-[460px] text-sm'>
                Very Good <span className='font-normal italic'>54 reviews</span>
              </h3>
            </div>
          </div>
        </div>
        <p>Your booking is protected by golobe</p>
        <h4 className='font-semibold'>Price Details</h4>
        <div className='flex justify-between'>
          <p>Base Fare </p>
          <p>$400</p>
        </div>
        <div className='flex justify-between'>
          <p>Taxes </p>
          <p>$400</p>
        </div>
        <div className='flex justify-between'>
          <p>Service Fee </p>
          <p>$400</p>
        </div>
        <div className='flex justify-between'>
          <p className='font-semibold'>Total </p>
          <p>$400</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
