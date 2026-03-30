import React from 'react';
import heroImage from '../../../../assets/banner.png';
import playBtn from '../../../../assets/play.png';
import { MdOutlineRadioButtonChecked } from 'react-icons/md';

const Hero = () => {
    return (
        <div className='container mx-auto max-w-400 mb-15'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-15">
                    <div className='space-y-4'>
                        <div className='flex items-center gap-1.25 bg-[#E1E7FF] w-fit px-4 py-2 rounded-full '>
                            <div className='bg-purple-200 rounded-full'>
                                <MdOutlineRadioButtonChecked className='text-purple-600' />
                            </div>
                            <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-medium'>New: AI-Powered Tools Available</p>
                        </div>
                        <h1 className="text-7xl font-bold line-height-[84px]">Supercharge Your Digital Workflow</h1>
                        <p className="py-6 leading-8 max-w-160 text-[#627382] text-lg">
                            Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products
                        </p>
                        <div className='flex gap-4'>
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-4 py-3">Explore Products</button>
                            <button className="btn btn-outline btn-primary bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent rounded-full">
                                <div className='flex items-center gap-2.5'>
                                    <img src={playBtn} alt="Play" className='h-4 w-auto' />
                                    <p>Watch Demo</p>
                                </div>
                            </button>
                        </div>
                    </div>
                    <img
                        src={heroImage}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;