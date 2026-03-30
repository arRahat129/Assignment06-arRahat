import './App.css'
import Hero from './component/Navbar/HomePage/Hero/Hero'
import Statistics from './component/Navbar/HomePage/Statistics/Statistics'
import Navbar from './component/Navbar/Navbar'
import DigitalTools from './component/DigitalTools/DigitalTools'
import { Suspense, useState } from 'react'

const fetchProducts = async() => {
  const res = await fetch("/productsData.json");
  return res.json();
};

function App() {
  const productsPromise = fetchProducts();

  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Suspense fallback={<span className="loading loading-spinner loading-xl flex justify-center"></span>}>
        <DigitalTools productsPromise={productsPromise} cartItems={cartItems} setCartItems={setCartItems} />
      </Suspense>
    </>
  )
}

export default App
