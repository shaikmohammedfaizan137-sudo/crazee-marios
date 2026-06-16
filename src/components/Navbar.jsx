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
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[70px] transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md shadow-stone-900/5'
            : 'bg-white/95 backdrop-blur-md border-b border-stone-200/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
          
          {/* Logo Link */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="relative flex items-center shrink-0 z-50"
          >
            {/* Desktop Logo: 44px high, minimal */}
            <img
              src={`${import.meta.env.BASE_URL}imagess/transpirent_logo.png`}
              alt="CrazeeMarios Logo"
              className="hidden md:block h-[44px] w-auto transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99] drop-shadow-sm"
            />
            {/* Mobile Logo: 38px high */}
            <img
              src={`${import.meta.env.BASE_URL}imagess/transpirent_logo.png`}
              alt="CrazeeMarios Logo"
              className="block md:hidden h-[38px] w-auto transition-transform duration-300 hover:scale-[1.02] drop-shadow-sm"
            />
          </Link>

          {/* Desktop Nav Links (Centered) */}
          <nav className="hidden md:flex items-center justify-center gap-1 flex-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `group relative py-2 px-3 text-[13px] font-black tracking-wider uppercase transition-colors duration-200 ${
                    isActive ? 'text-crazee-red active-link' : 'text-stone-600 hover:text-stone-950'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-crazee-red rounded-full transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 group-[.active-link]:scale-x-100" />
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Cart Button - Redesigned as Secondary Button */}
            <button
              id="cart-toggle-btn"
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-white hover:bg-stone-50 text-stone-850 px-4 py-2 rounded-full font-black text-xs border border-stone-300/80 transition-all hover:scale-[1.03] active:scale-[0.98] shadow-sm hover:shadow-md cursor-pointer shrink-0"
            >
              <ShoppingCart size={13} className="text-stone-500" />
              <span>Cart</span>
              {totalItems > 0 && (
                <motion.span
                  key={totalItems}
                  initial={{ scale: 1.4 }}
                  animate={{ scale: 1 }}
                  className="bg-crazee-red text-white text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center leading-none"
                >
                  {totalItems > 99 ? '99+' : totalItems}
                </motion.span>
              )}
            </button>

            {/* Order Now Button - Redesigned as Primary Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-gradient-to-r from-crazee-red to-orange-600 hover:from-orange-600 hover:to-crazee-red text-white px-4.5 py-2 rounded-full font-black text-xs transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-lg shadow-crazee-red/15 border border-red-500/10 cursor-pointer shrink-0"
            >
              Order Now
            </button>
          </div>

          {/* Mobile: Cart + Hamburger */}
          <div className="flex md:hidden items-center gap-2 z-50">
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Open cart"
              className="relative p-2.5 rounded-xl text-stone-750 hover:bg-stone-100 transition-colors"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <motion.span
                  key={totalItems}
                  initial={{ scale: 1.4 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 bg-crazee-red text-white text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center leading-none"
                >
                  {totalItems > 99 ? '99+' : totalItems}
                </motion.span>
              )}
            </button>
            <button
              className="p-2.5 rounded-xl text-stone-750 hover:bg-stone-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
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
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-white border-t border-stone-100 shadow-xl"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl font-black text-[17px] tracking-wide transition-colors ${
                        isActive ? 'bg-crazee-red text-white' : 'text-stone-700 hover:bg-stone-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                {/* Mobile Trust Badge */}
                <div className="flex items-center justify-center gap-2 bg-stone-50 border border-stone-150 px-4 py-3 rounded-xl text-xs font-black text-stone-700 mt-2">
                  <span className="text-amber-500">⭐</span>
                  <span>4.8 Rating</span>
                  <span className="text-stone-300">|</span>
                  <span className="text-crazee-green uppercase tracking-wide">100% Halal</span>
                </div>

                <div className="mt-2 pt-4 border-t border-stone-100 flex flex-col gap-3">
                  <a
                    href="tel:+15612943062"
                    className="flex items-center justify-center gap-2 bg-stone-50 hover:bg-stone-100 text-stone-850 py-3 rounded-xl border border-stone-200 font-black text-sm transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone size={14} className="text-crazee-green" />
                    <span>Call 561-294-3062</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsCartOpen(true);
                    }}
                    className="bg-gradient-to-r from-crazee-red to-orange-600 text-white text-center font-black py-3 rounded-xl shadow-lg shadow-crazee-red/15 text-sm"
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
