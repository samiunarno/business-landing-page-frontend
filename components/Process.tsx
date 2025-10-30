import React, { useLayoutEffect, useRef } from "react";

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

    const processSteps = gsap.utils.toArray(".process-step-item");

    // Title fade + lift
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: -40,
      scale: 0.95,
      duration: 1,
      ease: "power4.out",
    });

    // Vertical timeline glowing progress
    gsap.fromTo(
      timelineProgressRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: timelineContainerRef.current,
          start: "top 80%",
          end: "bottom bottom-=100",
          scrub: true,
        },
      }
    );

    // Animate steps in stagger
    processSteps.forEach((step: any, index) => {
      const card = step.querySelector(".process-card");
      const number = step.querySelector(".process-number");
      const isOdd = index % 2 !== 0;

      // Card 3D float-in
      gsap.from(card, {
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: isOdd ? 120 : -120,
        rotateY: isOdd ? 25 : -25,
        rotateX: 10,
        duration: 1.2,
        ease: "power3.out",
      });

      // Number pop-in with glow
      gsap.from(number, {
        scrollTrigger: {
          trigger: step,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        scale: 0.4,
        opacity: 0,
        filter: "blur(4px)",
        duration: 0.7,
        ease: "back.out(1.8)",
        delay: 0.1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st: any) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-gradient-to-b from-secondary via-secondary/80 to-background text-secondary-foreground overflow-hidden perspective-[1200px]"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)]">
            Unser Prozess
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            In 4 Schritten zu Ihrer perfekten Webseite — transparent, effizient
            und kreativ.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineContainerRef} className="relative">
          {/* Base line */}
          <div className="absolute top-0 left-[2.1rem] md:left-1/2 w-[2px] h-full bg-border/40 -translate-x-1/2"></div>

          {/* Animated glowing progress line */}
          <div
            ref={timelineProgressRef}
            className="absolute top-0 left-[2.1rem] md:left-1/2 w-[4px] h-full bg-gradient-to-b from-primary via-primary/80 to-transparent rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] -translate-x-1/2"
          ></div>

          {/* Steps */}
          <div className="flex flex-col space-y-24 md:space-y-32 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`process-step-item flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:justify-start md:text-right"
                    : "md:justify-end md:text-left"
                }`}
              >
                {/* Number bubble */}
                <div className="process-number relative z-20 flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl sm:text-2xl border-4 border-secondary shadow-[0_0_20px_rgba(59,130,246,0.7)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(59,130,246,0.8)]">
                  {step.number}
                </div>

                {/* Card */}
                <div
                  className={`process-card mt-8 md:mt-0 w-full md:w-[45%] p-8 sm:p-10 bg-card/80 backdrop-blur-xl rounded-2xl border border-border shadow-xl hover:shadow-2xl transition-transform duration-500 transform hover:-translate-y-2 hover:rotate-[1deg] hover:scale-[1.02] ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-10"
                      : "md:ml-auto md:pl-10"
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_80%)] blur-3xl"></div>
    </section>
  );
};

export default Process;
