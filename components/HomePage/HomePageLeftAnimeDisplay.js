"use client"
import { faCircleLeft, faCircleRight, faEye, faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useState } from 'react'

export default function HomePageLeftAnimeDisplay({ animeList }) {
    const [currentDisplayIndex, setCurrentDisplayIndex] = useState(0)
    const [btnEnable, setBtnEnable] = useState(true)
    const [numOfImageDisplay, setNumOfImageDisplay] = useState(6);

    const displayImg = animeList.slice(currentDisplayIndex, currentDisplayIndex + numOfImageDisplay);

    const nextImg = (value) => {
        const length = animeList.length - 1

        if (value === "left") {
            setCurrentDisplayIndex((currentDisplayIndex - numOfImageDisplay >= 0) ? (currentDisplayIndex - numOfImageDisplay) : 0)
        }
        if (value === "right") {
            console.log(currentDisplayIndex);
            setCurrentDisplayIndex((currentDisplayIndex + numOfImageDisplay <= length) ? (currentDisplayIndex + numOfImageDisplay) : currentDisplayIndex)
            console.log(currentDisplayIndex);
        }

    }
    return (
        <div className='relative flex flex-row w-full justify-around items-center space-x-3 p-2'>
            <div className=' z-20 h-5 w-5 rounded-full top-1/3 left-5 bg-white/90 flex items-center' onClick={() => nextImg("left")}><FontAwesomeIcon className='h-4 w-4' icon={faLeftLong} color='red' /></div>
            {
                displayImg.map((value, index) => (
                    <div className='flex flex-col h-[300px] group '>
                        <div className='relative h-[260px] w-[180px] border-b-2 border-slate-400/50'>
                            <Image
                                src={value.linkImg}
                                layout='fill'
                                objectFit='cover'
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-slate-700/20 pl-2" />
                            <div className="absolute bottom-0 left-0 right-0 p-2 text-white  group-hover:-translate-y-5">
                                <div className='text-lg text-white group-hover:text-yellow-300'>{value.name}</div>
                                <div className='text-[10px] text-white/50 group-hover:text-yellow-300'>{value.composer}</div>
                            </div>

                        </div>
                        <div className='bg-black  bg-gradient-to-l group-hover:from-red-900 group-hover:to-transparent'>
                            <div className='flex flex-row h-[30px] justify-between items-center p-2'>
                                <div>#{value.latestChapter}</div>
                                <div className='flex flex-row items-center justify-center space-x-2 text-gray-500'>
                                    <FontAwesomeIcon icon={faEye} className='h-4 w-4' />
                                    <span className='text-xs'>{value.View}</span>
                                </div>
                            </div>
                            <span className='text-xs text-gray-500'>Chapter {value.latestChapter}: {value.description} </span>
                        </div>
                    </div>
                ))
            }
                        <div className=' z-20 h-5 w-5 rounded-full top-1/3 right-5 bg-white/90 flex items-center' onClick={() => nextImg("right")}><FontAwesomeIcon className='h-4 w-4' icon={faRightLong} color='red' /></div>
        </div>
    )
}
