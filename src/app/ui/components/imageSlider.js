"use client";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function ImageSlider({ urls }) {
  const [imageIndex, setImageIndex] = useState(0);
  const showNextImg = () => {
    setImageIndex((index) => {
      if (index === urls.length - 1) return 0;
      return index + 1;
    });
  };
  const showPrevImg = () => {
    setImageIndex((index) => {
      if (index === 0) return urls.length - 1;
      return index - 1;
    });
  };
  return (
      <div className="relative w-full sm:h-[500px] xs:h-[250px] sm:max-w-[700px] xs:max-w-[300px] h-[150px] max-w-[250px] aspect-video group overflow-hidden">
          <div className="flex h-full w-full overflow-hidden rounded-lg">
              {urls.map((image, index) => {
                  const imageRatio = image.width/image.height
                  return (
                  <div key={image} className="w-full h-full flex-shrink-0 flex-grow-0 transition-transform ease-in-out duration-300 relative flex justify-center items-center "
                       style={{
                           transform: `translateX(-${100 * imageIndex}%)`,
                           zIndex: index === imageIndex ? 10 : 0,
                       }}>
                      <img
                          className={`block flex-shrink-0 flex-grow-0 max-w-full max-h-full overflow-hidden object-fill select-none ${
                              imageRatio > 1 ? 'object-contain' : 'object-cover'
                          }`}
                          src={image}
                          alt="img1"
                      />
                  </div>
              )})}
          </div>
          <button onClick={showPrevImg} className="z-20 absolute group-hover:sm:translate-x-[32px] -left-[32px] translate-x-[32px] transition-transform h-full flex top-0 justify-center items-center bg-black bg-opacity-50 p-1">
              <ChevronLeftIcon className="h-6 w-6 text-white" />
          </button>
          <button onClick={showNextImg} className="z-20 absolute group-hover:sm:-translate-x-[32px] -right-[32px] -translate-x-[32px] transition-transform h-full flex top-0 justify-center items-center bg-black bg-opacity-50 p-1">
              <ChevronRightIcon className="h-6 w-6 text-white" />
          </button>
          <div className="z-20 absolute top-0 left-1/2 -translate-x-1/2 text-white bg-black bg-opacity-50 p-1 rounded-b-lg">
              {imageIndex+1} z {urls.length}
          </div>
      </div>

  );
}