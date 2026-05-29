"use client";

import { useState, useEffect } from "react";

export default function CookiePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setShow(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl max-w-md text-center shadow-xl">
        <h2 className="text-xl font-bold mb-4">We use cookies 🍪</h2>
        <p className="text-sm mb-6">
          We use cookies to improve your experience and analyze traffic.
        </p>
        <button
          onClick={acceptCookies}
          className="px-6 py-3 bg-[var(--teal)] text-white rounded-lg font-bold"
        >
          Accept
        </button>
      </div>
    </div>
  );
}