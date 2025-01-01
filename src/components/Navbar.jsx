// import logo from '../assets/sk.jpg';
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                {/* <img src={logo} alt="logo" className="h-10 w-auto" /> */}
                
            </div>
            <div className="flex items-center justify-center gap-4">
                <FaLinkedin className="m-2 text-blue-700 text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
                <FaGithub className="m-2 text-gray-800 text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
                <FaTwitter className="m-2 text-blue-400 text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
                <FaInstagram className="m-2 text-pink-600 text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
            </div>
        </nav>
    );
};

export default Navbar;
