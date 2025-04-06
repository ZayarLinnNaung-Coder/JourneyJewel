"use client";
import { useRouter } from "next/navigation";
import React, { useState, useRef, MouseEvent } from "react";

const ToogleComponent = ({ name, route }: { name: string; route?: string }) => {
  const router = useRouter();
  const circleRef = useRef<HTMLDivElement>(null);
  const circleSize = 28;
  const [position, setPosition] = useState<number>(1);
  const [dragging, setDragging] = useState<boolean>(false);

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!dragging || !circleRef.current) return;

    const parentRect = circleRef.current.parentElement?.getBoundingClientRect();
    if (!parentRect) return;

    const trackWidth = parentRect.width;
    const newX = e.clientX - parentRect.left - circleSize / 2;
    const maxPosition = trackWidth - circleSize;
    const clampedX = Math.max(0, Math.min(newX, maxPosition));
    setPosition(clampedX);
  };

  const handleMouseUp = () => {
    if (!circleRef.current) return;

    setDragging(false);
    const trackWidth =
      circleRef.current.parentElement?.getBoundingClientRect().width || 200;
    const middle = (trackWidth - circleSize) / 2;
    const newIsOn = position > middle;
    setPosition(newIsOn ? trackWidth - circleSize : 0);

    if (newIsOn) {
      router.push(route || "/features");
    }
  };

  const handleClick = () => {
    if (window.innerWidth < 1024) {
      const parentRect =
        circleRef.current?.parentElement?.getBoundingClientRect();
      const trackWidth = parentRect?.width || 200;
      const newPosition = trackWidth - circleSize;
      setPosition(newPosition);
      router.push(route || "/features");
    }
  };

  return (
    <div
      className={` w-52  border-white shadow-md  border-2 md:w-56 lg:w-64 h-10 md:h-12 flex items-center rounded-full relative p-1 cursor-pointer ${
        position > 20
          ? " bg-gradient-to-b from-[#0891B2] shadow-custom to-[#88CDD4] "
          : "bg-[#F1F4F8]"
      } transition-colors`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
    >
      <div
        ref={circleRef}
        className="md:w-9 md:h-9 w-7 h-7 z-20 mr-5 bg-primary flex items-center justify-center rounded-full shadow-md absolute top-[4px] cursor-grab active:cursor-grabbing transition-transform"
        style={{
          transform: `translateX(${
            position > 20 ? position - 20 : position
          }px)`,
        }}
        onMouseDown={handleMouseDown}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_197_941)">
            <g clipPath="url(#clip1_197_941)">
              <path
                d="M6.63159 4.26315L11.3684 9L6.63159 13.7368"
                stroke="white"
                strokeWidth="1.89474"
                strokeLinecap="round"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_197_941">
              <rect width="18" height="18" fill="white" />
            </clipPath>
            <clipPath id="clip1_197_941">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <p
        className={` text-[12px] md:text-[13px] lg:text-sm  select-none font-[600] absolute top-1/2 -translate-y-1/2 pointer-events-none ${
          position > 20
            ? "text-white left-6"
            : "text-black left-10 md:left-12 xl:left-16"
        }`}
      >
        {name}
      </p>
    </div>
  );
};

export default ToogleComponent;
