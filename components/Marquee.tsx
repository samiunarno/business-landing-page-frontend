import React from 'react';

interface MarqueeProps {
    images: string[];
    direction?: 'left' | 'right';
}

const Marquee: React.FC<MarqueeProps> = ({ images, direction = 'left' }) => {
    const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
    const marqueeImages = [...images, ...images]; // Duplicate images for seamless loop

    return (
        <div className="relative flex overflow-hidden group">
            <div className={`flex items-center justify-around min-w-full group-hover:[animation-play-state:paused] ${animationClass}`}>
                {marqueeImages.map((src, index) => (
                    <div key={index} className="flex-shrink-0 w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[25vw] mx-4">
                         <img 
                            src={src} 
                            alt={`Marquee image ${index + 1}`} 
                            className="w-full h-auto object-cover rounded-xl shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-105" 
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;