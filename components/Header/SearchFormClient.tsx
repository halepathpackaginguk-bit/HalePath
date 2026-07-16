"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { getSearchProductsData } from "@/lib/data/getProductsData";
import { Product } from "./searchForm";

interface SearchFormClientProps {
  initialProducts: Product[];
}

export default function SearchFormClient({
  initialProducts,
}: SearchFormClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const performSearch = useCallback(
    async (term: string) => {
      if (!term.trim()) {
        setResults(initialProducts);
        setShowResults(false);
        return;
      }

      if (abortRef.current) {
        abortRef.current.abort();
      }
      abortRef.current = new AbortController();

      setLoading(true);
      try {
        const products = await getSearchProductsData(term);
        setResults(products);
        setShowResults(true);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        setResults([]);
      } finally {
        setLoading(false);
      }
    },
    [initialProducts],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        performSearch(searchTerm);
      } else {
        setResults(initialProducts);
        setShowResults(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, performSearch, initialProducts]);

  useEffect(() => {
    return () => {
      if (abortRef.current) {
        abortRef.current.abort();
      }
    };
  }, []);

  return (
    <div className="relative w-full" ref={searchRef}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-secondary"
        onFocus={() =>
          (searchTerm || results.length > 0) && setShowResults(true)
        }
      />

      {/* Search Results Dropdown */}
      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto z-100">
          {loading ? (
            <div className="p-4 text-center">Searching...</div>
          ) : results.length > 0 ? (
            <ul>
              {results.slice(0, 10).map((product: Product) => (
                <li key={product.id} className="border-b last:border-b-0">
                  <a
                    href={`/${product.slug}`}
                    className="block p-3 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowResults(false)}
                  >
                    <div className="font-medium text-gray-900">
                      {product.name}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center text-gray-500">
              {searchTerm ? (
                <>No products found for "{searchTerm}"</>
              ) : (
                <>No products available</>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
