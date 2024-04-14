"use client";
import { useState } from "react";

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
    <div className="relative w-full h-[400px] max-w-[500px] aspect-video">
      <div className="flex h-full w-full overflow-hidden rounded-lg">
        {urls.map((image) => (
            <div className=" w-full h-full block flex-shrink-0 flex-grow-0 transition-transform ease-in-out duration-300 relative"
                 style={{ transform: `translateX(-${100 * imageIndex}%)` }}>
                <img
                    key={image}
                    // className='block flex-shrink-0 flex-grow-0'
                    src={image}
                    height="100%"
                    alt="img1"
                />
            </div>

        ))}
      </div>
      <button
        onClick={showPrevImg}
        className="absolute  top-1/2 translate-y-1/2"
      >
        lewo
      </button>
      <button
        onClick={showNextImg}
        className="absolute right-0 top-1/2 translate-y-1/2"
      >
        prawo
      </button>
    </div>
  );
}