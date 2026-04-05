import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';


function App() {
  return (
       
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
      </div>
  );
}

export default App;