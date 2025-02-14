import logo from './logo.svg';
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/navbar';
import Loader from './components/loader';
import Pattern from './components/backPattern';

function App() {
  return (
    <>
    <div className='bg-[#FFFDF9]'>
    <div className="bg-white  flex justify-center">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
         
          <Route path="/load" element={<Loader />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
          
    </div>
    </>
  );
}

export default App;
