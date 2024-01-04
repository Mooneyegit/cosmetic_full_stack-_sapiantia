import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// imports from pages 
import Home from "./Pages/Home";
import About from "./Pages/About";
import Faq from "./Pages/Faq";
import Products from "./Pages/Products";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/product" element={<Products />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
