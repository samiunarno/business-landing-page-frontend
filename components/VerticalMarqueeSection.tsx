import React, { useLayoutEffect, useRef } from 'react';
import VerticalMarquee from './VerticalMarquee';

const imagesCol1 = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/col1-${i}/400/600`);
const imagesCol2 = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/col2-${i}/400/600`);
const imagesCol3 = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/col3-${i}/400/600`);
const imagesCol4 = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/col4-${i}/400/600`);

const VerticalMarqueeSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const marqueeContainerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;

        if (gsap && ScrollTrigger && sectionRef.current) {
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'center center',
                    scrub: 1.5,
                },
            });

            gsap.set(marqueeContainerRef.current, { 
                rotateX: 60,
                scale: 0.9,
                y: '-10vh',
                autoAlpha: 0.5,
            });

            tl.to(marqueeContainerRef.current, {
                rotateX: 0,
                scale: 1,
                y: 0,
                autoAlpha: 1,
                duration: 1,
                ease: 'power3.out',
            });

            return () => {
                if (tl.scrollTrigger) tl.scrollTrigger.kill();
                tl.kill();
            };
        }
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[90vh] py-10 md:py-20 bg-background overflow-hidden" style={{ perspective: '1000px' }}>
            <div ref={marqueeContainerRef} className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 -translate-y-[20%]">
                <div className="w-full"><VerticalMarquee images={imagesCol1} direction="up" /></div>
                <div className="w-full mt-[-20vh]"><VerticalMarquee images={imagesCol2} direction="down" /></div>
                <div className="w-full hidden md:block"><VerticalMarquee images={imagesCol3} direction="up" /></div>
                <div className="w-full mt-[-20vh] hidden md:block"><VerticalMarquee images={imagesCol4} direction="down" /></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background"></div>
        </section>
    );
};

export default VerticalMarqueeSection;