import React from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const Button = ({
  label,
  disabled,
  className,
  children,
  onClick,
  ...props
}: IButton) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={`
        border border-solid border-gray-400 rounded-2xl bg-gray-100
        hover:bg-gray-200
        disabled:bg-neutral-100 disabled:text-black/25 disabled:border-transparent
        transition-all ease-in-out duration-250
        ${className ? className : ""}
      `}
      onClick={onClick}
      {...props}
    >
      {children ? children : <span className="m-auto">{label}</span>}
    </button>
  );
};

export default Button;
