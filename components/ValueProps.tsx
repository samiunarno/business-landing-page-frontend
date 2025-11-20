import React, { useLayoutEffect, useRef } from 'react';
import { CheckmarkIcon } from './icons';

const aboutMeContent = [
  "At the age of five, I moved from Afghanistan to East Germany, where everything was new. I saw escalators and children with blond hair for the first time — things that seemed ordinary to others but felt like another world to me.",
  "In Afghanistan, we played football with empty ammunition shells. I remember comparing my dusty, cracked feet to my cousins’ clean, well-cared-for ones — a defining moment that sparked a lifelong journey of growth.",
  "Before we left, my mother gave me a message that still guides me today: 'Never become a burden to the country that welcomes you. Accept every opportunity to learn and one day, give something back.' These words shaped my values of gratitude, responsibility, and self-determination — principles I now help others embrace.",
  "As a child, I dreamed of being a professional football player, but life steered me toward language, education, and personal growth. I learned that challenges are not barriers, but preparations for something greater. When you see challenges as training for your future, everything around you shifts.",
  "My work is built on real experience and measurable results: MBA in Project Management & Innovation, 5 years as a language mediator (Dari, Farsi, German, English, Spanish, Urdu), experience in marketing, intercultural communication, and international project management, and author of 'No Plan? No Problem. Your Journey Begins Right Here' (available on Amazon). My book is a practical guide for navigating transitions and finding direction when traditional career paths no longer apply.",
  "Ramno AI Coaching is the culmination of my journey as an interpreter, mentor, and developer of an intelligent learning system. I realized that while technology changes rapidly, people still need human connection for reflection, empathy, and purpose. That’s why Ramno AI Coaching combines:\n\n• Human mentoring for clarity and strategic guidance\n• Artificial intelligence for analysis, feedback, and measurable progress\n• App-based learning that integrates growth into everyday life",
  "The Ramno AI Coaching App was created to integrate learning into people’s daily lives. With features like:\n\n• WhatsApp integration for real-time feedback and language training\n• A dashboard for visual progress and motivation tracking\n• 1:1 mentor sessions via Zoom or in-app calls\n• Multilingual support (German, English, Dari, Farsi, Spanish, Urdu)\n\nThe app is currently in its pilot phase, designed to make coaching accessible anywhere, anytime.",
  "Why AI + Human Coaching Is the Future: \n\n• Access for everyone: Coaching becomes location- and income-independent.\n• Real-life integration: Learning happens in daily conversations, not just in class.\n• Data with heart: AI tracks progress, but humans give it meaning.\n• Intercultural intelligence: Language becomes a bridge, not a barrier.\n• Future readiness: Education and self-leadership are the true currencies of the future.",
  "I believe that education is the foundation of transformation. With Ramno AI Coaching, I aim to prove that technology doesn’t replace humanity; it amplifies it when used with empathy and purpose."
];

const AboutMe: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none none"
            }
        });

        tl.from(imageRef.current, {
            opacity: 0,
            x: -100,
            duration: 1,
            ease: 'power3.out'
        }).from(contentRef.current?.children, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out'
        }, "-=0.7");

    }, []);

    return (
        <section ref={sectionRef} className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div ref={imageRef}>
                        <img 
                            src="https://picsum.photos/seed/aboutme/800/1000" 
                            alt="About Me"
                            className="rounded-2xl shadow-lg w-full h-full object-cover"
                        />
                    </div>
                    <div ref={contentRef}>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
                            About Me
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground mb-10">
                            I am a coach, mentor, and bridge builder — connecting people, cultures, language, and technology. Through Ramno AI Coaching, I combine human development with artificial intelligence to redefine learning, communication, and personal growth.
                        </p>
                        <ul className="space-y-4">
                            {aboutMeContent.map((content, index) => (
                                <li key={index} className="flex items-center text-base md:text-lg">
                                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-4">
                                        <CheckmarkIcon className="w-4 h-4" />
                                    </span>
                                    <span>{content}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
