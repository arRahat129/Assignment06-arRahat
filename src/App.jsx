import './App.css'
import Hero from './component/Navbar/HomePage/Hero/Hero'
import Statistics from './component/Navbar/HomePage/Statistics/Statistics'
import Navbar from './component/Navbar/Navbar'
import DigitalTools from './component/DigitalTools/DigitalTools'
import { Suspense } from 'react'

const fetchProducts = async() => {
  const res = await fetch("/productsData.json");
  return res.json();
};

function App() {
  const productsPromise = fetchProducts();

  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Suspense fallback={<span className="loading loading-spinner loading-xl flex justify-center"></span>}>
        <DigitalTools productsPromise={productsPromise} />
      </Suspense>
    </>
  )
}

export default App
