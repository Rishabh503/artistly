"use client";
import ArtistOnboardingForm from "@/components/ArtistOnBoardingForm";
import FooterCta from "@/components/FooterCta";
import { benefits } from "@/data/benefits";

export default function ArtistOnboardingPage() {
  
  return (
    <div className="min-h-screen mt-10 bg-gradient-to-br from-[#2c0b0e] via-[#5b0f12] to-[#b5151b]">
      {/* Benefits Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We provide everything you need to succeed as an artist in today's digital world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-purple-400 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <ArtistOnboardingForm />

        

      {/* Footer CTA */}
      <FooterCta/>
    </div>
  );
}