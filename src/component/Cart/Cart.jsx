import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const Cart = ({ cartItems }) => {
    let total = 0;
    cartItems.forEach(item => total += item.price);

    if (cartItems.length === 0) {
        return (
            <>
                <div className='container mx-auto max-w-300 mt-10 mb-50 border border-gray-200 p-10 rounded-2xl'>
                    <h5 className='text-start font-bold text-2xl'>Your Cart</h5>
                    <div className='space-y-4'>
                        <IoCartOutline className='size-20 text-gray-300 mx-auto mt-10' />
                        <p className='font-semibold text-gray-400 mb-10'>Your Cart is empty!</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='container mx-auto max-w-300 mt-10 mb-50 border border-gray-200 p-10 rounded-2xl space-y-5'>
                <h5 className='text-start font-bold text-2xl'>Your Cart</h5>
                {cartItems.map(item => (
                    <div key={item.id} className='shadow-md bg-gray-50 p-4 rounded-2xl'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center justify-between gap-4 text-start py-2'>
                                <div className='flex items-center justify-center h-15 w-15 border border-gray-200 bg-white rounded-full'>
                                    <img src={item.icon} alt={item.name} className='size-10' />
                                </div>
                                <div className='space-y-2'>
                                    <h6 className='font-bold text-lg'>{item.name}</h6>
                                    <p className='text-gray-500'>${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <button className='btn text-red-500'>Remove</button>
                        </div>
                    </div>
                ))}

                <div className='flex items-center justify-between py-2'>
                    <h4>Total</h4>
                    <h1 className='font-bold text-2xl'>${total.toFixed(2)}</h1>
                </div>

                <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-6 btn-block'>Proceed To Checkout</button>
            </div>
        </>
    );
};

export default Cart;