
const Display = () => {
  return (
    <div  className="bg-[#FCF5EA] py-6 px-8 lg:px-16 w-full">
      <h2 className="text-2xl lg:text-4xl font-extrabold text-center text-[#1B1C1E] mb-10 font-anybody">
      Unveiling the Essence of Timeless Elegance in <br />Whiskey      </h2>
      <div className="flex overflow-x-auto space-x-6 py-4 no-scrollbar snap-x snap-mandatory ">
        
          <div
            
            className=" flex justify-center items-center gap-4 p-6 flex-shrink-0 snap-center w-full "
            
          >
            <img src="/images/dom.png" alt="DOM" className="h-[60vh]" />
            <img src="/images/royal salute 21.png" alt="Royal Salute" className="h-[60vh]" />
            <img src="/images/jacob's creek.png" alt="Jacob Creek" className="h-[60vh]" />
            <img src="/images/moet.png" alt="MOET" className="h-[60vh]" />

            {/* <img src="/images/icon.svg" alt='"' className="h-6 w-6"/>
            <p className=" text-white font-bold">{testimonial.company}</p>
            <p className=" font-bold text-orange-500">{testimonial.name},{testimonial.role}</p>
            <p className="text-gray-300 mb-1 text-xs mt-1">"{testimonial.feedback}"</p>
            <div className="text-yellow-400 mt-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    // <i key={i} className="fas fa-star"></i>
                    <FontAwesomeIcon icon={faStar} key={i} />
                  ))}
                </div>
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-xs text-gray-500 font-semibold">{testimonial.role}</p>
                
              </div>
            </div> */}
          </div>
        
      </div>
    </div>
  )
}

export default Display
