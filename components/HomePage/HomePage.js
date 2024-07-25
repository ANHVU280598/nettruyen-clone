import React from 'react'
import FirstNavBar from '../NavBar/FirstNavBar'
import NewReleaseBanner from '../NewReleaseBanner/NewReleaseBanner'
import HomePageLeft from './HomePageLeft'
import HomePageRight from './HomePageRight'

export default function HomePage() {
  return (
    <div className='flex flex-col h-full w-full text-white'>
      <NewReleaseBanner />
      <div className='flex flex-row'>
        <div className='flex flex-col w-3/4 bg-black'>
          <HomePageLeft />
        </div>
        <div className='flex w-1/4 bg-slate-800/50'>
          <HomePageRight />
        </div>
      </div>
    </div>
  )
}
