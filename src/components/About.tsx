import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Staggered Text Animation
    if (textRef.current?.children) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
          },
        }
      );
    }

    // Image Animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 100, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div
      ref={aboutRef}
      id="about-section"
      className="bg-white px-10 md:px-20 w-full overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center py-20">
        <div ref={textRef}>
          <h2 className="text-xl md:text-2xl font-open-sans text-[#1B1C1E]">
            ABOUT US
          </h2>
          <p className="mt-4 text-sm md:text-lg text-[#1B1C1E] text-justify font-abel">
            <span className="font-bold">Sky wines and spirits </span>
            is a leading alcohol importer and distributor in India that was
            founded in 2025 by THREE VISIONARY ENTREPRENEURS who have over 5
            years of experience in the alcohol distribution industry. They are
            passionate about bringing the finest quality premium alcohol brands
            to India.
          </p>
          <p className="mt-4 text-sm md:text-lg text-[#1B1C1E] text-justify font-abel">
            We aspire to become an entity that consistently improves product,
            reach, and ability, and in doing so, creates a unique identity for
            ourselves in the wines & spirits industry.
          </p>
        </div>

        <div className="relative">
          <div className="relative">
            <img
              ref={imageRef}
              src="/images/luxury-whiskey.png"
              alt="CRC Group"
              className="w-[100%] h-auto mr-2 relative z-[2] transform translate-y-4 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
