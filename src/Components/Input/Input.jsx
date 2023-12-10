import React from "react";
import "./Input.css";

const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      className="custom-input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
