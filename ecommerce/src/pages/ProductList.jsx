import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 8;

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, [skip]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>

      <div className="flex items-center justify-center gap-4 mt-12">
        <button 
          disabled={skip === 0}
          onClick={() => setSkip(skip - limit)}
          className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50 hover:bg-gray-50 transition"
        >
          Previous
        </button>
        <span className="text-sm font-medium">Page {(skip / limit) + 1}</span>
        <button 
          onClick={() => setSkip(skip + limit)}
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;