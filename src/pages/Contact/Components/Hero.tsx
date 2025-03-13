import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Hero = () => {
  const bottleRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".HeroContent",
        start: "top 80%", // Start animation when 80% of the Hero section is in view
        toggleActions: "play none none reset",
      },
    });

    // Bottle Animation - Slides from left to center
    timeline.fromTo(
      bottleRef.current,
      { x: "-100%", opacity: 0 }, // Start position (off-screen left)
      { x: "0%", opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    // Text Animation - Fade-in with scaling effect
    timeline.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
      "-=1" // Overlap text animation with bottle animation
    );
  }, []);


  return (
    <section className='HeroContent flex flex-col justify-between  relative h-[50vh] md:h-[90vh] w-screen items-center bg-gradient-to-r from-[#0F1D16] via-[#1A2E22] to-[#0E1A14]'>
        <div className="h-[90vh] w-screen flex justify-center items-center">      <h1 ref={textRef} className='greeting text-white opacity-25 text-5xl md:text-[210px] font-extrabold text-center mb-10 z-20 p-0 font-anybody'>CONTACT US</h1>
        </div>
        <div className="absolute h-[45vh] md:h-[90vh] w-screen flex justify-center items-center z-20"> <img ref={bottleRef} src="/images/contact.png" alt="Wine Bottle"  sizes="(max-width: 600px) 480px, (max-width: 1200px) 1080px, 1920px" className="h-[20vh] md:h-[40vh] w-auto" loading="lazy" /></div>

    </section>
  )
}

export default Hero
