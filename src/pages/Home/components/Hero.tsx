const Hero = () => {
  return (
    <div>
      <div  className='absolute HeroContent bg-[url(images/webp.png)] bg-cover bg-no-repeat flex flex-col justify-center h-[100vh] w-full items-center'>
        <div className='flex flex-col items-center justify-center w-12/12 md:w-8/12 z-10 mt-10 px-6 md:px-0'>
            <h2 className='greeting text-white text-2xl md:text-2xl font-extrabold text-center uppercase z-10 font-anybody '>Exclusive</h2>
            <h2 className='greeting text-white text-lg md:text-3xl font-extrabold text-center uppercase z-10 font-anybody'>Collection of <br />Rare Liquor <br /> Awaits</h2>
            <p className=" text-center text-white md:w-[35vw] p-8">We are a passionate team of professionals dedicated to providing top-quality products to help you find the most genuine liquor where we are specializing in services including importing, distribution and marketing.</p>
        </div>
      <button  className='greeting text-white bg-[#164328] border-2 border-solid border-[#4D6A52] text-center px-4 py-1 z-20 font-anybody'>Shop now</button>
    </div>
    </div>
  )
}

export default Hero
