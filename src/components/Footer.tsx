import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <section
    
    className="w-full bg-[#254130] flex flex-col items-center pt-4"
  >
    <div className="footertop w-[90vw] flex flex-col md:flex-row gap-4 justify-between items-center">
      <div className="about w-full md:w-1/3 px-4">
        <div className="img-container py-4">
          <Link
            to="/"
            className="text-xl font-bold text-primary font-poppins tracking-wider"
          >
            <img src="/images/logo.png" alt="Sky Wines & Spirits" className="h-16"/>
          </Link>
        </div>
        <div className="info object-contain text-left text-white font-poppins leading-relaxed text-sm md:text-sm font-thin py-4">
          <p className="text-justify">
          We are a passionate team of professionals dedicated to providing top-quality products to help you find the most genuine liquor where we are specializing in services including importing, distribution and marketing.
          </p>
        </div>
        <div className="icons flex flex-row justify-start gap-4 py-4">
          <a href="/">
          <div className="bg-[#4D6A52] aspect-square rounded-lg h-10 flex items-center justify-center cursor-pointer">
            <img src="/images/face.png" alt="Facebook" className="text-white h-6 rounded-full" />
          </div></a>
          <a href="/">
          <div className="bg-[#4D6A52] aspect-square rounded-lg h-10 flex items-center justify-center cursor-pointer">
            <img src="/images/in icon.png" alt="LinkedIn" className="text-white h-6 rounded-full" />
          </div> 
          </a>
          <a href="/">
          <div className="bg-[#4D6A52] aspect-square rounded-lg h-10 flex items-center justify-center cursor-pointer">
            <img src="/images/inst.png" alt="Instagram" className="text-white h-6 rounded-full" />
          </div>
          </a>
        </div>
      </div>
      <div className="quick text-[#FCF5EA] py-10 hidden md:block">
        <h4 className="py-2 text-xs md:text-sm">Quick Links</h4>
        <ul className="list-disc list-inside text-sm md:text-sm underline">
          <li className="hover:text-[#4D6A52]">
            <Link to="/"> Home </Link>
          </li>
          <li className="hover:text-[#4D6A52]">
            <Link to="/about">About us</Link>
          </li>
          <li className="hover:text-[#4D6A52]">
            <Link to="/product">Products</Link>
          </li>
          <li className="hover:text-[#4D6A52]">
            <Link to="/contact">Contact Us</Link>
          </li>
          
        </ul>
      </div>
      <div className="contact text-white flex flex-col justify-center pb-8 md:w-[40vw]">
        <div className="space-y-4">
          <div className="flex gap-2">
            <img src="/images/location.png" alt="Mail" className="h-5  text-white mt-2" />
            <div>
              <p className="text-[#4D6A52] font-bold text-sm">Location</p>
              <p className="text-sm w-[80%]">
              PLOT NO 26 BASEMENT. SECTOR 20 DWARKA
              NEAR MARBLE MARKET DELHI 110075              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <img src="/images/call.png" alt="Phone" className="h-5  mt-2 text-white" />
            <div>
              <p className="text-[#4D6A52] font-bold text-sm">Call</p>
              <p className="text-md">+91 99713 67723</p>
            </div>
          </div>
          <div className="flex gap-2">
            <img src="/images/email.png" alt="Email" className="h-4 mt-2 text-white" />
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
      <p className="text-[#CCCCCC] text-xs md:text-base p-2 md:p-4">
        © Copyright 2024 MarketingEXL | All Rights Reserved by{" "}
        <span className="text-white font-bold font-poppins">MarketingEXL</span>
      </p>
    </div>
  </section>
  )
}

export default Footer
