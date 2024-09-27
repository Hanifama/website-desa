import React, { useEffect, useState } from 'react';

export default function BackToTop () {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={handleClick}
        className="fixed bottom-5 right-5 p-3 bg-green-600 text-white rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-green-700 focus:outline-none"
        aria-label="Back to Top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 20V4m-4 4l4-4 4 4"
          />
        </svg>
      </button>
    )
  );
};
