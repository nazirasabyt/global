import React, { useContext, useState } from "react";
import Link from "next/link";
import { IoAirplane, IoBed } from "react-icons/io5";
import Image from "next/image";
// import AuthContext from "../../context/auth_context";

const Navbar = () => {
  // const ctx = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='flex justify-between items-center  py-6 px-20 shadow-lg bg-white'>
      {" "}
      <nav className=' font-semibold sm:flex flex-row gap-4'>
        <Link href='' className='flex justify-center items-center'>
          <span>
            <IoAirplane className='md:text-2xl' />
          </span>
          Find Flight
        </Link>
        <Link href='' className='flex justify-center items-center'>
          <span>
            <IoBed className='md:text-2xl' />
          </span>
          Find Stays
        </Link>
      </nav>
      <Link href='/'>
        <Image width={120} height={40} src='/img/logo3.png' alt='Logo Navbar' />
      </Link>
      <div className='flex gap-2 text-xs sm:text-sm justify-center items-center'>
        {!isLoggedIn && <Link href='/login'>Login</Link>}
        {isLoggedIn && <Link href='/myprofile'>My Profile</Link>}
        {!isLoggedIn && (
          <Link
            href='/register'
            className='bg-black text-white rounded-lg py-2 px-6'>
            Sign-up
          </Link>
        )}
        {isLoggedIn && (
          <Link
            href='/logout'
            className='bg-white text-black rounded-lg py-2 px-4'>
            Logout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
