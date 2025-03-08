import { Button } from "@/components/ui/button"

const Banner = () => {
  return (
    <div className="bg-[#6B2F1F] flex flex-col justify-center items-center gap-8 p-10   w-full ">
      <h3 className="text-white font-anybody text-2xl lg:text-4xl font-sail ">Why Choose Our Whiskey</h3>
      <p className="text-white text-sm font-light md:text-2xl w-[90vw] md:w-[50vw] text-center font-manrope">From the golden fields of barley to the ancient barrels that breathe life into our whiskey, every drop tells a story of passion, tradition, and artistry</p>
      <Button  className='greeting text-white bg-[#164328] border-2 border-solid border-[#4D6A52] text-center px-6 py-1 z-20 font-manrope rounded-none hover:bg-[#4D6A52] cursor-pointer'>Shop now</Button>


    </div>
  )
}

export default Banner
