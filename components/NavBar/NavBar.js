'use client'
import React, { useState } from 'react'
import ImgModel from '../DisplayImg/ImgModel'
import Hamburger from './Hamburger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
  const [searchBtn, isSearchBtn] = useState(false)


  return (
    <div className='flex flex-row sm:h-[55px] sm:px-5 w-full text-white bg-gradient-to-b from-indigo-300/40  to-transparent'>
      {
        !searchBtn && <div className='flex flex-row w-full justify-between items-center'>
          <Hamburger />
          <ImgModel src="/Logo.png" h="h-[75px]" w="w-[75px]" objectFit={"cover"}/>
          <FontAwesomeIcon icon={faMagnifyingGlass} color='white' className='h-5 w-5 cursor-point' onClick={() => isSearchBtn(true)} />
        </div>
      }

      {/* Search  Menu Bar */}
      {
        searchBtn && <div className='flex flex-row w-full  items-center'>
          <div className='flex justify-center items-center h-1/2 w-4/5 bg-gray-300/10 space-x-5 rounded-3xl px-2'>
            <input type='text' className='h-full w-4/5 bg-transparent text-white outline-none rounded-xl' placeholder='Please type comic name' />
            <FontAwesomeIcon icon={faMagnifyingGlass} color='white' className='h-5 w-5 cursor-point' />
          </div>

          <div className='flex h-full justify-center items-center ml-5' onClick={() => isSearchBtn(false)}>
            <div className='relative'>
              <div className='absolute h-[4px] w-[30px] bg-gradient-to-r from-gray-500 to-white rounded-lg origin-center rotate-45' />
              <div className='absolute h-[4px] w-[30px] bg-gradient-to-r from-gray-500 to-white rounded-lg origin-center -rotate-45' />
            </div>
          </div>
        </div>
      }



    </div>
  )
}
