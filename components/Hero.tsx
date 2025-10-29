import React, { useLayoutEffect, useRef } from 'react';
import Marquee from './Marquee';

const imagesRow1 = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/${i + 10}/600/400`);
const imagesRow2 = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/${i + 20}/600/400`);
const imagesRow3 = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/${i + 30}/600/400`);

interface HeroProps {
    id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
    const marqueeContainerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
            },
        });
        
        gsap.utils.toArray('.parallax-marquee').forEach((layer: any, i) => {
            // Increased depth for a more pronounced parallax effect.
            // Adjusted scale slightly to match.
            const depth = [40, 80, 120][i] || 40;
            const scale = [1, 1.03, 1.06][i] || 1;
            tl.fromTo(layer, {y: 0, scale: 1}, { y: depth, scale: scale, ease: "none" }, 0);
        });

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };

    }, []);

    return (
        <section ref={heroRef} id={id} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-background -mt-20">
            <div ref={marqueeContainerRef} className="absolute inset-0 z-0 opacity-15 dark:opacity-20 scale-150 blur-[2px]">
                 <div className="parallax-marquee absolute inset-0 top-1/4">
                    <Marquee images={imagesRow1} direction="left" />
                </div>
                 <div className="parallax-marquee absolute inset-0 top-[45%]">
                    <Marquee images={imagesRow2} direction="right" />
                </div>
                 <div className="parallax-marquee absolute inset-0 top-[65%]">
                    <Marquee images={imagesRow3} direction="left" />
                </div>
            </div>

            {/* Overlays for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background z-10"></div>
            
            {/* Content */}
            <div className="container mx-auto px-6 text-center z-20">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-tight mb-6">
                    Wir erstellen <span className="text-primary">Premium</span> Webseiten
                </h1>
                <p className="max-w-5xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
                    Professionelles Webdesign, das Ihre Marke stärkt, Besucher fesselt und Ihr Geschäft voranbringt.
                </p>
                <a href="#kontakt" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-110 shadow-lg shadow-primary/20">
                    Jetzt starten
                </a>
            </div>
        </section>
    );
};

export default Hero;