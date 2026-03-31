import React from 'react';

const TransformWorkflow = () => {
    return (
        <div className='container mx-auto max-w-400'>
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex flex-col justify-center items-center rounded-lg py-30 text-white space-y-6 text-center'>
                <h1 className='font-bold text-5xl'>Ready To Transform Your Workflow?</h1>

                <p>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>

                <div className='flex gap-5 mt-4'>
                    <button className="btn bg-white rounded-full py-5"><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</span></button>

                    <button className='btn border border-white text-white bg-transparent rounded-full py-5'>View Pricing</button>
                </div>

                <p className='text-[]'>14-day free trial • No credit card required • Cancel anytime</p>

            </div>
        </div>
    );
};

export default TransformWorkflow;