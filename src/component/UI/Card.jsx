import React, { useState } from 'react';
import { toast } from 'react-toastify';


const Card = ({ product }) => {
    const [isAdded, setIsAdded] = useState(false);

    const addToCart = () => {
        // alert(`Added ${product.name} to cart!`);
        if(isAdded){
            toast.error(`${product.name} is already in the cart!`);
            return;
        }
        else{
            setIsAdded(true);
            toast.success(`${product.name} added to cart!`);
        }
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className='flex items-center justify-center h-15 w-15 border border-gray-200 rounded-full'>
                            <img src={product.icon} alt={product.name} />
                        </div>
                        <span className="badge font-medium text-sm text-[#BB4D00] bg-[#FEF3C6] p-4 rounded-full">Most Popular</span>
                    </div>
                    <div className="space-y-4 text-start">
                        <h2 className="text-2xl font-bold">{product.name}</h2>
                        <p className="text-[#627382] line-clamp-1" title={product.description}>{product.description}</p>
                        <span><span className='font-bold text-3xl'>${product.price.toFixed(2)}</span><span className='text-xl text-[#627382]'>/{product.period}</span></span>
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
                    <div className="mt-6">
                        {
                            isAdded ? <button
                        onClick={() => addToCart()}
                        className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-6 btn-block">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            Added to Cart
                        </button>
                        : <button
                        onClick={() => addToCart()}
                        className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-6 btn-block">
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