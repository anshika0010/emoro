"use client";

import { useState } from "react";
import {
  
  Eye,
  EyeOff,
  Trash2,
} from "lucide-react";




// ── Field ─────────────────────────────────────────────────────────────────────
function Field({ label, type = "text", value, onChange, rightIcon }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[20px] font-semibold tracking-wide uppercase text-gray-600">
        {label}
      </label>

      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="w-full bg-[#ede5df] rounded-lg px-4 py-2.5 text-sm text-gray-900 outline-none focus:bg-[#e4dbd4] transition-colors pr-10"
        />

        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
            {rightIcon}
          </span>
        )}
      </div>
    </div>
  );
}

// ── Card ──────────────────────────────────────────────────────────────────────
function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-[#fdf7f3] rounded-2xl p-7 shadow-sm border border-[#eee3dc] ${className}`}
    >
      {children}
    </div>
  );
}

// ── Card Header ───────────────────────────────────────────────────────────────
function CardHeader({ title, description, iconBg = "bg-[#e8ddd7]" }) {
  return (
    <div className="flex items-start gap-3 mb-6">
      <div className={`w-9 h-9 rounded-full ${iconBg}`} />

      <div>
        <p className="text-[12px] font-bold akira-regular tracking-wide uppercase text-gray-900 mb-0.5">
          {title}
        </p>
        <p className="text-[12px] text-gray-500">{description}</p>
      </div>
    </div>
  );
}

// ── Button ────────────────────────────────────────────────────────────────────
function OrangeButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-md font-semibold tracking-wider uppercase px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md"
    >
      {children}
    </button>
  );
}

// ── Profile Card ──────────────────────────────────────────────────────────────
function ProfileCard() {
  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    gmail: "",
    phone: "",
  });

  const handle = (key) => (e) =>
    setForm({ ...form, [key]: e.target.value });

  return (
    <Card>
      <CardHeader
        title="Profile Information"
        description="Update your account profile information and email address."
      />

      <div className="flex flex-col gap-4">
        <Field label="Full Name" value={form.fullName} onChange={handle("fullName")} />
        <Field label="Date of Birth" value={form.dob} onChange={handle("dob")} />
        <Field label="Email" type="email" value={form.gmail} onChange={handle("gmail")} />
        <Field label="Phone" type="tel" value={form.phone} onChange={handle("phone")} />
      </div>

      <OrangeButton>Update</OrangeButton>
    </Card>
  );
}

// ── Password Card ─────────────────────────────────────────────────────────────
function PasswordCard() {
  const [form, setForm] = useState({
    current: "",
    password: "",
    confirm: "",
  });

  const [show, setShow] = useState({
    current: false,
    password: false,
    confirm: false,
  });

  const handle = (key) => (e) =>
    setForm({ ...form, [key]: e.target.value });

  const toggle = (key) => () =>
    setShow({ ...show, [key]: !show[key] });

  const eyeIcon = (key) =>
    show[key] ? (
      <EyeOff size={15} onClick={toggle(key)} />
    ) : (
      <Eye size={15} onClick={toggle(key)} />
    );

  return (
    <Card>
      <CardHeader
        title="Change Password"
        description="Ensure your account is using a secure password."
      />

      <div className="flex flex-col gap-4">
        <Field
          label="Current Password"
          type={show.current ? "text" : "password"}
          value={form.current}
          onChange={handle("current")}
          rightIcon={eyeIcon("current")}
        />

        <Field
          label="New Password"
          type={show.password ? "text" : "password"}
          value={form.password}
          onChange={handle("password")}
          rightIcon={eyeIcon("password")}
        />

        <Field
          label="Confirm Password"
          type={show.confirm ? "text" : "password"}
          value={form.confirm}
          onChange={handle("confirm")}
          rightIcon={eyeIcon("confirm")}
        />
      </div>

      <OrangeButton>Change Password</OrangeButton>
    </Card>
  );
}

// ── Delete Card ───────────────────────────────────────────────────────────────
function DeleteCard() {
  return (
    <div className="bg-[#fdecea] border border-[#f5c6c6] rounded-2xl p-7">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
          <Trash2 size={14} color="white" />
        </div>

        <div>
          <p className="text-[19px] font-bold uppercase text-red-700">
            Delete Account
          </p>
          <p className="text-[19px] text-red-500">
            Permanently delete your account and data.
          </p>
        </div>
      </div>

      <div className="bg-[#f8d7da] rounded-xl p-4 mb-5">
        <p className="text-[19px] font-bold uppercase text-red-600 mb-1">
          Warning
        </p>
        <p className="text-[19px] text-red-600">
          This action is irreversible. Please be sure before proceeding.
        </p>
      </div>

      <button className="flex items-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-50 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase">
        <Trash2 size={13} />
        Delete Your Account
      </button>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function UserProfile() {
  return (

   
    

    
          <div className=" gap-6">
            <ProfileCard />
            <PasswordCard />
            <DeleteCard />
          </div>
  
   


  );
}
