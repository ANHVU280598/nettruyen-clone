import React from 'react'
import FirstNavBarAccount from './FirstNavBarAccount'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function FirstNavBar({ h }) {
  const mainColor = "bg-gradient-to-r from-indigo-500/10 via-purple-500/50 to-pink-500/60"
  return (
    <div className={`flex flex-row justify-around items-center h-[${h}] w-full ${mainColor} text-white`}>
      <div>NetTruyen</div>
      <div className='flex flex-row h-[40px] w-[400px]  items-center justify-center rounded-md space-x-2  '>
        <input type='text' name='search-engine' className='h-[30px] w-[350px] text-black rounded-md bg-slate-500/50' />
        <FontAwesomeIcon className='h-[25px] w-[25px]' icon={faSearch} size='xs' color='white' />
      </div>
      <div className=''>
        <FirstNavBarAccount />
      </div>
    </div>
  )
}
