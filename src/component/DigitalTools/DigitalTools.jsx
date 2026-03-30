import React, { use, useState } from 'react';
import Products from '../Products/Products';

const DigitalTools = ({ productsPromise }) => {
    const [active, setActive] = useState("products");

    const products = use(productsPromise);
    console.log(products);

    return (
        <div className='container mx-auto max-w-400 mb-15'>
            <div className='text-center space-y-4'>
                <h1 className='font-bold text-5xl'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='flex justify-center items-center'>
                    <div className='flex gap-2 border border-gray-200 w-fit p-1 rounded-full'>
                        <button
                        onClick={() => setActive("products")}
                        className={`btn ${active === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full" : "bg-white text-[#25065D] border-none"}`}>
                            products
                        </button>
                        <button
                        onClick={() => setActive("cart")}
                        className={`btn ${active === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full" : "bg-white text-[#25065D] border-none"}`}>
                            Cart (2)
                        </button>
                    </div>
                </div>

                <div className='mt-5'>
                    {active === "products" ? <Products products={products} /> : <p>Cart</p>}
                </div>
            </div>
        </div>
    );
};

export default DigitalTools;