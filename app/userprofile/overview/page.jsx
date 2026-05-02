"use client";

import { useAuth } from "@/context/AuthContext";
import { ShoppingCart, Package, User, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// ── Welcome Card ──────────────────────────────────────────────────────────────
function WelcomeCard({ displayUser }) {
  return (
    <div className="bg-[#dcd6d0] rounded-2xl p-5 flex items-center gap-4 mb-6">
      <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl font-bold uppercase">
        {displayUser?.name?.charAt(0) || "?"}
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Welcome Back, {displayUser?.name || "User"}!
        </h2>
        <p className="text-lg text-gray-600">
          Manage your account, view orders, and update your preferences.
        </p>
      </div>
    </div>
  );
}

// ── Action Card ───────────────────────────────────────────────────────────────
function ActionCard({ icon: Icon, title, desc, button }) {
  return (
    <div className="bg-[#e9bd97] rounded-2xl p-6 flex flex-col items-center text-center gap-3">
      <Icon size={28} className="text-gray-800" />
      <h3 className="text-xl font-bold uppercase text-gray-900">{title}</h3>
      <p className="text-md text-gray-700">{desc}</p>
      <button className="mt-2 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-md font-semibold uppercase px-5 py-2 rounded-lg">
        {button}
        <ArrowRight size={20} />
      </button>
    </div>
  );
}

// ── Empty Orders Card ─────────────────────────────────────────────────────────
function EmptyOrders() {
  return (
    <div className="bg-[#e9bd97] rounded-2xl p-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <ShoppingCart size={28} className="text-gray-800" />
        <p className="text-sm text-gray-800">
          You haven't placed any orders yet. Browse our products and find something you love!
        </p>
      </div>
      <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-md font-semibold uppercase px-5 py-2 rounded-lg">
        <Package size={20} />
        View Orders
      </button>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Overview() {
  const { user, login } = useAuth(); // ✅ hooks andar hain
  const [profile, setProfile] = useState(null); // ✅ andar

  useEffect(() => { // ✅ andar
    const fetchProfile = async () => {
      const token = localStorage.getItem("emoro_token");
      if (!token) return;
      try {
        const res = await fetch(`${API_BASE_URL}/user/profile`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data.status === true) {
          setProfile(data.user);
          login(data.user);
        }
      } catch {}
    };
    fetchProfile();
  }, []);

  const displayUser = profile || user; // ✅ andar

  return (
    <div className="min-h-screen bg-[#e5e0db] p-6">
      <div className="flex gap-6">
        <div className="flex-1 flex flex-col gap-6">

          {/* displayUser prop ke through pass karo */}
          <WelcomeCard displayUser={displayUser} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ActionCard
              icon={Package}
              title="View Orders"
              desc="Track your recent orders and order history"
              button="View Orders"
            />
            <ActionCard
              icon={User}
              title="Account Settings"
              desc="Edit your profile and account details"
              button="Edit Account"
            />
          </div>

          <EmptyOrders />
        </div>
      </div>
    </div>
  );
}