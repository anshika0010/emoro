"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Overview", href: "/userprofile/overview" },
  {label:"Order",href:"/userprofile/track-order"},
  { label: "Account Setting", href: "/userprofile/account-setting" },
    {label:"Logout",href:"/userprofile/#"},
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-74 mt-6 hidden md:block">
      <div className="sticky top-24  p-4 rounded-2xl shadow-sm flex flex-col gap-2">
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`px-4 py-3.5 rounded-lg text-md akira-regular font-semibold uppercase ${
                active
                  ? "bg-orange-500 text-white"
                  : "text-gray-900 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}