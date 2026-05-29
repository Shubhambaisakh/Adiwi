import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const ApplyForm = ({ jobTitle }) => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // EmailJS Configuration
    const SERVICE_ID = "service_ql8vubq";
    const TEMPLATE_ID = "template_183n264";
    const PUBLIC_KEY = "MTiI3Nhm8qhXr6Ofo";

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Email Error:", err);
      setError("Failed to send application. Please check your connection or try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-16 px-6 bg-[var(--bg-secondary)] rounded-[3rem] border border-[var(--brand-orange)]/20 animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <CheckCircle size={48} />
        </div>
        <h3 className="text-3xl font-black mb-3 uppercase tracking-tighter">Application Sent!</h3>
        <p className="text-[var(--text-secondary)] font-medium mb-10 max-w-sm mx-auto">
          Your journey toward the engine has begun. We've received your application for <strong>{jobTitle}</strong>. 
          Our HR team will reach out shortly.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)} 
          className="text-[var(--brand-orange)] font-black uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-8"
        >
          Submit another application
        </button>
      </div>
    );
  }

  const inputClass = "w-full p-5 bg-slate-100 dark:bg-[var(--bg-main)] rounded-2xl border border-transparent focus:border-[var(--brand-orange)] focus:ring-4 focus:ring-[var(--brand-orange)]/10 transition-all outline-none text-sm font-medium placeholder:opacity-40";
  const labelClass = "text-[10px] font-black uppercase tracking-[0.3em] text-[var(--brand-coral)] ml-2";

  return (
    <div className="bg-white dark:bg-[var(--bg-secondary)] p-8 lg:p-12 rounded-[3.5rem] border border-slate-200 dark:border-[var(--border-light)] shadow-[0_20px_60px_rgba(0,0,0,0.1)] backdrop-blur-xl">
      <div className="mb-10">
        <h3 className="text-3xl font-black mb-2 uppercase tracking-tighter leading-none">Apply for Position</h3>
        <p className="text-xs font-bold uppercase tracking-widest opacity-50">
          Target Role: <span className="text-[var(--brand-orange)]">{jobTitle}</span>
        </p>
      </div>

      {error && (
        <div className="mb-8 p-5 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
          <AlertCircle size={18} /> {error}
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
        <input type="hidden" name="job_title" value={jobTitle} />

        {/* Row 1: Basic Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className={labelClass}>Full Name *</label>
            <input type="text" name="user_name" required placeholder="Adwik Candidate" className={inputClass} />
          </div>
          <div className="space-y-3">
            <label className={labelClass}>Email Address *</label>
            <input type="email" name="user_email" required placeholder="talent@engine.com" className={inputClass} />
          </div>
        </div>

        {/* Row 2: Contact & Location */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className={labelClass}>Mobile Number *</label>
            <input type="tel" name="user_mobile" required pattern="[0-9]{10}" placeholder="9876543210" className={inputClass} />
          </div>
          <div className="space-y-3">
            <label className={labelClass}>Current Location *</label>
            <input type="text" name="current_location" required placeholder="e.g. Bhopal, MP" className={inputClass} />
          </div>
        </div>

        {/* Row 3: Experience & Notice */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className={labelClass}>Total Experience *</label>
            <select name="experience" required className={`${inputClass} cursor-pointer`}>
              <option value="">Select Level</option>
              <option value="Fresher">Fresher</option>
              <option value="1-2 Years">1-2 Years</option>
              <option value="3-5 Years">3-5 Years</option>
              <option value="5+ Years">5+ Years</option>
            </select>
          </div>
          <div className="space-y-3">
            <label className={labelClass}>Notice Period *</label>
            <select name="notice_period" required className={`${inputClass} cursor-pointer`}>
              <option value="">Availability</option>
              <option value="Immediate">Immediate</option>
              <option value="15 Days">15 Days</option>
              <option value="30 Days">30 Days</option>
              <option value="90 Days">90 Days</option>
            </select>
          </div>
        </div>

        {/* Row 4: Financials */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className={labelClass}>Current CTC (LPA) *</label>
            <input type="text" name="current_ctc" required placeholder="e.g. 4.5" className={inputClass} />
          </div>
          <div className="space-y-3">
            <label className={labelClass}>Expected CTC (LPA) *</label>
            <input type="text" name="expected_ctc" required placeholder="e.g. 6.0" className={inputClass} />
          </div>
        </div>

        {/* Portfolio / Resume Link */}
        <div className="space-y-3">
          <label className={labelClass}>Link to Portfolio / Resume (Drive/Cloud) *</label>
          <input type="url" name="resume_link" required placeholder="https://drive.google.com/your-cv" className={inputClass} />
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-start gap-4 px-2">
          <input type="checkbox" required className="mt-1 w-4 h-4 accent-[var(--brand-orange)] cursor-pointer" id="terms" />
          <label htmlFor="terms" className="text-[10px] font-bold uppercase tracking-wider opacity-50 leading-relaxed cursor-pointer">
            I verify that the provided data is authentic and consent to AdwikIndia processing this for professional recruitment.
          </label>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full py-5 bg-[var(--text-main)] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-[var(--brand-orange)] transition-all disabled:opacity-50 group shadow-2xl active:scale-95"
        >
          {isSubmitting ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          ) : (
            <>Transmit Application <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
          )}
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;