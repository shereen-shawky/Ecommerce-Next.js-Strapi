'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const brands = [
  { id: 1, name: 'Apple', logo: 'apple.webp' },
  { id: 2, name: 'Sony', logo: 'samsung.png' },
  { id: 3, name: 'Samsung', logo: 'sony.png' },
  { id: 4, name: 'Canon', logo: 'lenovo.png' },
  { id: 5, name: 'Huawei', logo: 'huawei.jpg' },
  { id: 6, name: 'Lenovo', logo: 'canon-logo.jpg' },
];

const Brands = () => {
  // Duplicate brands to allow smooth loop
  const loopedBrands = [...brands, ...brands];

  return (
    <div className="py-10 px-4 md:mx-[120px] overflow-hidden">

      <motion.div
        className="flex whitespace-nowrap gap-16"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: 'linear',
        }}
      >
        {loopedBrands.map((brand, index) => (
          <img
            key={index}
            src={brand.logo}
            alt={brand.name}
            className="h-10 w-30 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Brands;
