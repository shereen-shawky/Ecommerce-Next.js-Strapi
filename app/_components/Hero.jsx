'use client';
import Image from 'next/image';

export default function ProductShowcase() {
  return (
    <section className="mt-15 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 md:mx-[120px]  ">
      {/* Left Large Card */}
      <div className="lg:col-span-2 relative rounded-2xl overflow-hidden bg-gradient-to-r from-purple-700 to-blue-600 text-white p-8 flex flex-col justify-between">
        <div>
          <div className="flex gap-3 text-sm font-semibold mb-2">
            <span className="bg-white/20 px-3 py-1 rounded-full">New Release</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Limited Edition</span>
          </div>
          <h2 className="text-4xl font-extrabold">Boso Pro X</h2>
          <p className="mt-1 text-lg">Noise Cancelling Headphones</p>
          <ul className="mt-4 space-y-1 text-sm text-white/80">
            <li>• Wireless, Voice Assistant</li>
            <li>• Low Latency Game Mode</li>
            <li>• 40hr Battery Life</li>
          </ul>
        </div>
        <div className="flex items-center justify-between mt-6">
          <p className="text-2xl font-bold">$499</p>
          <button className="bg-gradient-to-r from-blue-400 to-pink-500 px-5 py-2 rounded-full font-semibold">
            Buy Now
          </button>
        </div>
        <Image
          src="/headphone.png" // ✅ Place your image in /public
          alt="Boso Pro X"
          width={400}
          height={400}
          className="absolute right-0 w-[200px] sm:w-[250px] lg:w-[400px]"
        />
      </div>

      <div className="flex flex-col md:flex-row lg:flex-col gap-6">
  {/* Top Right Card */}
  <div className="flex-1 rounded-2xl overflow-hidden bg-gray-900 text-white p-6 flex justify-between items-center">
  <div className='flex flex-col'>
    <p className="text-sm text-white/70">XOMIA</p>
    <h3 className="text-xl font-bold">Fitness Smartwatch</h3>
    <span className="inline-block mt-2 bg-white/10 px-3 py-1 rounded-full text-xs w-fit">
      New &bull; 50m Waterproof
    </span>
    <button className="mt-4 bg-white text-black px-4 py-2 rounded-full w-fit">Explore</button>
  </div>
  <Image
    src="/smartwatch.png"
    alt="Sport Watch"
    width={140}
    height={130}
  />
</div>


  {/* Bottom Right Card */}
  <div className="flex-1 rounded-2xl overflow-hidden bg-black text-white p-6 flex justify-between items-center">
  <div className='flex flex-col'>
    <p className="text-sm text-white/70">OKODO</p>
    <h3 className="text-xl font-bold">HERO 11+ BLACK</h3>
    <p className="mt-1 text-white/60">FROM $169</p>
    <button className="mt-4 bg-white text-black px-4 py-2 rounded-full w-fit">Shop</button>
  </div>
  <Image
    src="/camera.png"
    alt="Hero Black"
    width={140}
    height={130}
  />
</div>
      </div>
    </section>
  );
}
