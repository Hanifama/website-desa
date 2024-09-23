import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <div className="w-10 h-10 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-10 h-10 bg-gray-300 rounded-full animate-bounce"></div>
        <div className="w-10 h-10 bg-blue-500 rounded-full animate-bounce"></div>
      </div>
      <p className="text-lg font-medium text-gray-600">Memuat...</p>      
    </div>
  );
};

export default Loader;
