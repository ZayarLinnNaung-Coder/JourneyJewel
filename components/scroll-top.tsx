"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="scroll"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-3 z-50 p-3 rounded-full bg-primary text-white shadow-lg transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_224_5466)">
          <path
            d="M4.2627 11.3687L8.99954 6.63181L13.7364 11.3687"
            stroke="white"
            strokeWidth="1.89474"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_224_5466">
            <rect
              width="18"
              height="18"
              fill="white"
              transform="matrix(0 -1 1 0 0 18)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
