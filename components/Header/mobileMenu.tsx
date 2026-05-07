"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type SubItem = {
    title?: string;
    name?: string;
    link: string;
};

type SubMenu = {
    name: string;
    link: string;
    items?: SubItem[];
};

type MenuItem = {
    id: number;
    name: string;
    link: string;
    submenu?: SubMenu[];
};

export default function MobileMenu({ megaMenus }: { megaMenus: MenuItem[] }) {

    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const [openSubIndex, setOpenSubIndex] = useState<{
        menuIndex: number;
        subIndex: number;
    } | null>(null);

    const toggleMenu = (index: number) => {
        setOpenMenuIndex(openMenuIndex === index ? null : index);
        setOpenSubIndex(null); // reset submenu when main closes
    };

    const toggleSubMenu = (menuIndex: number, subIndex: number) => {
        if (
            openSubIndex?.menuIndex === menuIndex &&
            openSubIndex?.subIndex === subIndex
        ) {
            setOpenSubIndex(null);
        } else {
            setOpenSubIndex({ menuIndex, subIndex });
        }
    };

    return (
        <div id="mobileMenu" className="lg:hidden">
            <ul className="h-full overflow-y-scroll bg-white pt-5 min-h-screen max-h-screen">

                {megaMenus?.map((menu, menuIndex) => (
                    <li
                        key={menu.id}
                        className={`flex flex-col px-4 py-2`}
                    >

                        {/* MAIN MENU */}
                        <span className="flex items-center justify-between">
                            <a
                                href={menu.link}
                                className="text-[15px] font-medium uppercase text-title_Clr hover:text-primary w-full"
                            >
                                {menu.name}
                            </a>

                            {menu.submenu && (
                                <FaChevronDown
                                    className={`ml-2 cursor-pointer transition ${openMenuIndex === menuIndex ? "rotate-180" : ""
                                        }`}
                                    onClick={() => toggleMenu(menuIndex)}
                                />
                            )}
                        </span>

                        {/* SUBMENU */}
                        {menu.submenu && openMenuIndex === menuIndex && (
                            <div className="mobileMegaContent px-2 pt-2 space-y-2">

                                {menu.submenu.map((sub, subIndex) => (
                                    <div key={subIndex}>

                                        {/* SUB CATEGORY */}
                                        <span className="flex items-center justify-between">

                                            <a
                                                href={sub.link}
                                                className="text-[15px] font-medium uppercase text-title_Clr hover:text-primary"
                                            >
                                                {sub.name}
                                            </a>

                                            {/* ONLY SHOW IF HAS ITEMS */}
                                            {sub.items && (
                                                <FaChevronDown
                                                    className={`ml-2 cursor-pointer transition ${openSubIndex?.menuIndex === menuIndex &&
                                                        openSubIndex?.subIndex === subIndex
                                                        ? "rotate-180"
                                                        : ""
                                                        }`}
                                                    onClick={() =>
                                                        toggleSubMenu(menuIndex, subIndex)
                                                    }
                                                />
                                            )}
                                        </span>

                                        {/* SUB ITEMS */}
                                        {sub.items &&
                                            openSubIndex?.menuIndex === menuIndex &&
                                            openSubIndex?.subIndex === subIndex && (
                                                <ul className="pt-2 px-2 space-y-2 list-none">
                                                    {sub.items.map((item, idx) => (
                                                        <li key={idx}>
                                                            <a
                                                                href={item.link}
                                                                className="text-[15px] font-medium uppercase text-title_Clr hover:text-primary"
                                                            >
                                                                {item.title || item.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}