import React, { useLayoutEffect, useRef } from 'react';

// Project data updated to reflect Ramno AI Coaching content
const projects = [
    { 
        id: 1, 
        title: 'Quality Vision Program', 
        category: 'Education Excellence',
        imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
        description: 'Empowering people worldwide on their professional and personal journeys through structured learning.',
        icon: '💠'
    },
    { 
        id: 2, 
        title: 'Quality Philosophy Framework', 
        category: 'Process Management',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
        description: 'A dynamic process built on precision, transparency, and humanity with continuous growth cycles.',
        icon: '🎯'
    },
    { 
        id: 3, 
        title: 'Global Labor Market Integration', 
        category: 'Career Development',
        imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
        description: 'Aligned with DACH region demands, integrating language, career, and intercultural competencies.',
        icon: '🌍'
    },
    { 
        id: 4, 
        title: '360° Quality Management System', 
        category: 'Holistic Assessment',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
        description: 'Comprehensive quality assurance considering economic, social, and cultural dimensions.',
        icon: '🔄'
    },
    { 
        id: 5, 
        title: 'AI Coaching Certificate Program', 
        category: 'Official Recognition',
        imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
        description: 'CEFR-aligned certificates for global recognition with employers and institutions.',
        icon: '📜'
    },
    { 
        id: 6, 
        title: 'Digital Learning Ecosystem', 
        category: 'Tech Integration',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
        description: 'Bridge between people, cultures, and intelligent learning systems for future-oriented education.',
        icon: '💫'
    },
];

interface ShowcaseProps {
    id: string;
}

// Updated ShowcaseCard with new design
const ShowcaseCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => {
    return (
        <div className="group relative overflow-hidden rounded-3xl shadow-2xl bg-card hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
            {/* Background image with gradient overlay */}
            <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/40 opacity-90 group-hover:opacity-95 transition-opacity duration-500"></div>
                
                {/* Icon overlay */}
                <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm p-4 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    <span className="text-3xl">{project.icon}</span>
                </div>
            </div>

            {/* Content section */}
            <div className="p-6 bg-card border-t border-border">
                <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                        {project.category}
                    </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 line-clamp-2">
                    {project.description}
                </p>
                
                {/* Progress/Impact indicator */}
                <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Program Impact</span>
                        <span className="font-bold text-primary">92%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full w-[92%]"></div>
                    </div>
                </div>
                
                {/* Action button */}
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Official Recognition in Progress
                    </span>
                    <button className="inline-flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors duration-300 group-hover:underline">
                        Explore Module
                        <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
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
        if (!gsap || !ScrollTrigger) return;

        gsap.registerPlugin(ScrollTrigger);

        // Animate title
        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: -30,
            duration: 1,
            ease: 'power3.out'
        });

        // Animate cards with stagger
        const cards = gridRef.current?.children;
        if (cards) {
            gsap.from(cards, {
                opacity: 0,
                y: 50,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                }
            });
        }
    }, []);

    return (
        <section id={id} ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Ramno AI Coaching branding */}
                <div ref={titleRef} className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                        💠 Ramno AI Coaching Programs
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                        Excellence in <span className="text-primary">Education & Integration</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                        Discover our comprehensive programs designed to empower individuals worldwide 
                        through structured learning, measurable progress, and globally recognized certifications.
                    </p>
                    
                    {/* Quality stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
                        <div className="text-center p-4 rounded-2xl bg-card border border-border">
                            <div className="text-2xl font-bold text-primary mb-1">100%</div>
                            <div className="text-sm text-muted-foreground">Quality Commitment</div>
                        </div>
                        <div className="text-center p-4 rounded-2xl bg-card border border-border">
                            <div className="text-2xl font-bold text-primary mb-1">360°</div>
                            <div className="text-sm text-muted-foreground">Quality Management</div>
                        </div>
                        <div className="text-center p-4 rounded-2xl bg-card border border-border">
                            <div className="text-2xl font-bold text-primary mb-1">CEFR</div>
                            <div className="text-sm text-muted-foreground">Aligned Standards</div>
                        </div>
                        <div className="text-center p-4 rounded-2xl bg-card border border-border">
                            <div className="text-2xl font-bold text-primary mb-1">DACH</div>
                            <div className="text-sm text-muted-foreground">Market Focus</div>
                        </div>
                    </div>
                </div>

                {/* Grid of programs */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ShowcaseCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Mission statement footer */}
                <div className="text-center mt-20 max-w-3xl mx-auto">
                    <div className="relative p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                        <div className="text-3xl mb-4">💫</div>
                        <blockquote className="text-xl italic text-muted-foreground mb-4">
                            "Technology does not replace humanity. It amplifies it — through empathy, learning, and the courage to create something new."
                        </blockquote>
                        <div className="font-bold text-foreground">~ Rameen Noor, Founder of Ramno AI Coaching</div>
                        <div className="mt-6 pt-6 border-t border-border">
                            <p className="text-sm text-muted-foreground">
                                Our mission: To make education accessible, personalized, and future-oriented 
                                for individuals taking responsibility for their growth and success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;