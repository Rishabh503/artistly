"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/logo2.png";
import { ChartSpline, Hamburger, Handshake, Menu, Users, X } from "lucide-react";
import { Button } from "./ui/button";

const NavBar = () => {
  const navLinks = [
    { url: "/artists", icon: <Users />, title: "Artists" },
    { url: "/onboardArtist", icon: <Handshake />, title: "Join" },
    { url: "/dashboard", icon: <ChartSpline />, title: "Dashboard" },
  ];
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#2c0b0e] via-[#5b0f12] to-[#b5151b] text-white shadow-md fixed top-0 w-full z-20">
        <Link href="/" className="text-2xl font-bold text-purple-600">
          <Image src={logo} height={100} width={100} />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="space-x-6 hidden md:flex justify-between items-center text-lg font-semibold">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              className="flex justify-between items-center gap-2 hover:text-purple-300 transition-colors duration-200"
              href={link.url}
            >
              {link.icon} {link.title}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
        </button>
      </nav>
      
      {/* Mobile Navigation Dropdown */}
      <div 
        className={`fixed top- left-0 w-full bg-gradient-to-r from-[#2c0b0e] via-[#5b0f12] to-[#b5151b] text-white shadow-lg z-10 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              className="flex items-center gap-3 text-lg font-semibold py-3 px-4 hover:bg-white/10 rounded-lg transition-all duration-200 transform hover:translate-x-1"
              href={link.url}
              onClick={closeMenu}
            >
              {link.icon} {link.title}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-5 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default NavBar;