import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const Navbar = ({ cartItems, setActive }) => {
    return (
        <div className='container mx-auto max-w-450 mb-15'>
            <div className="navbar bg-base-100 shadow-sm px-2 sm:px-5 md:px-10 lg:px-25 xl:px-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex gap-4 items-center'>
                        <div className='relative cursor-pointer' onClick={() => setActive("cart")}>
                            {
                                cartItems.length > 0 
                                    ? <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>{cartItems.length}</span>
                                    : null
                            }
                            <IoCartOutline className='text-2xl font-semibold text-[#101727]' />
                        </div>
                        <p className='font-semibold text-[#101727]'><a href="">Login</a></p>
                        <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;