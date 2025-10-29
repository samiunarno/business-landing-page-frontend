import { useState, useEffect, useRef, RefObject } from 'react';

interface UseAnimateOnScrollOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

/**
 * Custom hook to animate elements when they scroll into view.
 * Uses Intersection Observer API for performance.
 * @param options - Configuration for the Intersection Observer.
 * @returns A ref to attach to the element and a boolean indicating visibility.
 */
export const useAnimateOnScroll = (
  options: UseAnimateOnScrollOptions = {}
): [RefObject<HTMLDivElement>, boolean] => {
  const { threshold = 0.1, triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else {
          if (!triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, triggerOnce]);

  return [ref, isVisible];
};
