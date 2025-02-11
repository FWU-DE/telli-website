import { cn } from "@/utils/tailwind/cn";
import { h2ClassName, paragraphClassName } from "@/utils/tailwind/fonts";

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
      <h2 className={h2ClassName}>{title}</h2>
      <p className={cn(paragraphClassName)}>{text}</p>
    </div>
  );
}
