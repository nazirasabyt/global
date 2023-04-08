import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { RiEditCircleFill } from "react-icons/ri";
import UseAuthContext from "../../hooks/useAuthContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Profile = () => {
  const { auth } = UseAuthContext();
  return (
    <div className='w-[1232px] m-auto mt-12'>
      <div>
        <Image
          src='/img/profilecover.png'
          width={1232}
          height={350}
          alt='Profile Cover'
        />
      </div>
      <div className='w-full  px-2 py-16 sm:px-0 '>
        <Tab.Group>
          <Tab.List className='bg-white py-4 px-6 h-20 rounded-lg flex justify-start items-center gap-16 divide-x '>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-1/3 text-sm font-medium  ",

                  selected
                    ? "text-brand-clr"
                    : "text-black hover:text-brand-clr/[0.72] "
                )
              }>
              Account
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-1/3 text-sm font-medium  ",

                  selected
                    ? "text-brand-clr"
                    : "text-black hover:text-brand-clr/[0.72] "
                )
              }>
              History
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-1/3 text-sm font-medium  ",

                  selected
                    ? "text-brand-clr"
                    : "text-black hover:text-brand-clr/[0.72] "
                )
              }>
              Payment methods
            </Tab>
          </Tab.List>
          {/* <h1 className='text-2xl font-semibold mt-8 mb-4'>Account</h1> */}
          <Tab.Panels className='bg-white h-[536px] rounded-lg py-8 px-10 mt-8'>
            <Tab.Panel>
              <h2 className='text-xl font-semibold'>Account</h2>
              <form className='flex flex-col gap-4 mt-8'>
                <div className='flex justify-between'>
                  <label className='flex flex-col'>
                    <span className='text-primary-gray opacity-70'>Name</span>
                    <input
                      placeholder='First Name'
                      className='text-lg font-medium py-1'
                      value={auth?.user?.username}
                      onChange={() => {}}
                    />
                  </label>
                  <button className='flex items-center gap-1 border-brand-clr py-2 px-4 rounded-lg w-[140px]'>
                    <RiEditCircleFill /> Change
                  </button>
                </div>
                <div className='flex justify-between'>
                  <label className='flex flex-col'>
                    <span className='text-primary-gray opacity-70'>
                      Last Name
                    </span>
                    <input
                      placeholder='Last Name'
                      value={auth?.user?.lastName}
                      onChange={() => {}}
                      className='text-lg font-medium py-1'
                    />
                  </label>
                  <button className='flex items-center gap-1 border-brand-clr py-2 px-4 rounded-lg w-[140px]'>
                    <RiEditCircleFill /> Change
                  </button>
                </div>
                <div className='flex justify-between'>
                  <label className='flex flex-col'>
                    <span className='text-primary-gray opacity-70'>Email</span>
                    <input
                      placeholder='Email'
                      value={auth?.user?.email}
                      onChange={() => {}}
                      className='text-lg font-medium py-1'
                    />
                  </label>
                  <button className='flex items-center gap-1 border-brand-clr py-2 px-4 rounded-lg w-[140px]'>
                    <RiEditCircleFill /> Change
                  </button>
                </div>

                <div className='flex justify-between'>
                  <label className='flex flex-col '>
                    <span className='text-primary-gray opacity-70'>
                      Phone Number
                    </span>
                    <input
                      placeholder='Phone Number'
                      value={auth?.user?.phoneNumber}
                      onChange={() => {}}
                      className='text-lg font-medium py-1'
                    />
                  </label>
                  <button className='flex items-center gap-1 border-brand-clr py-2 px-4 rounded-lg w-[140px]'>
                    <RiEditCircleFill /> Change
                  </button>
                </div>
                <div className='flex justify-between'>
                  <label className='flex flex-col w-[350px]'>
                    <span className='text-primary-gray opacity-70'>Adress</span>
                    <input
                      placeholder='Adress'
                      onChange={() => {}}
                      value={auth?.user?.adress}
                      className=' text-lg font-medium py-1'
                    />
                  </label>
                  <button className='flex items-center gap-1 border-brand-clr py-2 px-4 rounded-lg w-[140px]'>
                    <RiEditCircleFill /> Change
                  </button>
                </div>
              </form>
            </Tab.Panel>
            <Tab.Panel>
              <h2>History</h2>
            </Tab.Panel>
            <Tab.Panel>
              <h2>Payment methods</h2>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Profile;
