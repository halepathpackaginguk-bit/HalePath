import Image from 'next/image'

function Brands() {
    return (
        <section className='pb-12 md:px-4 px-4'>
            <div className='hale_container md:p-8 p-8'>
                <h2 className='h2'>
                    Custom Cards & Decks USA — Printed for Brands & Sellers
                </h2>
                <p className='sm:text-lg text-sm font-normal text-txt_Clr text-center md:w-4/6 mx-auto'>
                    Whether you're selling playing cards on amazon, Etsy, tarot decks on Shopify, or flash card sets wholesale, we print these cards, boxes and compelete decks for you. Custom tuck boxes, rigid presentation cases, and printed card sleeves, all printed to your exact size and finish with direct factory prices.. Sync your packaging with your store in a few clicks.
                </p>
                <div className='flex flex-wrap sm:gap-7 gap-5 justify-center mt-8'>
                    <Image src="/images/brands/6.svg" alt='brand5' width={200} height={101} className='object-contain object-center scale-90 hover:scale-105 transition-all ease-in-out duration-300' />
                    <Image src="/images/brands/7.svg" alt='brand5' width={200} height={101} className='object-contain object-center scale-90 hover:scale-105 transition-all ease-in-out duration-300' />
                    <Image src="/images/brands/8.svg" alt='brand5' width={200} height={101} className='object-contain object-center scale-90 hover:scale-105 transition-all ease-in-out duration-300' />
                    <Image src="/images/brands/9.svg" alt='brand5' width={200} height={101} className='object-contain object-center scale-90 hover:scale-105 transition-all ease-in-out duration-300' />
                    <Image src="/images/brands/10.svg" alt='brand5' width={200} height={101} className='object-contain object-center scale-90 hover:scale-105 transition-all ease-in-out duration-300' />
                    <Image src="/images/brands/11.svg" alt='brand5' width={200} height={101} className='object-contain object-center scale-90 hover:scale-105 transition-all ease-in-out duration-300' />
                    <Image src="/images/brands/12.svg" alt='brand5' width={200} height={101} className='object-contain object-center scale-90 hover:scale-105 transition-all ease-in-out duration-300' />
                    <Image src="/images/brands/13.svg" alt='brand5' width={200} height={101} className='object-contain object-center scale-90 hover:scale-105 transition-all ease-in-out duration-300' />
                    <Image src="/images/brands/14.svg" alt='brand5' width={200} height={101} className='object-contain object-center scale-90 hover:scale-105 transition-all ease-in-out duration-300' />
                </div>
            </div>
        </section>
    )
}

export default Brands