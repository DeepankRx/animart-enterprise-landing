'use client';
import React from 'react';
import HomePage from '@/Pages/HomePage';
import Aos from 'aos';
import Head from 'next/head';
const page = () => {

  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </Head>
      <HomePage />
    </>
  );
};

export default page;
