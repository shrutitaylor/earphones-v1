import logo from './logo.svg';
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/navbar';

function App() {
  return (
    <>
    <div className='bg-[#FFFDF9]'>
     
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}>
          
          </Route>
        </Routes>
      </BrowserRouter>
  
    </div>
    </>
  );
}

export default App;
