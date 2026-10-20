import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const ImgBox = ({ img, title, content, slug }: any) => {
    return (
        <div className='feature_box'>
            <div >
                <Link href={`/${slug}`}>
                    <Image src={img} alt={title || 'packaging'} width={292} height={226} sizes="(max-width: 768px) 100vw, 25vw" className='img-full sm:h-auto h-[240px]' />
                </Link>
            </div>
            <div className='p-5'>
                <h3 className=''>
                    <Link href={`/${slug}`}>{title}</Link>
                </h3>
                <p className='md:text-xl text-lg font-normal text-title_Clr'>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default ImgBox