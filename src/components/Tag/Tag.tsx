import React from "react";
interface TagProps {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Tag = ({ text, isActive, onClick }: TagProps) => {
  return (
    <div
      className={`w-max py-1 px-2 rounded-b-xl uppercase text-[12px] font-["Gilroy-Medium"] cursor-pointer ${
        isActive
          ? "bg-[var(--primary-color)] text-white"
          : "bg-none border border-[var(--secondary-color)] text-[var(--primary-color)]"
      }`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Tag;
