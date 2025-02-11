export default function ImageCard({
  src,
  imgWidth = 400,
  text,
  title,
}: {
  src: string;
  imgWidth?: number;
  text: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
      <img
        src={src || "/placeholder.svg"}
        width={imgWidth}
        alt={title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}
