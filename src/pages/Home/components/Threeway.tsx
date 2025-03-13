import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const Threeway = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftImageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const rightImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",   // Start animation when 80% of the section is visible
        end: "bottom 20%",
        toggleActions: "restart none none none", // Ensures animation restarts on scroll
      },
    });

    // Left Image Animation - Fade in with Slide from Left
    tl.fromTo(leftImageRef.current,{
      opacity: 0,
      x: -100,
    }, {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // Text Animation - Slide in from Bottom with Staggered Effect
    tl.fromTo(textRef.current,{
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      // delay: 0.3,
      ease: "back.out(1.7)",
    });
    

    // Right Image Animation - Fade in with Zoom-in Effect
    tl.fromTo(rightImageRef.current,{
      opacity: 0,
      scale: 0.8,
    }, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
    });
   
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-row items-center w-full my-10 md:my-20"
    >
      {/* Left Image */}
      <div
        ref={leftImageRef}
        className="flex items-center w-[20vw] bg-[url(/images/Bom.png)] bg-cover bg-no-repeat bg-center h-[30vh] md:h-[100vh]"
      ></div>

      {/* Text Section */}
      <div
        ref={textRef}
        className="bg-[#FCF5EA] flex items-center px-10 md:p-10 h-[30vh] md:h-[100vh]"
      >
        <p className="mt-4 text-xs md:text-2xl text-[#1B1C1E] text-left w-[40vw] font-manrope">
          Guided whiskey tasting events offering a sensory exploration of our finest selections
        </p>
      </div>

      {/* Right Image */}
      <div
        ref={rightImageRef}
        className="flex items-center w-[50vw] bg-[url(/images/C3.png)] bg-cover bg-no-repeat bg-left-top h-[30vh] md:h-[100vh]"
      ></div>
    </div>
  );
};

export default Threeway;
