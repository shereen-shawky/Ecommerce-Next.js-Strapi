export default function BlogCard({ title, date, image, desc, readTime }) {
  return (
    <div className="rounded-xl overflow-hidden  shadow-sm hover:shadow-md transition">
      <img src={image} className="w-full h-48 object-cover" alt={title} />
      <div className="p-4 space-y-2">
        <p className="text-gray-400 text-sm">{date} • {readTime} min read</p>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
