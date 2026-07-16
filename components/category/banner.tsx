import Image from 'next/image'
import React from 'react'
import Qoute_Form from './qoute-form'

function Banner({ data }: any) {
    return (
        <section className='h-full pt-10'>
            <div className='container mx-auto px-4 grid lg:grid-cols-2 grid-cols-1 gap-7'>
                <div>
                    {data?.image?.mediaItemUrl ? (
                        <Image src={data.image.mediaItemUrl} width={534} height={400} alt={data?.name || 'Category Banner'} className='w-full md:h-[680px] object-contain bg-[#F7F7F7]' />
                    ) : (
                        <div className='w-full md:h-[680px] bg-[#F7F7F7] flex items-center justify-center rounded-[12px]'>
                            <span className="text-gray-400">No image available</span>
                        </div>
                    )}
                </div>
                <div>
                    <h1 className='md:text-4xl text-3xl font-semibold text-title_Clr'>
                        {data?.name}
                    </h1>
                    <p className='text-lg leading-6 my-5 '>
                        {data?.excerpt}
                    </p>
                    <Qoute_Form />
                </div>
            </div>
        </section>
    )
}

export default Banner