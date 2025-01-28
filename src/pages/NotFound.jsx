import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-gray-700">Page Not Found</h2>
          <p className="text-gray-600 text-lg">
            Oops! Looks like you've ventured into unknown territory.
          </p>
        </div>

        <div className="animate-bounce mt-8">
          <svg
            className="mx-auto h-16 w-16 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </div>

        <button 
          onClick={() => window.location.href = '/'}
          className="mt-8 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;