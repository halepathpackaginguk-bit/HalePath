import Link from 'next/link';

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <Link href={`/${product.slug}`} className="block flex-grow">
        {product.image?.sourceUrl ? (
          <div className="aspect-square relative">
            <img
              src={product.image.sourceUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="aspect-square bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No image</span>
          </div>
        )}
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="font-semibold text-lg mb-2 flex-grow">{product.name}</h3>
          {"price" in product && (
            <p className="text-blue-600 font-medium">${product.price}</p>
          )}
        </div>
      </Link>
    </div>
  );
}