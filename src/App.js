import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Loader from './components/loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  // Simulate loading completion after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setLoaded(true);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <>
      <div className='bg-[#FFFDF9]'>
        <div className="bg-white flex justify-center">
          <BrowserRouter>
            {isLoading ? (
              <Loader />
            ) : (
              <Routes>
                <Route path="/" element={<Home loaded={loaded} />} />
                <Route path="/load" element={<Loader />} />
              </Routes>
            )}
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;