import React, { useLayoutEffect, useRef } from 'react';
import { CheckmarkIcon } from './icons';

const features = [
    "Individuelles, preisgekröntes Design",
    "Mobile-First & Full-Responsive",
    "SEO-Grundlagen für beste Sichtbarkeit",
    "Blitzschnelle Ladezeiten (Performance)",
    "DSGVO-konforme Umsetzung",
    "Einfach zu bedienendes CMS",
];

const ValueProps: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none none"
            }
        });

        tl.from(imageRef.current, {
            opacity: 0,
            x: -100,
            duration: 1,
            ease: 'power3.out'
        }).from(contentRef.current?.children, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out'
        }, "-=0.7");

    }, []);

    return (
        <section ref={sectionRef} className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div ref={imageRef}>
                        <img 
                            src="https://picsum.photos/seed/value/800/1000" 
                            alt="Ihre neue Webseite"
                            className="rounded-2xl shadow-lg w-full h-full object-cover"
                        />
                    </div>
                    <div ref={contentRef}>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
                            Ihre neue Webseite. Garantiert Premium.
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground mb-10">
                            Wir liefern nicht nur eine Webseite, sondern ein digitales Erlebnis, das auf soliden, zukunftssicheren Prinzipien aufbaut. Das können Sie von uns erwarten:
                        </p>
                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center text-base md:text-lg">
                                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-4">
                                        <CheckmarkIcon className="w-4 h-4" />
                                    </span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProps;