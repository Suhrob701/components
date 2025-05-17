import React from 'react'
import nav from '../assets/nav.png'
import header from '../assets/header.png'
import tbn from '../assets/tbn.png'

const Header = () => {
    return (
        <div className="bg-[#FFF6EF] w-[1380px] h-[600px] rounded-b-[70px] mx-auto flex flex-col items-center pt-[40px]">
            <nav className="w-full px-10 flex items-center justify-between">
                <img src={nav} alt="Logo" className="w-[120px]" />
                <ul className="flex gap-8 items-center text-[18px] font-medium">
                    <li className="hover:text-orange-500 cursor-pointer">Home</li>
                    <li className="hover:text-orange-500 cursor-pointer">Careers</li>
                    <li className="hover:text-orange-500 cursor-pointer">Blog</li>
                    <li className="hover:text-orange-500 cursor-pointer">About Us</li>
                    <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-full hover:bg-orange-100 transition">Login</button>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">Sign Up</button>
                </ul>
            </nav>


            <div className='flex justify-between items-center px-10'>
                <div className='mt-[100px] max-w-xl'>
                    <h1 className='text-5xl font-bold font-Poppins text-[#2F327D] leading-tight'>
                        <span className='text-[#F48C06]'>Studying</span> Online is now much easier
                    </h1>

                    <p className='mt-6 text-lg font-Nunito text-gray-600'>
                        Skilline is an interesting platform that will teach you in a more interactive way.
                    </p>

                    <div className='mt-8 flex items-center gap-6'>
                        <button className='bg-[#F48C06] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d97706] transition'>
                            Join for free
                        </button>

                        <div className='flex items-center gap-2'>
                            <img src={tbn} alt="play button" className="w-[70px] mt-5" />
                            <p className='text-[#2F327D] font-medium'>Watch how it works</p>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={header} alt="Header Illustration" className="w-[400px]" />
                </div>
            </div>



        </div>
    )
}

export default Header
