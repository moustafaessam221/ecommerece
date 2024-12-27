import { useRef } from "react";

function useHorizontalScroll(scrollAmount = 200) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return { scrollRef, scroll };
}

export default useHorizontalScroll;
