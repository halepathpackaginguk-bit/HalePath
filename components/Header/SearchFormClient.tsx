"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  databaseId: number;
  name: string;
  slug: string;
  price?: string;
  regularPrice?: string;
  salePrice?: string;
  stockStatus?: string;
  image?: {
    sourceUrl: string;
    altText: string;
  };
}

export default function SearchFormClient({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [allProducts] = useState<Product[]>(initialProducts);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const performSearch = useCallback(
    (query: string) => {
      if (query.length < 2) {
        setSearchResults([]);
        return;
      }

      const results = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()),
      );

      setSearchResults(results.slice(0, 10));
    },
    [allProducts],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm) {
        performSearch(searchTerm);
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, performSearch]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowResults(value.length > 0);
    setSelectedIndex(-1);
  };

  const handleProductClick = (slug: string) => {
    setShowResults(false);
    setSearchTerm("");
    setSearchResults([]);
    router.push(`/${slug}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setSelectedIndex((prev) =>
          prev < searchResults.length - 1 ? prev + 1 : prev,
        );
        break;
      case "ArrowUp":
        event.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        event.preventDefault();
        if (selectedIndex >= 0 && searchResults[selectedIndex]) {
          handleProductClick(searchResults[selectedIndex].slug);
        } else if (searchResults.length > 0) {
          handleProductClick(searchResults[0].slug);
        }
        break;
      case "Escape":
        setShowResults(false);
        setSearchTerm("");
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          autoComplete="off"
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          className="text-sm md:leading-[40px] font-normal text-[#7C7C7C] placeholder:text-[#7C7C7C] bg-white px-7 border border-secondary focus:border-primary outline-none rounded-full w-full pr-12"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <AiOutlineSearch className="text-gray-400 text-xl" />
        </div>
      </div>

      {showResults && searchTerm.length >= 2 && (
        <div className="absolute z-100 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
          {searchResults.length > 0 ? (
            <>
              {searchResults.map((product, index) => (
                <div
                  key={product.databaseId}
                  onClick={() => handleProductClick(product.slug)}
                  className={`p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 transition-colors ${
                    selectedIndex === index ? "bg-gray-50" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {product.image?.sourceUrl && (
                      <img
                        src={product.image.sourceUrl}
                        alt={product.image.altText || product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    )}
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 line-clamp-1">
                        {product.name}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
              <div className="p-2 text-center border-t border-gray-100">
                <button
                  onClick={() =>
                    router.push(
                      `/shop?search=${encodeURIComponent(searchTerm)}`,
                    )
                  }
                  className="text-primary text-sm hover:underline"
                >
                  View all results ({searchResults.length}+)
                </button>
              </div>
            </>
          ) : (
            <div className="p-4 text-center text-gray-500">
              <p className="font-medium">No products found</p>
              <p className="text-sm mt-1">
                Try different keywords for "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
