import './App.css'
import Hero from './component/Navbar/HomePage/Hero/Hero'
import Statistics from './component/Navbar/HomePage/Statistics/Statistics'
import Navbar from './component/Navbar/Navbar'
import DigitalTools from './component/DigitalTools/DigitalTools'
import { Suspense, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import Steps from './component/Steps/Steps'
import Pricing from './component/Pricing/Pricing'
import TransformWorkflow from './component/TransformWorkflow/TransformWorkflow'
import Footer from './component/Footer/Footer'

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
  };

  const handleRemoveFromCart = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    if (!item) return;

    setCartItems(currentItems => currentItems.filter(item => item.id !== productId));
    toast.error(`${item.name} has been removed from the cart`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    if (activeProductId === productId) {
      setActiveProductId(null);
    }
  };

  const handleCheckout = () => {
    setCartItems([]);
    setActiveProductId(null);
    toast.success('Proceeded To Checkout', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
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
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleCheckout={handleCheckout}
        />
      </Suspense>

      <Steps />
      <Pricing />
      <TransformWorkflow />
      <Footer />
    </>
  )
}

export default App
