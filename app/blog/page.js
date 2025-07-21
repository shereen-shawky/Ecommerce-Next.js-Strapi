'use client';
import { useEffect, useState } from 'react';
import BlogCard from "../_components/BlogCard";
import VideoCard from "./_components/VideoCard";
import RecentPostCard from "../_components/RecentPostCard";
import productApis from '../_utils/productApis';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [video, setVideo] = useState([]);

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
useEffect(() => {
    productApis
      .getVideos()
      .then((res) => {
        setVideo(res.data.data);
        console.log('Blogs fetched:', res.data.data);
      })
      .catch((err) => {
        console.error('Error fetching blogs:', err);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 pt-20">
      {/* Blog Posts */}
      <div className="lg:col-span-2 space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              image={`http://localhost:1337${blog.image[0].url}`} // fallback image
              date={blog.date || 'Unknown Date'}
              desc={blog.description[0]?.children[0]?.text || 'No description'}
              readTime={blog.readtime || '3'}
            />
          ))}
        </div>

        <h2 className="text-xl font-semibold mt-8">Recent posts</h2>
        <div className="space-y-4">
          {blogs.map((blog) => (
            <RecentPostCard
              key={blog.id}
              title={blog.title}
              image={`http://localhost:1337${blog.image[0].url}`} // fallback image
              date={blog.date || 'Unknown Date'}
              desc={blog.description[0]?.children[0]?.text || 'No description'}
              readTime={blog.readtime || '3'}
            />
          ))}
        </div>
      </div>

      {/* Sidebar Videos */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Videos</h2>
        {video.map((vid) => (
            <VideoCard
              key={vid.id}
              title={vid.title}
              thumbnail={`http://localhost:1337${vid.thumbnail[0].url}`} 
              videoUrl={`http://localhost:1337${vid.videoUrl[0].url}`}            />
          ))}
      </div>
    </div>
  );
}
