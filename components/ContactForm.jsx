"use client";

import { useState } from "react";

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) return alert("Please agree to the terms and privacy policy.");
    console.log("Form submitted:", form);
  };

  return (
    <>


      <div
        className="min-h-screen bg-[#ede8e0] px-6 py-10 max-w-[1600px] mx-auto"
  
      >
        {/* Heading */}
        <h1
          className="text-6xl font-black akira-regular uppercase mb-7 leading-none"
       
        >
          <span className="text-gray-900">GET IN </span>
          <span className="bg-[#ff4200] rounded-xl text-white px-2 py-0.5 inline-block">TOUCH</span>
        </h1>

        {/* Contact Info Row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {/* Address */}
          <div>
            <p className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-gray-800 mb-1">
              <span className="text-[#f07800]">📍</span> Address
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              123 Pet Care Street,<br />
              Indirapuram, Ghaziabad,<br />
              UP – 201014
            </p>
          </div>

          {/* Phone */}
          <div>
            <p className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-gray-800 mb-1">
              <span className="text-[#f07800]">📞</span> Phone
            </p>
            <p className="text-xs text-gray-600">+91 98765 43210</p>
          </div>

          {/* Email */}
          <div>
            <p className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-gray-800 mb-1">
              <span className="text-[#f07800]">✉</span> Email
            </p>
            <p className="text-xs text-gray-600">support@emoro.com</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Your Name */}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full bg-[#e5dfd6] rounded-lg px-4 py-3 text-xl text-gray-900 border border-transparent transition-colors"
          />

          {/* Email + Phone */}
          <div className="grid grid-cols-2 gap-3">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-[#e5dfd6] rounded-lg px-4 py-3 text-lg text-gray-800 border border-transparent transition-colors"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone No"
              className="w-full bg-[#e5dfd6] rounded-lg px-4 py-3 text-lg text-gray-800 border border-transparent transition-colors"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full bg-[#e5dfd6] rounded-lg px-4 py-3 text-lg text-gray-800 border border-transparent transition-colors"
          />

          {/* Message */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full bg-[#e5dfd6] rounded-lg px-4 py-3 text-lg text-gray-800 border border-transparent transition-colors resize-none"
          />

          {/* Checkbox */}
          <label className="flex items-center gap-3 cursor-pointer mt-1">
            <div
              onClick={() => setAgreed((a) => !a)}
              className={`w-4 h-4 flex-shrink-0 border-2 rounded-sm flex items-center justify-center transition-colors ${
                agreed ? "bg-[#f07800] border-[#f07800]" : "border-gray-500 bg-transparent"
              }`}
            >
              {agreed && (
                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-[20px] font-black uppercase tracking-widest text-gray-700">
              I Agree To The Term And Privacy Policy
            </span>
          </label>

          {/* Submit */}
          <div className="mt-1">
            <button
              type="submit"
              className="bg-[#ff4200] text-white text-[21px] font-black uppercase tracking-widest px-9 py-3 rounded-lg hover:bg-[#d96900] transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}