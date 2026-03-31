import React from 'react';
import { BsBoxSeam } from 'react-icons/bs';
import { FaRegUser, FaUser } from 'react-icons/fa';
import { LuRocket } from 'react-icons/lu';

const Steps = () => {
    return (
        <>
            <div className='container mx-auto max-w-400 mb-15 py-10'>
                <div className='space-y-4 mb-10 text-center'>
                    <h1 className='text-5xl font-bold'>Get Started in 3 Steps</h1>
                    <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='border border-gray-200 rounded-2xl px-10 py-25 flex flex-col items-center text-center space-y-5 relative'>
                        <div className='h-15 w-15 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex justify-center items-center absolute top-5 right-5'>
                            <h3 className='font-bold text-xl'>01</h3>
                        </div>
                        <div className='h-25 w-25 rounded-full bg-purple-200 flex items-center justify-center'>
                            <FaRegUser className='size-15 text-[#4F39F6]' />
                        </div>
                        <h2 className='font-bold text-2xl mb-2 text-[#101727]'>Create Account</h2>
                        <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                    <div className='border border-gray-200 rounded-2xl px-10 py-25 flex flex-col items-center text-center space-y-5 relative'>
                        <div className='h-15 w-15 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex justify-center items-center absolute top-5 right-5'>
                            <h3 className='font-bold text-xl'>02</h3>
                        </div>

                        <div className='h-25 w-25 rounded-full bg-purple-200 flex items-center justify-center'>
                            <BsBoxSeam className='size-15 text-[#4F39F6]' />
                        </div>
                        <h2 className='font-bold text-2xl mb-2 text-[#101727]'>Choose Products</h2>
                        <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>

                    <div className='border border-gray-200 rounded-2xl px-10 py-25 flex flex-col items-center text-center space-y-5 relative'>
                        <div className='h-15 w-15 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex justify-center items-center absolute top-5 right-5'>
                            <h3 className='font-bold text-xl'>03</h3>
                        </div>

                        <div className='h-25 w-25 rounded-full bg-purple-200 flex items-center justify-center'>
                            <LuRocket className='size-15 text-[#4F39F6]' />
                        </div>
                        <h2 className='font-bold text-2xl mb-2 text-[#101727]'>Start Creating</h2>
                        <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Steps;