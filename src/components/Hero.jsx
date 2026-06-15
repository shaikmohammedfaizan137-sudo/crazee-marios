import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Utensils, ShieldCheck, Star, ShoppingCart, Pizza, Flame, Award } from 'lucide-react';
import { useCart } from '../context/CartContext';

const stats = [
  { value: '50+', label: 'Menu Items', icon: Utensils },
  { value: '100%', label: 'Halal', icon: ShieldCheck },
  { value: '4.8', label: 'Rating', icon: Star },
  { value: '10+', label: 'Years', icon: Award },
];

const floatingCards = [
  { icon: Utensils, label: 'Biryani', sub: 'Aromatic & Rich', color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20', delay: 0 },
  { icon: Pizza, label: 'Masala Pizza', sub: 'Bold & Spicy', color: 'text-crazee-red', bg: 'bg-crazee-red/10', border: 'border-crazee-red/20', delay: 0.5 },
  { icon: Flame, label: 'Crispy Wings', sub: 'Perfectly Fried', color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20', delay: 1 },
  { icon: Utensils, label: 'Burgers', sub: 'Juicy & Fresh', color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', delay: 1.5 },
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
        {/* Dark overlay — left side heavy for text readability, right side light so image shows */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/70 to-stone-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-crazee-red/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-10000" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-crazee-yellow/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-10000" style={{ animationDelay: '2s' }} />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
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
            className="text-5xl sm:text-6xl lg:text-7xl font-sans font-black text-white leading-[1.05] mb-6 drop-shadow-2xl"
          >
            Bold Flavors.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500 drop-shadow-sm">Fresh Food.</span><br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-crazee-red to-orange-500 drop-shadow-sm">Crazee Taste.</span>
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
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-crazee-green to-emerald-500 hover:from-emerald-500 hover:to-crazee-green text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all transform hover:scale-[1.03] shadow-xl shadow-green-900/40 border border-green-400/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <ShoppingCart size={20} className="relative z-10" /> <span className="relative z-10">Open Cart</span>
            </button>
            <Link
              to="/menu"
              className="group inline-flex items-center justify-center gap-2 bg-stone-900/60 hover:bg-stone-800/80 backdrop-blur-md text-white font-bold text-lg px-8 py-4 rounded-2xl border border-white/10 hover:border-white/25 transition-all shadow-xl shadow-black/20"
            >
              View Full Menu <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
                className={`flex items-center gap-4 bg-stone-900/70 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-2xl shadow-black/50 ${i % 2 === 0 ? 'ml-0' : 'ml-16'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${card.bg} ${card.border} ${card.color}`}>
                  <card.icon size={24} />
                </div>
                <div>
                  <div className="font-sans font-bold text-white text-lg drop-shadow-md">{card.label}</div>
                  <div className="text-stone-300 text-sm">{card.sub}</div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} size={10} className="text-crazee-yellow fill-crazee-yellow drop-shadow-sm" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
}
