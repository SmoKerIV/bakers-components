import React from "react";
import "./IconButton.css";

const IconButton = ({ type, size, onClick, children, icon,...props }) => {
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

  const classNames = `icon-button ${determineTypeClass()} ${determineSizeClass()}`;

  return (
    <button className={classNames} onClick={onClick}>
      <span className="icon">{icon}</span>
      {children}
    </button>
  );
};

export default IconButton;
