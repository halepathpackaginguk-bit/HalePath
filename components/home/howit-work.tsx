import Link from 'next/link'
import React from 'react'

function HowIt_work() {
    return (
        <section className="pb-12 md:px-4 px-4">
            <div
                className="hale_container md:p-14 p-5 bg-secondary flex md:flex-row flex-col gap-7 justify-between items-center rounded-[19px]">
                <div className="md:w-1/2 w-full">
                    <p className="md:text-4xl text-xl font-normal text-white sm:mb-5 mb-3 sm:text-left text-center">
                        Globally Expertise Delivered Locally
                    </p>
                    <p className="font-medium text-white sm:text-xl text-sm leading-normal sm:mb-10 mb-5 sm:text-left text-center">
                       Trusted By 1,000+ Brands Across Beauty, Food, Cannabis, E-Commerce & More
                    </p>
                    <a href="/products" className="btn_primary sm:ml-0 ml-auto mr-auto">
                        See All Products
                    </a>
                </div>

                <div className="md:w-1/2 w-full flex md:flex-row flex-col sm:gap-7 gap-3 justify-between">
                    <div className="count_box">
                        <span></span>
                        <h3>
                            35+
                        </h3>
                        <p>
                            Years of Experience
                        </p>
                    </div>
                    <div className="count_box">
                        <span></span>
                        <h3>
                            500,000+
                        </h3>
                        <p>
                            Projects Delivered
                        </p>
                    </div>
                    <div className="count_box">
                        <span></span>
                        <h3>
                            50,000+
                        </h3>
                        <p>
                            Active Brand Partners
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowIt_work