import Image from 'next/image'
import React from 'react'

export default function ImgModel() {
    return (
        <div className='relative h-[65px] w-[65px] rounded-full'>
            <Image
                className='rounded-full'
                alt='No Image Found'
                src='/weblogo.jpg'
                fill
                objectFit='contain'
            />
        </div>
    )
}
