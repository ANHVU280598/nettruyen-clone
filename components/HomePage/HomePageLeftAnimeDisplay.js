"use client"
import { fetchCsvData } from '@/redux/slice/csvDataSlice'
import { faArrowLeft, faArrowRight, faCircleLeft, faCircleRight, faEye, faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/legacy/image"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function HomePageLeftAnimeDisplay() {
    const dispatch = useDispatch()
    const { data, status, error } = useSelector((state => state.csvData))
    const [currentDisplayIndex, setCurrentDisplayIndex] = useState(0)
    const [numOfImageDisplay, setNumOfImageDisplay] = useState(30)
    const [rangePageDisplayFrom, setRangePageDisplayFrom] = useState(0)
    const [rangePageDisplayTo, setRangePageDisplayTo] = useState(4)
    const [currentPage, setCurrentPage] = useState(0)

    const displayImg = data.slice(currentDisplayIndex, currentDisplayIndex + numOfImageDisplay);


    useEffect(() => {
        if (status != "succeeded") {
            dispatch(fetchCsvData())
        }
    }, [data,status])

    if (status == "loading") return <div className='text-white'>Loading....</div>

    const numOfPage = Math.ceil(data.length / numOfImageDisplay)
    const rangePage = Array(numOfPage).fill().map((_, i) => i);

    const pageNavigation = (value, rangePage) => {

        if (value === "left") {
            setRangePageDisplayFrom((rangePageDisplayFrom - rangePageDisplayTo >= 0) ? (rangePageDisplayFrom - rangePageDisplayTo) : 0)
        }
        if (value === "right") {
            let disFrom = rangePageDisplayFrom + 5
            let disTo = disFrom + 4

            if (disFrom < rangePage){
                if (disTo >= rangePage) disTo = rangePage
                setRangePageDisplayFrom(disFrom)
                setRangePageDisplayTo(disTo)
            }
        }
    }
    const pageNavigationCurrentIndex = (idx) => {
        if (currentPage != idx) {
            setCurrentDisplayIndex((idx * numOfImageDisplay))
            setCurrentPage(idx)
        }
        if (idx == 0) {
            setCurrentDisplayIndex(0)
            setCurrentPage(idx)
        }

    }
    
    

    // id,name,img_src,comic_url,view_count,comment,love,newest_chapter,updated_at
    return (
        <div className='w-full space-y-5'>
            <div className='grid grid-cols-2 gap-5 text-white p-2'>
                {
                    displayImg.map((value, idx) => (
                        (value.comic_name) &&
                        <div className='relative h-[300px] w-[180px] group cursor-pointer' key={`${value.id}`}>
                            <div className='relative h-[260px] w-[180px] border-b-2 border-slate-400/50'>
                                {
                                    (value.img_src != '') &&
                                    <Image
                                        alt='No Image Found'
                                        src={value.img_src}
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                }
                                <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-black to-transparent pl-2" />
                                <div className="absolute bottom-0 left-0 right-0 p-2 text-white group-hover:-translate-y-5">
                                    <div className='text-sm text-white group-hover:text-yellow-300'>{value.comic_name}</div>
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
                    ))
                }

            </div>
            <div className='flex flex-row h-[100px] text-white justify-center items-center space-x-3'>
                <div className="flex items-center justify-center h-[30px] w-[30px] bg-white/30 rounded-md cursor-pointer" onClick={() => pageNavigation("left", rangePage.length)}><FontAwesomeIcon icon={faArrowLeft} /></div>
                {
                    rangePage.map((value, idx) => (

                        (value >= rangePageDisplayFrom && value <= rangePageDisplayTo) &&
                        <div key={`${currentPage * numOfImageDisplay} + ${idx}`} className={`flex items-center justify-center h-[30px] w-[30px] ${(currentPage == idx) ? "bg-red-300" : "bg-white/30 cursor-pointer"}  rounded-md `} onClick={() => pageNavigationCurrentIndex(idx)}>{idx + 1}</div>
                    ))
                }
                <div className="flex items-center justify-center h-[30px] w-[30px] bg-white/30 rounded-md cursor-pointer" onClick={() => pageNavigation("right", rangePage.length)}><FontAwesomeIcon icon={faArrowRight} /></div>
            </div>
        </div>

    )
}
