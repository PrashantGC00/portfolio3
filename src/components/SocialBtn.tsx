import React from "react";

interface SocialBtnProps {
 Icon: React.ComponentType<{
    size?: number;
    className?: string;
  }>;
  href: string;
  className?: string
}

const SocialBtn = ({ Icon, href, className }: SocialBtnProps) => {
  return (
    <div className="relative w-7 h-7 cursor-pointer group rounded-full hover:bg-gray-300">
      <svg
        className="absolute inset-0 animate-spin group-hover:animate-none"
        viewBox="0 0 32 32"
      >
        <circle
          cx="16"
          cy="16"
          r="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground transition-all duration-500 ease-out [stroke-dasharray:94.25] [stroke-dashoffset:70.69] group-hover:[stroke-dashoffset:0]"
        />
      </svg>
      <button
        className={`${className} absolute inset-0 flex items-center justify-center cursor-pointer`}
        onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
      >
        <Icon
          size={16}
          className="text-foreground group-hover:fill-white transition-colors"
        />
      </button>
    </div>
  );
};

export default SocialBtn;
