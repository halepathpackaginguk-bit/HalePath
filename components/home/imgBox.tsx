import Link from 'next/link'
import React from 'react'

const ImgBox = ({ img, title, content, slug }: any) => {
    return (
        <div className='feature_box'>
            <div >
                <Link href={`/${slug}`}>
                    <img src={img} alt={title || 'packaging'} width={292} height={226} className='img-full sm:h-auto h-[240px]' loading="lazy" />
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