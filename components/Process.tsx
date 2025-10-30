import React, { useLayoutEffect, useRef } from 'react';

const steps = [
  {
    number: "1",
    title: "Strategie & Konzeption",
    description:
      "Wir beginnen mit einer tiefgehenden Analyse Ihrer Ziele und entwickeln eine maßgeschneiderte Strategie für Ihr Projekt.",
  },
  {
    number: "2",
    title: "Design & UX",
    description:
      "Unser Kreativteam entwirft ein einzigartiges und intuitives Design, das Ihre Nutzer begeistern wird.",
  },
  {
    number: "3",
    title: "Entwicklung",
    description:
      "Unsere Entwickler setzen das Design mit modernsten Technologien präzise und performant um.",
  },
  {
    number: "4",
    title: "Livegang & Optimierung",
    description:
      "Nach ausführlichen Tests geht Ihre Webseite live. Wir unterstützen Sie auch danach bei der kontinuierlichen Verbesserung.",
  },
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
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: -50,
      duration: 0.8,
      ease: 'power3.out',
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
        ease: 'power3.out',
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
        ease: 'back.out(1.7)',
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st: any) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-secondary via-secondary/90 to-secondary-foreground/5 text-secondary-foreground overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground drop-shadow-sm">
            Unser Prozess
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            In 4 Schritten zu Ihrer perfekten Webseite — transparent, effizient
            und kreativ.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={timelineContainerRef} className="relative">
          {/* Timeline track */}
          <div className="absolute top-0 left-[2.1rem] md:left-1/2 w-[2px] h-full bg-border/60 -translate-x-1/2"></div>

          {/* Animated progress line */}
          <div
            ref={timelineProgressRef}
            className="absolute top-0 left-[2.1rem] md:left-1/2 w-[4px] h-full bg-primary/80 rounded-full -translate-x-1/2 shadow-md"
          ></div>

          {/* Steps */}
          <div className="flex flex-col space-y-20 md:space-y-32 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`process-step-item flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? 'md:justify-start md:text-right'
                    : 'md:justify-end md:text-left'
                }`}
              >
                {/* Number bubble */}
                <div className="process-number relative z-20 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg sm:text-xl border-4 border-secondary shadow-lg">
                  {step.number}
                </div>

                {/* Content card */}
                <div
                  className={`process-card mt-6 md:mt-0 w-full md:w-[45%] p-6 sm:p-8 bg-card/70 backdrop-blur-sm rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    index % 2 === 0
                      ? 'md:mr-auto md:pr-10'
                      : 'md:ml-auto md:pl-10'
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Soft glowing background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]"></div>
    </section>
  );
};

export default Process;
