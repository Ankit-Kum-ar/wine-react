import { useEffect, useRef } from "react";
import { gsap } from "gsap";


const Map = () => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (mapRef.current) {
        gsap.fromTo(
          mapRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
      }
    }, []);
  return (
    <div ref={mapRef} className="flex justify-center items-center bg-[#1A2E22] p-10 ">
    <div className="w-full  rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3504.1408982527514!2d77.05994105073303!3d28.565531460907888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPLOT%20NO%2026%20BASEMENT.%20SECTOR%2020%20DWARKA%20NEAR%20MARBLE%20MARKET%20DELHI%20110075!5e0!3m2!1sen!2sin!4v1741873854752!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] rounded-lg"
      ></iframe>
    </div>
  </div>
  )
}


export default Map