import React, { Suspense, useRef, useState, useEffect } from 'react';

interface LazyLoadProps {
  children: React.ReactNode;
  placeholderHeight?: string;
}

const LazyLoad: React.FC<LazyLoadProps> = ({ children, placeholderHeight = '600px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't lazy load if IntersectionObserver is not supported
    if (!('IntersectionObserver' in window)) {
        setIsVisible(true);
        return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        // Start loading when the placeholder is 250px away from the viewport
        rootMargin: '250px 0px', 
        threshold: 0.01,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if(currentRef) {
          observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={ref} style={{ minHeight: !isVisible ? placeholderHeight : undefined }}>
      {isVisible && <Suspense fallback={null}>{children}</Suspense>}
    </div>
  );
};

export default LazyLoad;
