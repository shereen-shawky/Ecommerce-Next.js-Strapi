'use client';
import React, { useEffect, useState } from 'react';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import productApis from '../_utils/productApis';

const OurBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    productApis
      .getBlogs()
      .then((res) => {
        setBlogs(res.data.data);
        console.log('Blogs fetched:', res.data.data);
      })
      .catch((err) => {
        console.error('Error fetching blogs:', err);
      });
  }, []);

  const firstBlog = blogs[0];
  const otherBlogs = blogs.slice(1);

  return (
    <section className="py-10 px-4 md:mx-[120px]">
      <div className="text-center ">
         <h2 className=" text-2xl md:text-2xl font-bold text-gray-800 mb-6 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-gray-400 after:mt-2 after:mx-auto">
        Latest Blogs
      </h2>
       
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left large card */}
        {firstBlog && (
          <div className="md:col-span-1 bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src={`http://localhost:1337${firstBlog.image[0].url}`}
              alt={firstBlog.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <div className="flex text-sm text-gray-500 items-center mb-2 gap-4">
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  {firstBlog.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {firstBlog.readtime} min read
                </span>
              </div>
              <h3 className="text-md font-semibold mb-1">{firstBlog.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">{blogs.description?.[0]?.children?.[0]?.text}</p>
            </div>
          </div>
        )}

        {/* Right stacked cards */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {otherBlogs.map((blog) => (
            <div key={blog.id} className="flex bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src={`http://localhost:1337${blog.image[0].url}`}
                alt={blog.title}
                className="w-36 h-36 object-cover"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-md font-semibold text-orange-600 mb-1">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {blog.description?.[0]?.children?.[0]?.text}
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
                  <CalendarDays className="w-4 h-4" />
                  {blog.date}
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
      <div className="mt-6 flex justify-end">
          <Link
            href="/blog"
            className="flex items-center text-sm font-medium text-gray-600 hover:underline"
          >
            More Blogs <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
    </section>
  );
};

export default OurBlogs;
