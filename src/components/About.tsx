
const About = () => {
  return (
    <div  className="bg-white px-10 md:px-20 w-full overflow-hidden">
    <div className="grid md:grid-cols-2  gap-8 items-center py-20 ">
    <div >
        <h2 className="text-xl md:text-2xl font-extrabold font-mono text-[#1B1C1E]">
        ABOUT US
        </h2>
        <p className="mt-4 text-sm md:text-lg text-[#1B1C1E] text-justify">
        <span className="font-bold">Sky wines and spirits </span>is a leading alcohol importer and distributor in India that was founded in 2025 by THREE VISIONARY ENTREPRENUER who has a experience of over 5 years  in the alcohol distribution industry, and they is passionate about bringing the finest quality premium alcohol brands to India.
        </p>
        <p className="mt-4 text-sm md:text-lg text-[#1B1C1E] text-justify">we aspire to become an entity that consistently improves product, reach and ability and, in doing so, creates a unique identity for ourselves in the wines & spirits industry.</p>
        
      </div>

      <div className="relative">
      
        <div className="relative ">
          
          <img
            src="/images/luxury-whiskey.png" 
            alt="CRC Group"
            className="  w-[100%] h-auto mr-2 relative z-[2] transform translate-y-4 hover:scale-105 transition-transform duration-500"
          />
          
          
        </div>
      </div>

      
    </div>
  </div>
  )
}

export default About
