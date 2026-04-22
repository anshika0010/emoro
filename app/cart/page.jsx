import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  return (
    <div className="w-full bg-[#f3ede7] min-h-screen px-10 py-10">
      
      {/* Heading */}
      <h2 className="text-2xl font-extrabold mb-1">YOUR CART</h2>
      <p className="text-sm text-gray-600 mb-6">
        There are 1 product in your cart
      </p>

      <div className="flex gap-6">
        
        {/* LEFT SIDE */}
        <div className="w-2/3 space-y-6">
          
          {/* Table */}
          <div className="bg-[#e6ddd5] rounded-lg overflow-hidden">
            
            {/* Header */}
            <div className="grid grid-cols-6 text-xs font-semibold text-gray-700 px-6 py-3 border-b">
              <span className="col-span-2">PRODUCT</span>
              <span>LIMIT PRICE</span>
              <span>QUALITY</span>
              <span>SUBTOTAL</span>
              <span>REMOVE</span>
            </div>

            {/* Row */}
            <div className="grid grid-cols-6 items-center px-6 py-4 text-sm">
              
              {/* Product */}
              <div className="col-span-2 flex items-center gap-4">
                <Image
                  src="/product.png"
                  alt="product"
                  width={60}
                  height={60}
                />
                <div>
                  <p className="font-semibold text-xs">
                    EMORO HYDRATE ADVANCED HYDRATION SYSTEM FOR DOGS
                  </p>
                </div>
              </div>

              {/* Price */}
              <div>
                <p className="font-semibold">₹699.00</p>
                <p className="text-xs text-gray-500 line-through">
                  ₹1099.00
                </p>
              </div>

              {/* Quantity */}
              <div>
                <input
                  type="number"
                  defaultValue={1}
                  className="w-14 text-center border rounded-md"
                />
              </div>

              {/* Subtotal */}
              <div className="font-semibold">₹699.00</div>

              {/* Remove */}
              <div className="cursor-pointer text-xl">🗑️</div>
            </div>
          </div>

          {/* Continue Shopping */}
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-[#ff4d00] text-white px-6 py-3 rounded-md font-semibold"
          >
            ← CONTINUE SHOPPING
          </Link>

          {/* Coupon */}
          <div>
            <h3 className="font-bold text-lg mt-6">APPLY COUPON</h3>
            <p className="text-sm text-gray-600 mb-4">
              using a promo code?
            </p>

            <div className="flex">
              <input
                type="text"
                placeholder="Enter your coupon"
                className="flex-1 px-4 py-3 bg-[#e6ddd5] rounded-l-md outline-none"
              />
              <button className="bg-[#ff4d00] text-white px-6 py-3 rounded-r-md font-semibold">
                APPLY
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE SUMMARY */}
        <div className="w-1/3">
          <div className="bg-[#e6ddd5] p-6 rounded-lg">
            
            <div className="flex justify-between text-sm mb-2">
              <span>TAX:</span>
              <span>₹126.00</span>
            </div>

            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm font-semibold">TOTAL:</p>
                <p className="text-xs text-gray-500">
                  (shipping fee not included)
                </p>
              </div>
              <p className="text-xl font-extrabold">₹826.00</p>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-md font-semibold flex justify-center items-center gap-2">
              CHECKOUT →
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}