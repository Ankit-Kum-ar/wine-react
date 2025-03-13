import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const Zigzag = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "restart none none none", // Restart on scroll
      },
    });

    // Text Animation - Staggered Slide-in
    tl.from(textRefs.current, {
      opacity: 0,
      x: -100,
      duration: 0.5,
      stagger: 0.1, // Delayed stagger effect for smooth appearance
      ease: "power4.out",
    });

    // Image Animation - Staggered Zoom-in with Parallax Effect
    tl.from(imageRefs.current, {
      opacity: 0,
      y: 100,
      scale: 0.8,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)", // Bounce-like effect for depth
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#FCF5EA] p-10 md:px-20 w-full overflow-hidden flex flex-col justify-center gap-10 items-center"
    >
      {/* First Section */}
      <div className="flex flex-row-reverse justify-center items-center py-0 md:py-20 w-full gap-8">
        <div>
          <p
            ref={(el) => {textRefs.current[0] = el}}
            className="mt-4 text-xs md:text-2xl text-[#1B1C1E] text-center w-[40vw] md:w-[30vw] font-manrope"
          >
            Our commitment to sustainability and the art of whiskey making extends beyond the bottle
          </p>
        </div>

        <div className="relative">
          <img
            ref={(el) => {imageRefs.current[0] = el}}
            src="/images/moet.png"
            alt="MOET"
            className="w-[100%] h-[20vh] md:h-[90vh] mr-2 relative z-[2] transform translate-y-4 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-row justify-center gap-8 items-center">
        <div className="flex items-center">
          <p
            ref={(el) => {textRefs.current[1] = el}}
            className="mt-4 text-xs md:text-2xl text-[#1B1C1E] text-center w-[40vw] md:w-[30vw] font-manrope"
          >
            As the amber liquid swirls, it tells tales of traditions, craftsmanship, and serene landscapes.
          </p>
        </div>

        <div className="relative">
          <img
            ref={(el) => {imageRefs.current[1] = el}}
            src="/images/jacob's creek.png"
            alt="Jacob's Creek"
            className="h-[20vh] md:h-[70vh] aspect-square mr-2 relative z-[2] transform translate-y-4 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Zigzag;
