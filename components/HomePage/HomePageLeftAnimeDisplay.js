"use client"
import { fetchCsvData } from '@/redux/slice/csvDataSlice'
import { faCircleLeft, faCircleRight, faEye, faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function HomePageLeftAnimeDisplay() {
    const dispatch = useDispatch()
    const { data, status, error } = useSelector((state => state.csvData))
    const [currentDisplayIndex, setCurrentDisplayIndex] = useState(1)
    const [numOfImageDisplay, setNumOfImageDisplay] = useState(30);
    const displayImg = data.slice(currentDisplayIndex, currentDisplayIndex + numOfImageDisplay);



    useEffect(() => {
        if (status != "succeeded") {
            dispatch(fetchCsvData())
        }
    }, [data])

    if (status == "loading") return <div className='text-white'>Loading....</div>

    const lenOfPage = Math.ceil(data.length / numOfImageDisplay)

    // const nextImg = (value) => {
    //     const length = animeList.length - 1
    //     if (value === "left") {
    //         setCurrentDisplayIndex((currentDisplayIndex - numOfImageDisplay >= 0) ? (currentDisplayIndex - numOfImageDisplay) : 0)
    //     }
    //     if (value === "right") {
    //         console.log(currentDisplayIndex);
    //         setCurrentDisplayIndex((currentDisplayIndex + numOfImageDisplay <= length) ? (currentDisplayIndex + numOfImageDisplay) : currentDisplayIndex)
    //         console.log(currentDisplayIndex);
    //     }

    // }
    // id,name,img_src,comic_url,view_count,comment,love,newest_chapter,updated_at
    return (
        <div className='w-full space-y-5'>
            <div className='grid grid-cols-6 gap-5 text-white p-2'>
                {
                    displayImg.map((value, idx) => (
                        (value.name) ?
                            <div className='relative h-[300px] w-[180px] group'>
                                <div className='relative h-[260px] w-[180px] border-b-2 border-slate-400/50'>
                                    {
                                        (value.img_src != '') &&
                                        <Image
                                            alt='No Image Found'
                                            src={value.img_src}
                                            fill
                                            objectFit='contain'
                                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    }
                                    <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-black to-transparent pl-2" />
                                    <div className="absolute bottom-0 left-0 right-0 p-2 text-white  group-hover:-translate-y-5">
                                        <div className='text-sm text-white group-hover:text-yellow-300'>{value.name}</div>
                                    </div>

                                </div>
                                <div className='bg-black  bg-gradient-to-l group-hover:from-red-900 group-hover:to-transparent p-2'>
                                    <div className='flex flex-row h-[30px] justify-between items-center'>
                                        <div>{value.newest_chapter}</div>
                                        <div className='flex flex-row items-center justify-center space-x-2 text-gray-500'>
                                            <FontAwesomeIcon icon={faEye} className='h-4 w-4' />
                                            <span className='text-xs'>{value.view_count}</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between items-center w-full '>
                                        <span className='text-xs text-gray-500'>{value.newest_chapter}</span>
                                        <span className='text-xs text-gray-500'>{value.updated_at}</span>
                                    </div>

                                </div>
                            </div>
                            : <></>
                    ))
                }

            </div>
            <div className='flex flex-row p-5'>


            </div>
        </div>

    )
}
