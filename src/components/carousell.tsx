"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const images = Array.from(
  { length: 16 },
  (_, i) => `/Wappen/land_${i + 1}.png`
);

export default function Carousel() {
  return (
    <div className="relative w-full overflow-hidden">
      <Marquee gradient={true} autoFill={true} speed={50}>
        {images.map((src, i) => (
          <span key={i} className="mx-4 inline-block">
            <Image
              src={src}
              alt={`Land ${i + 1}`}
              width={48}
              height={48}
              className="h-14 w-auto object-cover select-none pointer-events-none"
            />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
