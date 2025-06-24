"use client";
import { useUser } from "@/context/userContext";

export default function ManagerProfile() {
  const { user } = useUser();

  return (
    <section className="bg-gradient-to-r from-[#670000] to-[#a00000] text-white text-center sm:text-left rounded-xl p-6 mb-6 shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold mb-2">Welcome Back, Manager!</h2>
      <p className="mb-4 text-sm sm:text-base text-white/90">
        Here's your dashboard overview. Manage artist submissions, track talent, and help organize unforgettable events.
      </p>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
        <img
          src={user.image}
          alt="Manager"
          className="w-20 h-20 rounded-full border-4 border-white shadow-md"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-semibold">{user.name}</h3>
          <p className="text-sm sm:text-base">{user.email}</p>
          <p className="text-sm italic text-white/80">{user.role}</p>
        </div>
      </div>
    </section>
  );
}
