import React from 'react'
import NewReleased from '../NewReleaseBanner/NewReleased'
import Ads from '../Ads/Ads'
import HomeCpmMainDisplay from './HomeCpmMainDisplay'
import HomeCpmFilter from './HomeCpmFilter'
import HomeCpmMainDisplayComics from './HomeCpmMainDisplayComics'

export default function HomeCpm() {
  return (
    <div className='flex flex-col text-white w-screen'>
      <NewReleased/>
      <Ads/>
      <HomeCpmFilter/>
      <HomeCpmMainDisplay/>
    </div>
  )
}
