export default function VideoCard({
  title ,
  videoUrl,
  thumbnail 
}) {
  return (
    <div className="relative w-95 h-55 rounded overflow-hidden">
      <video
        src={videoUrl}
        controls
        poster={thumbnail}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-2">
        <p className="text-sm font-medium">{title}</p>
      </div>
    </div>
  );
}
