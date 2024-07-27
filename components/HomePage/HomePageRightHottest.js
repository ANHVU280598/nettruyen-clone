import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import HomePageRightHottestDisplay from './HomePageRightHottestDisplay'

export default function HomePageRightHottest() {
    const hottestObj = [
        {
            name: "Boruto: Two Blue Vortex",
            author: "MASASHI KISHIMOTO / MIKIO IKEMOTO",
            view: "413116",
            linkComic: "https://jumpg-assets.tokyo-cdn.com/secure/title/100269/title_thumbnail_portrait_list/311890.jpg?hash=MbYAXkqNhxzvDfsJ1JYHWg&expires=2145884400"
        },
        {
            name: "Chainsaw Man",
            author: "TATSUKI FUJIMOTO",
            view: "391583",
            linkComic: "https://jumpg-assets.tokyo-cdn.com/secure/title/100037/title_thumbnail_portrait_list/312145.jpg?hash=7xViY-tfvvtYqgKJ2vjMCA&expires=2145884400"
        },
        {
            name: "Boruto: Two Blue Vortex",
            author: "MASASHI KISHIMOTO / MIKIO IKEMOTO",
            view: "413116",
            linkComic: "https://jumpg-assets.tokyo-cdn.com/secure/title/100269/title_thumbnail_portrait_list/311890.jpg?hash=MbYAXkqNhxzvDfsJ1JYHWg&expires=2145884400"
        },
        {
            name: "Chainsaw Man",
            author: "TATSUKI FUJIMOTO",
            view: "391583",
            linkComic: "https://jumpg-assets.tokyo-cdn.com/secure/title/100037/title_thumbnail_portrait_list/312145.jpg?hash=7xViY-tfvvtYqgKJ2vjMCA&expires=2145884400"
        },
        {
            name: "Boruto: Two Blue Vortex",
            author: "MASASHI KISHIMOTO / MIKIO IKEMOTO",
            view: "413116",
            linkComic: "https://jumpg-assets.tokyo-cdn.com/secure/title/100269/title_thumbnail_portrait_list/311890.jpg?hash=MbYAXkqNhxzvDfsJ1JYHWg&expires=2145884400"
        }
    ]
    return (
        <div className='w-full bg-red-900 space-y-5'>
            <div className='flex flex-row w-full h-[100px] items-center justify-between bg-gradient-to-r from-white/70 from-1% to-red-900 to-20%'>
                <div className='flex flex-row items-center text-[32px] ml-5'><FontAwesomeIcon icon={faFire} className='mr-3' /> Hottest</div>
                <div className='flex h-[30px] w-[100px] items-center justify-center bg-yellow-400 text-black rounded-tl-xl rounded-bl-xl '>View All</div>
            </div>
            {
                hottestObj.map((value, index) => (
                    <div className='w-full' key={`homepagerighthottes${index}`}>
                        <HomePageRightHottestDisplay name={value.name} author={value.author} view={value.view} linkComic={value.linkComic} index={index + 1} key={"hottest" + index} />
                    </div>
                ))
            }

        </div>
    )
}
