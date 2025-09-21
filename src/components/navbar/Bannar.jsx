import React, { useEffect, useState } from "react";
import { useRef } from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1726866046348-a7a481c28d8f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://media.istockphoto.com/id/2150471415/photo/vegan-buddha-bowl-for-balanced-diet-with-tofu-quinoa-vegetables-and-legumes-wooden-table.jpg?s=1024x1024&w=is&k=20&c=vzr5o8JHVMUrlOdOVjlgXzlWqtT8lWYXMQkM_-6lnHc=",
  "https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const Bannar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 5000;

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      delay
    );
    return () => resetTimeout();
  }, [currentIndex]);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <div className="relative w-full overflow-hidden pt-16 ">
      {/* {slides} */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {" "}
        {images.map((img, index) => (
          <div key={index} className="min-w-full">
            <img
              src={img}
              alt={`banner-${index}`}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(idx)}
          ></button>
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-green-500 hover:text-white transition"
      >
        &#8592;
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-green-500 hover:text-white transition"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Bannar;
