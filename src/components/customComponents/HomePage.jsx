"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import hero from "../../../public/assets/hero.jpg";

import dancer from "../../../public/assets/dancer.jpg";
import speaker from "../../../public/assets/speaker.jpg";
import dj from "../../../public/assets/dj.jpg";
import singer from "../../../public/assets/singer2.jpg";

import { ChartSpline, Handshake, Users } from "lucide-react";
import { Cta } from "./Cta";

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
      {/* about us  */}
      <section className="bg-white px-6 md:px-20 py-16 text-center">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">About Artistly</h2>
  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
    Artistly.com is designed for Event Planners and Artist Managers to connect seamlessly. 
    Event planners can browse through artist profiles, shortlist their preferences, 
    and raise booking or availability requests. Meanwhile, Artist Managers can onboard artists, 
    receive booking leads, and manage all responses efficiently via an intuitive dashboard.
  </p>
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

          {/* cta */}

          <Cta/>



      
    </div>
  );
}
