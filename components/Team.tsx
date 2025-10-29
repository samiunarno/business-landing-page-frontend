import React, { useLayoutEffect, useRef } from 'react';
import { TwitterIcon, LinkedinIcon } from './icons';

const teamMembers = [
    {
        name: "Jonas Weber",
        role: "Creative Director",
        imageUrl: "https://i.pravatar.cc/300?img=5",
        bio: "Der visionäre Kopf hinter unseren Designs. Jonas sorgt dafür, dass jede Webseite einzigartig und beeindruckend ist.",
        socials: { twitter: '#', linkedin: '#' }
    },
    {
        name: "Lena Meyer",
        role: "Lead Developer",
        imageUrl: "https://i.pravatar.cc/300?img=6",
        bio: "Unsere Technik-Expertin. Lena verwandelt komplexe Anforderungen in sauberen, performanten Code.",
        socials: { twitter: '#', linkedin: '#' }
    },
    {
        name: "Tom Schmidt",
        role: "SEO & Marketing Strategist",
        imageUrl: "https://i.pravatar.cc/300?img=7",
        bio: "Toms Leidenschaft ist es, Webseiten an die Spitze der Suchergebnisse zu bringen und Traffic zu generieren.",
        socials: { twitter: '#', linkedin: '#' }
    },
];

const TeamCard: React.FC<{ member: typeof teamMembers[0] }> = ({ member }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const canHover = typeof window !== 'undefined' ? !window.matchMedia('(pointer: coarse)').matches : true;

    useLayoutEffect(() => {
        if (!canHover) return;
        
        const gsap = (window as any).gsap;
        if (!gsap || !cardRef.current) return;

        const card = cardRef.current;
        
        gsap.set(card, { transformStyle: "preserve-3d", transformPerspective: 1000 });

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
                scale: 1.05,
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
        <div ref={cardRef} className="bg-card rounded-2xl border border-border p-6 text-center">
            <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-background" loading="lazy" />
            <h3 className="text-2xl font-bold text-card-foreground">{member.name}</h3>
            <p className="text-primary mb-4">{member.role}</p>
            <p className="text-muted-foreground mb-4">{member.bio}</p>
            <div className="flex justify-center space-x-4">
                <a href={member.socials.twitter} aria-label={`${member.name} on Twitter`} className="text-muted-foreground hover:text-primary transition-colors">
                    <TwitterIcon className="w-5 h-5" />
                </a>
                <a href={member.socials.linkedin} aria-label={`${member.name} on LinkedIn`} className="text-muted-foreground hover:text-primary transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
};


const Team: React.FC = () => {
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
        <section ref={sectionRef} className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-6">
                <div ref={titleRef} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Unser Expertenteam</h2>
                    <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Die kreativen und technischen Köpfe, die Ihr Projekt zum Erfolg führen.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;