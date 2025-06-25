import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export const Cta = () => {
  return (
             <section className="bg-gradient-to-r from-red-700 to-black text-white py-20 px-6 md:px-20 text-center">
  <h2 className="text-4xl font-bold mb-4">Connect. Book. Perform.</h2>
  <p className="text-lg mb-6 max-w-2xl mx-auto">
    Whether you're planning an event or managing artists — Artistly helps you connect, collaborate, and shine. 
    Start your journey now!
  </p>
  <div className="flex sm:flex-row gap-4 flex-col items-center justify-center space-x-4">
    <Link href="/artist">
      <Button className="bg-white text-red-700 font-semibold px-6 py-3 rounded-full hover:bg-red-100 transition">
        Explore Artists
      </Button>
    </Link>
    <Link href="/onboardArtist">
      <Button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-red-700 transition">
        Onboard Artists
      </Button>
    </Link>
    <Link href="/dashboard">
      <Button className="bg-white text-red-700 font-semibold px-6 py-3 rounded-full hover:bg-red-100 transition">
        Manage Artist
      </Button>
    </Link>
  </div>
</section>
  )
}
