import images from '@/constants/images';
import React from 'react';
import Image from 'next/image';
const OurWork = () => {
  return (
    <div className="py-32 px-20 mdrev:py-20 lgrev:px-4 flex flex-col gap-8 overflow-x-hidden bg-white">
      <h2 data-aos="zoom-in" id="Unbounded" className="text-teal-500 text-xl text-center aos-init aos-animate">
        Our work
      </h2>
      <h2 data-aos="zoom-out" id="Unbounded" className="text-black text-4xl text-center aos-init aos-animate">
        How does it <span className="text-teal-500">work?</span>
      </h2>
      <div className="flex gap-4 mdrev:flex-col">
        <div data-aos="fade-right" className="w-[50%] mdrev:w-[100%] flex justify-center items-center aos-init aos-animate">
          <Image
            alt="Section Image"
            src={images.interview}
            width="700"
            height="600"
            decoding="async"
            data-nImage="1"
            className="w-[100%]"
            loading="lazy"
            style={{ color: 'transparent' }}
          />
        </div>
        <div data-aos="fade-left" className="w-[50%] mdrev:w-[90%] m-auto flex flex-col justify-center items-center gap-4 aos-init aos-animate">
          <div className="shadow-xl flex w-[100%] md:max-w-lg mdrev:w-[100%] rounded-xl py-4">
            <div className="flex justify-center items-center p-4">
                <Image
                src={images.svg3}
                className='w-60 '
                color='yellow'
                />
            </div>
            <div className="pr-8 pl-4">
              <h2 id="Ubuntu" className="text-xl font-semibold">Planning Idea</h2>
              <h2 id="Ubuntu" className="text-gray-500">
                Once you have decided, collaborative planning session comes in, to help identify and prioritize the most important aspects of the project, as well as brainstorm possible solutions.
              </h2>
            </div>
          </div>
          <div className="shadow-xl flex w-[100%] md:max-w-lg mdrev:w-[100%] rounded-xl py-4">
            <div className="flex justify-center items-center p-4">
            <Image
                src={images.svg2}
                className='w-60 '
                color='yellow'
                />
            </div>
            <div className="pr-8 pl-4">
              <h2 id="Ubuntu" className="text-xl font-semibold">Developing Product</h2>
              <h2 id="Ubuntu" className="text-gray-500">
                Once the plans are identified and finalized, we will start to devise a solution. This involves writing code, designing, and testing the software.
              </h2>
            </div>
          </div>
          <div className="shadow-xl flex w-[100%] md:max-w-lg mdrev:w-[100%] rounded-xl py-4">
            <div className="flex justify-center items-center p-4">
            <Image
                src={images.svg4}
                className='w-60 '
                color='yellow'
                />
            </div>
            <div className="pr-8 pl-4">
              <h2 id="Ubuntu" className="text-xl font-semibold">Deliver to Client</h2>
              <h2 id="Ubuntu" className="text-gray-500">
                Once the product has been tested and is ready to go, we deliver it to you and you can launch it and make it available to the world.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
