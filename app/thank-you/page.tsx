import PageBanner from "@/components/page-banner";
import Link from "next/link";
import { buildSeo } from "@/lib/seo/generateSeo";

export async function generateMetadata() {
  return buildSeo(
    {
      seo: {
        title: "Thank You | Hale Path Packaging",
        description:
          "Thank you for reaching out to Hale Path Packaging. We'll get back to you shortly.",
      },
    },
    "thank-you",
  );
}

const ThankYou = async () => {
  return (
    <main>
      <PageBanner
        title="Thank You!"
        description="Your submission has been received successfully."
      />
      <section className="py-20 text-center">
        <div className="hale_container">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-title_Clr">
              We&apos;ll Be in Touch!
            </h2>
            <p className="text-lg text-txt_Clr">
              Thank you for reaching out to Hale Path Packaging. Our team will review your request and get back to you within 24-48 hours.
            </p>
            <Link
              href="/"
              className="inline-block btn_secondry mt-4"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThankYou;
