import React, { useState, useEffect } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div
      className={`h-screen bg-black w-full text-white flex items-center justify-center transition-all duration-1000 ease-in-out ${
        !isLoading ? "opacity-0 h-0 overflow-hidden" : ""
      }`}
    >
      <div className="text-4xl font-pressStart">xxxx Loading xxxx</div>
    </div>
  );
};

export default Loader;