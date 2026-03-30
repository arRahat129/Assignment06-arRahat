import React from 'react';

const Statistics = () => {
    return (
        <div className='container mx-auto max-w-400 mb-15'>
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center gap-15 rounded-lg py-15 text-white space-x-6'>
                <div className='text-center'>
                    <h2 className='text-6xl font-bold'>50K+</h2>
                    <p className='text-2xl font-medium'>Active Users</p>
                </div>
                <div className="divider divider-horizontal before:bg-gray-200/50 after:bg-gray-200/50"></div>
                <div className='text-center'>
                    <h2 className='text-6xl font-bold'>200+</h2>
                    <p className='text-2xl font-medium'>Premium Tools</p>
                </div>
                <div className="divider divider-horizontal before:bg-gray-200/50 after:bg-gray-200/50"></div>
                <div className='text-center'>
                    <h2 className='text-6xl font-bold'>4.9</h2>
                    <p className='text-2xl font-medium'>Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Statistics;