import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import logo from "../../public/logo2.png"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Artistly – Discover and Book Artists for Events",
  description: "Explore and book top singers, DJs, and performers across India for your next event. Artistly connects event organizers with talented artists.",
  keywords: ["Artistly", "book artists", "event performers", "hire singers", "hire DJs", "event planning", "artist booking platform"],
  authors: [{ name: "Team Artistly", url: "https://artistly-sage-nu.vercel.app" }],
  creator: "Team Artistly",
  metadataBase: new URL("https://artistly-sage-nu.vercel.app"),
  openGraph: {
    title: "Artistly – Book Top Artists for Your Event",
    description: "Connect with verified singers, DJs, and more. Artistly makes it easy to discover and book the right talent.",
    url: "https://artistly-sage-nu.vercel.app",
    siteName: "Artistly",
    locale: "en_IN",
    type: "website",
  }
};


//ADDED HEADER AND FOOTER IN THE LAYOUT TO WRAP THE WHOLE LOGIC
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
