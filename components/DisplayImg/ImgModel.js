import Image from 'next/image'
import React from 'react'


export default function ImgModel({src, h, w, objectFit }) {
    
    return (
        <div className={`relative ${h} ${w}`}>
            <Image
                className=''
                alt='No Image Found'
                src={src}
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: objectFit }}
            />
        </div>
    )
}
