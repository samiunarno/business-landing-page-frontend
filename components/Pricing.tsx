import React, { useState, useLayoutEffect, useRef } from 'react';
import { CheckmarkIcon } from './icons';

interface PricingProps {
    id: string;
}

const pricingPlans = {
    monthly: [
        { name: "Starter", price: "€149", features: ["1-3 Seiten Webseite", "Individuelles Design", "Mobile Optimierung", "DSGVO-konform"], popular: false },
        { name: "Business", price: "€299", features: ["Bis zu 10 Seiten", "CMS Integration", "SEO Grundlagen", "Blog-Funktion"], popular: true },
        { name: "Enterprise", price: "ab €499", features: ["Unlimitierte Seiten", "Online Shop", "Erweiterte SEO", "Individuelle Funktionen"], popular: false },
    ],
    yearly: [
        { name: "Starter", price: "€1490", features: ["1-3 Seiten Webseite", "Individuelles Design", "Mobile Optimierung", "DSGVO-konform"], popular: false },
        { name: "Business", price: "€2990", features: ["Bis zu 10 Seiten", "CMS Integration", "SEO Grundlagen", "Blog-Funktion"], popular: true },
        { name: "Enterprise", price: "ab €4990", features: ["Unlimitierte Seiten", "Online Shop", "Erweiterte SEO", "Individuelle Funktionen"], popular: false },
    ],
};

const Pricing: React.FC<PricingProps> = ({ id }) => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
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
    
    const handleToggle = () => {
        setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly');
    };

    return (
        <section id={id} ref={sectionRef} className="py-20 md:py-32 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-6">
                <div ref={titleRef} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Faire & Transparente Preise</h2>
                    <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Wählen Sie den Plan, der perfekt zu Ihren Zielen und Ihrem Budget passt.
                    </p>
                     <div className="mt-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm sm:text-base">
                        <span className={`transition-colors ${billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>Monatlich</span>
                        <button
                            onClick={handleToggle}
                            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary ${billingCycle === 'yearly' ? 'bg-primary' : 'bg-muted'}`}
                            role="switch"
                            aria-checked={billingCycle === 'yearly'}
                        >
                            <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${billingCycle === 'yearly' ? 'translate-x-5' : 'translate-x-0'}`} />
                        </button>
                        <span className={`transition-colors ${billingCycle === 'yearly' ? 'text-foreground' : 'text-muted-foreground'}`}>Jährlich (2 Monate gratis)</span>
                    </div>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                   {pricingPlans[billingCycle].map((plan, index) => (
                       <div key={index} className={`relative bg-card rounded-2xl p-6 sm:p-8 border ${plan.popular ? 'border-primary' : 'border-border'}`}>
                           {plan.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">Beliebt</div>}
                           <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                           <div key={`${plan.name}-${billingCycle}`} className="animate-fade-in">
                               <p className="text-4xl font-extrabold text-foreground my-4">{plan.price}</p>
                           </div>
                           <p className="text-muted-foreground min-h-[3.5rem]">Ideal für {plan.name === 'Starter' ? 'Startups & Einzelunternehmer' : plan.name === 'Business' ? 'wachsende Unternehmen' : 'große Projekte & Shops'}.</p>
                           <ul className="space-y-4 my-8">
                               {plan.features.map(feature => (
                                   <li key={feature} className="flex items-center">
                                       <span className="flex-shrink-0 w-5 h-5 bg-primary/20 text-primary rounded-full flex items-center justify-center mr-3">
                                            <CheckmarkIcon className="w-3 h-3" />
                                       </span>
                                       <span className="text-muted-foreground">{feature}</span>
                                   </li>
                               ))}
                           </ul>
                           <a href="#kontakt" className={`w-full text-center block font-semibold py-3 px-6 rounded-lg transition-colors ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                               Plan wählen
                           </a>
                       </div>
                   ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;