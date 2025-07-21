export default function RecentPostCard({ title, date, image, desc, readTime }) {
  return (
    <div className="pe-10 flex items-start gap-4 rounded-xl overflow-hidden h-30 shadow-sm hover:shadow-md transition">
      <img
        src={image}
        alt="Post thumbnail"
        className="w-30 h-30 object-cover rounded"
      />
      <div className="">
        <p className="text-sm text-gray-400 mb-1">{date} • {readTime} min read</p>
        <h4 className="font-medium text-gray-900">
          {title}
        </h4>
        <p className="text-sm text-gray-600 mt-1">
         {desc}
        </p>
      </div>
    </div>
  );
}
