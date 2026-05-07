import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const MegaMenuContent = ({ setMegaMenu, subMenu }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const groupEntries = subMenu || [];
  return (
    <div className="mx-auto !px-0 grid grid-cols-3 container gap-0 rounded-b-2xl shadow-xl bg-black/20 backdrop-blur-[10px]">

      {/* Column 1: Parent Groups */}
      <div className="rounded-bl-2xl">
        <ul>
          {groupEntries.map((group: any, i: number) => (
            <li
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              className={`flex items-center gap-2 py-2 px-5 cursor-pointer ${activeIndex === i ? "active " : ""
                }`}
            >
              <Link
                href={group.link || "#"}
                className="text-xs capitalize text-white flex items-center gap-2"
              >
                {group.name}
                {activeIndex === i && <FaArrowUpRightFromSquare className="ml-2 " />}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 2: Child Items */}
      <div className="col-span-2 bg-secondary/30 backdrop-blur-[10px] rounded-br-2xl">
        {groupEntries.map((group: any, i: number) => (
          <div key={i} className={activeIndex === i ? "block" : "hidden"}>
            <ul>
              {group.items?.map((item: any, idx: number) => (
                <li key={idx} className="py-1 px-5">
                  <Link
                    href={item.link}
                    className="text-xs capitalize text-white hover:text-primary"
                  >
                    {item.title || item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenuContent;