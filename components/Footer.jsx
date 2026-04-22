import { Truck, ShoppingCart, BadgePercent, RotateCcw } from "lucide-react";

export default function Footer() {

  const features = [
    {
      icon: <Truck size={32} />,
      title: "BEST PRICE & OFFERS",
      desc: "Upto 50% Offer more",
    },
    {
      icon: <ShoppingCart size={32} />,
      title: "FREE DELIVERY",
      desc: "24/7 amazing offers",
    },
    {
      icon: <BadgePercent size={32} />,
      title: "GREAT DAILY DEAL",
      desc: "When you sign up",
    },
    {
      icon: <RotateCcw size={32} />,
      title: "EASY RETURN",
      desc: "within 30 days",
    },
  ];
  return (
    <>
<div className="w-full bg-[#f3ede7] py-8 flex justify-center px-4 md:px-6">
  <div className="w-full max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

    {features.map((item, i) => (
      <div
        key={i}
        className="bg-[#e6ddd5] rounded-xl px-6 md:px-8 py-5 md:py-6 flex items-center gap-4"
      >
        {/* Icon */}
        <div className="text-black shrink-0">{item.icon}</div>

        {/* Text */}
        <div>
          <h4 className="text-md font-bold text-black">
            {item.title}
          </h4>
          <p className="text-sm text-gray-600">
            {item.desc}
          </p>
        </div>
      </div>
    ))}

  </div>
</div>
       <div className="w-full bg-black overflow-hidden py-4">
      
      <div className="flex marquee whitespace-nowrap">
        
        {/* First */}
        {Array(10).fill("EMORO").map((text, i) => (
          <span key={`a-${i}`} className="mx-12 text-orange-500 font-bold text-3xl akira-regular">
            {text}
          </span>
        ))}

        {/* Duplicate (VERY IMPORTANT) */}
        {Array(10).fill("EMORO").map((text, i) => (
          <span key={`b-${i}`} className="mx-12 text-orange-500 font-bold text-3xl akira-regular">
            {text}
          </span>
        ))}

      </div>

    </div>
 
    <div className="bg-[#d8cfc6] px-10 py-10 rounded-xl mt-6">
      
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-2xl font-extrabold text-orange-600 uppercase akira-regular">
            Join Our Community
          </h2>
          <p className="text-gray-700 mt-2 text-sm">
            Stay ahead of the curve. Join our pet parenting community to get exclusive
            access to tips, hacks & special community-only offers. Enter your email below
          </p>

          {/* Input + Button */}
          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Enter Your email here"
              className="w-full px-4 py-3 rounded-l-lg outline-none bg-[#e5ded6]"
            />
            <button className="bg-black text-white px-6 rounded-r-lg font-semibold">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center">
          <img
            src="/logo.png" // replace with your logo
            alt="logo"
            className="h-16 object-contain"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400 my-8"></div>

      {/* Links Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        
        {/* Explore */}
        <div>
          <h4 className="font-bold uppercase mb-3 text-gray-800">Explore</h4>
          <ul className="space-y-2 text-gray-700 ">
            <li>Home</li>
            <li>Shop by Products</li>
            <li>Our Services</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-bold uppercase mb-3 text-gray-800">Useful Links</h4>
          <ul className="space-y-2 text-gray-700">
            <li>About</li>
            <li>Contact us</li>
            <li>FAQ</li>
            <li>Terms & services</li>
            <li>Shipping</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-bold uppercase mb-3 text-gray-800">Social Media</h4>
          <ul className="space-y-2 text-gray-700">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkdin</li>
            <li>Youtube</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold uppercase mb-3 text-gray-800">Social Media</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              📧 info@emoro.com
            </li>
            <li className="flex items-center gap-2">
              📞 9900-9900-99
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-400 my-6"></div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <img src="/emoro-logo.png" alt="logo" className="h-12" />
        </div>

        <div className="flex gap-10 mt-3 md:mt-0">
          <span>Return</span>
          <span>Privacy policy</span>
          <span>Support</span>
        </div>
      </div>
    </div>
       </>
  );
}