import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
          <Route path="/product/:id" element={<ProtectedRoute><ProductDetails /></ProtectedRoute> } />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;