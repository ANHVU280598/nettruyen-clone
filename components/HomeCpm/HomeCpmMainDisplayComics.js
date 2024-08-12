'use client'
import { fetchCsvData } from '@/redux/slice/csvDataSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ImgModel from '../DisplayImg/ImgModel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function HomeCpmMainDisplayComics() {
    const dispatch = useDispatch()
    const { data, status, error } = useSelector((state) => state.csvData)

    const odd_bg_color = 'odd:bg-gradient-to-l odd:from-blue-300/20 odd:via-violet-900/20 odd:to-transparent'
    const even_bg_color = 'even:bg-gradient-to-l even:from-green-300/20 even:via-violet-900/20 even:to-transparent'
    useEffect(() => {
        if (status != 'succeeded') {
            dispatch(fetchCsvData())
        }
    }, [data])
    console.log(data);

    return (
        <div className='grid grid-cols-1 gap-y-5 mt-5'>
            {
                data.map((val, index) => (
                    <div className={`grid grid-cols-3  ${odd_bg_color}  ${even_bg_color} rounded-tr-xl rounded-br-xl`} key={val.comic_name + index}>
                        <div className=''><ImgModel src={val.img_src} h={'h-[120px]'} w={'w-[120px]'} objectFit={'contain'} /></div>
                        <div className='col-span-2'>
                            <div className='grid grid-cols-3 text-xs gap-y-3'>
                                {/* Comic name */}
                                <div className='col-span-3 text-center text-white text-md font-bold tracking-wider'>{val.comic_name}</div>
                                {/* Ratting */}
                                <div className='gradiant-text'>Rating</div>
                                <div className='flex flex-row col-span-2 space-x-1'>
                                    <div className=''>{val.rating}</div>
                                    <div><FontAwesomeIcon icon={faStar} size='xs' color='yellow' /></div>
                                </div>
                                {/* Status */}
                                <div className='gradiant-text'>Status</div>
                                <div className='flex flex-row col-span-2 space-x-1'>
                                    <div className=''>{val.status}</div>
                                </div>
                                {/* Status */}
                                <div className='gradiant-text'>Genere</div>
                                <div className='flex flex-row col-span-2 flex-wrap'>
                                    {
                                        val.kinds.map((val1, idx)=>(
                                            <div className='mr-2 text-[10px]' key={val.comic_name + val1}>{val1}</div>
                                        ))
                                    }
                         
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
