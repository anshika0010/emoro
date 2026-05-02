"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const navItems = [
  { label: "Overview", href: "/userprofile/overview" },
  { label: "Order", href: "/userprofile/track-order" },
  { label: "Account Setting", href: "/userprofile/account-setting" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("emoro_token");
      await fetch(`${API_BASE_URL}/user/logout`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch {
      // API fail ho bhi jaye toh bhi logout karo
    } finally {
      logout();           // context + localStorage clear
      router.push("/login");
    }
  };

  return (
    <aside className="w-74 mt-6 hidden md:block">
      <div className="sticky top-24 p-4 rounded-2xl shadow-sm flex flex-col gap-2">
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

        {/* Logout Button — alag se, Link nahi button hai */}
        <button
          onClick={handleLogout}
          className="px-4 py-3.5 rounded-lg text-md akira-regular font-semibold uppercase text-left text-red-500 hover:bg-red-50 transition-colors"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}