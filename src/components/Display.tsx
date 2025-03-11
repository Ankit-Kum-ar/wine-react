import { CarouselDemo } from "./CarouselDemo";
import { carouselImagesArray_03, carouselImagesContentArray_03 } from "../utils/constant";

interface DisplayProps {
  title: string;
}

const Display = ({ title }: DisplayProps) => {
  return (
    <div className="bg-[#FCF5EA] py-6 px-4 md:px-8 lg:px-16 w-full">
      <h2 className="text-xl md:text-2xl lg:text-4xl font-sail text-center text-[#1B1C1E] my-4 ">
        {title}
      </h2>
      <div className="flex justify-center items-center pb-4 ">
        <CarouselDemo carouselImagesArray = {carouselImagesArray_03} carouselImagesContentArray={carouselImagesContentArray_03} />
      </div>
    </div>
  )
}

export default Display
