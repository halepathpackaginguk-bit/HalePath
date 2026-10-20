import Link from "next/link";
import React from "react";

const CTASECTION = () => {
  return (
    <>
      <section className="bg-secondary py-7 mb-6">
        <div className="hale_container flex md:flex-row flex-col items-center gap-7 justify-between">
          <div className="md:w-2/3 w-full flex flex-wrap items-center gap-3 sm:justify-start justify-center">
            <h3 className="md:text-xl text-base font-normal text-white mr-4 sm:text-left text-center">
              Luxury Packaging That Elevates Your Brand
            </h3>

            <p className="md:text-3xl text-xl font-normal text-primary sm:text-left text-center">
              Enjoy 10% <span className="md:text-3xl text-xl font-normal text-white sm:text-left text-center">
                Bulk Savings
              </span>
            </p>
          </div>
          <div className="md:w-1/3 w-full">
            <Link href="/get-quote-now" className="btn_primary ml-auto md:mr-0 mr-auto">
              Order Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASECTION;
