import Image from "next/image";
import React from "react";

export function MainImage({
  src,
  alt,
}: Readonly<{
  src: string;
  alt: string;
}>) {
  return (
    <div className="relative w-[98%] mx-auto aspect-video mb-20">
      <Image
        src={src}
        alt={alt}
        className={"rounded-[30px]"}
        layout="fill" // image will stretch to the size of the parent container
        objectFit="cover" // image will maintain aspect ratio and cover the container
        objectPosition="center"
      />
    </div>
  );
}
