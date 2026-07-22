import Link from 'next/link'
import React from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6'

function ContentBox({ Cstm_class, img, title, list }: any) {
    return (
        <div className={`flex lg:gap-24 items-center gap-7 ${Cstm_class}`}>
            <div className='lg:w-1/2 w-full'>
                <img src={img} alt={title || 'feature'} width={580} height={440} className='w-full' loading="lazy" />
            </div>
            <div className='lg:w-1/2 w-full'>
                <h3 className='text-base font-normal text-title_Clr mb-4'>
                    Leave Your Concerns Behind!
                </h3>
                {
                    list?.map((l: any, i: any) => (
                        <p key={i} className='text-base font-normal text-title_Clr'>
                            {l.content}
                        </p>
                    ))
                }
                <Link
                    href="#"
                    className="py-[9px] px-[41px] text-white bg-secondary rounded-md hover:bg-white text-sm font-normal hover:text-secondary border-2 border-secondary flex items-center gap-2 mt-8 w-fit"
                >
                    Get Custom Quote
                </Link>
            </div>
        </div>
    )
}

export default ContentBox