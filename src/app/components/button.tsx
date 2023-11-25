import { MouseEventHandler } from 'react';

interface Props {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({ text, onClick }: Props) => {
  return (
    <button
      className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
