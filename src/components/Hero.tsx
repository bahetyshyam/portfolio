import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo(titleRef.current, 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        }
      )
      .fromTo(subtitleRef.current, 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        }, '-=0.5')
      .fromTo(descRef.current, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        }, '-=0.4')
      .fromTo(buttonsRef.current?.children || [], 
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
        }, '-=0.3');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-purple-accent)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Shyam Bahety</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl sm:text-2xl text-[var(--color-text-muted)] mb-6"
        >
          Founding Forward Deployed Engineer at <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" className="text-[#FF6C37] hover:text-[#ff8f6b] transition-colors font-medium">Postman</a>
          <img src="/Postman.svg" alt="Postmanaut" className="inline-block w-6 h-6 ml-1 -mt-1 animate-float" />
        </p>

        <p
          ref={descRef}
          className="text-base sm:text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Specializing in building scalable tools for enterprise clients to streamline API management
          and enhance team collaboration. Passionate about solving complex API problems for large organizations
          and driving success through engineering excellence.
        </p>

        <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4">
          <a
            href="/Shyam Bahety Resume.pdf"
            download
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-purple-accent)] text-white font-semibold btn-glow"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 rounded-lg glass border border-[var(--color-accent)] text-[var(--color-accent)] font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
