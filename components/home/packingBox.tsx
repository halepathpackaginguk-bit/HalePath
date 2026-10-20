import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function PackingBox({ title, img, slug }: any) {
    return (
        <div className="w-fit p-4">
            <Image src={img} alt={title || 'packaging'} width={363} height={375} sizes="(max-width: 600px) 92vw, (max-width: 1024px) 33vw, 20vw" className="mx-auto" />
            <Link href={`/${slug}`} className="text-xl font-normal text-title_Clr text-center flex w-fit mx-auto mt-8">
                {title}
            </Link>
        </div>

    )
}

export default PackingBox