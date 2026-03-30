import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const Cart = ({ cartItems }) => {
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
            <div className='container mx-auto max-w-300 mt-10 mb-50 border border-gray-200 p-10 rounded-2xl'>
                {cartItems.map(item => (
                    <div key={item.id} className='border bg-gray-200 p-4 rounded-2xl'>
                        <div></div>
                        <div>
                            <h6 className='font-bold text-lg'>{item.name}</h6>
                            <p className='text-gray-500'>${item.price.toFixed(2)}</p>
                        </div>
                        <button className='btn text-red-500'>Remove</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Cart;