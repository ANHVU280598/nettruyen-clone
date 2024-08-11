'use client'
import React, { useState } from 'react'

export default function Hamburger() {
    const [open, isOpen] = useState(false)



    return (
        <div className={`flex flex-col space-y-1 ${!open && 'cursor-pointer'}`} onClick={() => !open && isOpen(true)}>
            <div className='h-[3px] w-[30px] bg-gradient-to-r from-gray-500 to-white rounded-lg' />
            <div className='h-[3px] w-[30px] bg-gradient-to-r from-gray-500 to-white rounded-lg' />
            <div className='h-[3px] w-[30px] bg-gradient-to-r from-gray-500 to-white rounded-lg' />
            {
                open && <div className='absolute top-0 left-0 h-full w-full z-20  bg-gradient-to-l from-red-700/70 to-black' >
                    <div className='flex flex-col h-full w-full justify-between'>
                        <div className='flex flex-row w-full justify-between items-center px-5 py-5'>
                            {/* Cancel BTN */}
                            <div className='flex cursor-pointer z-20' onClick={() => open && isOpen(false)}>
                                <div className='absolute h-[5px] w-[30px] bg-gradient-to-r from-gray-500 to-white rounded-lg origin-center rotate-45' />
                                <div className='absolute h-[5px] w-[30px] bg-gradient-to-r from-gray-500 to-white rounded-lg origin-center -rotate-45' />
                            </div>
                            {/* Login/ Register*/}
                            <div className='bg-black px-5 py-2 rounded-xl'>
                                <h3 className='text-white font-bold text-md'>Login/ Register</h3>
                            </div>
                        </div>
                        {/* Right Option */}
                        <div className='flex flex-col w-full items-end justify-end space-y-10 px-5'>
                            <h3 className='text-white font-bold text-md'>UPDATES</h3>
                            <h3 className='text-white font-bold text-md'>FEATURED</h3>
                            <h3 className='text-white font-bold text-md'>RANKING</h3>
                            <h3 className='text-white font-bold text-md'>MANWA LIST</h3>
                            <h3 className='text-white font-bold text-md'>CREATORS</h3>
                            <h3 className='text-white font-bold text-md'>FAVORITED</h3>
                        </div>
                        {/* Footer */}
                        <div className='flex flex-col justify-center py-10 px-5 space-y-5 w-full bg-gradient-to-t from-black to-transparent'>
                            <div className='flex flex-row justify-between items-center text-xs'>
                                <span>News and Events</span>
                                <span>Feedback</span>
                                <span>Request Comic</span>
                            </div>
                            <div className='flex flex-row justify-between items-center text-xs'>
                                <span>Privacy Policy</span>
                                <span>Term of Services</span>
                                <span>Copyrights</span>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}
