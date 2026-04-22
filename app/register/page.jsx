import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="w-full min-h-screen flex">
      
      {/* LEFT FORM */}
      <div className="w-1/2 bg-[#e9e1d8] flex items-center justify-center py-10">
        
        <div className="w-[700px]">
          
          {/* Heading */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#d8cec5] p-3 rounded-md">
              <span className="text-xl">👤</span>
            </div>

            <div>
              <h2 className="font-bold text-4xl uppercase">
                Register an account
              </h2>
              <p className="text-md text-gray-600">
                Your personal data will be used to support your experience throughout this website, to manage access to your account.
              </p>
            </div>
          </div>

          {/* Input Field Component */}
          {[
            { label: "FULL NAME", placeholder: "Your full name", icon: "👤" },
            { label: "EMAIL", placeholder: "Your email", icon: "✉️" },
            { label: "PHONE", placeholder: "Phone number", icon: "📞" },
            { label: "PASSWORD", placeholder: "Password", icon: "🔒", type: "password" },
            { label: "PASSWORD CONFIRMATION", placeholder: "Password confirmations", icon: "🔒", type: "password" },
          ].map((field, i) => (
            <div key={i} className="mb-4">
              <label className="text-sm font-semibold">
                {field.label}
              </label>

              <div className="flex items-center bg-[#d8cec5] rounded-md mt-2 px-3 py-4">
                <span className="mr-2">{field.icon}</span>
                <input
                  type={field.type || "text"}
                  placeholder={field.placeholder}
                  className="bg-transparent outline-none w-full text-md"
                />
                {(field.type === "password") && (
                  <span className="text-gray-500 cursor-pointer">👁️</span>
                )}
              </div>
            </div>
          ))}

          {/* Checkbox */}
          <div className="flex items-center gap-2 mt-2 mb-6">
            <input type="checkbox" />
            <p className="text-md font-semibold">
              I AGREE TO THE TERMS AND PRIVACY POLICY
            </p>
          </div>

          {/* Button */}
          <button className="w-full bg-[#ff4d00] text-white py-3.5 rounded-md font-semibold tracking-wide hover:bg-[#e64400] transition">
            REGISTER →
          </button>

    <p className="text-center text-sm mt-6 font-semibold">
  ALREADY HAVE AN ACCOUNT?{" "}
  <Link href="/login" className="underline cursor-pointer">
    LOGIN
  </Link>
</p>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-1/2 relative">
        <Image
          src="/loginbanner.png" // 👈 apni image
          alt="Register"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}