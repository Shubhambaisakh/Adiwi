'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  phoneLabel: string;
  phone: string;
  business: string;
  lookingFor: string;
  timeline: string;
  moreInfo: string;
}

const ContactSection: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneLabel: 'Phone',
    phone: '',
    business: '',
    lookingFor: 'Website',
    timeline: '3 weeks',
    moreInfo: '',
  });

  const [isSent, setIsSent] = useState(false);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // ================= GSAP ANIMATION =================

  useEffect(() => {

    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -80 },
        { opacity: 1, y: 0, duration: 1.4, ease: 'power4.out' }
      );
    }

    if (gridRef.current) {
      const boxes = gridRef.current.querySelectorAll('.box');

      gsap.fromTo(
        boxes,
        { opacity: 0, scale: 0.6, y: 60 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'back.out(1.7)',
        }
      );
    }

  }, []);

  // ================= FORM CHANGE =================

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  // ================= FORM SUBMIT =================

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.9,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
      });
    }

    const templateParams = {
      name: formData.name,
      phoneLabel: formData.phoneLabel,
      phone: formData.phone,
      business: formData.business,
      lookingFor: formData.lookingFor,
      timeline: formData.timeline,
      moreInfo: formData.moreInfo,
    };

    emailjs
      .send(
        'service_ql8vubq',
        'template_mw7i74m',
        templateParams,
        'MTiI3Nhm8qhXr6Ofo'
      )
      .then(() => {

        setIsSent(true);

        setFormData({
          name: '',
          phoneLabel: 'Phone',
          phone: '',
          business: '',
          lookingFor: 'Website',
          timeline: '3 weeks',
          moreInfo: '',
        });

        setTimeout(() => {
          setIsSent(false);
        }, 4000);

      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
      });

  };

  return (

    <div className="min-h-screen flex items-center justify-center px-6 py-20">

      <div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-5 gap-16">

        {/* LEFT SIDE */}

        <div className="col-span-2 flex flex-col items-center text-center">

          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            LET’S GET <br />
            <span className="text-[var(--teal)] italic font-serif">
              IN TOUCH
            </span>
          </h1>

          <div
            ref={gridRef}
            className="mt-10 flex flex-col gap-0 "
          >

            <div className="flex gap-0 justify-end">

              <a href="mailto:contact@adwikindia.com">
                <div className="box w-28 h-28  border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center text-6xl font-bold hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition-all duration-300 cursor-pointer">
                  <img src="https://cdn.worldvectorlogo.com/logos/gmail-icon-2020.svg" alt="Email" className="w-10 h-10" />
                </div>
              </a>

              <a href="tel:+919876543210">
                <div className="box w-28 h-28  border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center text-6xl font-bold hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition-all duration-300 cursor-pointer">
                  <img src="https://cdn.worldvectorlogo.com/logos/phone-1.svg" alt="Phone" className="w-9 h-9" />
                </div>
              </a>

            </div>

            <div className="flex gap-0">

              <a href="https://wa.me/919876543210">
                <div className="box w-28 h-28  border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center text-6xl font-bold hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition-all duration-300 cursor-pointer">
                  <img src="https://cdn.worldvectorlogo.com/logos/whatsapp-business-bg.svg" alt="WhatsApp" className="w-10 h-10" />
                </div>
              </a>

              <a href="https://instagram.com/adwikindia">
                <div className="box w-28 h-28  border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center text-6xl font-bold hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition-all duration-300 cursor-pointer">
                  <img src="https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg" alt="Instagram" className="w-10 h-10" />
                </div>
              </a>

              <a href="https://linkedin.com">
                <div className="box w-28 h-28  border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center text-6xl font-bold hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition-all duration-300 cursor-pointer">
                  <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="LinkedIn" className="w-10 h-10" />
                </div>
              </a>

            </div>

            <div className="flex gap-0">

              <a href="https://facebook.com">
                <div className="box w-28 h-28  border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center text-6xl font-bold hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition-all duration-300 cursor-pointer">
                  <img src="https://cdn.worldvectorlogo.com/logos/facebook-3-2.svg" alt="Facebook" className="w-10 h-10" />
                </div>
              </a>

              <a href="#">
                <div className="box w-28 h-28  border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center text-6xl font-bold hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition-all duration-300 cursor-pointer">
                  <img src="https://cdn.worldvectorlogo.com/logos/behance-1.svg" alt="Behance" className="w-10 h-10" />
                </div>
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}

        <div className="col-span-3 text-lg leading-relaxed">

          <form onSubmit={handleSubmit} className="space-y-8"> 
            <p>Hi AdwikIndia team,</p> 
            <p> I,{' '} 
              <input type="text"  required name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="bg-transparent border-b border-[var(--border-color)] focus:border-[var(--cyan)] px-3 py-1 outline-none text-[var(--text-main)] w-52 transition-all" />
              {' '} want help kicking off a project. You can reach me via{' '} 
              <input type="text"  required name="phoneLabel" value={formData.phoneLabel} onChange={handleChange} placeholder="Phone" className="bg-transparent border-b border-[var(--border-color)] focus:border-[var(--cyan)] px-3 py-1 outline-none text-[var(--text-main)] w-28 transition-all" />
              {' '} at{' '} 
              <input type="tel"  required name="phone" value={formData.phone} onChange={handleChange} placeholder="9876543210" className="bg-transparent border-b border-[var(--border-color)] focus:border-[var(--cyan)] px-3 py-1 outline-none text-[var(--text-main)] w-44 transition-all" /> . 
              </p> 
              <p> My business or project is called{' '} 
              <input type="text"  required name="business" value={formData.business} onChange={handleChange} placeholder="Business/project name" className="bg-transparent border-b border-[var(--border-color)] focus:border-[var(--cyan)] px-3 py-1 outline-none text-[var(--text-main)] w-64 transition-all" /> .
               I’m looking for{' '} 
               <input type="text"  required name="lookingFor" value={formData.lookingFor} onChange={handleChange} placeholder="Website" className="bg-transparent border-b border-[var(--border-color)] focus:border-[var(--cyan)] px-3 py-1 outline-none text-[var(--text-main)] w-40 transition-all" />{' '} and I’m aiming to launch by{' '} 
               <input type="text"  required name="timeline" value={formData.timeline} onChange={handleChange} placeholder="3 weeks" className="bg-transparent border-b border-[var(--border-color)] focus:border-[var(--cyan)] px-3 py-1 outline-none text-[var(--text-main)] w-32 transition-all" /> . </p> 
               <p> And here&apos;s more about what I have in mind{' '} 
                <input type="text"  required name="moreInfo" value={formData.moreInfo} onChange={handleChange} placeholder="Anything else" className="bg-transparent border-b border-[var(--border-color)] focus:border-[var(--cyan)] px-3 py-1 outline-none text-[var(--text-main)] w-[60%] min-w-[280px] transition-all" /> . </p> 
                <p>Cheers,</p> 
                <button ref={buttonRef} type="submit" className="px-10 py-5 bg-[var(--teal)] text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all flex items-center gap-4 group" > SEND MESSAGE <span className="w-3 h-3 bg-white rounded-full inline-block" /> </button> {isSent && ( <div className="text-[var(--green)] text-lg font-medium animate-pulse pt-4"> 
                  ✅ Message sent successfully! AdwikIndia team will reply soon. 
            </div> 
          )} 
          </form>

        </div>

      </div>

    </div>

  );

};

export default ContactSection;