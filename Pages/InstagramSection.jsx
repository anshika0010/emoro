"use client";
import { useEffect, useRef } from "react";

export default function InstagramSection() {
  const posts = [
    "https://www.instagram.com/p/DXeIWbLE_LW/",
    "https://www.instagram.com/p/DXXM4jqk4NT/",
    "https://www.instagram.com/p/DXT018DE7RW/",
    "https://www.instagram.com/p/DXQxsPmkwmR/",
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    const initSwiper = async () => {
      const { Swiper } = await import("swiper");
      const { Navigation, Pagination } = await import("swiper/modules");

      await import("swiper/css");
      await import("swiper/css/navigation");
      await import("swiper/css/pagination");

      if (swiperRef.current) {
        new Swiper(swiperRef.current, {
          modules: [Navigation, Pagination],
          slidesPerView: 1,
          spaceBetween: 16,
          loop: posts.length > 4,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            480: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          },
        });
      }
    };

    initSwiper();
  }, []);

  return (
    <div className="max-w-[1900px] mx-auto bg-[#f3ede7] py-8 sm:py-10 md:py-16 flex flex-col items-center px-3 sm:px-4 md:px-6">
      {/* Heading */}
      <div className="text-center max-w-[800px]">
        <h2 className="text-[#ff4d00] text-[20px] sm:text-[28px] md:text-[38px] font-extrabold uppercase leading-tight">
          "Follow Us <br /> For Daily Dog Happiness"
        </h2>
        <p className="mt-3 md:mt-4 text-gray-600 text-[11px] sm:text-[13px] md:text-[14px]">
          Daily dose of happy tails, healthy meals, and wagging moments 🐕
          <br />
          Premium nutrition for dogs who deserve the best ❤️
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="mt-6 sm:mt-8 md:mt-10 w-full relative">
        <div ref={swiperRef} className="swiper w-full">
          <div className="swiper-wrapper">
            {posts.map((url, i) => (
              <div key={i} className="swiper-slide">
                <div
                  className="bg-[#e6ddd5] rounded-xl overflow-hidden"
                  style={{ height: "600px" }}
                >
                  <iframe
                    src={`${url}embed/?cr=1&v=14`}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    loading="lazy"
                    style={{
                      display: "block",
                      border: "none",
                      overflow: "hidden",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div
            className="swiper-button-prev"
            style={{
              backgroundColor: "#ff4d00",
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              color: "white",
            }}
          />
          <div
            className="swiper-button-next"
            style={{
              backgroundColor: "#ff4d00",
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              color: "white",
            }}
          />

          {/* Pagination Dots */}
          <div
            className="swiper-pagination"
            style={{ marginTop: "16px", position: "relative", bottom: "unset" }}
          />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-7 sm:mt-8 md:mt-10 flex items-center gap-3">
        <button className="bg-[#ff4d00] text-white px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-md font-semibold text-[11px] sm:text-xs md:text-sm tracking-wide">
          EXPLORE OUR INSTAGRAM
        </button>
        <button className="bg-[#ff4d00] w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] rounded-md flex items-center justify-center">
          <span className="text-white text-base md:text-lg">↗</span>
        </button>
      </div>

      {/* Fix swiper nav arrow size */}
      <style>{`
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 14px !important;
          font-weight: bold;
          color: white;
        }
        .swiper-pagination-bullet-active {
          background: #ff4d00 !important;
        }
        .swiper-pagination-bullet {
          background: #ccc;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
