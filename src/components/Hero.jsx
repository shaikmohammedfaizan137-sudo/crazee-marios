import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Utensils, ShieldCheck, Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const stats = [
  { value: '50+', label: 'Menu Items', icon: Utensils },
  { value: '100%', label: 'Halal', icon: ShieldCheck },
  { value: '4.8', label: 'Rating', icon: Star },
  { value: '10+', label: 'Years', icon: Star },
];

const floatingCards = [
  { icon: Utensils, label: 'Biryani', sub: 'Aromatic & Rich', color: 'text-amber-500', delay: 0 },
  { icon: Utensils, label: 'Masala Pizza', sub: 'Bold & Spicy', color: 'text-crazee-red', delay: 0.5 },
  { icon: Utensils, label: 'Crispy Wings', sub: 'Perfectly Fried', color: 'text-rose-500', delay: 1 },
  { icon: Utensils, label: 'Burgers', sub: 'Juicy & Fresh', color: 'text-yellow-500', delay: 1.5 },
];

export default function Hero() {
  const { setIsCartOpen } = useCart();
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-stone-950">

      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}imagess/resturant')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-1.5 bg-crazee-red text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              <ShieldCheck size={13} /> 100% Halal
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/20">
              <MapPin size={12} /> Lake Worth, FL
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-sans font-black text-white leading-[1.05] mb-6"
          >
            Bold Flavors.<br />
            <span className="text-crazee-yellow">Fresh Food.</span><br />
            <span className="text-crazee-green">Crazee</span>{' '}
            <span className="text-crazee-red">Taste.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-stone-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            From biryani and curry to masala pizza, burgers, wings and fresh stuffed breads — every dish crafted with bold spices and the freshest ingredients for dine-in, takeout, or delivery.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <button
              onClick={() => setIsCartOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-crazee-green hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all transform hover:scale-[1.03] shadow-xl shadow-green-900/40"
            >
              <ShoppingCart size={20} /> Open Cart
            </button>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold text-lg px-8 py-4 rounded-2xl border border-white/25 transition-all"
            >
              View Full Menu <ArrowRight size={20} />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-6 sm:gap-8 border-t border-white/10 pt-8"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <div className="text-white font-sans font-black text-2xl sm:text-3xl">{s.value}</div>
                <div className="text-stone-300 font-medium text-sm tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Floating Cards */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-6 relative h-[480px]">
          {floatingCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            >
              <motion.div
                animate={{ y: [0, i % 2 === 0 ? -12 : 12, 0] }}
                transition={{ repeat: Infinity, duration: 4 + i, ease: 'easeInOut' }}
                className={`flex items-center gap-4 bg-white/95 backdrop-blur rounded-2xl px-6 py-4 shadow-2xl ${i % 2 === 0 ? 'ml-0' : 'ml-16'}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center ${card.color}`}>
                  <Utensils size={24} />
                </div>
                <div>
                  <div className="font-sans font-bold text-stone-900 text-lg">{card.label}</div>
                  <div className="text-stone-400 text-sm">{card.sub}</div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} size={10} className="text-crazee-yellow fill-crazee-yellow" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-stone-50 to-transparent" />
    </section>
  );
}
