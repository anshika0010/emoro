"use client";

import Image from "next/image";
import { useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          const firstError = Object.values(data.errors)[0];
          setError(Array.isArray(firstError) ? firstError[0] : firstError);
        } else {
          setError(data.message || "Login failed. Please try again.");
        }
        return;
      }

      // Save token
      if (rememberMe) {
        localStorage.setItem("auth_token", data.token ?? data.data?.token);
      } else {
        sessionStorage.setItem("auth_token", data.token ?? data.data?.token);
      }

      // Redirect after successful login
      window.location.href = "/userprofile/overview";
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0ebe3] px-4">
      <div className="flex w-full max-w-[1700px] mx-auto rounded-2xl overflow-hidden shadow-xl bg-[#f0ebe3]">
        {/* Left Image Panel */}
        <div className="hidden md:block w-[620px] flex-shrink-0">
          <Image
            src="/loginbanner.png"
            alt="Person with dog"
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Right Form Panel */}
        <div className="flex-1 flex flex-col justify-center px-10 py-12 bg-[#f0ebe3]">
          {/* Header */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#e8e0d8] flex items-center justify-center flex-shrink-0 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-extrabold uppercase text-gray-800">
                Login to Your Account
              </h1>
              <p className="text-xl text-gray-500 mt-1 leading-relaxed max-w-xl">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account.
              </p>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-[20px] font-black tracking-[0.18em] uppercase text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-11 pr-4 py-3 bg-[#e8e0d8] rounded-xl text-sm text-gray-600 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[20px] font-black tracking-[0.18em] uppercase text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-11 pr-12 py-3 bg-[#e8e0d8] rounded-xl text-sm text-gray-600 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all cursor-pointer ${
                    rememberMe
                      ? "bg-orange-500 border-orange-500"
                      : "border-gray-400 bg-transparent"
                  }`}
                >
                  {rememberMe && (
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-[20px] font-black tracking-[0.15em] uppercase text-gray-700">
                  Remember Me
                </span>
              </label>

              <a
                href="/forgetpassword"
                className="text-[20px] font-black tracking-[0.15em] uppercase text-gray-700 underline underline-offset-2 hover:text-orange-500 transition-colors"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-black text-xl tracking-[0.2em] uppercase rounded-xl transition-all duration-200 active:scale-[0.98] shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
            >
              {loading ? "Logging in..." : "Login →"}
            </button>
          </form>

          {/* Register Link */}
          <p className="mt-6 text-center text-[10px] font-bold tracking-[0.12em] uppercase text-gray-500">
            Don&apos;t have account?{" "}
            <a
              href="/register"
              className="font-black text-gray-700 underline underline-offset-2 hover:text-orange-500 transition-colors"
            >
              Register Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}