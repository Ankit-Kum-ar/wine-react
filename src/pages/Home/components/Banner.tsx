import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top 85%",  // Start animation when 85% of the section is visible
        toggleActions: "restart none none none", // Restart animation on each scroll
      },
    });

    timeline
      .fromTo(
        headingRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        "-=0.8" // Starts before the previous animation finishes
      )
      
  }, []);

  return (
    <div
      ref={bannerRef}
      className="bg-[#6B2F1F] flex flex-col justify-center items-center gap-8 p-10 w-full"
    >
      <h3
        ref={headingRef}
        className="text-white font-anybody text-2xl lg:text-4xl font-sail"
      >
        Why Choose Our Whiskey
      </h3>
      <p
        ref={paragraphRef}
        className="text-white text-sm font-light md:text-2xl w-[90vw] md:w-[50vw] text-center font-manrope"
      >
        From the golden fields of barley to the ancient barrels that breathe
        life into our whiskey, every drop tells a story of passion, tradition,
        and artistry
      </p>
      
    </div>
  );
};

export default Banner;
