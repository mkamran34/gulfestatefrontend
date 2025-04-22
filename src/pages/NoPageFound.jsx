import React from "react";
import { useNavigate } from "react-router-dom";

const NoPageFound = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md border border-gray-200">
        <h1 className="text-6xl font-extrabold text-orange-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn’t exist or has been moved.
        </p>
        <hr className="border-gray-200 mb-6" />
        <button
          onClick={handleReturnHome}
          className="px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-all"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NoPageFound;
