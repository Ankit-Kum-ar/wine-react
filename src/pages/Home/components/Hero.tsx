import React from 'react'

const Hero = () => {
  return (
    <div>
      <div  className='HeroContent bg-[url(images/webp.png)] flex flex-col justify-between  relative h-[90vh] w-screen items-center bg-gradient-to-t from-black via-transparent to-transparent'>
        <div className='flex flex-col items-center w-12/12 md:w-8/12 z-10 mt-10 px-6 md:px-0'>
            <h2 className='greeting text-white text-5xl md:text-9xl font-extrabold text-left uppercase z-10 font-anybody '>Hello</h2>
            <h2 className='greeting text-white text-2xl md:text-4xl font-extrabold text-left uppercase z-10 font-anybody'>Welcome To</h2>
        </div>
      <h1  className='greeting text-[#FC7901] text-5xl md:text-[106px] font-extrabold text-center mb-10 z-20 p-0 font-anybody'>MARKETING EXL</h1>
    </div>
    </div>
  )
}

export default Hero
