import React, { useState, useLayoutEffect, useRef } from 'react';
import { SuccessIcon } from './icons';

interface CtaProps {
    id: string;
}

const Cta: React.FC<CtaProps> = ({ id }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useLayoutEffect(() => {
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(sectionRef.current?.querySelector('.cta-box'), {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            scale: 0.95,
            duration: 1,
            ease: 'power3.out'
        });
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real application, you would handle the form submission here,
        // for example, by sending the data to an API endpoint or a service like Formspree.
        setIsSubmitted(true);
    };

    return (
        <section id={id} ref={sectionRef} className="py-20 md:py-32 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="cta-box relative bg-card border border-primary/30 rounded-2xl p-8 sm:p-12 md:p-16 text-center overflow-hidden flex items-center justify-center min-h-[550px] md:min-h-[600px]">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl"></div>
                    
                    <div className="relative z-10 w-full max-w-2xl">
                       {isSubmitted ? (
                            <div key="success" className="animate-fade-in">
                                <SuccessIcon className="w-20 h-20 mx-auto text-primary" />
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-6 mb-4">
                                    Vielen Dank!
                                </h2>
                                <p className="text-lg md:text-xl text-muted-foreground">
                                    Ihre Nachricht wurde erfolgreich versendet. Wir melden uns in Kürze bei Ihnen.
                                </p>
                            </div>
                        ) : (
                            <div key="form" className="animate-fade-in">
                                <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                                    Bereit für den nächsten Schritt?
                                </h2>
                                <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
                                    Lassen Sie uns gemeinsam Ihr Projekt verwirklichen. Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
                                </p>
                                <form onSubmit={handleSubmit} className="space-y-6 text-left" noValidate>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="sr-only">Name</label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                name="name" 
                                                required 
                                                placeholder="Ihr Name" 
                                                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" 
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="sr-only">E-Mail</label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email" 
                                                required 
                                                placeholder="Ihre E-Mail-Adresse" 
                                                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" 
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="sr-only">Nachricht</label>
                                        <textarea 
                                            id="message" 
                                            name="message" 
                                            required 
                                            placeholder="Ihre Nachricht an uns..." 
                                            rows={5} 
                                            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none"
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button 
                                            type="submit" 
                                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-110 shadow-lg shadow-primary/20"
                                        >
                                            Projekt anfragen
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;