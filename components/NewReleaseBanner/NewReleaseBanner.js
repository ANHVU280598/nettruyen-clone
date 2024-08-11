'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/legacy/image";

const images = [
  'https://jumpg-assets.tokyo-cdn.com/secure/top_banner/354934.jpg?hash=AM_E_xyQ6TaeABlxNUorWg&expires=2145884400',
  'https://jumpg-assets.tokyo-cdn.com/secure/top_banner/363308.jpg?hash=ifz_g6Sg1Q-8Sm0yJl-Mcg&expires=2145884400',
  'https://jumpg-assets.tokyo-cdn.com/secure/top_banner/360742.jpg?hash=nqSniEHVsluLO3VGARWypg&expires=2145884400',
  'https://jumpg-assets.tokyo-cdn.com/secure/top_banner/182998.jpg?hash=4mwFbW-Q8dpw6A4xLmi2BA&expires=2145884400',
  'https://jumpg-assets.tokyo-cdn.com/secure/top_banner/358732.jpg?hash=0Y2C35idqrsR4wj3KhcXww&expires=2145884400',
  'https://jumpg-assets.tokyo-cdn.com/secure/top_banner/363305.jpg?hash=Li0fh6nw4tuuEqxYc6SuLA&expires=2145884400',
];

export default function NewReleaseBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayRound, setRound] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setRound(!displayRound)
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [displayRound]);

  return (
    <div className="relative h-[270px] bg-slate-800/50 w-full -z-10 py-2">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${(currentIndex / 1) * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={`newrelease${index}`}
            className="relative h-[230px] w-[200px] flex-shrink-0 flex w-full"
          >
            <Image
            className='p-1'
              src={src}
              alt={`Slide ${index + 1}`}
              layout='fill'
              priority
            />
          </div>
        ))}
      </div>
      <div className='flex flex-row justify-end w-full text-white space-x-3 p-2'>
        <div className={`h-[15px] ${(displayRound) ? "w-[40px] bg-yellow-400" : "w-[15px] bg-slate-400"} rounded-full`}/>
        <div className={`h-[15px] ${(!displayRound) ? "w-[40px] bg-yellow-400" : "w-[15px] bg-slate-400"} rounded-full`}/>
      </div>
    </div>
  );
}