import React from "react";
import { flights } from "../../../utils/data";
import Image from "next/image";
import Link from "next/link";

const Flight = () => {
  return (
    <div className=' flex flex-col gap-8 '>
      {flights.map((item) => {
        return (
          <div key={item.id} className='bg-white rounded-lg flex  py-6 px-4'>
            <div className='flex justify-center items-center'>
              {" "}
              <Image
                src={item.logo}
                width={160}
                height={80}
                alt='Airline Logo'
              />
            </div>
            <div className='px-6'>
              <div className='flex gap-2'>
                <button className='border border-brand-clr py-1 px-2 rounded-md text-xs'>
                  4.2
                </button>
                <h3 className='font-semibold w-[460px] text-sm'>
                  Very Good{" "}
                  <span className='font-normal italic'>54 reviews</span>
                </h3>
              </div>
              <div className='flex gap-6 '>
                <h2 className='flex flex-col mt-4 font-semibold'>
                  12:00 pm - 01:28 pm{" "}
                  <span className='text-gray-primary text-sm opacity-80 font-normal'>
                    {item.airline}
                  </span>
                </h2>
                <p className='text-sm opacity-80 mt-4'>non stop</p>
                <h2 className='flex flex-col mt-4 font-semibold'>
                  2h 28m{" "}
                  <span className='text-gray-primary text-sm opacity-80 font-normal'>
                    {item.code}
                  </span>
                </h2>
              </div>
              <div className=' border-b-2 opacity-80 my-6'></div>
              <button className='bg-brand-clr w-full h-12 rounded-md text-sm font-medium'>
                <Link href={`/flights/${item.id}`}>View Details</Link>
              </button>
            </div>
            <p
              className='flex flex-col 
             text-xs gap-1'>
              starting from
              <span className='text-2xl text-salmon-clr font-semibold'>
                ${item.price}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Flight;
