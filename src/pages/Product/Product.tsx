import { CarouselDemo } from "@/components/CarouselDemo"
import Display from "@/components/Display"
import Hero from "@/components/Hero"
import { carouselImagesArray_01, carouselImagesArray_02, carouselImagesContentArray_01, carouselImagesContentArray_02, displayProductContent } from "@/utils/constant"
import DisplayProduct from "./components/DisplayProduct"

const Product = () => {
  const { imgSrc_1, imgSrc_2, imgSrc_3, imgSrc_4, title_1, title_2, title_3, title_4, desc_a_1, desc_a_2, desc_b_1, desc_b_2, desc_c_1, desc_c_2, desc_d_1, desc_d_2 } = displayProductContent;
  return (
    <div>
      <Hero />
      <Display title="Explore Our Varietals"/>
      <DisplayProduct imgSrc_1={imgSrc_2} imgSrc_2={imgSrc_1} title_1={title_1} title_2={title_2} desc_a_1={desc_a_1} desc_a_2={desc_a_2} desc_b_1={desc_b_1} desc_b_2={desc_b_2} />
      <div className="flex justify-center items-center border-y-4 border-[#6B2F1F]">
        <CarouselDemo carouselImagesArray = {carouselImagesArray_01} carouselImagesContentArray={carouselImagesContentArray_01} />
      </div>
      <div className="flex-col bg-[#FCF5EA]">
        <h1 className="md:text-7xl text-5xl font-medium text-center py-8 font-sail"> Our Special  Whiskey</h1>
        <DisplayProduct imgSrc_1={imgSrc_4} imgSrc_2={imgSrc_3} title_1={title_3} title_2={title_4} desc_a_1={desc_c_1} desc_a_2={desc_c_2} desc_b_1={desc_d_1} desc_b_2={desc_d_2} />
      </div>
      <div className="flex justify-center items-center border-y-4 border-[#6B2F1F]">
        <CarouselDemo carouselImagesArray = {carouselImagesArray_02} carouselImagesContentArray={carouselImagesContentArray_02} />
      </div>
    </div>
  )
}

export default Product
