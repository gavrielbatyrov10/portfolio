import React from "react";
import "./Modal.css";

export default function Modal({ isOpen, onClose, leftContent, rightContent }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">
          <div className="modal-left">{leftContent}</div>
          <div className="modal-right">{rightContent}</div>
        </div>
      </div>
    </div>
  );
}
