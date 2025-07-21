'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="dark:bg-gray-900 py-30 px-6 sm:px-10 md:mx-[120px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14"
      >
        {/* Left Section */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold bg-black text-transparent bg-clip-text">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Got a question or proposal? We’d love to hear from you!
          </p>
          <div className="text-gray-700 dark:text-gray-400 space-y-4">
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-black" />
              support@example.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-black" />
              +123 456 7890
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-black" />
              123 Street, City, Country
            </p>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 shadow-2xl rounded-xl space-y-6 border border-gray-100 dark:border-gray-700"
        >
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:black outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:black outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:black outline-none transition"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-black to-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 shadow-lg hover:opacity-90"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
