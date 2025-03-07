import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home/Home"
import Product from "./pages/Product/Product"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={ <Product /> } />
    </Routes>
    </>
  )
}

export default App