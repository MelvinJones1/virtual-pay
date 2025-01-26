import React from "react";

const InputBox = ({ label, placeholder, onChange }) => {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        className="px-2 py-1 border rounded border-slate-200 w-full"
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default InputBox;
