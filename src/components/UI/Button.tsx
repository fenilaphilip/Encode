import { ReactNode } from "react";

const Button: React.FC<{
  children: ReactNode;
  type: "submit" | "button";
  onClick?: () => void;
}> = ({ type, children, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-white bg-gray-800 hover:bg-gray-400 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    >
      {children}
    </button>
  );
};
export default Button;
