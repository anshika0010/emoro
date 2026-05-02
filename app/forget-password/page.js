import Image from "next/image";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      {/* LEFT IMAGE */}
      <div className="w-full md:w-1/2 relative h-56 sm:h-72 md:h-screen shrink-0">
        <Image
          src="/login.jpg"
          alt="Dog"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* RIGHT FORM */}
      <div className="w-full md:w-1/2 bg-[#e9e1d8] flex items-center justify-center px-5 sm:px-10 py-10 md:py-16">
        <div className="w-full max-w-lg">
          {/* Heading */}
          <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="bg-[#d8cec5] p-2 sm:p-3 rounded-md shrink-0">
              <span className="text-2xl sm:text-3xl">👤</span>
            </div>

            <div>
              <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
                FORGOT PASSWORD
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                Lost your password? Please enter your username or email address.
                You will receive a link to create a new password via email.
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="mb-4 sm:mb-5">
            <label className="text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Email
            </label>

            <div className="flex items-center bg-[#d8cec5] rounded-md mt-2 px-3 py-2.5 sm:py-3">
              <span className="mr-2 text-sm">✉️</span>
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent outline-none w-full text-sm placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Button */}
          <button className="w-full bg-[#ff4d00] text-white py-2.5 sm:py-3 rounded-md font-semibold tracking-wide mt-3 sm:mt-4 hover:bg-[#e64400] active:scale-[0.98] transition-all text-xs sm:text-sm">
            SEND PASSWORD RESET LINK
          </button>

          <Link href="/login">
            <p className="text-center text-xs sm:text-sm mt-5 sm:mt-6 font-semibold cursor-pointer hover:text-[#ff4d00] transition-colors tracking-wide">
              BACK TO LOGIN PAGE
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}