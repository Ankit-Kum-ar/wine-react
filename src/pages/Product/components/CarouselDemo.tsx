import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { carouselImagesArray, carouselImagesContentArray } from "@/utils/constant"

export function CarouselDemo() {
  return (
    <Carousel className="w-[70vw] md:w-[90vw] md:max-w-6xl max-w-sm my-12" opts={{ loop: true }}>
      <CarouselContent className="-ml-1">
        {carouselImagesArray.map((imageSrc, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/3 basis-full">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col ga aspect-square items-start justify-start">
                  <img src={imageSrc} alt={`Image ${index + 1}`} className="h-[60vh] rounded-xl" />
                  <p className="text-3xl my-3" style={{ fontFamily: 'Glass Antiqua, sans-serif' }}>{carouselImagesContentArray[index].title}</p>
                  <p style={{ fontFamily: 'Glass Antiqua, sans-serif' }} className="text-[12px]">{carouselImagesContentArray[index].description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}