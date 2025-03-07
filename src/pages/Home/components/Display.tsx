
const Display = () => {
  return (
    <div  className="bg-[#FCF5EA] py-6 px-8 lg:px-16 w-full">
      <h2 className="text-2xl lg:text-4xl font-extrabold text-center text-[#1B1C1E] mb-10 font-anybody">
      Unveiling the Essence of Timeless Elegance in <br />Whiskey      </h2>
      <div className="flex overflow-x-auto space-x-6 py-4 snap-x snap-mandatory ">
        
          <div
            
            className=" flex justify-center items-center gap-4 p-6 flex-shrink-0 snap-center w-full "
            
          >
            <img src="/images/dom.png" alt="DOM" className="h-[60vh] transform translate-y-4 hover:scale-105 transition-transform duration-500" />
            <img src="/images/royal salute 21.png" alt="Royal Salute" className="h-[60vh] transform translate-y-4 hover:scale-105 transition-transform duration-500" />
            <img src="/images/jacob's creek.png" alt="Jacob Creek" className="h-[60vh] transform translate-y-4 hover:scale-105 transition-transform duration-500" />
            <img src="/images/moet.png" alt="MOET" className="h-[60vh] transform translate-y-4 hover:scale-105 transition-transform duration-500" />

           
          </div>
        
      </div>
    </div>
  )
}

export default Display
