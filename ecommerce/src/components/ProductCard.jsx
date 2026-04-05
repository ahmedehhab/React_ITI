import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const isStocked = product.stock > 0;

  return (
    <div className="group relative border border-gray-100 rounded-xl p-4 transition-shadow hover:shadow-lg bg-white">
      <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase px-2 py-1 rounded ${isStocked ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {isStocked ? 'In stock' : 'Out of stock'}
      </span>
      
      <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-50 group-hover:opacity-75">
        <img src={product.thumbnail} alt={product.title} className="h-full w-full object-contain object-center" />
      </div>

      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-sm font-semibold text-gray-700">{product.title}</h3>
          <p className="mt-1 text-xs text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-bold text-gray-900">${product.price}</p>
      </div>

      <Link to={`/product/${product.id}`} className="mt-4 block w-full text-center bg-[#004d40] text-white py-2 rounded-md text-sm font-medium hover:bg-emerald-900 transition-colors">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
