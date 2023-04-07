import React from "react";
import Image from "next/image";

const Travel = () => {
  return (
    <div className='flex flex-col    mx-auto w-[1232px] h-[75vh]'>
      <h2 className='text-4xl font-semibold mb-2'>Fall into travel</h2>
      <p>
        Going somewhere to celebrate this season? Whether you’re going home or
        somewhere to roam, we’ve got the travel tools to get you to your
        destination.
      </p>
      <div className='flex  gap-6 mt-8'>
        <div className='w-[552px] bg-brand-clr rounded-lg p-6'>
          <div className='flex justify-between mb-6'>
            <h1 className='text-4xl font-semibold'>
              Backpacking <br /> Sri Lanka
            </h1>
            <button className='flex flex-col p-2 bg-white rounded-lg text-sm'>
              From<span className='text-2xl font-semibold '>$700</span>
            </button>
          </div>
          <p className='mb-[120px] text-sm'>
            Traveling is a unique experience as it's the best way to unplug from
            the pushes and pulls of daily life. It helps us to forget about our
            problems, frustrations, and fears at home. During our journey, we
            experience life in different ways. We explore new places, cultures,
            cuisines, traditions, and ways of living.
          </p>
          <button className='bg-white py-2 px-4 w-[504px] h-12'>
            Book Flight
          </button>
        </div>
        <div className='grid grid-cols-2 gap-6'>
          <Image
            src='/img/travel1.png'
            width={318}
            height={200}
            alt='Travel Image'
          />
          <Image
            src='/img/travel2.png'
            width={318}
            height={200}
            alt='Travel Image'
          />
          <Image
            src='/img/travel3.png'
            width={318}
            height={200}
            alt='Travel Image'
          />
          <Image
            src='/img/travel4.png'
            width={318}
            height={200}
            alt='Travel Image'
          />
        </div>
      </div>
    </div>
  );
};

export default Travel;
