import React from 'react';

interface VerticalMarqueeProps {
    images: string[];
    direction?: 'up' | 'down';
}

const VerticalMarquee: React.FC<VerticalMarqueeProps> = ({ images, direction = 'up' }) => {
    const animationClass = direction === 'up' ? 'animate-marquee-up' : 'animate-marquee-down';
    const marqueeImages = [...images, ...images]; // Duplicate for seamless loop

    return (
        <div className="relative flex flex-col h-[600vh] sm:h-[400vh] overflow-hidden group">
            <div className={`flex flex-col items-center min-h-full group-hover:[animation-play-state:paused] ${animationClass}`}>
                {marqueeImages.map((src, index) => (
                    <div key={index} className="flex-shrink-0 w-full p-2">
                         <img 
                            src={src} 
                            alt={`Vertical marquee image ${index + 1}`} 
                            className="w-full h-auto object-cover rounded-xl shadow-lg" 
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerticalMarquee;
