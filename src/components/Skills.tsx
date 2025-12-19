import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillsData } from '../data/skills';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const categoriesRef = useRef<HTMLDivElement[]>([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
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

      categoriesRef.current.forEach((category) => {
        if (category) {
          const pills = category.querySelectorAll('.skill-pill');
          gsap.fromTo(pills, 
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              ease: 'back.out(1.7)',
              stagger: 0.05,
              scrollTrigger: {
                trigger: category,
                start: 'top 85%',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 ref={titleRef} className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Skills</span>
        </h2>

        <div className="space-y-8">
          {skillsData.map((category, index) => (
            <div
              key={category.name}
              ref={(el) => { if (el) categoriesRef.current[index] = el; }}
            >
              <h3 className="text-lg font-semibold text-[var(--color-text-muted)] mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill px-4 py-2 rounded-full text-sm font-medium bg-[var(--color-dark-700)] border border-[var(--color-accent)]/30 text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
