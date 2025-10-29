import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { QuoteIcon } from './icons';

const testimonialsData = [
    {
        quote: "Die Zusammenarbeit war erstklassig. Unser neuer Webauftritt hat unsere Erwartungen übertroffen und die Conversion Rate deutlich gesteigert.",
        name: "Max Mustermann",
        company: "CEO, Tech Solutions GmbH",
        avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
        quote: "Vom Design bis zur Umsetzung einfach perfekt. Das Team hat unsere Vision verstanden und in eine beeindruckende Webseite verwandelt.",
        name: "Anna Schmidt",
        company: "Marketing Lead, Innovate AG",
        avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
        quote: "Schnell, professionell und immer ansprechbar. Wir sind mit dem Ergebnis mehr als zufrieden und freuen uns auf zukünftige Projekte.",
        name: "Jürgen Keller",
        company: "Gründer, Startup Hub",
        avatar: "https://i.pravatar.cc/150?img=3"
    },
];

const Testimonials: React.FC = () => {
    const [titleRef, isTitleVisible] = useAnimateOnScroll();
    const [carouselRef, isCarouselVisible] = useAnimateOnScroll({ threshold: 0.3 });
    const [activeIndex, setActiveIndex] = useState(0);
    // Fix: Use ReturnType<typeof setInterval> for browser compatibility instead of NodeJS.Timeout
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const handleNext = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, []);
    
    const startAutoplay = useCallback(() => {
        stopAutoplay(); // Ensure no multiple intervals are running
        intervalRef.current = setInterval(handleNext, 5000);
    }, [handleNext]);

    const stopAutoplay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                stopAutoplay();
            } else if (isCarouselVisible) {
                startAutoplay();
            }
        };

        if (isCarouselVisible) {
            startAutoplay();
            document.addEventListener('visibilitychange', handleVisibilityChange);
        }

        return () => {
            stopAutoplay();
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [isCarouselVisible, startAutoplay]);


    return (
        <section className="py-20 md:py-32 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-6">
                <div 
                    ref={titleRef}
                    className={`text-center mb-16 transition-all duration-700 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Was unsere Kunden sagen</h2>
                    <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Erfolgsgeschichten, die für unsere Qualität und unser Engagement sprechen.
                    </p>
                </div>

                <div 
                    ref={carouselRef}
                    className={`max-w-4xl mx-auto relative transition-all duration-1000 ${isCarouselVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    onMouseEnter={stopAutoplay}
                    onMouseLeave={startAutoplay}
                >
                    <QuoteIcon className="absolute -top-4 -left-4 w-16 h-16 sm:-top-8 sm:-left-8 sm:w-24 sm:h-24 text-background" />
                    <div className="relative bg-card rounded-xl p-8 md:p-12 border border-border min-h-[360px] sm:min-h-[320px] md:min-h-[280px] flex items-center justify-center" style={{ perspective: '1000px' }}>
                        {testimonialsData.map((testimonial, index) => (
                             <div 
                                key={index} 
                                className={`absolute inset-0 px-8 md:px-12 py-8 flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out`}
                                style={{
                                    transform: activeIndex === index ? 'scale(1) rotateX(0deg)' : 'scale(0.8) rotateX(55deg)',
                                    opacity: activeIndex === index ? 1 : 0,
                                    backfaceVisibility: 'hidden',
                                }}
                             >
                                <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mb-6 border-2 border-primary" />
                                <p className="text-lg md:text-xl text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                                <div>
                                    <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                                    <p className="text-primary text-sm">{testimonial.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center space-x-3 mt-8">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground/40'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;