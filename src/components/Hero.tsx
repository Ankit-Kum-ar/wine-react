import { Button } from "./ui/button"

const Hero = () => {
  return (
    <div>
      <div  className='HeroContent bg-[url(/images/png.png)] bg-cover bg-no-repeat  flex flex-col justify-center h-[100vh] w-full items-center'>
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
        <div className='flex flex-col items-center justify-center w-12/12 md:w-8/12 z-10 mt-10 px-6 md:px-0'>
            <h2 className='greeting text-white text-5xl md:text-7xl  text-center  z-10 font-anybody font-sail  '>Exclusive</h2>
            <h2 className='greeting text-white text-5xl md:text-6xl text-center z-10 font-sail '>Collection of <br />Rare Liquor <br /> Awaits</h2>
        </div>
      <Button  className='greeting text-white text-lg bg-[#164328] border-2 border-solid border-[#4D6A52] text-center px-6 py-2 z-20 font-manrope rounded-none hover:bg-[#4D6A52] cursor-pointer m-6'>Shop now</Button>
    </div>
    </div>
  )
}

export default Hero
