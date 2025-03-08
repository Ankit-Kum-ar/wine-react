
const Zigzag = () => {
  return (
    <div  className="bg-[#FCF5EA] p-10 md:px-20 w-full overflow-hidden flex flex-col justify-center items-center">
    <div className="flex flex-row-reverse justify-center items-center py-0 md:py-20 w-full ">
    <div >
        
        <p className="mt-4 text-sm md:text-2xl text-[#1B1C1E] text-center w-[40vw] md:w-[30vw] ">
        Our commitment to sustainability and the art of whiskey making extends beyond the bottle
        </p>
        
      </div>

      <div className="relative">
      
        <div className="relative ">
          
          <img
            src="/images/moet.png" 
            alt="MOET"
            className="  w-[100%] h-[20vh] md:h-[90vh] mr-2 relative z-[2] transform translate-y-4 hover:scale-105 transition-transform duration-500"
          />
          
          
        </div>
      </div>

      
    </div>
    <div className="flex flex-row justify-center gap-8 items-center">
    <div className=" flex items-center" >
        
        <p className="mt-4 text-xs md:text-lg text-[#1B1C1E] text-center w-[40vw] md:w-[30vw] ">
        As the amber liquid gracefully swirls in the glass, it tells tales of time-honored traditions, the care of countless craftsmen, and the serene landscapes of its birth        </p>
        
      </div>

      <div className="relative">
      
        <div className="relative ">
          
          <img
            src="/images/jacob's creek.png" 
            alt="MOET"
            className="  h-[20vh] md:h-[70vh] aspect-square mr-2 relative z-[2] transform translate-y-4 hover:scale-105 transition-transform duration-500"
          />
          
          
        </div>
      </div>

      
    </div>
    
  </div>
  )
}

export default Zigzag
