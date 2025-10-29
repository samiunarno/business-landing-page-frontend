import React, { useState, useLayoutEffect, useRef } from 'react';
import { PlusIcon, MinusIcon } from './icons';

const faqData = [
    {
        question: "Wie lange dauert die Erstellung einer Webseite?",
        answer: "Die Dauer hängt vom Umfang des Projekts ab. Eine einfache Landing Page kann in 1-2 Wochen fertig sein, während ein komplexer Online-Shop 6-8 Wochen oder länger dauern kann. Nach unserem Erstgespräch geben wir Ihnen einen genauen Zeitplan."
    },
    {
        question: "Was kostet eine professionelle Webseite?",
        answer: "Die Kosten sind so individuell wie Ihr Projekt. Faktoren wie Designkomplexität, Funktionsumfang und Content-Erstellung spielen eine Rolle. Wir erstellen Ihnen nach einer genauen Bedarfsanalyse ein transparentes und faires Angebot."
    },
    {
        question: "Bieten Sie auch nach dem Launch Unterstützung an?",
        answer: "Ja, absolut! Wir bieten verschiedene Wartungs- und Support-Pakete an, um sicherzustellen, dass Ihre Webseite immer sicher, aktuell und performant bleibt. Wir stehen Ihnen auch für zukünftige Erweiterungen zur Verfügung."
    },
    {
        question: "Ist meine Webseite für Suchmaschinen optimiert (SEO)?",
        answer: "Ja, jede von uns erstellte Webseite wird mit grundlegenden SEO-Best-Practices entwickelt. Dazu gehören saubere Code-Struktur, mobile Optimierung und schnelle Ladezeiten. Für weiterführende SEO-Strategien bieten wir spezielle Pakete an."
    }
];

const FaqItem: React.FC<{ item: typeof faqData[0], isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
    const contentRef = React.useRef<HTMLDivElement>(null);

    return (
        <div className="border-b border-border">
            <button
                className="w-full flex justify-between items-center text-left py-6"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <h3 className="text-lg md:text-xl font-semibold text-foreground">{item.question}</h3>
                <span className="text-primary transition-transform duration-300 transform">
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                </span>
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
            >
                <p className="text-muted-foreground pb-6">{item.answer}</p>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);


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
        }).from(listRef.current?.children, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
        }, "-=0.5");

    }, []);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section ref={sectionRef} className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-6">
                <div ref={titleRef} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Häufig gestellte Fragen</h2>
                    <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Antworten auf die wichtigsten Fragen rund um Ihr Webprojekt.
                    </p>
                </div>
                <div ref={listRef} className="max-w-3xl mx-auto">
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;