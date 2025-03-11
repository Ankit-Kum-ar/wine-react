interface DisplayProps {
  title: string;
}

const Display = ({ title }: DisplayProps) => {
  return (
    <div className="bg-[#FCF5EA] py-6 px-4 md:px-8 lg:px-16 w-full">
      <h2 className="text-xl md:text-2xl lg:text-4xl font-sail text-center text-[#1B1C1E] mb-4 ">
        {title}
      </h2>
      <div className="flex overflow-x-scroll  py-4 ">
        <div className="flex items-center gap-4 p-4 md:p-6  w-full">
          <img src="/images/dom.png" alt="DOM" className="h-40 md:h-[60vh] transform translate-y-4 hover:scale-105 transition-transform duration-500" />
          <img src="/images/royal salute 21.png" alt="Royal Salute" className="h-40 md:h-[60vh] transform translate-y-4 hover:scale-105 transition-transform duration-500" />
          <img src="/images/jacob's creek.png" alt="Jacob Creek" className="h-40 md:h-[60vh] transform translate-y-4 hover:scale-105 transition-transform duration-500" />
          <img src="/images/moet.png" alt="MOET" className="h-40 md:h-[60vh] transform translate-y-4 hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </div>
  )
}

export default Display
