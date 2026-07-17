import Link from 'next/link';

export default function CategoryCard({ category }: { category: any }) {
  return (
    <div className="w-full p-2">
      <Link href={`/${category.slug}`}>
        <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
          {category.image?.sourceUrl ? (
            <img
              src={category.image.sourceUrl}
              alt={category.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="bg-gray-300 w-full h-full flex items-center justify-center">
              <span className="text-gray-500">No image</span>
            </div>
          )}
        </div>
      </Link>

      <Link href={`/${category.slug}`} className="block mt-3 font-medium text-center hover:text-blue-600 transition-colors">
        {category.name}
      </Link>
    </div>
  );
}