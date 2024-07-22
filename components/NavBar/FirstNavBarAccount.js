import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function FirstNavBarAccount() {
    return (
        <div className='flex h-full  items-center justify-center space-x-2'>
            <div className='relative group'>
                <FontAwesomeIcon className='h-[20px] w-[20px]' icon={faUser} color='white' />
                {/* <span>Account</span> */}
                <div className='absolute top-[10px] h-[100px] w-[50px] bg-white text-black  invisible group-hover:visible '>
                    <div>sfsdfs</div>
                    <div>sfsdfs</div>
                    <div>sfsdfs</div>
                    <div>sfsdfs</div>
                    <div>sfsdfs</div>
                </div>
            </div>
        </div>
    )
}
