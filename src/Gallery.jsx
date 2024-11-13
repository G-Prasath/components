import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  // Handle image click to open the lightbox
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Close the lightbox
  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Grid display of thumbnails */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {images.map((item, index) => (
          <div key={index} className="p-4 cursor-pointer">
            <img
              src={item.original}
              onClick={() => openLightbox(index)}
              alt={`Thumbnail ${index + 1}`}
              className="rounded w-full"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <div className="w-full md:w-3/4 lg:w-1/2">
            <ImageGallery
              items={images}
              startIndex={currentIndex}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
              onSlide={(index) => setCurrentIndex(index)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
