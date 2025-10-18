import { useState } from "react";

export function useImageCarousel(imagesLength) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (imagesLength > 0) {
      setCurrentIndex((prev) => (prev === imagesLength - 1 ? 0 : prev + 1));
    }
  };

  const previous = () => {
    if (imagesLength > 0) {
      setCurrentIndex((prev) => (prev === 0 ? imagesLength - 1 : prev - 1));
    }
  };

  return { currentIndex, next, previous };
}