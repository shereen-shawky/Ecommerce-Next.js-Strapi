'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Categories = [
  {
    name: 'Headphone',
    image: '/headphone.png',
    slug: 'Headphone',
  },
  {
    name: 'Camera',
    image: '/camera.png',
    slug: 'Camera',
  },
  {
    name: 'Laptop',
    image: '/lap.png',
    slug: 'Laptop',
  },
  {
    name: 'Smart Phone',
    image: '/phone.png',
    slug: 'Phone',
  },
  {
    name: 'Smart Watch',
    image: '/smartwatch.png',
    slug: 'Watch',
  },
  {
    name: 'Gaming',
    image: '/gaming.png',
    slug: 'Gaming',
  },
];

export default function TypesSlider() {
  const router = useRouter();

  return (
    <section className="px-6 py-10 md:mx-[120px] text-center">
      <h2 className=" text-2xl md:text-2xl font-bold text-gray-800 mb-6 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-gray-400 after:mt-2 after:mx-auto">
        Shop by Categories
      </h2>


      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-12">
          {Categories.map((category) => (
            <div
              key={category.name}
              onClick={() => router.push(`/products/${category.slug}`)}
              className="cursor-pointer hover:scale-105 transition-transform duration-200 text-center"
            >
              <div className="bg-[#f3f4f6] rounded-xl w-32 h-32 flex items-center justify-center mb-3 shadow-md mx-auto">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <p className="text-base font-medium text-gray-700">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
