// app/products/[slug]/page.jsx
'use client';
import { useEffect, useState} from 'react';
import { useParams } from 'next/navigation';
import productApis from './../../_utils/productApis';
import ProductCard from './../../_components/ProductCard';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
export default function ProductsByCategoryPage() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
const [likedItems, setLikedItems] = useState([]);
  const { user, isLoaded } = useUser();
  const router = useRouter();

  // Fetch wishlist on component mount and when user changes
  useEffect(() => {
    const fetchWishlist = async () => {
      if (isLoaded && user) {
        try {
          const res = await wishlistApis.getwishlist(user.primaryEmailAddress.emailAddress);
          const likedProducts = res.data.data.flatMap(item => 
            item.products?.map(product => product.id) || []
          );
          setLikedItems(likedProducts);
        } catch (error) {
          console.error("Failed to fetch wishlist:", error);
        }
      }
    };

    fetchWishlist();
  }, [user, isLoaded]);

  const toggleLike = async (productId) => {
    if (!user) {
      router.push('/sign-in');
      return;
    }

    try {
      const data = {
        userEmail: user.primaryEmailAddress.emailAddress,
        products: [productId]
      };

      await wishlistApis.addTowishlist(data);
      
      // Update local state immediately for better UX
      setLikedItems(prev => {
        const isLiked = prev.includes(productId);
        return isLiked 
          ? prev.filter(id => id !== productId) 
          : [...prev, productId];
      });
      
    } catch (error) {
      console.error("Failed to toggle like:", error);
    }
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await productApis.getProductByType(slug);
        setProducts(res.data?.data || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [slug]);

  return (
    <section className="py-20">
  <div
  className="relative w-full h-52 mb-8 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden"
>
  <svg
    className="absolute w-full h-full text-gray-200 opacity-50"
    preserveAspectRatio="none"
    viewBox="0 0 1440 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,106.7C672,96,768,96,864,128C960,160,1056,224,1152,224C1248,224,1344,160,1392,128L1440,96V320H0Z"
    />
  </svg>
  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 capitalize z-10 text-center">
    {slug.replace('-', ' ')} Products
  </h1>
</div>


  {loading ? (
    <p>Loading...</p>
  ) : products.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:mx-[120px] pt-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isLiked={likedItems.includes(product.id)}
          toggleLike={() => toggleLike(product.id)}
        />
      ))}
    </div>
  ) : (
    <p className='text-center'>No products found in this category.</p>
  )}
</section>

  );
}
