import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setMainImage(data.thumbnail);
      });
  }, [id]);

  if (!product) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-900"></div>
    </div>
  );

  const isOutOfStock = product.stock === 0;

  const cartPayload = {
    id: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
  };

  const handleAddToCart = () => {
    dispatch(addToCart(cartPayload));
  };

  const handleBuyNow = () => {
    dispatch(addToCart(cartPayload));
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link to="/" className="text-sm text-gray-500 hover:text-emerald-800 mb-8 inline-block">
        ← Back to products
      </Link>

      <div className="lg:flex lg:items-start lg:gap-x-12 mt-4">
        <div className="lg:w-1/2">
          <div className="aspect-square rounded-2xl bg-gray-50 p-12 flex items-center justify-center border border-gray-100">
            <img 
              src={mainImage} 
              alt={product.title} 
              className="max-h-full w-auto object-contain transition-all duration-300" 
            />
          </div>
          
          <div className="grid grid-cols-4 gap-4 mt-6">
            {product.images.slice(0, 4).map((img, i) => (
              <button 
                key={i} 
                onClick={() => setMainImage(img)}
                className={`aspect-square bg-gray-50 rounded-xl p-2 border-2 transition-all ${
                  mainImage === img ? 'border-emerald-600' : 'border-transparent hover:border-gray-200'
                }`}
              >
                <img src={img} alt={`view-${i}`} className="h-full w-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <div className="border-b border-gray-100 pb-6">
            <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
            <p className="text-emerald-700 font-medium mt-2">{product.brand}</p>
            <p className="text-gray-500 mt-4 leading-relaxed">{product.description}</p>
          </div>
          
          <div className="mt-6">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${isOutOfStock ? 'bg-red-500' : 'bg-green-500'}`}></span>
                <span className={`text-sm font-bold ${isOutOfStock ? 'text-red-700' : 'text-green-700'}`}>
                  {isOutOfStock ? 'Out of Stock' : 'In Stock'}
                </span>
              </div>
              {!isOutOfStock && product.stock < 10 && (
                <p className="text-orange-600 text-xs font-semibold">
                  Only {product.stock} left in stock - order soon.
                </p>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                disabled={isOutOfStock}
                onClick={handleBuyNow}
                className={`flex-1 py-4 px-8 rounded-full font-bold text-lg transition-all ${
                  isOutOfStock 
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                  : "bg-[#003d29] text-white hover:bg-emerald-950 shadow-lg hover:shadow-emerald-900/20"
                }`}
              >
                Buy Now
              </button>
              
              <button 
                disabled={isOutOfStock}
                onClick={handleAddToCart}
                className={`flex-1 border-2 py-4 px-8 rounded-full font-bold text-lg transition-all ${
                  isOutOfStock 
                  ? "border-gray-200 text-gray-300 cursor-not-allowed" 
                  : "border-[#003d29] text-[#003d29] hover:bg-emerald-50"
                }`}
              >
                Add to Cart
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-100 text-sm text-gray-600">
              <div>
                <p className="font-bold text-gray-900">Category</p>
                <p className="capitalize">{product.category}</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Rating</p>
                <p> {product.rating} / 5.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;