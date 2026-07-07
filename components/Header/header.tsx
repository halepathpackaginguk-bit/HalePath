import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/const/navlinks";
import ClientHeaderWrapper from "./ClientHeaderWrapper";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import SearchForm from "./searchForm";

function Header() {
  return (
    <div id="site-header">
      <div className="bg-secondary py-2.5 hidden md:block">
        <div className="hale_container flex items-center justify-between">
          <ul className="flex items-center divide-x-2 divide-white">
            <li>
              <Link
                href="tel:+18884328748"
                className="text-sm font-normal text-white flex items-center gap-1 px-2 cursor-pointer"
              >
                <FaPhone />
                +1 888-432-8748
              </Link>
            </li>
            <li>
              <Link
                href="mailto:sales@halepathpackaging.com"
                className="text-sm font-normal text-white flex items-center gap-1 px-2 cursor-pointer"
              >
                <FaEnvelope />
                sales@halepathpackaging.com
              </Link>
            </li>
          </ul>
          <ul className="flex items-center divide-x-2 divide-white">
            <li>
              <Link
                href="/products/"
                className="text-sm font-normal text-white flex items-center gap-1 px-2 cursor-pointer"
              >
                All Products
              </Link>
            </li>
            <li className="px-2">
              <Link
                href="/about-us/"
                className="text-sm font-normal text-white flex items-center gap-1 px-2 cursor-pointer"
              >
                About Us
              </Link>
            </li>
            <li className="px-2">
              <Link
                href="/blog/"
                className="text-sm font-normal text-white flex items-center gap-1 px-2 cursor-pointer"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white py-1.5 hidden lg:block">
        <div className="hale_container flex items-center justify-between">
          <div className="lg:block hidden sm:w-[25%] w-1/2">
            <Link href="/" className="inline-flex">
              <Image src="/images/logo.png" alt="logo" width={93} height={98} />
            </Link>
          </div>
          <div className="lg:block hidden w-1/2">
            <SearchForm />
          </div>
          <div className="xl:w-1/4 sm:w-1/3 hidden lg:flex gap-5 justify-end">
            <a
              href="https://wa.me/18884328748"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] border-2 border-[#25D366] px-5 py-2 text-[13px] uppercase font-medium text-secondary rounded-full hover:bg-[#075E54] hover:border-[#075E54] hover:text-white flex items-center gap-2.5"
            >
             <FaWhatsapp className="text-lg" />  WhatsApp
            </a>
            <Link
              href="/get-quote-now"
              className="border-2 border-secondary bg-secondary px-5 py-2 text-[13px] uppercase font-medium text-white rounded-full hover:bg-transparent hover:text-secondary"
            >
              Get Quote Now
            </Link>
          </div>
        </div>
      </div>
      <ClientHeaderWrapper />
    </div>
  );
}

export default Header;
