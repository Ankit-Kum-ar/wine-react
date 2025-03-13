import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import gsap from "gsap";

interface HeroProps {
  title: string;
}

const Hero = ({ title }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // Hero Background Animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
    );

    // Heading Animation - Split Reveal Effect
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out",
      }
    );

    // Button Animation - Bounce Effect
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 1,
        ease: "elastic.out(1, 0.5)",
      }
    );
  }, []);

  return (
    <div>
      <div
        ref={heroRef}
        className="HeroContent bg-[url(/images/png.png)] bg-cover bg-no-repeat flex flex-col justify-center h-[100vh] w-full items-center"
      >
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
        <div className="flex flex-col items-center justify-center w-12/12 md:w-4/12 z-10 mt-10 px-6 md:px-0">
          <h2
            ref={headingRef}
            className="greeting text-white text-5xl md:text-7xl text-center z-10 font-bacasime-antique"
          >
            {title}
          </h2>
        </div>
        <Button
          ref={buttonRef}
          className="greeting text-white text-lg bg-[#164328] border-2 border-solid border-[#4D6A52] text-center px-6 py-2 z-20 font-manrope rounded-none hover:bg-[#4D6A52] cursor-pointer m-6"
        >
          Shop now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
