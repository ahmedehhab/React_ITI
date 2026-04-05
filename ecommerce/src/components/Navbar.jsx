import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import LanguageContext from '../context/LanguageContext'; 

const Navbar = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const cartCount = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));

  const translate = {
    products: lang === 'ar' ? 'المنتجات' : 'Products',
    cart: lang === 'ar' ? 'السلة' : 'Cart',
    contact: lang === 'ar' ? 'اتصل بنا' : 'Contact Us',
    register: lang === 'ar' ? 'تسجيل' : 'Register',
    logo: lang === 'ar' ? 'تطبيق المنتجات' : 'Products App'
  };

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-200 sticky top-0 z-50">
      <h2 className="text-xl font-bold text-gray-800">{translate.logo}</h2>

      <div className="flex items-center gap-8 text-sm font-medium text-gray-600">
        <Link to="/" className="hover:text-black transition-colors">{translate.products}</Link>
        <Link to="/cart" className="relative hover:text-black transition-colors">
          {translate.cart}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-6 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-emerald-600 px-2 text-[10px] font-bold text-white">
              {cartCount}
            </span>
          )}
        </Link>
        <Link to="/contact" className="hover:text-black transition-colors">{translate.contact}</Link>
        <Link to="/register" className="hover:text-black transition-colors">{translate.register}</Link>

        <div className="relative group ml-4 border-l pl-4 rtl:border-l-0 rtl:pl-0 rtl:border-r rtl:pr-4 border-gray-200">
          <button className="flex items-center gap-2 hover:text-emerald-700 transition-colors uppercase font-bold text-xs tracking-widest bg-gray-50 px-3 py-2 rounded-lg">
             {lang}
            <svg className="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className="absolute right-0 rtl:left-0 rtl:right-auto hidden group-hover:block bg-white border border-gray-100 shadow-xl rounded-xl mt-1 w-32 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <button
              onClick={() => setLang('en')}
              className={`w-full text-left rtl:text-right px-4 py-3 text-sm hover:bg-emerald-50 flex items-center justify-between ${lang === 'en' ? 'text-emerald-700 bg-emerald-50 font-bold' : ''}`}
            >
              English 
              {lang === 'en' && <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>}
            </button>
            <button
              onClick={() => setLang('ar')}
              className={`w-full text-left rtl:text-right px-4 py-3 text-sm hover:bg-emerald-50 flex items-center justify-between ${lang === 'ar' ? 'text-emerald-700 bg-emerald-50 font-bold' : ''}`}
            >
              العربية 
              {lang === 'ar' && <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;