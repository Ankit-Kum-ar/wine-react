import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home/Home"
import Product from "./pages/Product/Product"
import { useEffect, useState } from "react";
import ScrolltoTop from "./helpers/ScrolltoTop";
import Modal from "./components/Modal";
import { ToastContainer } from "react-toastify";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleConfirm = () => {
    setIsModalOpen(false);
  };

  // const handleCancel = () => {
  //   alert('You must be 18 years or older to enter this site.');
  //   // Optionally, you can redirect the user to another page or close the tab
  // };
  useEffect(() => {
    document.title = "Welcome to WINI"; // Set your desired title here
  }, []);
  return (
    <>
    <ToastContainer />
    <ScrolltoTop />
    <Navbar />
    {isModalOpen && <Modal onConfirm={handleConfirm} />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={ <Product /> } />
    </Routes>
    </>
  )
}

export default App