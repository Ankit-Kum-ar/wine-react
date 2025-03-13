import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CarouselDemo } from "./CarouselDemo";
import { carouselImagesArray_03, carouselImagesContentArray_03 } from "../utils/constant";

gsap.registerPlugin(ScrollTrigger);

interface DisplayProps {
  title: string;
}

const Display = ({ title }: DisplayProps) => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Heading Animation with Restart on Scroll
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          toggleActions: "restart none none none",  // Restart on each scroll
        },
      }
    );

    // Carousel Animation with Restart on Scroll
    gsap.fromTo(
      carouselRef.current,
      { opacity: 0, scale: 0.8, x: 100 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 95%",
          toggleActions: "restart none none none", // Restart on each scroll
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#FCF5EA] py-6 px-4 md:px-8 lg:px-16 w-full overflow-hidden">
      <h2
        ref={headingRef}
        className="text-xl md:text-2xl lg:text-4xl font-sail text-center text-[#1B1C1E] my-4"
      >
        {title}
      </h2>
      <div
        ref={carouselRef}
        className="flex justify-center items-center pb-4"
      >
        <CarouselDemo
          carouselImagesArray={carouselImagesArray_03}
          carouselImagesContentArray={carouselImagesContentArray_03}
        />
      </div>
    </div>
  );
};

export default Display;
