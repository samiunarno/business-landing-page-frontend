import React, { useLayoutEffect, useRef, useCallback } from "react";

const steps = [
  {
    number: "1",
    title: "Initial Contact via WhatsApp or Landing Page",
    description:
      "The process starts when the client initiates a conversation on WhatsApp or submits an inquiry through the landing page. Ramno AI Coaching asks a few targeted questions about the client's goals, background, and current challenges to understand their needs and expectations. This first step is completely free and non-binding.",
  },
  {
    number: "2",
    title: "Free Discovery Call (30–45 minutes)",
    description:
      "Based on the WhatsApp questions, a personal discovery call is scheduled via Zoom or WhatsApp. During this session, the mentor and client discuss goals, motivation, language level, and potential career paths. The purpose is to identify the most suitable modules and clarify expectations. After the call, the client receives a short summary with personalized recommendations and a non-binding pricing overview.",
  },
  {
    number: "3",
    title: "Decision & Agreement",
    description:
      "The client reviews the recommendations and chooses one or more of the following service modules:\n\nSTART – Potential Analysis & Career Orientation\nGROW – Professional & Intercultural Integration Training\nLIVE – Sustainable Mentoring for Social Cohesion\nINNOVATE – Strategic Founder Coaching & Market Validation\nTALENT & STUDY CONNECT – Career & Study Transition with Global Presentation Training\n\nOnce both parties agree and the coaching contract is signed, the official Ramno AI Coaching journey begins. All client data is securely managed in compliance with GDPR standards.",
  },
  {
    number: "4",
    title: "Access to the Web App & Personal Dashboard",
    description:
      "After confirmation, the client receives login access to the Ramno AI Coaching Web App. Here, they can track their progress, view exercises, and download personalized materials like CVs, cover letters, and progress reports. The AI assistant provides continuous support through WhatsApp, offering daily micro-tasks, practice activities, and motivational reminders.",
  },
  {
    number: "5",
    title: "Start of the Coaching Journey",
    description:
      "Live sessions take place online, hybrid, or in person (where available). Each session is tailored to the client’s goals and supported by AI-driven reflection, feedback, and progress analytics. At the end of each phase, the client receives a measurable progress report and personalized recommendations for continued growth or long-term mentoring.",
  },
];

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const timelineProgressRef = useRef<HTMLDivElement>(null);

  const animateTitle = useCallback((gsap: any, ScrollTrigger: any) => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  const animateTimelineProgress = useCallback((gsap: any, ScrollTrigger: any) => {
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
  }, []);

  const animateSteps = useCallback((gsap: any, ScrollTrigger: any) => {
    const processSteps = gsap.utils.toArray(".process-step-item");

    processSteps.forEach((step: any, index) => {
      const card = step.querySelector(".process-card");
      const number = step.querySelector(".process-number");
      const isOdd = index % 2 !== 0;

      // Floating card animation
      gsap.from(card, {
        scrollTrigger: {
          trigger: step,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 60,
        x: isOdd ? 40 : -40,
        rotateY: isOdd ? 10 : -10,
        duration: 1.1,
        ease: "power3.out",
      });

      // Subtle number pop
      gsap.from(number, {
        scrollTrigger: {
          trigger: step,
          start: "top 95%",
        },
        opacity: 0,
        scale: 0.6,
        duration: 0.8,
        ease: "back.out(1.8)",
      });
    });
  }, []);

  useLayoutEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    animateTitle(gsap, ScrollTrigger);
    animateTimelineProgress(gsap, ScrollTrigger);
    animateSteps(gsap, ScrollTrigger);

    return () => {
      ScrollTrigger.getAll().forEach((st: any) => st.kill());
    };
  }, [animateTitle, animateTimelineProgress, animateSteps]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-gradient-to-b from-secondary via-secondary/70 to-background text-secondary-foreground overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)]">
            How the Ramno AI Coaching Process Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Ramno AI Coaching combines personal mentoring, AI technology, and human connection to make coaching accessible, structured, and transparent for everyone. Each client goes through five clear steps before the official coaching program begins.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineContainerRef} className="relative">
          {/* Base line */}
          <div className="absolute top-0 left-[2.1rem] md:left-1/2 w-[2px] h-full bg-border/40 -translate-x-1/2"></div>

          {/* Animated glowing progress line */}
          <div
            ref={timelineProgressRef}
            className="absolute top-0 left-[2.1rem] md:left-1/2 w-[4px] h-full bg-gradient-to-b from-primary via-primary/70 to-transparent rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)] -translate-x-1/2"
          ></div>

          {/* Steps */}
          <div className="flex flex-col space-y-20 md:space-y-28 relative z-10">
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
                <div className="process-number relative z-20 flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl sm:text-2xl border-4 border-secondary shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(59,130,246,0.7)]">
                  {step.number}
                </div>

                {/* Card */}
                <div
                  className={`process-card mt-8 md:mt-0 w-full md:w-[45%] p-8 sm:p-10 bg-card/80 backdrop-blur-2xl rounded-2xl border border-border/50 shadow-xl hover:shadow-2xl transition-transform duration-500 transform hover:-translate-y-2 hover:scale-[1.02] ${
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_80%)] blur-3xl"></div>
    </section>
  );
};

export default Process;
