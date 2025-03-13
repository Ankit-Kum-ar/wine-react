import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DesktopNavbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const navItems = gsap.utils.toArray(".nav-item");

    gsap.fromTo(
      navItems,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: navRef.current,
          start: "top 90%",
          end: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={navRef} className="hidden md:flex items-center space-x-6">
      {/* Home Link */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `nav-item flex items-center gap-2 transition-transform duration-300 ${
            isActive
              ? "text-white border-b-2 border-[#FFF] scale-110"
              : "text-slate-400 hover:text-white"
          }`
        }
      >
        <span className="hidden lg:inline">Home</span>
      </NavLink>

      {/* Product Link */}
      <NavLink
        to="/product"
        className={({ isActive }) =>
          `nav-item flex items-center gap-2 transition-transform duration-300 ${
            isActive
              ? "text-white border-b-2 border-[#FFF] scale-110"
              : "text-slate-400 hover:text-white"
          }`
        }
      >
        <span className="hidden lg:inline">Product</span>
      </NavLink>

      {/* Contact Link  */}
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `nav-item flex items-center gap-2 transition-transform duration-300 ${
            isActive
              ? "text-white border-b-2 border-[#FFF] scale-110"
              : "text-slate-400 hover:text-white"
          }`
        }
      >
        <span className="hidden lg:inline">Contact Us</span>
      </NavLink>
      
    </div>
  );
};

export default DesktopNavbar;
