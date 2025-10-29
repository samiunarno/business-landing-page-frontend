import React, { useLayoutEffect, useRef } from 'react';
import { PartnershipIcon, QualityIcon, InnovationIcon } from './icons';

interface PhilosophyProps {
    id: string;
}

const AnimatedCounter: React.FC<{ value: number; label: string }> = ({ value, label }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    useLayoutEffect(() => {
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        const counter = { val: 0 };
        
        gsap.to(counter, {
            val: value,
            duration: 2.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
            onUpdate: () => {
                if (ref.current) {
                     ref.current.textContent = Math.round(counter.val).toString() + (label.includes('%') ? '%' : '+');
                }
            },
        });
    }, [value, label]);

    return (
        <div ref={containerRef} className="text-center">
            <span ref={ref} className="text-5xl md:text-6xl font-bold text-primary">0</span>
            <p className="text-muted-foreground mt-2">{label}</p>
        </div>
    );
};


const values = [
    { icon: <PartnershipIcon />, title: "Partnerschaftlich", description: "Wir sehen uns als Teil Ihres Teams und arbeiten eng mit Ihnen zusammen, um gemeinsame Ziele zu erreichen." },
    { icon: <QualityIcon />, title: "Qualitätsfokussiert", description: "Höchste Standards in Design und Technik sind für uns selbstverständlich. Wir liefern nur Ergebnisse, die uns stolz machen." },
    { icon: <InnovationIcon />, title: "Innovativ", description: "Wir bleiben am Puls der Zeit und integrieren neueste Technologien, um zukunftssichere Lösungen zu schaffen." },
];

const Philosophy: React.FC<PhilosophyProps> = ({ id }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });

        tl.from(titleRef.current, {
            opacity: 0,
            y: -50,
            duration: 0.8,
            ease: 'power3.out'
        }).from(gridRef.current?.children, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
        }, "-=0.5");

    }, []);

    return (
        <section id={id} ref={sectionRef} className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-6">
                <div ref={titleRef} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Unsere Philosophie</h2>
                    <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Die Grundpfeiler, auf denen unser Erfolg und der unserer Kunden aufbaut.
                    </p>
                </div>
                
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {values.map((value, index) => (
                        <div key={index} className="bg-card p-6 sm:p-8 rounded-2xl border border-border">
                             <div className="mb-4 text-primary">{value.icon}</div>
                             <h3 className="text-2xl font-bold text-card-foreground mb-2">{value.title}</h3>
                             <p className="text-muted-foreground">{value.description}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                   <AnimatedCounter value={98} label="Kundenzufriedenheit (%)" />
                   <AnimatedCounter value={150} label="Abgeschlossene Projekte" />
                   <AnimatedCounter value={10} label="Jahre Erfahrung" />
                </div>
            </div>
        </section>
    );
};

export default Philosophy;