import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, isCartOpen, setIsCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg shadow-stone-200/60 py-3'
            : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center shrink-0">
            <div style={{ width: '120px', height: '40px', overflow: 'hidden', position: 'relative' }}>
              <img
                src="/imagess/transpirent logo"
                alt="CrazeeMarios Logo"
                style={{
                  position: 'absolute',
                  width: '260px',
                  height: 'auto',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-crazee-red/10 text-crazee-red'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+15612943062"
              className="flex items-center gap-2 text-stone-600 hover:text-crazee-green font-semibold text-sm transition-colors"
            >
              <Phone size={16} />
              <span>561-294-3062</span>
            </a>

            {/* Cart Button */}
            <button
              id="cart-toggle-btn"
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-stone-900 hover:bg-stone-700 text-white px-4 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-md"
            >
              <ShoppingCart size={16} />
              <span>Cart</span>
              {totalItems > 0 && (
                <motion.span
                  key={totalItems}
                  initial={{ scale: 1.4 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-crazee-red text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center leading-none"
                >
                  {totalItems > 99 ? '99+' : totalItems}
                </motion.span>
              )}
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-crazee-green hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-md shadow-green-900/20"
            >
              Order Now
            </button>
          </div>

          {/* Mobile: Cart + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <motion.span
                  key={totalItems}
                  initial={{ scale: 1.4 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-crazee-red text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center leading-none"
                >
                  {totalItems > 99 ? '99+' : totalItems}
                </motion.span>
              )}
            </button>
            <button
              className="p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-white border-t border-stone-100"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl font-semibold text-lg transition-colors ${
                        isActive ? 'bg-crazee-red text-white' : 'text-stone-700 hover:bg-stone-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div className="mt-4 pt-4 border-t border-stone-100 flex flex-col gap-3">
                  <a
                    href="tel:+15612943062"
                    className="flex items-center gap-2 text-stone-600 font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone size={18} /> 561-294-3062
                  </a>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsCartOpen(true);
                    }}
                    className="bg-crazee-green text-white text-center font-bold py-3 rounded-xl"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Cart Sidebar — rendered at root level via portal pattern */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
