import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
