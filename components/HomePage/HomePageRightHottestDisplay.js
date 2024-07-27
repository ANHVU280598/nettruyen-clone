import { faFirstOrder } from '@fortawesome/free-brands-svg-icons'
import { faFire, faMedal, faRankingStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

export default function HomePageRightHottestDisplay({ name, author, view, linkComic, index }) {

    return (
        <div className='flex flex-row py-3  space-x-5'>
            <div className='relative h-[100px] w-[80px] bg-white ml-5'>
                <div className='absolute h-[20px] w-full left-0 -top-[20px] z-10'>
                    <div className='flex items-center justify-center'><div className='flex justify-center items-center h-[26px] w-[26px] rounded-full bg-black'>
                        {
                            (index == 1) && <FontAwesomeIcon icon={faFirstOrder} color='yellow' />
                        }
                        {
                            (index == 2) && <FontAwesomeIcon icon={faMedal} color='silver' />
                        }
                        {
                            (index == 3) && <FontAwesomeIcon icon={faRankingStar} color='red' />
                        }
                        {
                            (index > 3) && <span>{index}</span>
                        }
                        
                    </div>
                    </div>
                </div>
                <Image
                    alt="img-not-found"
                    src={linkComic}
                    fill
                    style='cover'
                />
            </div>
            <div className='flex flex-col space-y-2 justify-center'>
                <div className='text-xl'>{name}</div>
                <div className='text-xs text-gray-400'>{author}</div>
                <div className='flex flex-row space-x-2 items-center'>
                    <FontAwesomeIcon icon={faFire} />
                    <div>{view}</div>
                </div>
            </div>
        </div>
    )
}
