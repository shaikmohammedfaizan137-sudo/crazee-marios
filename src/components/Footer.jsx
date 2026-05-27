import { Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Share2, Link2, MessageSquare, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Footer() {
  const { setIsCartOpen } = useCart();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-400">

      {/* Top CTA Banner */}
      <div className="bg-crazee-green py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-display font-black text-2xl md:text-3xl">Ready to Order?</h3>
            <p className="text-green-100 mt-1">Book a table by phone or place your order online.</p>
          </div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="shrink-0 inline-flex items-center gap-2 bg-white text-crazee-green font-bold text-lg px-8 py-4 rounded-2xl hover:bg-stone-100 transition-colors shadow-lg"
          >
            <ShoppingCart size={20} /> Open Cart to Order
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-6">
            <div style={{ width: '160px', height: '54px', overflow: 'hidden', position: 'relative' }}>
              <img
                src="/imagess/transpirent logo"
                alt="CrazeeMarios Logo"
                style={{
                  position: 'absolute',
                  width: '340px',
                  height: 'auto',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            </div>
          </div>
          <p className="text-stone-400 leading-relaxed mb-6 text-sm">
            Bold flavors, fresh food, and an unforgettable dining experience in Lake Worth, FL.
          </p>
          <div className="flex gap-3">
            {[Share2, Link2, MessageSquare].map((Icon, i) => (
              <a key={i} href="#"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-crazee-red flex items-center justify-center transition-colors"
              >
                <Icon size={16} className="text-stone-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-display font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: 'Home', path: '/' },
              { label: 'Our Menu', path: '/menu' },
              { label: 'About Us', path: '/about' },
              { label: 'Contact & Booking', path: '/contact' },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.path} className="hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Highlights */}
        <div>
          <h4 className="text-white font-display font-bold text-lg mb-6">Menu Highlights</h4>
          <ul className="space-y-3 text-sm">
            {['Biryani', 'Masala Pizza', 'Chicken Wings', 'Curries & Kabob', 'Stuffed Bread', 'Burgers & Subs'].map((item) => (
              <li key={item}>
                <Link to="/menu" className="hover:text-white transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-display font-bold text-lg mb-6">Find Us</h4>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="text-crazee-yellow mt-0.5 shrink-0" size={18} />
              <span>7667-A Lake Worth Road<br />Lake Worth, FL 33467</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-crazee-yellow shrink-0" size={18} />
              <a href="tel:+15612943062" className="hover:text-white transition-colors">+1 (561) 294-3062</a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="text-crazee-yellow shrink-0" size={18} />
              <a href="http://www.crazeemario.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                www.crazeemario.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
          <p>&copy; {year} Crazee Marios. All rights reserved.</p>
          <p>Made with care in Lake Worth, FL</p>
        </div>
      </div>
    </footer>
  );
}
