
const PageBanner = ({ data }: any) => {
    return (
        <section className="py-16 sm:h-[350px] h-[260px] flex items-center justify-center bg-cover bg-no-repeat bg-center bg-black/50 bg-blend-overlay"
            style={{  backgroundImage: data?.featuredImage?.node?.mediaItemUrl    ? `url(${data.featuredImage?.node?.mediaItemUrl})`    : "url('/images/about-page/s2.webp')",}}>
            <div className="hale_container">
                <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-[51px]">
                    {data?.title}
                </h1>
            </div>
        </section >
    )
}

export default PageBanner