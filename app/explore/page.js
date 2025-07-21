// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import axios from 'axios';
// import { Star } from 'lucide-react';

// const brandFilters = ['Apple', 'Samsung', 'Sony'];
// const ramFilters = ['4 GB', '6 GB', '8 GB', '12 GB'];
// const osFilters = ['Android', 'iOS'];
// const processorFilters = ['Core i3', 'Core i5', 'Core i7'];

// export default function ProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [filters, setFilters] = useState({});

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = new URLSearchParams();
//       if (filters.brand) filters.brand.forEach(b => query.append('filters[brand][$in]', b));
//       if (filters.ram) filters.ram.forEach(r => query.append('filters[ram][$in]', r));
//       if (filters.os) filters.os.forEach(o => query.append('filters[os][$in]', o));
//       if (filters.processor) filters.processor.forEach(p => query.append('filters[processor][$in]', p));
//       const res = await axios.get(`http://localhost:1337/api/products?populate=*&${query.toString()}`);
//       setProducts(res.data.data);
//     };

//     fetchProducts();
//   }, [filters]);

//   const handleChange = (e) => {
//     const { name, value, checked } = e.target;
//     setFilters((prev) => {
//       const updated = { ...prev };
//       if (checked) {
//         updated[name] = [...(updated[name] || []), value];
//       } else {
//         updated[name] = updated[name].filter((v) => v !== value);
//       }
//       return updated;
//     });
//   };

//   return (
//     <div className="flex p-6">
//       {/* Sidebar */}
//       <aside className="w-1/5 border-r pr-4">
//         <h2 className="font-bold text-lg mb-2">Filters</h2>

//         <div className="mb-4">
//           <h3 className="font-semibold mb-1">Brand</h3>
//           {brandFilters.map((brand) => (
//             <label key={brand} className="block text-sm">
//               <input type="checkbox" name="brand" value={brand} onChange={handleChange} /> {brand}
//             </label>
//           ))}
//         </div>

//         <div className="mb-4">
//           <h3 className="font-semibold mb-1">RAM</h3>
//           {ramFilters.map((ram) => (
//             <label key={ram} className="block text-sm">
//               <input type="checkbox" name="ram" value={ram} onChange={handleChange} /> {ram}
//             </label>
//           ))}
//         </div>

//         <div className="mb-4">
//           <h3 className="font-semibold mb-1">Operating System</h3>
//           {osFilters.map((os) => (
//             <label key={os} className="block text-sm">
//               <input type="checkbox" name="os" value={os} onChange={handleChange} /> {os}
//             </label>
//           ))}
//         </div>

//         <div className="mb-4">
//           <h3 className="font-semibold mb-1">Processor</h3>
//           {processorFilters.map((proc) => (
//             <label key={proc} className="block text-sm">
//               <input type="checkbox" name="processor" value={proc} onChange={handleChange} /> {proc}
//             </label>
//           ))}
//         </div>
//       </aside>

//       {/* Product Grid */}
//       <main className="w-4/5 pl-6">
//         <div className="grid grid-cols-4 gap-4">
//           {products.map((product) => {
//             const { title, price, image, isNew, discount, rating } = product.attributes;
//             const imageUrl = image?.data?.attributes?.url;

//             return (
//               <div key={product.id} className="border p-3 rounded-md relative">
//                 {isNew && (
//                   <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">New Arrival</span>
//                 )}
//                 <Image
//                   src={imageUrl}
//                   alt={title}
//                   width={200}
//                   height={200}
//                   className="w-full h-40 object-contain mx-auto"
//                 />
//                 <h3 className="text-sm font-medium mt-2 min-h-[3rem]">{title}</h3>
//                 <div className="flex items-center gap-1 text-yellow-500 text-sm">
//                   {[...Array(rating)].map((_, i) => (
//                     <Star key={i} size={14} fill="currentColor" />
//                   ))}
//                 </div>
//                 <div className="mt-1">
//                   <span className="text-blue-600 font-bold">${price}</span>
//                   {discount && <span className="ml-2 text-xs text-red-500">-{discount}%</span>}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </main>
//     </div>
//   );
// }
