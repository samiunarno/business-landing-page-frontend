import React, { useLayoutEffect, useRef } from 'react';

const steps = [
    { number: "1", title: "Strategie & Konzeption", description: "Wir beginnen mit einer tiefgehenden Analyse Ihrer Ziele und entwickeln eine maßgeschneiderte Strategie für Ihr Projekt." },
    { number: "2", title: "Design & UX", description: "Unser Kreativteam entwirft ein einzigartiges und intuitives Design, das Ihre Nutzer begeistern wird." },
    { number: "3", title: "Entwicklung", description: "Unsere Entwickler setzen das Design mit modernsten Technologien präzise und performant um." },
    { number: "4", title: "Livegang & Optimierung", description: "Nach ausführlichen Tests geht Ihre Webseite live. Wir unterstützen Sie auch danach bei der kontinuierlichen Verbesserung." },
];

const Process: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const timelineContainerRef = useRef<HTMLDivElement>(null);
    const timelineProgressRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
        
        const processSteps = gsap.utils.toArray('.process-step-item');

        // Animate the title
        gsap.from(titleRef.current, {
            scrollTrigger: { 
                trigger: sectionRef.current, 
                start: 'top 80%', 
                toggleActions: 'play none none none' 
            },
            opacity: 0, 
            y: -50, 
            duration: 0.8, 
            ease: 'power3.out'
        });
        
        // Animate the timeline progress bar
        gsap.from(timelineProgressRef.current, {
            scrollTrigger: {
                trigger: timelineContainerRef.current,
                start: 'top center',
                end: 'bottom bottom-=150',
                scrub: true,
            },
            scaleY: 0,
            transformOrigin: 'top center',
        });

        // Animate each step item
        processSteps.forEach((step: any, index) => {
            const card = step.querySelector('.process-card');
            const number = step.querySelector('.process-number');
            const isOdd = index % 2 !== 0;

            gsap.from(card, {
                scrollTrigger: {
                    trigger: step,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                autoAlpha: 0,
                x: isOdd ? 50 : -50,
                duration: 0.8,
                ease: 'power3.out'
            });

            gsap.from(number, {
                 scrollTrigger: {
                    trigger: step,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                scale: 0.5,
                autoAlpha: 0,
                duration: 0.6,
                ease: 'back.out(1.7)'
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };

    }, []);

    return (
        <section ref={sectionRef} className="py-20 md:py-32 bg-secondary text-secondary-foreground overflow-hidden">
            <div className="container mx-auto px-6">
                <div ref={titleRef} className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Unser Prozess</h2>
                    <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                        In 4 Schritten zu Ihrer perfekten Webseite. Transparent und effizient.
                    </p>
                </div>
                
                <div ref={timelineContainerRef} className="relative max-w-4xl mx-auto">
                    {/* The timeline track */}
                    <div className="absolute top-0 left-6 md:left-1/2 w-px h-full bg-border -translate-x-1/2"></div>
                    {/* The animated timeline progress */}
                    <div ref={timelineProgressRef} className="absolute top-0 left-6 md:left-1/2 w-1 h-full bg-primary -translate-x-1/2"></div>

                    <div className="space-y-16">
                        {steps.map((step, index) => (
                           <div key={index} className="process-step-item relative flex items-center">
                                {/* Number circle */}
                               <div className="process-number absolute top-0 left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl z-10 border-4 border-secondary">
                                    {step.number}
                               </div>

                                {/* Content Card */}
                               <div className={`process-card w-full md:w-1/2 p-6 sm:p-8 bg-card rounded-2xl border border-border shadow-lg 
                                   ${index % 2 === 0 
                                       ? 'ml-14 md:ml-0 md:mr-auto' 
                                       : 'ml-14 md:ml-auto md:mr-0'
                                   }`
                               }>
                                   <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                                   <p className="text-base text-muted-foreground">{step.description}</p>
                               </div>
                           </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;