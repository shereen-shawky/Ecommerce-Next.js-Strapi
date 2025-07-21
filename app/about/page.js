'use client';
import React from 'react';
import { ShieldCheck, Truck, Zap, ThumbsUp } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-16 px-4 pt-20">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Company Introduction */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About TechZone</h1>
          <p className="text-lg max-w-2xl mx-auto">
            TechZone is your trusted destination for the latest electronics and gadgets. Since our launch, we've been dedicated to delivering high-quality tech products at competitive prices with exceptional customer service.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="mission.jpg" alt="Tech Products" className="w-full rounded-lg shadow-md" />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              To make cutting-edge electronics accessible and affordable, empowering people through technology.
            </p>
            <h3 className="text-xl font-medium mb-2">Core Values</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Customer-first approach</li>
              <li>Quality without compromise</li>
              <li>Innovation and continuous improvement</li>
              <li>Transparency and trust</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-10">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <FeatureCard icon={<ShieldCheck />} title="Trusted Quality" description="We only sell 100% genuine, top-rated products." />
            <FeatureCard icon={<Truck />} title="Fast Shipping" description="Quick and reliable delivery across the region." />
            <FeatureCard icon={<Zap />} title="Latest Technology" description="Stay ahead with the newest releases and tech gear." />
            <FeatureCard icon={<ThumbsUp />} title="Customer Support" description="Our team is here 24/7 to help you anytime." />
          </div>
        </div>

      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
      <div className="text-blue-600 dark:text-blue-400 mb-3">
        {icon}
      </div>
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
