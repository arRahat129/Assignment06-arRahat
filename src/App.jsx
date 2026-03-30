import './App.css'
import Hero from './component/Navbar/HomePage/Hero/Hero'
import Statistics from './component/Navbar/HomePage/Statistics/Statistics'
import Navbar from './component/Navbar/Navbar'
import DigitalTools from './component/DigitalTools/DigitalTools'
import { Suspense, useState } from 'react'

const fetchProducts = async () => {
  const res = await fetch("/productsData.json");
  return res.json();
};

function App() {
  const productsPromise = fetchProducts();

  const [active, setActive] = useState("products");
  const [activeProductId, setActiveProductId] = useState(null);

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems(currentItems => {
      const exists = currentItems.find(item => item.id === product.id);
      if (exists) {
        return currentItems;
      }

      return [...currentItems, product];
    })

    setActiveProductId(product.id);
  }

  return (
    <>
      <Navbar cartItems={cartItems} setActive={setActive} />
      <Hero />
      <Statistics />
      <Suspense fallback={<span className="loading loading-spinner loading-xl flex justify-center"></span>}>
        <DigitalTools 
          productsPromise={productsPromise}
          active={active}
          setActive={setActive}
          cartItems={cartItems}
          activeProductId={activeProductId}
          handleAddToCart={handleAddToCart} />
      </Suspense>
    </>
  )
}

export default App
