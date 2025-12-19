import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experienceData } from '../data/experience';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Line Drawing Animation
      if (lineRef.current) {
        gsap.fromTo(lineRef.current, 
          { scaleY: 0, transformOrigin: "top" }, 
          {
            scaleY: 1,
            duration: 1.5,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 80%",
              scrub: 1,
            }
          }
        );
      }

      // Experience Items Animation
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        const isLeft = index % 2 === 0;
        const xStart = window.innerWidth >= 768 ? (isLeft ? -50 : 50) : 0;
        const yStart = window.innerWidth < 768 ? 50 : 0;

        gsap.fromTo(item,
          { 
            opacity: 0, 
            x: xStart,
            y: yStart
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 bg-[var(--color-dark-800)] relative overflow-hidden"
    >
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
            <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-purple-500/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-indigo-500/30 rounded-full blur-[100px]" />
        </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 ref={titleRef} className="text-3xl sm:text-4xl font-bold mb-20 text-center">
          <span className="gradient-text">Experience</span>
        </h2>

        <div className="relative">
          {/* Central Timeline Line */}
          <div 
            ref={lineRef}
            className="absolute left-[19px] md:left-1/2 top-4 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-accent)] via-purple-500 to-[var(--color-dark-800)] md:-translate-x-1/2 origin-top"
          />

          <div className="space-y-12 md:space-y-0">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  ref={(el) => { if (el) itemsRef.current[index] = el; }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } md:mb-[-2rem]`} // Negative margin to overlap visually if needed, but let's stick to simple spacing first
                > 
                  {/* Timeline Node (Dot) */}
                    <div className="absolute left-[10px] md:left-1/2 w-5 h-5 bg-[var(--color-dark-800)] border-[3px] border-[var(--color-accent)] rounded-full z-20 md:-translate-x-1/2 mt-1.5 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                        <div className="w-full h-full bg-[var(--color-accent)] rounded-full opacity-50 animate-ping" />
                    </div>

                  {/* Spacer for Desktop Centering */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    isEven ? 'md:pr-16 lg:pr-24' : 'md:pl-16 lg:pl-24'
                  } mb-12`}>
                    
                    <div className="relative group">
                        {/* Connecting Line (Desktop) */}
                        <div className={`hidden md:block absolute top-4 h-0.5 bg-[var(--color-accent)]/30 w-16 lg:w-24 ${
                            isEven ? 'right-full mr-[-2rem]' : 'left-full ml-[-2rem] -scale-x-100'
                        }`} />

                        <div className="bg-[var(--color-dark-700)]/80 backdrop-blur-sm p-6 rounded-xl border border-[var(--color-dark-600)] hover:border-[var(--color-accent)]/50 transition-all duration-300 hover:shadow-[0_5px_30px_rgba(0,0,0,0.3)] group-hover:-translate-y-1">
                            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-[var(--color-accent)] uppercase bg-[var(--color-accent)]/10 rounded-full">
                                {exp.duration}
                            </span>
                            
                            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">
                                {exp.title}
                            </h3>
                            
                            <div className="flex items-center gap-2 mb-4 text-[var(--color-text-muted)] text-sm">
                                <span className="font-semibold text-[var(--color-text-primary)]">{exp.companyName}</span>
                                <span>•</span>
                                <span>{exp.location}</span>
                            </div>

                            <ul className="space-y-3">
                                {exp.contentItems.map((item, i) => (
                                <li key={i} className="flex items-start text-sm text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-colors">
                                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
