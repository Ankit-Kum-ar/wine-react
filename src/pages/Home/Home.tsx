import About from '@/components/About'
import Display from '../../components/Display'
import Banner from './components/Banner'
import Hero from '@/components/Hero'
import Zigzag from './components/Zigzag'
import Threeway from './components/Threeway'

const Home = () => {
  return (
    
    <>
      <Hero title="Exclusive Collection of Rare Liquor Awaits" />
      <About />
      <Display title="Unveiling the Essence of Timeless Elegance in Every Drop" />
      <Banner />
      <Zigzag />
      <Threeway />
      <img src="/images/banner.png" className="w-full" alt="" />
      
      
    </>
  )
}

export default Home
