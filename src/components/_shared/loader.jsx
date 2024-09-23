import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center justify-center space-x-4">
        <div className="w-6 h-6 bg-red-600 rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-white rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-red-600 rounded-full animate-bounce"></div>
      </div>
      <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
    </div>
  );
};

export default Loader;
