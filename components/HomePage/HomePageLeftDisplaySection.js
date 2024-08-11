'use client'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import HomePageLeftAnimeDisplay from './HomePageLeftAnimeDisplay'
import { useDispatch, useSelector } from 'react-redux'
import { sortData } from '@/redux/slice/csvDataSlice'

export default function HomePageLeftDisplaySection() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.csvData.data)

    const sortType = () => {
        console.log("work");
        dispatch(sortData())
    }
    console.log(data);
    return (
        <div className='flex items-center  justify-center w-full space-y-5'>
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-row w-full justify-between p-2'>
                            <div className='text-2xl font-semibold gradiant-text cursor-pointer' onClick={()=>sortType()}>Daily Update</div>
                        </div>
                        <HomePageLeftAnimeDisplay/>
                    </div>


        </div>
    )
}
