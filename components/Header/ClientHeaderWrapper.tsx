"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { NavLinks } from "@/const/navlinks";
import MegaMenuContent from "./mega-menu";
import MobileMenu from "./mobileMenu";

export default function ClientHeaderWrapper() {
  const [openNav, setOpenNav] = useState(false);
  const [megaMenu, setMegaMenu] = useState<number | null>(null);
  const menuRef = useRef<HTMLLIElement>(null);

  // Your existing useEffect for click outside
  // ... rest of your client-side logic

  return (
    <header className="bg-[#f5f5f5] sticky top-0 z-50 sm:py-[15px]">
      <div className="container mx-auto px-4 py-1 flex gap-5 items-center justify-between">
        <div className="lg:hidden w-1/2">
          <Link href="/" className="inline-flex">
            <Image src="/images/logo.png" alt="logo" width={60} height={60} />
          </Link>
        </div>
        <nav className="lg:w-full w-1/2 flex lg:justify-center justify-end items-center">
          <div
            className="menu_icon text-xl lg:hidden block w-fit ml-auto"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <IoMdClose /> : <FaBars />}
          </div>
          <ul className="hidden lg:flex gap-1.5 justify-between w-full">
            {NavLinks?.map((item, idx) => (
              <li
                key={idx}
                ref={menuRef}
                onMouseEnter={() => setMegaMenu(item?.id)}
                onClick={() => setMegaMenu(null)}
                className="cursor-pointer flex items-center"
              >
                <Link
                  href={`${item?.link}`}
                  className={`${megaMenu === item?.id && "main_active"} group text-sm font-normal capitalize text-title_Clr hover:text-white hover:bg-secondary px-2 py-2 rounded-[30px] flex items-center`}
                >
                  {item?.name}
                  {item?.submenu && (
                    <span className="leading-[0]">
                      <FaChevronDown className="ml-1 inline-block text-sm font-normal" />
                    </span>
                  )}
                </Link>
                {item?.submenu && (
                  <div
                    onMouseLeave={() => setMegaMenu(null)}
                    className={`${megaMenu === item?.id ? "block left-1/2 md:-translate-x-1/2 md:absolute 2xl:top-[74px] top-[75px] hale_container static z-50" : "hidden"}`}
                  >
                    <MegaMenuContent
                      setMegaMenu={setMegaMenu}
                      subMenu={item?.submenu}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {openNav && <MobileMenu megaMenus={NavLinks} />}
    </header>
  );
}
