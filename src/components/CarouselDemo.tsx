import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CarouselImageContent {
  title: string;
  description: string;
}

interface CarouselDemoProps {
  carouselImagesArray: string[];
  carouselImagesContentArray: CarouselImageContent[];
}

export function CarouselDemo({ carouselImagesArray, carouselImagesContentArray }: CarouselDemoProps) {
  return (
    <Carousel 
      className="w-[70vw] md:w-[90vw] md:max-w-6xl max-w-sm my-12" 
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="-ml-1">
        {carouselImagesArray.map((imageSrc, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/3 basis-full">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col ga aspect-square items-start justify-start">
                  <img src={imageSrc} alt={`Image ${index + 1}`} className="md:h-[55vh] h-[40vh]" />
                  <p className="md:text-3xl text-2xl md:my-3 my-1" style={{ fontFamily: 'Glass Antiqua, sans-serif' }}>{carouselImagesContentArray[index].title}</p>
                  <p style={{ fontFamily: 'Glass Antiqua, sans-serif' }} className="md:text-[12px] text-[10px]">{carouselImagesContentArray[index].description}</p>
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