import Image from 'next/image'
import React from 'react'


export default function ImgModel() {
    return (
        <div className='relative h-[75px] w-[75px]'>
            <Image
                className=''
                alt='No Image Found'
                src='/Logo.png'
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
            />
        </div>
    )
}
