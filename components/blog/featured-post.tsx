import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

const Featured_Posts = ({ data }: any) => {
    // console.log("data", data)
    return (
        <div className='shadow-[-1px_3px_10px_0px_rgba(0,0,0,0.06)] border border-[#E5E5E5]'>
            <div className='h-[264px]'>
                <img src={data?.featuredImage?.node?.sourceUrl} alt={data?.title || 'Featured'} width={640} height={264} className='w-full h-full object-cover object-center' loading="lazy" />
            </div>
            <div className='md:p-7 p-5'>
                <p className='text-sm font-semibold text-secondary/80 bg-[#F1F5F9] px-2 py-1 rounded-lg w-fit'>
                    {/* {data?.Category?.name} */}Custom Rigid Boxes
                </p>
                <h4>
                    <Link href={`/blog/${data?.slug}`} className='md:text-xl text-lg font-bold text-black inline-flex my-5'>
                        {data?.title}
                    </Link>
                </h4>
                <p>
                    <Link href={`/blog/${data?.slug}`} className='text-base font-normal text-secondary inline-flex items-center gap-3'>
                        Read More <FaArrowRightLong />
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Featured_Posts