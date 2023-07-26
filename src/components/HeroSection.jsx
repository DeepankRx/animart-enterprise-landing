import images from '@/constants/images';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 flex mdrev:flex-col py-16 overflow-x-hidden">
      <div className="w-[50%] text-white font-bold py-4 px-20 mdrev:w-[100%] mdrev:p-4 space-y-4 mdrev:order-2">
        <h2
          data-aos="fade-down"
          data-aos-delay="50"
          className="text-7xl mdrev:text-5xl aos-init aos-animate font-monoton"
        >
          Small Studio
        </h2>
        <h2
          data-aos="fade-left"
          className="text-8xl mdrev:text-6xl aos-init aos-animate font-bungeeShade"
        >
          BIG
        </h2>
        <h2
          data-aos="fade-right"
          className="text-8xl mdrev:text-6xl aos-init aos-animate font-bungeeShade"
        >
          IDEAS
        </h2>
        <h2

          data-aos="zoom-in"
          className="text-2xl max-w-sm aos-init font-poppins"
        >
          Creative and efficient solutions for your needs !
        </h2>
        <div className="py-2">
          <a
            href="https://wa.me/+919410392516"
            rel="noreferrer"
            target="_blank"
            data-aos="zoom-in"
            className="rounded-full bg-yellow-400 py-4 px-6 aos-init"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="w-[50%] mdrev:w-[100%] flex justify-center p-4 mdrev:order-1 aos-init aos-animate"
      >
        <Image
          alt="Hero"
          src={images.hero}
          width="700"
          height="600"
          decoding="async"
          data-nimg="1"
          className="w-[800px] object-cover"
          loading="lazy"
          style={{ color: 'transparent' ,

          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
