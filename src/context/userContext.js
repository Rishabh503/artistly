"use client"
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Dummy user data
  const [user, setUser] = useState({
    name: "Rishabh Tripathi",
    email: "rishabhtripathi2022@gmail.com",
    role: "Frontend Developer",
    loggedIn: true,
    image:"https://res.cloudinary.com/dhe9p6bo0/image/upload/v1750758016/google_image_dr0frw.jpg"
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// passing the data by making a custom hook
export const useUser = () => useContext(UserContext);
