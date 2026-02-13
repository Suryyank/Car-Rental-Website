import React from "react";
import { string } from "zod";
type props = {
  icon?: React.ReactNode;
  titleText: string;
  paraText: string;
  css?: string;
};

const InfoCard = ({ icon, titleText, paraText, css = "" }: props) => {
  return (
    <div
      className={`
        flex flex-col items-center text-center
        gap-4
        rounded-3xl
        bg-amber-300/10
        px-8 py-10
        text-gray-900
        shadow-sm
        min-h-[280px]  
        w-full
        h-full              
        transition-all duration-300
        hover:shadow-md
        ${css}
      `}
    >
      {/* Icon */}
      {icon && <div className="rounded-full bg-amber-400/90 p-4">{icon}</div>}

      {/* Title */}
      <h3 className="text-2xl font-semibold tracking-tight">{titleText}</h3>

      {/* Description */}
      <p className="text-base text-gray-600 leading-relaxed max-w-[30ch]">
        {paraText}
      </p>
    </div>
  );
};

export default InfoCard;
