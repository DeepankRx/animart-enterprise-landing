import React from 'react';
import Image from 'next/image';
import images from '@/constants/images';
const Services = () => {
  return (
    <div className="py-28 mdrev:py-16 mdrev:px-4 bg-gradient-to-br from-teal-500 to-green-500 flex justify-center items-center flex-col gap-4 overflow-x-hidden">
      <div className="flex flex-col gap-4">
        <h2 data-aos="zoom-in" className="text-5xl text-white text-center mdrev:text-3xl aos-init aos-animate" id="Unbounded">Why you are here ?</h2>
        <h2 data-aos="zoom-out" className="text-4xl text-white text-center mdrev:text-2xl aos-init aos-animate" id="Unbounded">Because we can Help You !</h2>
      </div>
      <div className="grid grid-cols-3 p-8 mdrev:p-4 gap-4 mdrev:grid-cols-1">
        <div className="aos-init aos-animate" data-aos="fade-up">
          <div className="col-span-1 rounded-2xl bg-white text-black overflow-hidden shadow-xl">
            <div className="px-4 py-2 border-b-[1px] border-black">
              <h2 className="text-base font-light">UI/UX</h2>
              <h2 className="text-lg font-semibold">Design</h2>
            </div>
            <div className="h-60 flex justify-center items-center">
              <Image
                alt="Card Icon"
                src={images.i3}
                width="500"
                height="500"
                decoding="async"
                data-nImage="1"
                className="h-[100%] object-fit"
                loading="lazy"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" className="aos-init aos-animate">
          <div className="col-span-1 rounded-2xl bg-white text-black overflow-hidden shadow-xl">
            <div className="px-4 py-2 border-b-[1px] border-black">
              <h2 className="text-base font-light">Website</h2>
              <h2 className="text-lg font-semibold">Development</h2>
            </div>
            <div className="h-60 flex justify-center items-center">
              <Image
                alt="Card Icon"
                src={images.i2}
                width="500"
                height="500"
                decoding="async"
                data-nImage="1"
                className="h-[100%] object-fit"
                loading="lazy"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="aos-init aos-animate">
          <div className="col-span-1 rounded-2xl bg-white text-black overflow-hidden shadow-xl">
            <div className="px-4 py-2 border-b-[1px] border-black">
              <h2 className="text-base font-light">Mobile App</h2>
              <h2 className="text-lg font-semibold">Development</h2>
            </div>
            <div className="h-60 flex justify-center items-center">
              <Image
                alt="Card Icon"
                src={images.i1}
                width="500"
                height="500"
                decoding="async"
                data-nImage="1"
                className="h-[100%] object-fit"
                loading="lazy"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
