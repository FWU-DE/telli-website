import { useEffect, useRef } from "react";

const images = Array.from(
  { length: 16 },
  (_, i) => `/Wappen/land_${i + 1}.png`
);

export default function Carousell() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-scroll whitespace-nowrap no-scrollbar"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.concat(images).map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Land ${(i % 16) + 1}`}
            className="h-14 w-auto object-cover"
          />
        ))}
      </div>
      <div className="absolute top-0 left-0 h-full w-16 pointer-events-none bg-gradient-to-r from-white via-white/50 to-transparent" />
      <div className="absolute top-0 right-0 h-full w-16 pointer-events-none bg-gradient-to-l from-white via-white/50 to-transparent" />
    </div>
  );
}
