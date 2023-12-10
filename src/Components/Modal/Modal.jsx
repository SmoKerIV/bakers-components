import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, description }) => {
  if (!isOpen) {
    return null; // Render nothing if the modal is not open
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>{description}</p>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Close</button>
          <button onClick={() => console.log("OK button clicked")}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
