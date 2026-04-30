"use client";

import { useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!agreed) {
      setError("Please agree to the terms and privacy policy.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/form-submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          // subject is NOT sent to API
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          const firstError = Object.values(data.errors)[0];
          setError(Array.isArray(firstError) ? firstError[0] : firstError);
        } else {
          setError(data.message || "Something went wrong. Please try again.");
        }
        return;
      }

      setSuccess("Your message has been sent successfully!");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setAgreed(false);
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#ede8e0] px-6 py-10 max-w-[1600px] mx-auto">
        {/* Heading */}
        <h1 className="text-6xl font-black akira-regular uppercase mb-7 leading-none">
          <span className="text-gray-900">GET IN </span>
          <span className="bg-[#ff4200] rounded-xl text-white px-2 py-0.5 inline-block">
            TOUCH
          </span>
        </h1>

        {/* Contact Info Row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div>
            <p className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-gray-800 mb-1">
              <span className="text-[#f07800]">✉</span> Email
            </p>
            <p className="text-xs text-gray-600">sales@loveemoro.com</p>
          </div>
        </div>

        {/* Error / Success Messages */}
        {error && (
          <div className="mb-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-5 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-sm">
            {success}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Your Name */}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
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
              required
              className="w-full bg-[#e5dfd6] rounded-lg px-4 py-3 text-lg text-gray-800 border border-transparent transition-colors"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone No"
              required
              className="w-full bg-[#e5dfd6] rounded-lg px-4 py-3 text-lg text-gray-800 border border-transparent transition-colors"
            />
          </div>

          {/* Subject (UI only — not sent to API) */}
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
            required
            className="w-full bg-[#e5dfd6] rounded-lg px-4 py-3 text-lg text-gray-800 border border-transparent transition-colors resize-none"
          />

          {/* Checkbox */}
          <label className="flex items-center gap-3 cursor-pointer mt-1">
            <div
              onClick={() => setAgreed((a) => !a)}
              className={`w-4 h-4 flex-shrink-0 border-2 rounded-sm flex items-center justify-center transition-colors ${
                agreed
                  ? "bg-[#f07800] border-[#f07800]"
                  : "border-gray-500 bg-transparent"
              }`}
            >
              {agreed && (
                <svg
                  className="w-2.5 h-2.5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
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
              disabled={loading}
              className="bg-[#ff4200] text-white text-[21px] font-black uppercase tracking-widest px-9 py-3 rounded-lg hover:bg-[#d96900] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}