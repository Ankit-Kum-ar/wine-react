import About from '@/components/About'
import Display from '../../components/Display'
import Banner from './components/Banner'
import Hero from '@/components/Hero'
import Zigzag from './components/Zigzag'
import Bg from './components/Bg'
import Threeway from './components/Threeway'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    
    <div>
      <Hero />
      <About />
      <Display title="Unveiling the Essence of Timeless Elegance in Whiskey" />
      <Banner />
      <Zigzag />
      <Threeway />
      <Bg />
      <Footer />
      
    </div>
  )
}

export default Home
