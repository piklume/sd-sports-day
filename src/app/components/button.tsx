import { MouseEventHandler } from "react";

interface Props {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  isDisabled: boolean;
}

const Button = ({ text, onClick, isDisabled }: Props) => {
  return (
    <button
      className="text-gray-900 border-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
      hover:text-white border hover:bg-gray-900 focus:ring-gray-300 focus:ring-4 focus:outline-none
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
