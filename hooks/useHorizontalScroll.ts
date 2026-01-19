import { useRef, useCallback, useState, useEffect } from 'react';

export const useHorizontalScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const checkScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    setIsLeftDisabled(scrollLeft <= 0);

    setIsRightDisabled(Math.ceil(scrollLeft + clientWidth) >= scrollWidth);
  }, []);

  const scrollLeft = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -600, behavior: 'smooth' });
      setTimeout(checkScroll, 100);
    }
  }, [checkScroll]);

  const scrollRight = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 600, behavior: 'smooth' });
      setTimeout(checkScroll, 100);
    }
  }, [checkScroll]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScroll();

    container.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      container.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  return {
    scrollContainerRef,
    scrollLeft,
    scrollRight,
    isLeftDisabled,
    isRightDisabled,
    checkScroll,
  };
};
