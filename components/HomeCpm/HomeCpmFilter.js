import { faArrowDownShortWide, faFilter, faSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function HomeCpmFilter() {
    return (
        <div className='grid grid-cols-3 p-2 text-center bg-gradient-to-r from-slate-200/10 to-transparent text-sm gap-y-2 text-yellow-300'>
            <div className='flex flex-col w-full'>
                <span className='text-slate-500 text-xs'>Sort</span>
                <div className='flex flex-row items-center justify-center space'>Hot <FontAwesomeIcon icon={faFilter} className='ml-2 h-2 w-2' /></div>
            </div>
            <div className='flex flex-col w-full'>
                <span className='text-slate-500 text-xs'>No. Chapters</span>
                <div className='flex flex-row items-center justify-center'>Any <FontAwesomeIcon icon={faSign} className='ml-2  h-2 w-2' /></div>
            </div>
            <div className='flex flex-col w-full'>
                <span className='text-slate-500 text-xs'>Genere</span>
                <div className='flex flex-row items-center justify-center'>All <FontAwesomeIcon icon={faArrowDownShortWide} className='ml-2 h-2 w-2' /></div>
            </div>
        </div>
    )
}
