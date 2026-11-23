import PageBanner from "@/components/page-banner";
import { getTestimonails } from "@/lib/data/getHomeData";
import { buildSeo } from "@/lib/seo/generateSeo";
import { FaStar } from "react-icons/fa";

export async function generateMetadata() {
  return buildSeo(
    {
      seo: {
        title: "Customer Stories | Hale Path Packaging",
        description:
          "Read all customer stories and testimonials from brands that trust Hale Path Packaging.",
      },
    },
    "customer-stories"
  );
}

export default async function CustomerStoriesPage() {
  const testimonialsRes = await getTestimonails();

  return (
    <main>
      <PageBanner
        title="Customer Stories"
        description="Read what our customers have to say about working with Hale Path Packaging."
        breadcrumbItems={[{ label: "Customer Stories", href: "/customer-stories" }]}
      />
      <section className="bg-[#F8F5F0] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {testimonialsRes?.map((testimonial: any, index: number) => (
              <article
                key={`${testimonial.title}-${index}`}
                className="group overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-80 overflow-hidden bg-[#F1EDE7]">
                  <img
                    src={
                      testimonial.featuredImage?.node?.sourceUrl ||
                      "/images/default.jpg"
                    }
                    alt={
                      testimonial.featuredImage?.node?.altText || "feature"
                    }
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <ul className="flex items-center gap-1 text-sm">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <li
                        key={starIndex}
                        className={
                          starIndex < (testimonial.testimonialsInfo?.rating ?? 0)
                            ? "text-[#FFAE00]"
                            : "text-gray-300"
                        }
                      >
                        <FaStar />
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-coff_black group-hover:text-secondary mb-3 mt-2 text-lg font-semibold transition">
                    {testimonial.title}
                  </h3>

                  <div
                    className="mb-6 leading-7 text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: testimonial.content,
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
