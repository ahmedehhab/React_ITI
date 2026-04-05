import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-9xl font-extrabold text-gray-200">404</h1>
      <p className="text-2xl font-semibold text-gray-900 mt-4">Page Not Found</p>
      <p className="text-gray-500 mt-2">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-[#004d40] text-white font-medium rounded-lg hover:bg-emerald-900 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;