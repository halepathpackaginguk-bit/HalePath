const PageBanner = ({ page_info, title, description }: any) => {
    const bannerImage =
        page_info?.featuredImage?.node?.mediaItemUrl ||
        page_info?.featuredImage?.node?.sourceUrl ||
        page_info?.seo?.openGraph?.image?.secureUrl ||
        "/images/about-page/s2.webp";

    return (
        <section
            className="py-16 sm:h-[350px] h-[260px] flex items-center justify-center bg-cover bg-no-repeat bg-center bg-black/50 bg-blend-overlay"
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            <div className="hale_container text-center">
                <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-[51px]">
                    {page_info?.title ? page_info.title : title}
                </h1>
                {description && (
                    <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mt-4">
                        {description}
                    </p>
                )}
            </div>
        </section>
    )
}

export default PageBanner