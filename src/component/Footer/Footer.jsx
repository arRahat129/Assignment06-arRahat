import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='container mx-auto max-w-400 mb-15'>

            <div className="bg-[#0B1120] text-white pt-30 pb-6 px-5 md:px-10 lg:px-20 xl:px-50">
                
                <div className="space-y-10">

                    <div className="grid grid-cols-1 md:grid-cols-6 text-center md:text-start gap-10 pb-10">

                        <div className="md:col-span-2 space-y-4">
                            <h2 className="text-3xl font-bold">DigiTools</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Premium digital tools for creators, professionals, and businesses.
                                Work smarter with our suite of powerful tools.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Product</h3>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="hover:text-white cursor-pointer">Features</li>
                                <li className="hover:text-white cursor-pointer">Pricing</li>
                                <li className="hover:text-white cursor-pointer">Templates</li>
                                <li className="hover:text-white cursor-pointer">Integrations</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Company</h3>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="hover:text-white cursor-pointer">About</li>
                                <li className="hover:text-white cursor-pointer">Blog</li>
                                <li className="hover:text-white cursor-pointer">Careers</li>
                                <li className="hover:text-white cursor-pointer">Press</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Resources</h3>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="hover:text-white cursor-pointer">Documentation</li>
                                <li className="hover:text-white cursor-pointer">Help Center</li>
                                <li className="hover:text-white cursor-pointer">Community</li>
                                <li className="hover:text-white cursor-pointer">Contact</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Social Links</h3>
                            <div className="flex justify-center md:justify-start gap-3 mt-2">
                                <div className="w-10 h-10 flex items-center justify-center bg-gray-200 text-black rounded-full hover:scale-110 transition cursor-pointer">
                                    <FaInstagram />
                                </div>
                                <div className="w-10 h-10 flex items-center justify-center bg-gray-200 text-black rounded-full hover:scale-110 transition cursor-pointer">
                                    <FaFacebookF />
                                </div>
                                <div className="w-10 h-10 flex items-center justify-center bg-gray-200 text-black rounded-full hover:scale-110 transition cursor-pointer">
                                    <FaXTwitter />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border border-gray-700 w-full'></div>

                    <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-500 text-sm gap-4">

                        <p>© 2026 Digitools. All rights reserved.</p>

                        <div className="flex gap-6">
                            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                            <span className="hover:text-white cursor-pointer">Terms of Service</span>
                            <span className="hover:text-white cursor-pointer">Cookies</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;