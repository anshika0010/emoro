import Image from "next/image";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="w-full h-screen flex">
      
      {/* LEFT IMAGE */}
      <div className="w-1/2 relative">
        <Image
          src="/login.jpg" // 👈 apni image
          alt="Dog"
          fill
          className="object-cover"
        />

        {/* Question mark */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-white text-[60px] font-bold">
          ?
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="w-1/2 bg-[#e9e1d8] flex items-center justify-center">
        
        <div className="w-[700px]">
          
          {/* Heading */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#d8cec5] p-3 rounded-md">
              <span className="text-4xl akira-regular">👤</span>
            </div>

            <div>
              <h2 className="font-bold text-4xl">FORGOT PASSWORD</h2>
              <p className="text-sm text-gray-600">
                Lost your password? Please enter your username or email address.
                You will receive a link to create a new password via email.
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-md akira-regular font-semibold">EMAIL</label>

            <div className="flex items-center bg-[#d8cec5] rounded-md mt-2 px-3 py-3">
              <span className="mr-2">✉️</span>
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* Button */}
          <button className="w-full bg-[#ff4d00] text-white py-3 rounded-md font-semibold tracking-wide mt-4 hover:bg-[#e64400] transition">
            SEND PASSWORD RESET LINK
          </button>

          <Link href="/login">
  <p className="text-center text-sm mt-6 font-semibold cursor-pointer hover:text-[#ff4d00]">
    BACK TO LOGIN PAGE
  </p>
</Link>

        </div>

      </div>
    </div>
  );
}