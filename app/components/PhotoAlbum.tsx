"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";

const PhotoAlbum = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // thời gian animation (ms)
      once: false,
    });
    // refresh khi ảnh tải xong, hoặc container size đổi
  }, []);
  const photos = [
    {
      src: "/album/anh-chinh.JPG",
      alt: "Ảnh chính",
      aos: "zoom-in",
    },
    {
      src: "/album/anh-cuoi.JPG",
      alt: "Ảnh cưới",
      aos: "fade-left",
    },
    {
      src: "/album/anh-phu-2.JPG",
      alt: "Ảnh phụ 2",
      aos: "fade-up",
    },
    {
      src: "/album/anh-phu.JPG",
      alt: "Ảnh phụ",
      aos: "fade-right",
    },
    {
      src: "/album/anhphu-3.JPG",
      alt: "Ảnh phụ 3",
      aos: "zoom-out",
    },
    {
      src: "/album/anhphu-4.JPG",
      alt: "Ảnh phụ 4",
      aos: "slide-up",
    },
    {
      src: "/album/anhphu-5.JPG",
      alt: "Ảnh phụ 5",
      aos: "flip-left",
    },
    {
      src: "/album/anhphu-6.JPG",
      alt: "Ảnh phụ 6",
      aos: "fade-down",
    },
  ];

  return (
    <div className="px-3 sm:px-4 py-3 sm:py-4 md:py-6 no-scrollbar">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 no-scrollbar overflow-hidden">
        {photos.map((photo, index) => (
          <div key={index} className="relative group cursor-pointer" data-aos={photo.aos}>
            <div className="aspect-[3/4] relative overflow-hidden rounded-md sm:rounded-lg shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 no-scrollbar">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoAlbum;
