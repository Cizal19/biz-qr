import React from "react";

const QRCodeModal = ({ show, onClose, qrCode }) => {
  if (!show) {
    return null;
  }

  const printQRCode = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Print QR Code</title>
          <style>
            body { margin: 0; }
            .qr-code-container { display: flex; justify-content: center; align-items: center; height: 100vh; }
            img { width: 200px; height: 200px; }
          </style>
        </head>
        <body>
          <div class="qr-code-container">
            <img src="${qrCode}" alt="QR Code">
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg max-w-md">
        <div className="flex justify-center items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">QR Code</h2>
        </div>
        <div className="p-4 flex justify-center">
          <img
            src={qrCode}
            alt="QR Code"
            style={{ height: "250px" }}
            className="mx-auto"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={printQRCode}
            className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
          >
            Print
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRCodeModal;
