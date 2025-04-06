"use client";
import IconPlus from "@/common/icon/IconPlus";
import React, { useState } from "react";

interface faqBodyProps {
  item: {
    id: number;
    name: string;
    para: string;
  };
}

const FaqBody = ({ item }: faqBodyProps) => {
  const [active, setActive] = useState(false);
  return (
    <div className="  " key={item.id}>
      <div
        onClick={() => setActive(!active)}
        className=" flex items-center justify-between font-semibold rounded-xl border border-[#E4EBF0] p-3 md:text-lg bg-[#F4F7F9]"
      >
        {item.name}

        <button
          aria-label={item.name}
          onClick={() => setActive(!active)}
          className=" bg-primary md:w-11 md:h-11 w-8 h-8 flex items-center justify-center rounded-full"
        >
          <IconPlus className=" w-4 h-4 md:w-auto md:h-auto" />
        </button>
      </div>
      {active && (
        <p className="bg-[#F4F7F9] border border-[#E4EBF0] p-4 mt-2 rounded-xl ">
          {item.para}
        </p>
      )}
    </div>
  );
};

export default FaqBody;
