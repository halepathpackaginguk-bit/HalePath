import Image from "next/image";
import Link from "next/link";
import React from "react";

const Instagram = () => {
  return (
    <section className="bg-[#EAF6F9] pt-14 px-4">
      <h2 className="text-3xl sm:text-[43px] lg:leading-[50px] mt-5 font-semibold leading-normal text-center">
        Instagram Posts
      </h2>

      <div className="mt-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {insta.map((item, idx) => (
          <Link
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden max-h-[320px]"
          >
            <Image
              src={item.postImg}
              alt={`Instagram Post ${idx + 1}`}
              width={399}
              height={299}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Instagram;

const insta = [
  {
    postImg: "/images/insta1.jpg",
    url: "https://www.instagram.com/halepathpackaging/p/DAVnOUBuL_5/",
  },
  {
    postImg: "/images/insta2.jpg",
    url: "https://www.instagram.com/halepathpackaging/p/DMfh8-quues/",
  },
  {
    postImg: "/images/insta3.jpg",
    url: "https://www.instagram.com/halepathpackaging/p/DZZcpAgjUKP/",
  },
  {
    postImg: "/images/insta4.jpg",
    url: "https://www.instagram.com/halepathpackaging/p/DZUmMDtjTnL/",
  },
  {
    postImg: "/images/insta5.jpg",
    url: "https://www.instagram.com/halepathpackaging/reel/DZO-YsdAkKB/",
  },
];