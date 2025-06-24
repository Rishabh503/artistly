import Link from 'next/link'
import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Heart, Star } from "lucide-react";
import Image from 'next/image';
import logo from "../../../public/assets/logo2.png"
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#2c0b0e] via-[#5b0f12] to-[#b5151b] py-12 px-6 md:px-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
             <Link href="/" className="text-2xl font-bold text-purple-600">
          <Image src={logo} height={100} width={100} alt="logo" />
        </Link>
            <p className="text-gray-300 text-sm mt-2 max-w-xs">
              Connecting artists with opportunities worldwide
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <Link 
              href="#" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium hover:underline"
            >
              Privacy Policy
            </Link>
            <Link 
              href="#" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium hover:underline"
            >
              Terms of Service
            </Link>
            <Link 
              href="#" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium hover:underline"
            >
              Contact Us
            </Link>
            <Link 
              href="#" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium hover:underline"
            >
              Help Center
            </Link>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link 
              href="#" 
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 transform hover:scale-110 backdrop-blur-sm border border-white/20"
            >
              <FaFacebookF className="text-white hover:text-purple-400 w-5 h-5" />
            </Link>
            <Link 
              href="#" 
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 transform hover:scale-110 backdrop-blur-sm border border-white/20"
            >
              <FaInstagram className="text-white hover:text-purple-400 w-5 h-5" />
            </Link>
            <Link 
              href="#" 
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 transform hover:scale-110 backdrop-blur-sm border border-white/20"
            >
              <FaLinkedinIn className="text-white hover:text-purple-400 w-5 h-5" />
            </Link>
            <Link 
              href="#" 
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 transform hover:scale-110 backdrop-blur-sm border border-white/20"
            >
              <FaTwitter className="text-white hover:text-purple-400 w-5 h-5" />
            </Link>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Artistly. All rights reserved.
            </p>
            
            {/* Made with love */}
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for artists</span>
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer