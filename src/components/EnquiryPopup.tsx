"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryPopup: React.FC<Props> = ({ isOpen, onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  // Animation
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        popupRef.current,
        { y: 80, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  // ESC Close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // WhatsApp Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const service = (form.elements.namedItem("service") as HTMLSelectElement).value;
    const timeline = (form.elements.namedItem("timeline") as HTMLSelectElement).value;
    const budget = (form.elements.namedItem("budget") as HTMLSelectElement).value;

    const message = `Hello AdwikIndia,

New Enquiry:

👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}

💼 Service: ${service}
⏳ Timeline: ${timeline}
💰 Budget: ${budget}
`;

    const url = `https://wa.me/919174360955?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-100 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        ref={popupRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-[var(--card-bg)] rounded-2xl shadow-xl p-6 border border-[var(--border-color)]"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">CONTACT FOR ENQUIRY.</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="text-sm font-medium">Hi i am*</label>
            <input
              name="name"
              required
              placeholder="Enter your name"
              className="mt-1 w-full p-3 border rounded-lg bg-[var(--bg-main)]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">My Mobile Number is*</label>
            <input
              name="phone"
              required
              placeholder="Enter your mobile no."
              className="mt-1 w-full p-3 border rounded-lg bg-[var(--bg-main)]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">My Email ID is*</label>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email id"
              className="mt-1 w-full p-3 border rounded-lg bg-[var(--bg-main)]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">I am looking for</label>
            <select name="service" className="mt-1 w-full p-3 border rounded-lg">
              <option>--Please choose an option--</option>
              <option>Website Development</option>
              <option>Ecommerce Website</option>
              <option>Application Development</option>
              <option>SEO Services</option>
              <option>Digital Marketing</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Timeline</label>
            <select name="timeline" className="mt-1 w-full p-3 border rounded-lg">
              <option>--Please choose--</option>
              <option>Immediately</option>
              <option>1 Week</option>
              <option>1 Month</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Budget</label>
            <select name="budget" className="mt-1 w-full p-3 border rounded-lg">
              <option>--Please choose--</option>
              <option>₹20K - ₹50K</option>
              <option>₹50K - ₹1L</option>
              <option>₹1L+</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[var(--teal)] text-white rounded-xl font-bold"
          >
            Submit Enquiry
          </button>

        </form>
      </div>
    </div>
  );
};

export default EnquiryPopup;