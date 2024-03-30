import React from "react";

const QRCodeModal = ({ show, onClose, qrCode }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">QR Code</h2>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700 border-s-red-500"
          >
            x
          </button>
        </div>
        <div className="p-4">
          <img src={qrCode} alt="QR Code" className="h-500 w-500" />
        </div>
      </div>
    </div>
  );
};

export default QRCodeModal;
