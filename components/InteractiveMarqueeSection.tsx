import React, { useLayoutEffect, useRef } from 'react';
import Marquee from './Marquee';

// Dummy images for the marquees
const imagesRow1 = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/row1-${i}/600/400`);
const imagesRow2 = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/row2-${i}/600/400`);
const imagesRow3 = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/row3-${i}/600/400`);
const imagesRow4 = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/row4-${i}/600/400`);

interface InteractiveMarqueeSectionProps {
    id: string;
}

const InteractiveMarqueeSection: React.FC<InteractiveMarqueeSectionProps> = ({ id }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const marqueeContainerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        // GSAP is loaded from CDN, so we access it via window
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;

        if (gsap && ScrollTrigger && sectionRef.current) {
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom', // When the top of the section hits the bottom of the viewport
                    end: 'center center', // When the center of the section hits the center of the viewport
                    scrub: 1.5, // Smoothly links animation to scroll
                },
            });

            // Initial "flat" state
            gsap.set(marqueeContainerRef.current, { 
                rotateX: 45, 
                scale: 0.8,
                y: '-20vh'
            });

            // Animate to "wide" state
            tl.to(marqueeContainerRef.current, {
                rotateX: 0,
                scale: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
            });

            return () => {
                // Kill ScrollTrigger instance on unmount
                if (tl.scrollTrigger) {
                    tl.scrollTrigger.kill();
                }
                tl.kill();
            };
        }
    }, []);

    return (
        <section id={id} ref={sectionRef} className="py-20 md:py-32 bg-background overflow-hidden" style={{ perspective: '1500px' }}>
             <div className="container mx-auto px-6 text-center mb-16">
                 <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Ein visueller Fluss unserer Kreativität</h2>
                 <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                     Sehen Sie die Vielfalt und Qualität unserer Arbeit in Bewegung.
                 </p>
            </div>
            <div ref={marqueeContainerRef} className="flex flex-col gap-4">
                <Marquee images={imagesRow1} direction="left" />
                <Marquee images={imagesRow2} direction="right" />
                <Marquee images={imagesRow3} direction="left" />
                <Marquee images={imagesRow4} direction="right" />
            </div>
        </section>
    );
};

export default InteractiveMarqueeSection;