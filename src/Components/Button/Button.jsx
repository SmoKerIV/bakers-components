import React from "react";
import "./Button.css";

const Button = ({ type, size, onClick, children ,...props }) => {
  const determineTypeClass = () => {
    switch (type) {
      case "primary":
        return "primary";
      case "secondary":
        return "secondary";
      default:
        return "default";
    }
  };

  const determineSizeClass = () => {
    switch (size) {
      case "sm":
        return "small";
      case "md":
      default:
        return "medium";
    }
  };

  const classNames = `button ${determineTypeClass()} ${determineSizeClass()}`;

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
