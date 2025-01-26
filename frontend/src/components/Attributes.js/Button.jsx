import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        className="text-white mt-3 py-2.5 w-full bg-gray-800 font-medium rounded-lg text-sm px-5  me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
