import React, { useState, useLayoutEffect, useRef } from 'react';
import { PlusIcon, MinusIcon } from './icons';

const faqData = [
  {
    question: "What exactly is Ramno AI Coaching?",
    answer: "Ramno AI Coaching is an international career and integration program that combines personal mentoring, language development, and artificial intelligence. It helps people around the world prepare for studies, work, and life in the DACH region (Germany, Austria, Switzerland) — practical, digital, and human-centered."
  },
  {
    question: "How does the coaching process work?",
    answer: "The journey begins via WhatsApp or the contact form on the website. The client first answers a few short questions about goals, background, and motivation. This is followed by a free introductory session (30–45 minutes) to define direction and expectations. After the call, the client selects one of the coaching modules, receives access to the Web App, and officially begins the Ramno AI Coaching program."
  },
  {
    question: "Who is Ramno AI Coaching for?",
    answer: "The program is designed for: \n• International professionals and students preparing for opportunities in Europe \n• Job seekers, career changers, and newcomers to the DACH region \n• Migrants and expats aiming to improve integration and communication \n• Individuals who want to rediscover their goals or redefine their career path. \nNo prior language certificates or specific experience are required — the system adapts to each client’s level and personal goals."
  },
  {
    question: "What makes Ramno AI Coaching different from other programs?",
    answer: "Ramno AI Coaching combines human mentoring with AI-powered learning. Through the Web App and WhatsApp, clients receive not only coaching sessions but also daily exercises, instant feedback, and measurable progress reports. The approach is flexible, globally oriented, and supports clients holistically — in language, career, and personal growth."
  },
  {
    question: "Is the first session really free?",
    answer: "Yes. The discovery call is completely free of charge and without obligation. It helps identify the client’s current status, goals, and needs — and ensures that the chosen module truly fits their situation."
  },
  {
    question: "How long does the coaching take?",
    answer: "The duration depends on the selected module: \n• Individual programs usually include 4 to 12 sessions \n• Long-term mentoring can last 3 to 12 months. \nAll sessions take place online, hybrid, or in person (where available). The Web App enables additional daily practice, language training, and access to personal materials."
  },
  {
    question: "Is Ramno AI Coaching officially recognized?",
    answer: "Ramno AI Coaching is built on international education and coaching standards and follows clear quality guidelines for digital learning and personal development. It is structured to collaborate with educational institutions, companies, and organizations worldwide. The integrated Web App is multilingual, currently supporting German, English, Dari, Farsi, Urdu, and Spanish, with additional languages in development to ensure global accessibility."
  },
  {
    question: "How secure is my data?",
    answer: "Data protection and confidentiality are top priorities. All information is stored according to European GDPR regulations. Communication via WhatsApp takes place through verified business channels, and the Web App uses encrypted connections to guarantee data security."
  },
  {
    question: "Can companies or organizations collaborate with Ramno AI Coaching?",
    answer: "Yes. Ramno AI Coaching offers special partnership programs for companies, educational institutions, and government agencies that support international talent and integration. Requests for tailored programs, group sessions, or language and career training are always welcome."
  },
  {
    question: "In which languages is the program available?",
    answer: "Coaching is currently available in German, English, Dari, Farsi, Urdu, and Spanish. The Web App automatically detects the user’s preferred language and level, adapting all exercises, materials, and feedback accordingly. More languages are being developed to make the program accessible worldwide."
  },
  {
    question: "Didn’t find what you were looking for?",
    answer: "Send us a message directly on WhatsApp or via the contact form — the Ramno AI Coaching team will be happy to assist you."
  }
];

const FaqItem: React.FC<{ item: typeof faqData[0], isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-border">
      <button
        className="w-full flex justify-between items-center text-left py-6"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${item.question}`}
      >
        <h3 className="text-lg md:text-xl font-semibold text-foreground">{item.question}</h3>
        <span className="text-primary transition-transform duration-300 transform">
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      <div
        id={`faq-content-${item.question}`}
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Frequently Asked Questions</h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Answers to the most important questions regarding your web project.
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
