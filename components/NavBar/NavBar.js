import React from 'react'
import ImgModel from '../DisplayImg/ImgModel'

export default function NavBar() {
  return (
    <div className='flex flex-row sm:h-[75px] w-full text-white justify-between items-center bg-gradient-to-r from-indigo-500/10 via-purple-500/50 to-pink-500/60'>
        <div>Hamburger</div>
        <div>Logo</div>
        <ImgModel/>
        <div>Search</div>
    </div>
  )
}
