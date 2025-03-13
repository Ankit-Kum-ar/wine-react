import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface DisplayProductProps {
  imgSrc_1: string;
  imgSrc_2: string;
  title_1: string;
  title_2: string;
  desc_a_1: string;
  desc_a_2: string;
  desc_b_1: string;
  desc_b_2: string;
}

const DisplayProduct: React.FC<DisplayProductProps> = ({
  imgSrc_1,
  imgSrc_2,
  title_1,
  title_2,
  desc_a_1,
  desc_a_2,
  desc_b_1,
  desc_b_2,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "restart none none reverse",
          },
        }
      );
    });

    // Image Slide-in Animation
    gsap.fromTo(
      ".image-left",
      { opacity: 0, x: -100, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".image-left",
          start: "top 90%",
          end: "top 50%",
          toggleActions: "restart none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".image-right",
      { opacity: 0, x: 100, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".image-right",
          start: "top 90%",
          end: "top 50%",
          toggleActions: "restart none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-center items-center bg-[#FCF5EA] md:p-14 py-9 px-5 w-full md:gap-0 gap-12"
    >
      {/* First Section */}
      <div
        ref={(el) => {
          if (el) sectionsRef.current.push(el);
        }}
        className="flex md:flex-row flex-col justify-center items-center md:gap-9 gap-4"
      >
        <img
          src={imgSrc_1}
          alt=""
          className="md:w-1/2 image-left"
        />
        <div className="flex flex-col justify-start items-start md:gap-9 gap-3 md:w-1/2">
          <p className="md:text-6xl text-3xl font-glass-antiqua">{title_1}</p>
          <p className="md:text-lg text-sm font-glass-antiqua">{desc_a_1}</p>
          <p className="md:text-lg text-sm font-glass-antiqua">{desc_a_2}</p>
        </div>
      </div>

      {/* Second Section (Desktop View) */}
      <div
        ref={(el) => {
          if (el) sectionsRef.current.push(el);
        }}
        className="md:flex md:flex-row hidden justify-center items-center gap-9"
      >
        <div className="flex flex-col justify-start items-start gap-9 md:w-1/2">
          <p className="md:text-6xl text-lg font-glass-antiqua">{title_2}</p>
          <p className="md:text-lg text-base font-glass-antiqua">{desc_b_1}</p>
          <p className="md:text-lg text-base font-glass-antiqua">{desc_b_2}</p>
        </div>
        <img
          src={imgSrc_2}
          alt=""
          className="md:w-1/2 image-right"
        />
      </div>

      {/* Second Section (Mobile View) */}
      <div
        ref={(el) => {
          if (el) sectionsRef.current.push(el);
        }}
        className="flex md:hidden flex-col justify-center items-center gap-4"
      >
        <img
          src={imgSrc_2}
          alt=""
          className="md:w-1/2 image-right"
        />
        <div className="flex flex-col justify-start items-start md:gap-9 gap-3 md:w-1/2">
          <p className="md:text-6xl text-3xl font-glass-antiqua">{title_2}</p>
          <p className="md:text-lg text-sm font-glass-antiqua">{desc_b_1}</p>
          <p className="md:text-lg text-sm font-glass-antiqua">{desc_b_2}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
