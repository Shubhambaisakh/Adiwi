"use client";

import { useState, useEffect } from "react";

export default function CookieBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[var(--navy)] text-white px-6 py-4 flex flex-col md:flex-row items-center justify-between z-50">
      <p className="text-sm">
        We use cookies to enhance your experience. By continuing, you agree.
      </p>

      <button
        onClick={accept}
        className="mt-3 md:mt-0 px-6 py-2 bg-[var(--teal)] rounded-lg font-bold"
      >
        Accept Cookies
      </button>
    </div>
  );
}