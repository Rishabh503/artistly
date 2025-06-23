"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import hero from "../../public/hero.jpg";
import logo from "../../public/logo2.png";
import dancer from "../../public/dancer.jpg";
import speaker from "../../public/speaker.jpg";
import dj from "../../public/dj.jpg";
import singer from "../../public/singer2.jpg";

import { ChartSpline, Handshake, Users } from "lucide-react";

const navLinks = [
  { url: "/artists", icon: <Users />, title: "Artists" },
  { url: "/join", icon: <Handshake />, title: "Join" },
  { url: "/dashboard", icon: <ChartSpline />, title: "Dashboard" },
];

const categories = [
  { name: "Singers", image: singer },
  { name: "Dancers", image: dancer },
  { name: "Speakers", image: speaker },
  { name: "DJs", image: dj },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Starts */}
      //TODO MAKE IT RESPOSNIVE
      <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#2c0b0e] via-[#5b0f12] to-[#b5151b] text-white shadow-md fixed top-0 w-full z-20">
        <Link href="/" className="text-2xl font-bold text-purple-600">
          <Image src={logo} height={100} width={100} />
        </Link>
        <div className="space-x-6 flex justify-between items-center text-lg font-semibold">
          {navLinks.map((link, index) => (
            <Link
              className="flex justify-between items-center gap-2"
              href={link.url}
            >
              {link.icon} {link.title}
            </Link>
          ))}
        </div>
      </nav>
      {/* Hero Portion */}
      <section className="relative h-[75vh] w-full mt-12">
        <Image
          src={hero}
          alt="Artist performing"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-2xl mx-auto h-full flex flex-col items-center justify-center text-center px-4">
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Connect With Top Artists
            </h1>
            <p className="text-lg text-white/90 mb-6">
              Browse, shortlist, and book talented singers, dancers, speakers,
              DJs — all in one place.
            </p>
            <Link href="/listing">
              <Button className="text-white border-white hover:bg-white/20">
                Explore Artists
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Categories */}
      <section className="px-6 md:px-20 py-16 flex-1">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} href="/listing">
              <Card className="overflow-hidden shadow-lg hover:scale-105 transition-transform rounded-xl p-0">
                <div className="relative h-64 w-full">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold">{cat.name}</h3>
                  <p className="text-sm text-gray-500">
                    View top {cat.name.toLowerCase()}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-6 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <span className="text-lg font-bold text-purple-600">Artistly</span>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-700 hover:text-purple-600">
              Privacy
            </Link>
            <Link href="#" className="text-gray-700 hover:text-purple-600">
              Terms
            </Link>
            <Link href="#" className="text-gray-700 hover:text-purple-600">
              Contact
            </Link>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaFacebookF className="text-gray-600 hover:text-purple-600" />
            <FaInstagram className="text-gray-600 hover:text-purple-600" />
            <FaLinkedinIn className="text-gray-600 hover:text-purple-600" />
            <FaTwitter className="text-gray-600 hover:text-purple-600" />
          </div>
        </div>
        <p className="text-center text-gray-500 mt-6 text-sm">
          © {new Date().getFullYear()} Artistly. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
