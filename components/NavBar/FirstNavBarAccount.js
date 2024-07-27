import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import accountMenu from '@/ultilities/navBarObj'
export default function FirstNavBarAccount() {
    return (
        <div className='relative flex h-full items-center justify-center z-10'>
            <div className='flex items-center group h-full space-x-2'>
                <FontAwesomeIcon className='h-[20px] w-[20px]' icon={faUser} color='white' />
                <span>Account</span>
                <div className='absolute top-[100%] left-0 w-[100px] bg-white text-black invisible group-hover:visible group-hover:block divide-y-2'>
                    {accountMenu.map((item, id) => (
                        <div key={`firstnav${id}`} className='flex flex-row items-center space-x-2 p-1 hover:bg-gray-200 cursor-pointer'>
                            <span>{item.icon}</span> 
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
