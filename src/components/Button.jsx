import React from "react";

const Button = ({
  bgColor,
  color,
  size,
  text,
  borderRadius,
  onClick,
  icon,
}) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={onClick}
    >
      {text || icon}
    </button>
  );
};

export default Button;
