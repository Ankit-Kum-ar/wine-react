import { CarouselDemo } from "@/components/CarouselDemo"
import Hero from "@/components/Hero"
import { carouselImagesArray_01, carouselImagesArray_02, carouselImagesContentArray_01, carouselImagesContentArray_02 } from "@/utils/constant"

const Product = () => {
  return (
    <div>
      <Hero />
      <div className="flex justify-center items-center border-y-4 border-[#6B2F1F]">
        <CarouselDemo carouselImagesArray = {carouselImagesArray_01} carouselImagesContentArray={carouselImagesContentArray_01} />
      </div>
      <div className="flex justify-center items-center border-b-4 border-[#6B2F1F]">
        <CarouselDemo carouselImagesArray = {carouselImagesArray_02} carouselImagesContentArray={carouselImagesContentArray_02} />
      </div>
    </div>
  )
}

export default Product
