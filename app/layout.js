import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FeedbackPopup from "@/components/FeedbackPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Venkatesh | Developer Portfolio Bangalore",
  description: "Browse projects, skills, and experience of Venkatesh, a Bangalore-based developer skilled in full-stack web development using React, Node.js, and more."
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        
        <FeedbackPopup/>
        
        {children}
      </body>
    </html>
  );
}
