// FIX: Import `useEffect` from `react` to resolve the "Cannot find name 'useEffect'" error.
import React, { useLayoutEffect, useRef, useState, useCallback, useEffect } from 'react';
import { DesignIcon, PerformanceIcon, TransparencyIcon, ResultsIcon, ShopIcon, MaintenanceIcon } from './icons';

interface AdvantagesProps {
    id: string;
}

const advantagesData = [
    {
        icon: <DesignIcon />,
        title: "Einzigartige Designs",
        description: "Keine Vorlagen. Jede Webseite ist ein einzigartiges Meisterwerk, das perfekt auf Ihre Marke zugeschnitten ist.",
    },
    {
        icon: <PerformanceIcon />,
        title: "Performance im Fokus",
        description: "Blitzschnelle Ladezeiten für eine überlegene Benutzererfahrung und bessere SEO-Rankings sind bei uns Standard.",
    },
    {
        icon: <TransparencyIcon />,
        title: "Transparenter Prozess",
        description: "Ständige Kommunikation und klare Meilensteine. Bei uns gibt es keine bösen Überraschungen, nur planbaren Erfolg.",
    },
    {
        icon: <ResultsIcon />,
        title: "Messbare Ergebnisse",
        description: "Wir verfolgen einen datengesteuerten Ansatz, um sicherzustellen, dass Ihre neue Webseite die gesetzten Geschäftsziele erreicht.",
    },
    {
        icon: <ShopIcon />,
        title: "Skalierbare Lösungen",
        description: "Unsere Webseiten wachsen mit Ihrem Unternehmen. Wir bauen auf flexiblen Architekturen, die zukünftige Erweiterungen ermöglichen.",
    },
    {
        icon: <MaintenanceIcon />,
        title: "Langfristiger Support",
        description: "Auch nach dem Livegang sind wir für Sie da. Mit Wartungs- und Support-Paketen sorgen wir für einen reibungslosen Betrieb.",
    },
];

const AdvantageCard: React.FC<{ advantage: typeof advantagesData[0] }> = ({ advantage }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const innerContentRef = useRef<HTMLDivElement>(null);
    const canHover = typeof window !== 'undefined' ? !window.matchMedia('(pointer: coarse)').matches : true;

    useLayoutEffect(() => {
        if (!canHover) return;
        
        const gsap = (window as any).gsap;
        if (!gsap || !cardRef.current || !innerContentRef.current) return;

        const card = cardRef.current;
        const innerContent = innerContentRef.current;
        
        gsap.set(card, { transformStyle: "preserve-3d", transformPerspective: 1000 });
        gsap.set(innerContent, { transformStyle: "preserve-3d", transform: "translateZ(50px)" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY, currentTarget } = e;
            const { left, top, width, height } = (currentTarget as HTMLElement).getBoundingClientRect();
            const x = clientX - left;
            const y = clientY - top;
            const rotateX = gsap.utils.mapRange(0, height, -8, 8, y);
            const rotateY = gsap.utils.mapRange(0, width, 8, -8, x);
            
            gsap.to(card, {
                duration: 0.7,
                rotateX: rotateX,
                rotateY: rotateY,
                scale: 1.03,
                ease: 'power2.out'
            });
        };

        const handleMouseLeave = () => {
             gsap.to(card, {
                duration: 1,
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                ease: 'elastic.out(1, 0.5)'
            });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [canHover]);
    
    return (
         <div ref={cardRef} className="group relative overflow-hidden rounded-2xl border border-border will-change-transform bg-card shadow-lg h-full">
            <div ref={innerContentRef} className="p-6 sm:p-8">
                {advantage.icon}
                <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
            </div>
        </div>
    );
};

const Advantages: React.FC<AdvantagesProps> = ({ id }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    const checkScrollButtons = useCallback(() => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollPrev(scrollLeft > 1);
            setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 1);
        }
    }, []);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            checkScrollButtons();
            carousel.addEventListener('scroll', checkScrollButtons, { passive: true });
            const resizeObserver = new ResizeObserver(checkScrollButtons);
            resizeObserver.observe(carousel);

            return () => {
                carousel.removeEventListener('scroll', checkScrollButtons);
                resizeObserver.unobserve(carousel);
            };
        }
    }, [checkScrollButtons]);

    const scroll = (direction: 'prev' | 'next') => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.clientWidth * 0.9;
            carouselRef.current.scrollBy({
                left: direction === 'prev' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    useLayoutEffect(() => {
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(sectionRef.current?.querySelector('.advantages-title'), {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
                opacity: 0, y: -30, duration: 0.8
            });

            gsap.from(sectionRef.current?.querySelector('.advantages-carousel-wrapper'), {
                 scrollTrigger: { 
                    trigger: sectionRef.current?.querySelector('.advantages-carousel-wrapper'),
                    start: 'top 85%', 
                    toggleActions: 'play none none reverse' 
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power3.out',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id={id} ref={sectionRef} className="py-20 md:py-32 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-6">
                <div className="advantages-title text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Warum wir die richtige Wahl sind</h2>
                    <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Wir kombinieren Design, Technologie und Strategie für Ihren digitalen Vorsprung.
                    </p>
                </div>

                <div className="relative advantages-carousel-wrapper">
                    <div 
                        ref={carouselRef} 
                        className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 -mb-4 scrollbar-hide"
                    >
                        {advantagesData.map((advantage, index) => (
                             <div key={index} className="flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] snap-center">
                                 <AdvantageCard advantage={advantage} />
                             </div>
                        ))}
                    </div>
                    
                    <div className="hidden md:flex justify-center mt-12 gap-4">
                         <button 
                            onClick={() => scroll('prev')} 
                            disabled={!canScrollPrev}
                            aria-label="Previous advantage"
                            className="w-12 h-12 rounded-full bg-card border border-border text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary"
                        >
                            <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                         <button 
                            onClick={() => scroll('next')} 
                            disabled={!canScrollNext}
                            aria-label="Next advantage"
                            className="w-12 h-12 rounded-full bg-card border border-border text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary"
                        >
                             <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
             <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default Advantages;