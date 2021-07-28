import React from "react";

const PasswordInput = ({ placeholder, value, setValue }) => {
  return (
    <input
      type="password"
      placeholder={placeholder}
      value={value}
      onChange={setValue}
      className="w-full max-w-5xl block
       bg-primary mb-3 text-lg px-4 py-3 rounded-lg outline-none"
    />
  );
};

export default PasswordInput;
