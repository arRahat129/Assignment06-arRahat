import React from 'react';
import { toast } from 'react-toastify';


const Card = ({ product, cartItems, handleAddToCart, activeProductId }) => {
    const isAdded = activeProductId === product.id;

    const addToCart = () => {
        const exists = cartItems.find(item => item.id === product.id);

        // alert(`Added ${product.name} to cart!`);
        if(exists){
            toast.error(`${product.name} is already in the cart!`);
            return;
        }
        else{
            handleAddToCart(product);
            toast.success(`${product.name} added to cart!`);
        }
    }

    return (
        <div className=''>
            <div className="card w-50 md:w-70 lg:w-96 bg-base-100 shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-1 mx-auto lg:mx-0 flex flex-col h-full">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className='flex items-center justify-center h-10 w-10 md:h-15 md:w-15 border border-gray-200 rounded-full'>
                            <img src={product.icon} alt={product.name} className='w-6 h-6 md:w-8 md:h-8' />
                        </div>
                        <span className={`badge font-medium text-xs md:text-sm 
                            ${product.tag === 'Popular' 
                                ? 'text-green-800 bg-green-200' 
                                : product.tag === 'Best Seller' 
                                    ? 'text-[#BB4D00] bg-[#FEF3C6]' 
                                    : 'text-blue-800 bg-blue-100'} p-4 rounded-full`}>
                            {product.tag}
                        </span>
                    </div>
                    <div className="space-y-4 text-start">
                        <h2 className="text-lg md:text-2xl font-bold">{product.name}</h2>
                        <p className="text-[#627382] line-clamp-1" title={product.description}>{product.description}</p>
                        <span><span className='font-bold text-2xl md:text-3xl'>${product.price.toFixed(2)}</span><span className='text-lg md:text-xl text-[#627382]'>/{product.period}</span></span>
                    </div>
                    <ul className="mt-6 space-y-2 text-start text-xs">
                        {
                            product.features.map((feature, index) => (
                                <li key={index}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{feature}</span>
                                </li>
                            ))

                        }
                    </ul>
                    <div className="mt-auto pt-5">
                        {
                            isAdded ? <button
                        onClick={() => addToCart()}
                        className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-6 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            Added to Cart
                        </button>
                        : <button
                        onClick={() => addToCart()}
                        className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-6 w-full hover:opacity-80 transition duration-100 active:opacity-50 active:scale-105">
                            Buy Now
                        </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;