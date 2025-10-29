import React, { useState, useLayoutEffect, useRef } from 'react';

interface ServicesProps {
    id: string;
}

const servicesData = [
    { title: "Webdesign", description: "Modernes und benutzerfreundliches Design, das Ihre Marke perfekt repräsentiert.", imageUrl: "https://picsum.photos/seed/webservice/800/600", svgPath: <><path d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path><path d="M12 3v18"></path><path d="M5 12h14"></path></> },
    { title: "SEO Optimierung", description: "Steigern Sie Ihre Sichtbarkeit in Suchmaschinen und erreichen Sie mehr potenzielle Kunden.", imageUrl: "https://picsum.photos/seed/seoservice/800/600", svgPath: <><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></> },
    { title: "Online Shops", description: "Maßgeschneiderte E-Commerce-Lösungen, die den Verkauf fördern und einfach zu verwalten sind.", imageUrl: "https://picsum.photos/seed/shopservice/800/600", svgPath: <><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path></> },
    { title: "Wartung & Support", description: "Wir halten Ihre Webseite technisch aktuell, sicher und sorgen für einen reibungslosen Betrieb.", imageUrl: "https://picsum.photos/seed/maintservice/800/600", svgPath: <><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"></path></> },
    { title: "Texterstellung", description: "Professionelle und zielgruppengerechte Inhalte, die Ihre Botschaft klar vermitteln.", imageUrl: "https://picsum.photos/seed/textservice/800/600", svgPath: <><path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></> },
    { title: "Logo & CI", description: "Entwicklung eines einzigartigen Markenauftritts, der im Gedächtnis bleibt.", imageUrl: "https://picsum.photos/seed/logoservice/800/600", svgPath: <><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></> },
];

const svgProps = {
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
};

const CardIcon: React.FC<{ path: React.ReactNode }> = ({ path }) => (
    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-4">
        <svg {...svgProps} className="w-6 h-6 text-primary">{path}</svg>
    </div>
);

const ListIcon: React.FC<{ path: React.ReactNode }> = ({ path }) => (
     <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-primary/10 rounded-lg">
        <svg {...svgProps} className="w-5 h-5 text-primary">{path}</svg>
    </div>
);


const Services: React.FC<ServicesProps> = ({ id }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    
    useLayoutEffect(() => {
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
        
        const ctx = gsap.context(() => {
            gsap.from(sectionRef.current?.querySelector('.service-title-anim'), {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
                opacity: 0, y: -50, duration: 0.8, ease: 'power3.out'
            });
            gsap.from(sectionRef.current?.querySelector('.service-content-anim'), {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none none' },
                opacity: 0, y: 50, duration: 1, ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id={id} ref={sectionRef} className="py-20 md:py-32 bg-secondary text-secondary-foreground overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="service-title-anim text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Unsere Leistungen</h2>
                    <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Ein umfassendes Servicepaket für Ihren digitalen Erfolg.
                    </p>
                </div>

                <div className="service-content-anim">
                    {/* Desktop Layout */}
                    <div className="hidden md:grid md:grid-cols-12 gap-12 items-center min-h-[500px]">
                        <div className="md:col-span-4">
                            <ul className="space-y-2">
                                {servicesData.map((service, index) => (
                                    <li key={service.title}>
                                        <button
                                            onMouseEnter={() => setActiveIndex(index)}
                                            className={`w-full text-left p-4 rounded-lg transition-all duration-300 relative ${activeIndex === index ? 'bg-card' : 'hover:bg-card/50'}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <ListIcon path={service.svgPath} />
                                                <span className={`text-xl font-semibold transition-colors duration-300 ${activeIndex === index ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>{service.title}</span>
                                            </div>
                                            <div className={`absolute top-0 left-0 h-full w-1 bg-primary rounded-l-lg transition-transform duration-300 ease-in-out ${activeIndex === index ? 'scale-y-100' : 'scale-y-0'}`} style={{transformOrigin: 'center'}}></div>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:col-span-8 h-full">
                            <div className="relative w-full h-full aspect-[4/3] max-h-[500px] bg-card rounded-2xl border border-border p-8 flex flex-col justify-end overflow-hidden">
                                {servicesData.map((service, index) => (
                                    <React.Fragment key={index}>
                                        <img
                                            src={service.imageUrl}
                                            alt={service.title}
                                            className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-all duration-500 ease-in-out ${activeIndex === index ? 'opacity-20 scale-100' : 'opacity-0 scale-105'}`}
                                            aria-hidden={activeIndex !== index}
                                        />
                                    </React.Fragment>
                                ))}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl"></div>
                                <div className="relative z-10">
                                    {servicesData.map((service, index) => (
                                        <div 
                                            key={index}
                                            className={`absolute bottom-8 left-8 right-8 transition-all duration-500 ease-in-out ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                            aria-hidden={activeIndex !== index}
                                        >
                                            <h3 className="text-3xl font-bold text-primary-foreground mb-2">{service.title}</h3>
                                            <p className="text-lg text-muted-foreground">{service.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-6">
                        {servicesData.map((service, index) => (
                            <div 
                                key={index} 
                                className="bg-card p-6 rounded-2xl border border-border transition-all duration-300 group hover:border-primary/70 hover:-translate-y-1"
                            >
                                <CardIcon path={service.svgPath} />
                                <h3 className="text-xl font-bold text-card-foreground mb-2">{service.title}</h3>
                                <p className="text-muted-foreground text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;