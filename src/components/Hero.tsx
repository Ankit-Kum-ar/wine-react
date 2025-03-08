import { Button } from "./ui/button"

const Hero = () => {
  return (
    <div>
      <div  className='HeroContent bg-[url(/images/webp.png)] bg-cover bg-no-repeat  flex flex-col justify-center h-[100vh] w-full items-center'>
        <div className='flex flex-col items-center justify-center w-12/12 md:w-8/12 z-10 mt-10 px-6 md:px-0'>
            <h2 className='greeting text-white text-4xl md:text-5xl  text-center  z-10 font-anybody font-sail '>Exclusive</h2>
            <h2 className='greeting text-white text-3xl md:text-5xl text-center z-10 font-sail'>Collection of <br />Rare Liquor <br /> Awaits</h2>
            <p className=" text-center text-white md:w-[35vw] p-8 font-manrope">We are a passionate team of professionals dedicated to providing top-quality products to help you find the most genuine liquor where we are specializing in services including importing, distribution and marketing.</p>
        </div>
      <Button  className='greeting text-white bg-[#164328] border-2 border-solid border-[#4D6A52] text-center px-4 py-1 z-20 font-manrope rounded-none hover:bg-[#4D6A52] cursor-pointer'>Shop now</Button>
    </div>
    </div>
  )
}

export default Hero
