import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Utensils, ShieldCheck, Star, ShoppingCart, Pizza, Flame, Award } from 'lucide-react';
import { useCart } from '../context/CartContext';

const stats = [
  { value: '50+', label: 'Menu Items', icon: Utensils },
  { value: '100%', label: 'Halal Certified', icon: ShieldCheck },
  { value: '4.8⭐', label: 'Google Rating', icon: Star },
  { value: '10+', label: 'Years Serving', icon: Award },
];

const floatingBadges = [
  {
    icon: Utensils,
    label: 'Aromatic Biryani',
    sub: 'Best Seller ⭐ 4.9',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    position: 'top-2 -left-6 lg:top-4 lg:-left-12',
    yAnim: [-8, 8, -8]
  },
  {
    icon: Pizza,
    label: 'Masala Pizza',
    sub: 'Spicy & Perfect',
    color: 'text-crazee-red',
    bg: 'bg-crazee-red/10',
    border: 'border-crazee-red/20',
    position: 'top-1/3 -right-6 lg:-right-12',
    yAnim: [10, -10, 10]
  },
  {
    icon: ShieldCheck,
    label: '100% Halal Spot',
    sub: 'Lake Worth FL',
    color: 'text-crazee-green',
    bg: 'bg-crazee-green/10',
    border: 'border-crazee-green/20',
    position: 'bottom-2 -left-6 lg:bottom-4 lg:-left-8',
    yAnim: [-6, 6, -6]
  }
];

export default function Hero() {
  const { setIsCartOpen } = useCart();
  return (
    <section className="relative min-h-[96vh] pt-[110px] pb-16 flex items-center overflow-hidden bg-stone-950">

      {/* Background image overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}imagess/resturant')` }}
        />
        {/* Dark overlay: left heavy for text readability, right side lighter to reveal image details */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
        
        {/* Glowing ambient light orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-crazee-red/15 rounded-full blur-[130px] mix-blend-screen animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-crazee-yellow/10 rounded-full blur-[130px] mix-blend-screen animate-pulse duration-[10000ms]" style={{ animationDelay: '3s' }} />
      </div>

      {/* Subtle background dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '30px 30px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Column: Typography and actions */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 bg-crazee-red text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-md shadow-crazee-red/10 border border-red-500/10">
              🔥 Lake Worth's Favorite
            </span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=7667-A+Lake+Worth+Road,+Lake+Worth,+FL+33467"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-white/5 backdrop-blur text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 hover:bg-white/15 hover:border-white/25 transition-all shadow-md"
            >
              <MapPin size={11} className="text-crazee-green" /> Lake Worth, FL
            </a>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6 drop-shadow-2xl"
          >
            Bold Flavors.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-crazee-yellow via-amber-400 to-orange-500">Fresh Food.</span><br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-crazee-red to-orange-600">Crazee Taste.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-medium"
          >
            Savor Lake Worth's premier halal dishes. From aromatic biryani and rich curries to masala pizzas, wings, and fresh stuffed breads, every bite is crafted with bold spices and high-quality ingredients.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <button
              onClick={() => setIsCartOpen(true)}
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-crazee-red to-orange-600 hover:from-orange-600 hover:to-crazee-red text-white font-black text-base px-8 py-4 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-crazee-red/25 border border-red-500/20 overflow-hidden cursor-pointer"
            >
              <ShoppingCart size={18} />
              <span>Order Online Now</span>
            </button>
            <Link
              to="/menu"
              className="group inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-black text-base px-8 py-4 rounded-2xl border border-white/10 hover:border-white/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl"
            >
              <span>Explore Menu</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-8"
          >
            {stats.map((s, idx) => (
              <div key={s.label} className="flex items-center gap-3">
                {idx > 0 && <div className="hidden sm:block h-8 w-[1px] bg-white/10 mr-1" />}
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10 text-crazee-yellow">
                    <s.icon size={16} />
                  </div>
                  <div>
                    <div className="text-white font-black text-2xl leading-none">{s.value}</div>
                    <div className="text-stone-400 font-bold text-[10px] tracking-widest uppercase mt-0.5">{s.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Orbiting showcase centerpiece */}
        <div className="hidden lg:flex flex-col items-center justify-center relative h-[480px]">
          
          {/* Rotating dashed background orbit paths */}
          <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-crazee-red/25 animate-[spin_50s_linear_infinite] pointer-events-none" />
          <div className="absolute w-[410px] h-[410px] rounded-full border border-dashed border-white/5 animate-[spin_35s_linear_infinite_reverse] pointer-events-none" />
          
          {/* Main centerpiece food showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-[320px] h-[320px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative flex items-center justify-center bg-stone-900 group z-10"
          >
            <img
              src={`${import.meta.env.BASE_URL}imagess/food_background.png`}
              alt="Crazee Marios Specialties"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* Subtle dark layout overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-stone-950/20 to-transparent" />
          </motion.div>

          {/* Floating Badges */}
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
              className={`absolute ${badge.position} z-20`}
            >
              <motion.div
                animate={{ y: badge.yAnim }}
                transition={{ repeat: Infinity, duration: 5 + i, ease: 'easeInOut' }}
                className="flex items-center gap-3 bg-stone-900/80 backdrop-blur-xl border border-white/15 rounded-2xl px-4 py-3 shadow-2xl shadow-black/60 hover:border-white/25 transition-colors duration-300"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${badge.bg} ${badge.border} ${badge.color} shrink-0`}>
                  <badge.icon size={18} />
                </div>
                <div className="text-left">
                  <div className="font-display font-black text-white text-sm tracking-wide">{badge.label}</div>
                  <div className="text-stone-300 text-[10px] font-bold uppercase tracking-wider mt-0.5">{badge.sub}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
