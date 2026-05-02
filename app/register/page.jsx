"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail, User, Phone, Lock } from "lucide-react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country_code: "+91",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    if (!agreed) {
      setError("Please agree to the Terms and Privacy Policy.");
      return;
    }

    if (formData.password !== formData.password_confirmation) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          country_code: formData.country_code,
          phone: formData.phone,
          password: formData.password,
          password_confirmation: formData.password_confirmation,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Laravel validation errors usually come as data.message or data.errors
        if (data.errors) {
          const firstError = Object.values(data.errors)[0];
          setError(Array.isArray(firstError) ? firstError[0] : firstError);
        } else {
          setError(data.message || "Registration failed. Please try again.");
        }
        return;
      }

      setSuccess("Account registered successfully! You can now login.");
      setFormData({
        name: "",
        email: "",
        country_code: "+91",
        phone: "",
        password: "",
        password_confirmation: "",
      });
      setAgreed(false);
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex mt-4">
      {/* LEFT FORM */}
      <div className="w-1/2 bg-[#e9e1d8] flex items-center justify-center py-10">
        <div className="w-[700px]">
          {/* Heading */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#d8cec5] p-3 rounded-md">
                <User className="mr-2 w-14 h-14 text-gray-900" />
            </div>
            <div>
              <h2 className="font-bold text-4xl uppercase">
                Register an account
              </h2>
              <p className="text-md text-gray-600">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account.
              </p>
            </div>
          </div>

          {/* Error / Success Messages */}
          {error && (
            <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md text-sm">
              {success}
            </div>
          )}

          {/* Full Name */}
          <div className="mb-4">
            <label className="text-sm font-semibold">FULL NAME</label>
            <div className="flex items-center bg-[#d8cec5] rounded-md mt-2 px-3 py-4">
                       <User className="mr-2 w-5 h-5 text-gray-600" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="bg-transparent outline-none w-full text-md"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm font-semibold">EMAIL</label>
            <div className="flex items-center bg-[#d8cec5] rounded-md mt-2 px-3 py-4">
                <Mail className="mr-2 w-5 h-5 text-gray-600" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="bg-transparent outline-none w-full text-md"
              />
            </div>
          </div>

          {/* Phone with Country Code */}
          <div className="mb-4">
            <label className="text-sm font-semibold">PHONE</label>
            <div className="flex items-center bg-[#d8cec5] rounded-md mt-2 px-3 py-4 gap-2">
                     <Phone className="mr-2 w-5 h-5 text-gray-600" />

              <select
                name="country_code"
                value={formData.country_code}
                onChange={handleChange}
                className="bg-transparent outline-none text-md font-semibold cursor-pointer"
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+971">🇦🇪 +971</option>
                <option value="+92">🇵🇰 +92</option>
                <option value="+880">🇧🇩 +880</option>
              </select>
              <div className="w-px h-5 bg-gray-400 mx-1" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="bg-transparent outline-none w-full text-md"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="text-sm font-semibold">PASSWORD</label>
            <div className="flex items-center bg-[#d8cec5] rounded-md mt-2 px-3 py-4">
                        <Lock className="mr-2 w-5 h-5 text-gray-600" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="bg-transparent outline-none w-full text-md"
              />
              <span
                className="text-gray-500 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {/* Password Confirmation */}
          <div className="mb-4">
            <label className="text-sm font-semibold">PASSWORD CONFIRMATION</label>
            <div className="flex items-center bg-[#d8cec5] rounded-md mt-2 px-3 py-4">
                                   <Lock className="mr-2 w-5 h-5 text-gray-600" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                placeholder="Password confirmation"
                className="bg-transparent outline-none w-full text-md"
              />
              <span
                className="text-gray-500 cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2 mt-2 mb-6">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <p className="text-md font-semibold">
              I AGREE TO THE TERMS AND PRIVACY POLICY
            </p>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-[#ff4d00] text-white text-xl py-3.5 rounded-md font-semibold tracking-wide hover:bg-[#e64400] transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "REGISTERING..." : "REGISTER →"}
          </button>

          <p className="text-center text-md mt-6 font-semibold akira-regular">
            ALREADY HAVE AN ACCOUNT?{" "}
            <Link href="/login" className="underline cursor-pointer">
              LOGIN
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-1/2 relative ">
        <Image
          src="/loginbanner.png"
          alt="Register"
          width={800}
          height={400}
          className="object-cover h-[1100px]"
        />
      </div>
    </div>
  );
}