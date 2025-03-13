import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const quickLinksRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const iconsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        toggleActions: "restart none none none",
      },
    });

    tl.from(aboutRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power3.out",
    })
      .from(quickLinksRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.5,
        delay: 0.1,
        ease: "power3.out",
      })
      .from(contactRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.5,
        delay: 0.1,
        ease: "power3.out",
      })
      .from(
        iconsRef.current?.children ? Array.from(iconsRef.current.children) : [],
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          stagger: 0.2, // Stagger for smoother appearance
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );
  }, []);

  return (
    <section
      ref={footerRef}
      id="footer-section"
      className="w-full bg-[#254130] flex flex-col items-center pt-4"
    >
      <div className="footertop w-[90vw] flex flex-col md:flex-row gap-4 justify-between items-center">
        <div ref={aboutRef} className="about w-full md:w-1/3 px-4">
          <div className="img-container py-4">
            <Link
              to="/"
              className="text-xl font-bold text-primary font-poppins tracking-wider"
            >
              <img
                src="/images/logo.png"
                alt="Sky Wines & Spirits"
                className="h-16"
              />
            </Link>
          </div>
          <div className="info object-contain text-left text-white font-poppins leading-relaxed text-sm md:text-sm font-thin py-4">
            <p className="text-justify font-manrope">
              We are a passionate team of professionals dedicated to providing
              top-quality products to help you find the most genuine liquor
              where we are specializing in services including importing,
              distribution, and marketing.
            </p>
          </div>
          <div
            ref={iconsRef}
            className="icons flex flex-row justify-start gap-4 py-4"
          >
            <a href="/">
              <div className="bg-[#4D6A52] aspect-square rounded-lg h-10 flex items-center justify-center cursor-pointer">
                <img
                  src="/images/face.png"
                  alt="Facebook"
                  className="text-white h-6 rounded-full"
                />
              </div>
            </a>
            <a href="/">
              <div className="bg-[#4D6A52] aspect-square rounded-lg h-10 flex items-center justify-center cursor-pointer">
                <img
                  src="/images/in icon.png"
                  alt="LinkedIn"
                  className="text-white h-6 rounded-full"
                />
              </div>
            </a>
            <a href="/">
              <div className="bg-[#4D6A52] aspect-square rounded-lg h-10 flex items-center justify-center cursor-pointer">
                <img
                  src="/images/inst.png"
                  alt="Instagram"
                  className="text-white h-6 rounded-full"
                />
              </div>
            </a>
          </div>
        </div>

        <div
          ref={quickLinksRef}
          className="quick text-[#FCF5EA] py-10 hidden md:block font-manrope"
        >
          <h4 className="py-2 text-xs md:text-sm">Quick Links</h4>
          <ul className="list-disc list-inside text-sm md:text-sm underline">
            <li className="hover:text-[#4D6A52]">
              <Link to="/"> Home </Link>
            </li>
            <li className="hover:text-[#4D6A52]">
              <Link to="/product">Products</Link>
            </li>
          </ul>
        </div>

        <div
          ref={contactRef}
          className="contact text-white flex flex-col justify-center pb-8 md:w-[40vw] font-manrope"
        >
          <div className="space-y-4">
            <div className="flex gap-2">
              <img
                src="/images/location.png"
                alt="Mail"
                className="h-5 text-white mt-2"
              />
              <div>
                <p className="text-[#4D6A52] font-bold text-sm">Location</p>
                <p className="text-sm w-[80%]">
                  PLOT NO 26 BASEMENT. SECTOR 20 DWARKA NEAR MARBLE MARKET DELHI
                  110075
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <img
                src="/images/call.png"
                alt="Phone"
                className="h-5 mt-2 text-white"
              />
              <div>
                <p className="text-[#4D6A52] font-bold text-sm">Call</p>
                <p className="text-md">+91 99713 67723</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img
                src="/images/email.png"
                alt="Email"
                className="h-4 mt-2 text-white"
              />
              <div>
                <p className="text-[#4D6A52] font-bold text-sm">Email</p>
                <p className="text-md">skywinesandspirits@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-0.5 bg-white opacity-20"></div>
      <div className="footerbottom">
        <p className="text-[#CCCCCC] text-xs md:text-base p-2 md:p-4 font-manrope">
          © Copyright 2025 SkyWines&Siprits | All Rights Reserved by{" "}
          <span className="text-white font-medium font-manrope">
            Sky Wines & Spirits
          </span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
