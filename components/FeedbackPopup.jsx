"use client";
import { useEffect, useState } from "react";

export default function TimedPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem("popup_shown");

    if (!popupShown) {
      console.log("Popup will be shown after 20s...");
      
      const timer = setTimeout(() => {
        setShowPopup(true); // ✅ Show the popup after 20 seconds
        console.log("Popup is now visible");
      }, 20000); // 20 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("popup_shown", "true"); // Save to prevent future popups
    setShowPopup(false); // Hide the popup
  };

  return (
    showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center bg-gradient-to-r from-[#434343] to-[#000000]">
          <h2 className="text-2xl font-bold text-white">⏳ 20 Seconds!</h2>
          <p className="text-white mt-2 text-lg">You've spent 20 seconds here! Hope you like it.</p>
          
          <button
            onClick={handleClose}
            className="mt-4 px-4 py-2 bg-[#2193b0] hover:bg-[#6dd5ed]/90 text-white rounded-lg shadow-md "
          >
            Okay
          </button>
        </div>
      </div>
    )
  );
}
