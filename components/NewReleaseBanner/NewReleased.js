'use client'
import React, { useEffect, useState } from 'react'
import ImgModel from '../DisplayImg/ImgModel'

export default function NewReleased() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayRound, setRound] = useState(true);
  const [translateX, setTranslateX] = useState('')
  const images = [
    'https://jumpg-assets.tokyo-cdn.com/secure/top_banner/354934.jpg?hash=AM_E_xyQ6TaeABlxNUorWg&expires=2145884400',
    'https://jumpg-assets.tokyo-cdn.com/secure/top_banner/363308.jpg?hash=ifz_g6Sg1Q-8Sm0yJl-Mcg&expires=2145884400',
    'https://jumpg-assets.tokyo-cdn.com/secure/top_banner/360742.jpg?hash=nqSniEHVsluLO3VGARWypg&expires=2145884400',
    'https://jumpg-assets.tokyo-cdn.com/secure/top_banner/182998.jpg?hash=4mwFbW-Q8dpw6A4xLmi2BA&expires=2145884400',
    'https://jumpg-assets.tokyo-cdn.com/secure/top_banner/358732.jpg?hash=0Y2C35idqrsR4wj3KhcXww&expires=2145884400',
    'https://jumpg-assets.tokyo-cdn.com/secure/top_banner/363305.jpg?hash=Li0fh6nw4tuuEqxYc6SuLA&expires=2145884400',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setRound(!displayRound)
    }, 3000);
    return () => clearInterval(interval); 
  }, [displayRound])

  return (
    <div className='flex flex-col sm:h-[230px] w-full bg-slate-500/10 p-2'>
      <div className='flex flex-row sm:h-full w-full overflow-hidden'>
        {
          images.map((value, index) => (
            <div className={`relative h-[200px] w-full flex-shrink-0 transition-transform duration-1000`} key={value} style={{ transform: `translateX(-${(currentIndex / 1) * 100}%)` }}>
              <ImgModel src={value} h="sm:h-full" w="sm:w-full" objectFit="contain" key={value} />
            </div>
          ))
        }
      </div>
      <div className='flex flex-row justify-around items-center h-[30px] w-full'>
          {
            images.map((value, index)=>(
              <div className={`h-[10px] ${(currentIndex == index) ? 'w-[30px]': 'w-[10px]'}  rounded-full bg-yellow-300`} key={value +index}/>
            ))
          }
        </div>
    </div>
  )
}
