'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  PackageCheck,
  ShieldCheck,
  Truck,
  Smile,
  Leaf,
  Clock,
} from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-32">

        {/* About Us Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-blue-600">Us</span>
            </h2>
            <p className="text-lg leading-relaxed">
              <strong>TechZone</strong> set out to redefine how people shop for electronics. Tired of overpriced tech and unreliable sources, we built a trusted destination where <span className="text-blue-600">quality meets affordability</span>.
              <br /><br />
              From smartphones to smart home gadgets, we offer curated tech deals from top brands fast, secure, and hassle-free. Whether you're a tech enthusiast or just upgrading your setup, we're here to help you save more and shop smarter.
            </p>
          </div>
          <img
            src="/aboutus.png"
            alt="Global Reach"
            width={500}
            height={500}
            className="mx-auto"
          />
        </motion.div>

        {/* Our Mission Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="/mission.jpg"
            alt="Mission"
            width={900}
            height={900}
            className="mx-auto"
          />
          <div className="text-center md:text-left ">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-blue-600">Mission</span>
            </h2>
            <p className="text-lg leading-relaxed">
              At <strong>TechZone</strong>, we believe cutting-edge technology should be accessible to everyone.
              <br /><br />
              Our mission is to make electronics <span className="text-blue-600">affordable, up-to-date, and within reach</span> without compromising quality or service. We work closely with suppliers and manufacturers to offer unbeatable deals, streamline delivery, and ensure every customer gets the best value from their tech investment.
            </p>
          </div>
        </motion.div>

        {/* Our Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <h2 className="text-4xl font-bold">
            Our <span className="text-blue-600">Values</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl dark:border-gray-700 shadow-md hover:shadow-xl transition bg-white dark:bg-gray-800"
                whileHover={{ y: -5 }}
              >
                <div className="text-blue-600 mb-4">{<value.icon size={32} />}</div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-700 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Values for TechZone
const values = [
  {
    icon: PackageCheck,
    title: 'Curated Tech Deals',
    description: 'We handpick the best gadgets and offers so you don’t have to dig through junk.',
  },
  {
    icon: ShieldCheck,
    title: 'Genuine & Guaranteed',
    description: 'Every product is 100% authentic and backed by warranty & support.',
  },
  {
    icon: Truck,
    title: 'Fast & Reliable Shipping',
    description: 'We ship nationwide with trusted carriers and real-time tracking.',
  },
  {
    icon: Smile,
    title: 'Customer-First Service',
    description: 'Your satisfaction is our priority — before and after the sale.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Choices',
    description: 'We support energy-efficient and eco-conscious product lines.',
  },
  {
    icon: Clock,
    title: 'On-Time Promise',
    description: 'We deliver fast, and we deliver on time — every time.',
  },
];
