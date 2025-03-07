import Hero from "@/components/Hero"
import { CarouselDemo } from "./components/CarouselDemo"

const Product = () => {
  return (
    <div>
      <Hero />
      <div className="flex justify-center items-center">
        <CarouselDemo />
      </div>
    </div>
  )
}

export default Product
