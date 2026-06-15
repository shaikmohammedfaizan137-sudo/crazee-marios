import { Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Share2, MessageCircle, Link2, ShoppingCart, ArrowRight, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Footer() {
  const { setIsCartOpen } = useCart();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-400">

      {/* Top CTA Banner */}
      <div className="relative overflow-hidden py-16"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}imagess/footer_cta_bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Red tint overlay — transparent enough to show food */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(200,20,20,0.80), rgba(180,10,10,0.72))' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-red-200 font-bold uppercase tracking-widest text-xs mb-2">🍽 Ready to Eat?</p>
            <h3 className="text-white font-display font-black text-3xl md:text-4xl leading-tight">
              Taste the Crazee Difference
            </h3>
            <p className="text-red-100/80 mt-2 text-base">Place your order online or book a table today.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="tel:+15612943062"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-base px-7 py-3.5 rounded-2xl transition-all hover:scale-105"
            >
              <Phone size={18} />
              Call Us
            </a>
            <button
              onClick={() => setIsCartOpen(true)}
              className="group inline-flex items-center gap-2 bg-white text-crazee-red font-bold text-base px-7 py-3.5 rounded-2xl hover:bg-crazee-yellow hover:text-stone-900 transition-all hover:scale-105 shadow-xl"
            >
              <ShoppingCart size={18} />
              Order Online
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand Column */}
        <div className="lg:col-span-1">
          <div className="mb-6">
            <div style={{ width: '220px', height: '74px', overflow: 'hidden', position: 'relative' }}>
              <img
                src={`${import.meta.env.BASE_URL}imagess/transpirent_logo.png`}
                alt="CrazeeMarios Logo"
                style={{
                  position: 'absolute',
                  width: '460px',
                  height: 'auto',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </div>
          </div>
          <p className="text-stone-400 leading-relaxed mb-6 text-sm">
            Bold flavors, fresh halal food, and an unforgettable dining experience in Lake Worth, FL.
          </p>
          {/* Social links */}
          <div className="flex gap-3">
            {[
              { Icon: Share2, href: 'https://www.facebook.com/crazeemarios', label: 'Facebook' },
              { Icon: MessageCircle, href: 'https://wa.me/15612943062', label: 'WhatsApp' },
              { Icon: Link2, href: 'https://www.instagram.com/crazeemarios', label: 'Instagram' },
            ].map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group w-10 h-10 rounded-2xl bg-stone-800 hover:bg-crazee-red flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1"
              >
                <Icon size={16} className="text-stone-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-display font-bold text-lg mb-6 flex items-center gap-2">
            <Flame size={16} className="text-crazee-red" />
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: 'Home', path: '/' },
              { label: 'Our Menu', path: '/menu' },
              { label: 'About Us', path: '/about' },
              { label: 'Contact & Booking', path: '/contact' },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  to={l.path}
                  className="group flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-700 group-hover:bg-crazee-red transition-colors" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Highlights */}
        <div>
          <h4 className="text-white font-display font-bold text-lg mb-6 flex items-center gap-2">
            <Flame size={16} className="text-crazee-yellow" />
            Menu Highlights
          </h4>
          <ul className="space-y-3 text-sm">
            {['Biryani', 'Masala Pizza', 'Chicken Wings', 'Curries & Kabob', 'Stuffed Bread', 'Burgers & Subs'].map((item) => (
              <li key={item}>
                <Link
                  to="/menu"
                  className="group flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-700 group-hover:bg-crazee-yellow transition-colors" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-display font-bold text-lg mb-6 flex items-center gap-2">
            <Flame size={16} className="text-crazee-green" />
            Find Us
          </h4>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-2xl bg-stone-800 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={16} className="text-crazee-yellow" />
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=7667-A+Lake+Worth+Road,+Lake+Worth,+FL+33467"
                target="_blank"
                rel="noreferrer"
                className="leading-relaxed hover:text-white hover:underline underline-offset-2 transition-colors"
              >
                7667-A Lake Worth Road<br />Lake Worth, FL 33467
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-stone-800 flex items-center justify-center shrink-0">
                <Phone size={16} className="text-crazee-yellow" />
              </div>
              <a href="tel:+15612943062" className="hover:text-white transition-colors">+1 (561) 294-3062</a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-stone-800 flex items-center justify-center shrink-0">
                <Globe size={16} className="text-crazee-yellow" />
              </div>
              <a href="https://www.crazeemario.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                www.crazeemario.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
          <p>&copy; {year} Crazee Marios. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Flame size={12} className="text-crazee-red" />
            <p>Made with passion in{' '}
              <a
                href="https://www.google.com/maps/search/?api=1&query=7667-A+Lake+Worth+Road,+Lake+Worth,+FL+33467"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white underline underline-offset-2 transition-colors"
              >Lake Worth, FL</a>
            </p>
          </div>
        </div>
      </div>

      {/* Built by strip */}
      <div className="border-t border-stone-800/40 bg-stone-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center">
          <a
            href="https://creativals.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 text-stone-600 hover:text-white transition-colors duration-300"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Designed &amp; Built by</span>
            <span
              className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-500/20 group-hover:border-amber-400/50 group-hover:from-amber-400/20 group-hover:to-orange-500/20 text-amber-400 group-hover:text-amber-300 text-[11px] font-bold tracking-wide px-3 py-1 rounded-full transition-all duration-300"
              style={{ boxShadow: '0 0 12px rgba(251,191,36,0)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 18px rgba(251,191,36,0.2)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 12px rgba(251,191,36,0)'}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              creativals.com
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
