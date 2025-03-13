import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Detail = () => {
  const bottleRef = useRef<HTMLImageElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const contactRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".detail-section",
        start: "top 80%",
        toggleActions: "play none none reset", // Restarts animation on scroll
      },
    });

    // Circle Animation - Expanding Effect
    timeline.fromTo(
      circleRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Bottle Animation - Slide from left
    timeline.fromTo(
      bottleRef.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1.5, ease: "power3.out" },
      "-=0.8"
    );

    // Staggered Animation for Contact Details
    gsap.fromTo(
      contactRefs.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact",
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  return (
    <section className="detail-section p-6 lg:p-10 shadow-lg flex flex-col md:flex-row justify-center items-center gap-12 w-full">
      {/* Wine Bottle Section */}
      <div className="h-[60vh] md:h-[90vh] flex justify-center items-center z-20 w-full relative">
        <div
          ref={circleRef}
          className="absolute bg-[#1A2E22] left-10 md:left-40 h-[35vh] md:h-[60vh] aspect-square rounded-full flex justify-center items-center z-10"
        ></div>
        <img
          ref={bottleRef}
          src="/images/Group.png"
          sizes="(max-width: 600px) 480px, (max-width: 1200px) 1080px, 1920px"
          alt="Wine Bottle"
          className="h-[50vh] md:h-[85vh] w-auto z-20"
          loading="lazy"
        />
      </div>

      {/* Contact Section */}
      <div className="contact text-[#1A2E22] flex flex-col justify-center items-start w-full space-y-6">
        {[
          {
            icon: "/images/location.png",
            title: "Location",
            description:
              "PLOT NO 26 BASEMENT. SECTOR 20 DWARKA NEAR MARBLE MARKET DELHI 110075",
          },
          {
            icon: "/images/call.png",
            title: "Call",
            description: "+919971367723",
          },
          {
            icon: "/images/email.png",
            title: "Email",
            description: "skywinesandspirits@gmail.com",
          },
        ].map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              contactRefs.current[index] = el!;
            }}
            className="flex gap-2"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="h-10 px-2 py-2 md:h-14 rounded-full aspect-square bg-[#1A2E22]"
            />
            <div>
              <p className="text-[#1A2E22] font-bold md:text-xl">{item.title}</p>
              <p className="w-[90%] md:w-[60%]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Detail;
