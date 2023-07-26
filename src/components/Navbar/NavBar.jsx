import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';
import images from '@/constants/images';

const WorkingTime = () => {
  return (
    <div className="bg-secondary p-2 text-white">
      <div className="flex items-center smrev:flex-col gap-2">
        <div className="flex gap-1">
          <BiTimeFive />
          <h4 className="text-sm">Working hours | 09.00am - 06.00pm </h4>
        </div>
        <a href="mailto:animartenterprises@gmail.com" className="text-sm">
          {' '}
          Email : animartenterprises@gmail.com
        </a>
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <header>
      <WorkingTime />
      <div className="flex justify-between bg-slate-50">
        <Link href='/'>
          <Image src={images.logo} alt="logo" className="h-[4rem] aspect-auto w-40 m-3 mx-4 hover:scale-110 ease-in-out duration-200" />
        </Link>
        <nav className="flex gap-4 items-center mx-6">
          <Link href="/" text="Home" >Home</Link>
          {/* <Link href="/portfolio" text="Portfolio" >Portfolio</Link>
          <Link href="/services" text="Services" >Services</Link> */}
        </nav>
      </div>
    </header>
  );
};


export default NavBar;
