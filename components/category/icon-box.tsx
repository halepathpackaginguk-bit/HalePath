import Link from 'next/link'
import React from 'react'

const IconBox = ({ title, img, slug }: any) => {
    return (
        <div className='py-9 rounded-[8px] bg-[#F5F5F5] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] border border-[#EDF2F7]'>
            <Link href={`/${slug?.current}`} className='text-base font-medium text-title_Clr flex flex-col items-center gap-1'>
                <div>
                    <img src={img} alt='' width={64} height={64} loading="lazy" />
                </div>
                <p>{title}</p>
            </Link>
        </div>
    )
}

export default IconBox