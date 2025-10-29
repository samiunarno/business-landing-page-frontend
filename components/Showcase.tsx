import React, { useLayoutEffect, useRef } from 'react';

// Updated project data for a standard grid layout and added a new project for balance.
const projects = [
    { id: 1, title: 'Projekt Alpha', category: 'E-Commerce', imageUrl: 'https://picsum.photos/seed/proj1/800/600' },
    { id: 2, title: 'Projekt Beta', category: 'Corporate Webseite', imageUrl: 'https://picsum.photos/seed/proj2/800/600' },
    { id: 3, title: 'Projekt Gamma', category: 'Landing Page', imageUrl: 'https://picsum.photos/seed/proj3/800/600' },
    { id: 4, title: 'Projekt Delta', category: 'Portfolio', imageUrl: 'https://picsum.photos/seed/proj4/800/600' },
    { id: 5, title: 'Projekt Epsilon', category: 'Web App', imageUrl: 'https://picsum.photos/seed/proj5/800/600' },
    { id: 6, title: 'Projekt Zeta', category: 'Mobile App', imageUrl: 'https://picsum.photos/seed/proj6/800/600' },
];

interface ShowcaseProps {
    id: string;
}

// Updated ShowcaseCard to enforce a consistent aspect ratio.
const ShowcaseCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => {
    return (
        <div className={`group overflow-hidden rounded-2xl relative shadow-lg aspect-[4/3]`}>
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" loading="lazy" />
            
            {/* Base gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            {/* Hover overlay for emphasis */}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <div className="transition-transform duration-500 transform group-hover:-translate-y-6">
                    <p className="text-sm text-primary font-semibold">{project.category}</p>
                    <h3 className="text-2xl font-bold text-primary-foreground">{project.title}</h3>
                </div>
                 <a href="#" className="absolute bottom-6 right-6 flex items-center text-primary-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 group-hover:underline">
                    Mehr ansehen
                    <svg className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
            </div>
        </div>
    );
};


const Showcase: React.FC<ShowcaseProps> = ({ id }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power3.out'
        });

        const cards = gridRef.current?.children;
        if (cards) {
            Array.from(cards).forEach((card) => {
                const cardEl = card as HTMLElement;
                gsap.from(cardEl, {
                    autoAlpha: 0,
                    y: 60,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cardEl,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                    }
                });
            });
        }
    }, []);

    return (
        <section id={id} ref={sectionRef} className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-6">
                <div ref={titleRef} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Unsere Arbeiten</h2>
                    <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Ein Einblick in unsere Projekte, die für sich sprechen.
                    </p>
                </div>
                {/* Updated grid for a standard layout and better responsiveness. */}
                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ShowcaseCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showcase;