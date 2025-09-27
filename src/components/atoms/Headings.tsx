import React from "react";

type HeadingProps = {
  title: string;
};

const Headings = ({ title }: HeadingProps) => {
  return (
    <div>
      <h2 className="text-gray-700 font-bold text-[20px] text-center mb-3">
        {title}
      </h2>
    </div>
  );
};

export default Headings;
