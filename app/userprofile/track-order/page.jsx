"use client";

import {
  Search,
  Download,
  Printer,
  CheckCircle,
  Package,
} from "lucide-react";

// ── Input Field ───────────────────────────────────────────────────────────────
function Input({ label, placeholder }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-[11px] font-bold uppercase text-gray-700">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="bg-[#e9e4df] rounded-md px-4 py-2.5 text-sm outline-none text-gray-800"
      />
    </div>
  );
}

// ── Progress Step ─────────────────────────────────────────────────────────────
function Step({ label, date, active }) {
  return (
    <div className="flex flex-col items-center text-center w-full">
      <div
        className={`w-8 h-8 flex items-center justify-center rounded-full ${
          active ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        {active ? (
          <CheckCircle size={16} className="text-white" />
        ) : (
          <Package size={16} className="text-white" />
        )}
      </div>

      <p className="text-[10px] font-bold uppercase mt-2 text-gray-800">
        {label}
      </p>
      <p className="text-[10px] text-gray-500">{date}</p>
    </div>
  );
}

// ── Timeline Item ─────────────────────────────────────────────────────────────
function TimelineItem({ title, desc, time, active }) {
  return (
    <div className="flex gap-3">
      {/* Icon + Line */}
      <div className="flex flex-col items-center">
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center ${
            active ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          {active ? (
            <CheckCircle size={14} className="text-white" />
          ) : (
            <Package size={14} className="text-white" />
          )}
        </div>
        <div className="w-[2px] flex-1 bg-gray-300 mt-1" />
      </div>

      {/* Content */}
      <div className="pb-6">
        <p className="text-[11px] font-bold uppercase text-gray-800">
          {title}
        </p>
        <p className="text-[11px] text-gray-600">{desc}</p>
        <p className="text-[10px] text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function TrackOrder() {
  return (
      <div className=" gap-6">
        
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl akira-regular text-gray-900 uppercase">
            Track Your Order
          </h1>
          <p className="text-md text-gray-600">
            Enter your order details to check the current status
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-[#dcd6d0] rounded-xl p-5 flex flex-col gap-4">
          <p className="text-[20px] font-bold akira-regular uppercase text-gray-800">
            Find your order
          </p>
          <p className="text-[11px] text-gray-600">
            Enter your order ID and email address to track your order
          </p>

          <div className="flex flex-col md:flex-row gap-3">
            <Input label="Order ID" placeholder="AG-2024-7890" />
            <Input label="Email Address" placeholder="john.doe@example.com" />
          </div>

          <button className="mt-2 flex items-center justify-center akira-regular gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase px-5 py-2.5 rounded-md">
            <Search size={20} />
            Track Order
          </button>
        </div>

        {/* Order Info */}
        <div className="bg-[#dcd6d0] rounded-xl p-5 flex justify-between items-center flex-wrap gap-3">
          <div>
            <p className="text-[15px] akira-regular font-bold uppercase text-gray-900">
              Order AJ - 2024 - 7890
              <span className="ml-2 bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                Shipped
              </span>
            </p>
            <p className="text-[11px] text-gray-600">
              Placed on April 15, 2026
            </p>
          </div>

          <div className="flex gap-2">
            <button className="flex items-center gap-1 bg-white px-3 py-2 rounded-md text-xs font-semibold">
              <Download size={14} /> Invoice
            </button>
            <button className="flex items-center gap-1 bg-white px-3 py-2 rounded-md text-xs font-semibold">
              <Printer size={14} /> Print
            </button>
          </div>
        </div>

        {/* Progress */} 
        <div className="bg-[#dcd6d0] rounded-xl p-5">
          <p className="text-[20px] akira-regular font-bold uppercase text-gray-800 mb-1">
            Delivery Progress
          </p>
          <p className="text-[11px] text-gray-600 mb-4">
            Estimated delivery 2026-04-18
          </p>

          {/* Bar */}
          <div className="w-full h-2 bg-gray-300 rounded-full mb-6">
            <div className="w-[75%] h-full bg-orange-500 rounded-full" />
          </div>

          {/* Steps */}
          <div className="flex justify-between">
            <Step label="Ordered" date="Apr 15" active />
            <Step label="Confirmed" date="Apr 15" active />
            <Step label="Shipped" date="Apr 16" active />
            <Step label="Delivered" date="Apr 18" />
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-[#dcd6d0] rounded-xl p-5">
          <p className="text-[20px] akira-regular font-bold uppercase text-gray-800 mb-4">
            Order Timeline
          </p>

          <TimelineItem
            title="Order Placed"
            desc="Your order has been received"
            time="2026-04-15 10:30 AM"
            active
          />

          <TimelineItem
            title="Order Confirmed"
            desc="We've confirmed your order"
            time="2026-04-15 11:30 AM"
            active
          />

          <TimelineItem
            title="Order Processed"
            desc="Your items are being prepared"
            time="2026-04-16 09:35 PM"
            active
          />

          <TimelineItem
            title="Shipped"
            desc="Your order is on the way"
            time="2026-04-17 09:35 PM"
            active
          />

          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center">
              <Package size={14} className="text-white" />
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase text-gray-800">
                Delivery
              </p>
              <p className="text-[11px] text-gray-600">
                Expected delivery
              </p>
              <p className="text-[10px] text-gray-500 mt-1">
                2026-04-18
              </p>
            </div>
          </div>
        </div>

      </div>
  
  );
}