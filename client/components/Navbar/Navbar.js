import React from "react";
import Link from "next/link";
import { IoAirplane, IoBed } from "react-icons/io5";
import Image from "next/image";
import UseAuthContext from "../../hooks/useAuthContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const { auth, authLogout } = UseAuthContext();
  const router = useRouter();

  const handleLogout = () => {
    authLogout();
    router.push("/");
  };

  return (
    <div className='flex justify-between items-center  py-6 px-6 sm:px-20 shadow-lg bg-white'>
      {" "}
      <nav className='hidden font-semibold sm:flex flex-row gap-4'>
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
        {auth?.jwt ? (
          <Link href='/profile'>My Profile</Link>
        ) : (
          <Link href='/login'>Login</Link>
        )}

        {auth?.jwt ? (
          <p
            className='bg-black text-white rounded-lg py-2 px-6'
            onClick={handleLogout}>
            Logout
          </p>
        ) : (
          <Link
            href='/register'
            className='bg-black text-white rounded-lg py-2 px-6'>
            Sign-up
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
