import React from 'react'

function ServiceBox({ title, content, img }: any) {
    return (
        <div className='bg-white py-10 lg:px-12 px-5 rounded-[10px] shadow-[0_4px_63px_0_rgba(0,0,0,0.1)] hover:shadow-none'>
            <div>
                <img src={img} alt='tiny' width={111} height={97} className='mx-auto w-[111px] h-[97px] object-contain' />
                <h3 className='text-xl font-semibold text-title_Clr text-center my-4'>
                    {title}
                </h3>
                <p className='text-base font-normal text-txt_Clr text-center'>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default ServiceBox