import React from "react";
import "./Header.css";

const Header = ({ brand, action, children }) => {
  return (
    <header className="custom-header">
      <div className="brand">{brand}</div>
      <div className="action">{action}</div>
      <div className="additional-content">{children}</div>
    </header>
  );
};

export default Header;
