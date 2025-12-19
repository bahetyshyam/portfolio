import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div ref={contentRef}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            <span className="gradient-text">About Me</span>
          </h2>

          <div className="space-y-6 text-[var(--color-text-muted)] leading-relaxed">
            <p className="text-lg">
              Hello! I'm Shyam, a Forward Deployed Engineer based in <span className="text-[var(--color-accent)] font-medium">San Francisco</span>. 
              I specialize in front-end development and building autonomous AI agents, with a passion for creating beautiful, performant web applications.
            </p>

            <p className="text-lg">
              I hold a Master's in Computer Science from the <span className="text-[var(--color-accent)] font-medium">University of Florida</span>. 
              With over 3 years of industry experience, including roles at Postman and CommerceIQ, I have deep expertise in Full Stack Development across various tech stacks.
            </p>

            <p className="text-lg">
              I've graduated with an Information Science Engineering degree from JSSATE, and I've always been interested in various nuances of Software and Development. 
              I'm currently building the future of API management at <span className="text-[var(--color-accent)] font-medium">Postman</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
