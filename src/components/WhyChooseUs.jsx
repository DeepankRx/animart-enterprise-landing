import React from 'react';
import Image from 'next/image';
import images from '@/constants/images';
const WhyChooseUs = () => {
  return (
    <div className="bg-white text-black py-40 px-8 mdrev:py-20 mdrev:px-4 flex items-center justify-center mdrev:flex-col gap-20 mdrev:gap-8 overflow-x-hidden">
      <div className="flex flex-col gap-4">
        <h2 data-aos="zoom-in" id="BungeeShade" className="text-3xl text-center aos-init aos-animate"> WHY CHOOSE US ?</h2>
        <h2 id="Unbounded" data-aos="zoom-out" className="text-3xl text-center aos-init aos-animate">Save your time</h2>
        <h2 id="Unbounded" data-aos="zoom-out" className="text-3xl text-center aos-init aos-animate">with a lot of features</h2>
      </div>
      <div className="flex mdrev:grid mdrev:grid-cols-2 gap-4">
        <div data-aos="fade-up" className="col-span-1 flex flex-col items-center gap-4 aos-init aos-animate">
          <Image
            alt="Card Image"
            srcSet={images.adva_1}
            src={images.adva_1}
            width="496"
            height="496"
            decoding="async"
            data-nImage="1"
            className="w-20 h-20"
            loading="lazy"
            style={{ color: 'transparent' }}
          />
          <h2 className="text-sm font-bold uppercase">Fast Performance</h2>
        </div>
        <div data-aos="fade-down" className="col-span-1 flex flex-col items-center gap-4 aos-init aos-animate">
          <Image
            alt="Card Image"
            srcSet={images.adva_2}
            src={images.adva_2}
            width="382"
            height="356"
            decoding="async"
            data-nImage="1"
            className="w-20 h-20"
            loading="lazy"
            style={{ color: 'transparent' }}
          />
          <h2 className="text-sm font-bold uppercase">Standard Code</h2>
        </div>
        <div data-aos="fade-up" className="col-span-1 flex flex-col items-center gap-4 aos-init aos-animate">
          <Image
            alt="Card Image"
            srcSet={images.adva_3}
            src={images.adva_3}
            width="512"
            height="480"
            decoding="async"
            data-nImage="1"
            className="w-20 h-20"
            loading="lazy"
            style={{ color: 'transparent' }}
          />
          <h2 className="text-sm font-bold uppercase">Responsive Design</h2>
        </div>
        <div data-aos="fade-down" className="col-span-1 flex flex-col items-center gap-4 aos-init aos-animate">
          <Image
            alt="Card Image"
            srcSet={images.adva_4}
            src={images.adva_4}
            width="512"
            height="512"
            decoding="async"
            data-nImage="1"
            className="w-20 h-20"
            loading="lazy"
            style={{ color: 'transparent' }}
          />
          <h2 className="text-sm font-bold uppercase">Quick Support</h2>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
