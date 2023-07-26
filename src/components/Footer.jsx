import React from 'react';
import Image from 'next/image';
import images from '@/constants/images';
const Footer = () => {
  return (
    <footer
      id="footer"
      className=" bottom-0 w-[100%] p-4 bg-white md:px-6 md:py-8"
    >
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          className="flex items-center mb-4 sm:mb-0 hover:scale-110 duration-300"
          href="/"
        >
          <Image
            alt="Logo"
            srcset={images.logo}
            src={images.logo}
            width="1200"
            height="375"
            decoding="async"
            data-nImage="1"
            className="w-52"
            loading="lazy"
            style={{ color: 'transparent' }}
          />
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-black sm:mb-0">
          <li>
            <a className="mr-4 hover:underline md:mr-6" href="/">
              Home
            </a>
          </li>
          {/* <li>
            <a className="mr-4 hover:underline md:mr-6" href="/portfolio">
              Portfolio
            </a>
          </li> */}
        </ul>
      </div>
      <div
        id="Ubuntu"
        className="py-16 grid grid-cols-3 gap-8 mdrev:grid-cols-1 text-black"
      >
        <div className="flex flex-col justify-center items-center px-4">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-l8b60n  w-6 h-6"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="LanguageIcon"
          >
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
          </svg>
          <h4 className="text-center font-semibold">
            19/36 A, Gandhi Nagar, Aligarh,Uttar Pradesh- 202001
          </h4>
          <h5 className="text-center text-sm">Our Address</h5>
        </div>
        <div className="flex flex-col justify-center items-center px-4">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-l8b60n w-6 h-6"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="EmailIcon"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
          </svg>
          <a
            href="mailto:animartenterprises@gmail.com"
            className="hover:underline text-center font-semibold"
          >
            animartenterprises@gmail.com
          </a>
          <h5 className="text-center text-sm">Our Mailbox</h5>
        </div>
        <div className="flex flex-col justify-center items-center px-4">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-l8b60n  w-6 h-6"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="AddIcCallIcon"
          >
            <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"></path>
          </svg>
          <a
            href="tel:+917983591349"
            className="hover:underline text-center font-semibold"
          >
            +917983591349
          </a>
          <h5 className="text-center text-sm">Our Phone</h5>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="text-center">
        <span className="text-sm text-gray-500">
          Copyright © 2023
          <a className="hover:underline" href="/">
            Animart Enterprises
          </a>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
