import React from 'react'

export const ProductTrust = () => {
    return (
        <div className="py-4 md:px-4 px-4 bg-[#f5f5f5] rounded-2xl">
            <div className="flex flex-wrap gap-2 items-center">
                <p className="">
                    Serving 5000+ Happy Customers!
                </p>
                <img src="/images/trust.png" alt="Trust" className="brand_img"
                    width="180" height="auto" />
                <a href="#" className="text-secondary hover:text-primary text-base  flex w-fit ">

                    4.9 Google Reviews
                </a>

            </div>
        </div>
    )
}
