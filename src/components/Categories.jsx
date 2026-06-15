import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, UtensilsCrossed, Soup, Pizza, Sandwich, Beef, Salad, Wine, Wheat, Flame, Leaf, Star, CalendarCheck } from 'lucide-react';
import { useRef, useState } from 'react';

const categories = [
  { id: 'appetizers',         name: 'Appetizers',     Icon: UtensilsCrossed, count: 12, color: '#f97316', accent: 'from-orange-500 to-amber-400',   tag: 'Starters'  },
  { id: 'biryani',            name: 'Biryani',         Icon: Soup,            count: 18, color: '#eab308', accent: 'from-yellow-400 to-amber-500',   tag: 'Signature' },
  { id: 'chef-special',       name: "Chef's Special",  Icon: Star,            count: 8,  color: '#ef4444', accent: 'from-red-500 to-rose-400',        tag: 'Fan Fav'   },
  { id: 'veg-curry',          name: 'Veg Curry',       Icon: Leaf,            count: 10, color: '#22c55e', accent: 'from-green-500 to-emerald-400',  tag: 'Healthy'   },
  { id: 'curry',              name: 'Curry',           Icon: Flame,           count: 24, color: '#fb923c', accent: 'from-orange-500 to-red-400',      tag: 'Spicy'     },
  { id: 'kabob',              name: 'Kabob',           Icon: Beef,            count: 14, color: '#ec4899', accent: 'from-pink-500 to-rose-400',       tag: 'Grilled'   },
  { id: 'masala-spicy-pizza', name: 'Masala Pizza',    Icon: Pizza,           count: 9,  color: '#ef4444', accent: 'from-red-500 to-orange-400',      tag: 'Bold'      },
  { id: 'pizza',              name: 'Pizza',           Icon: Pizza,           count: 16, color: '#818cf8', accent: 'from-indigo-500 to-blue-400',     tag: 'Classic'   },
  { id: 'burgers',            name: 'Burgers',         Icon: Beef,            count: 11, color: '#f59e0b', accent: 'from-amber-500 to-yellow-400',    tag: 'Juicy'     },
  { id: 'subs',               name: '10″ Subs',        Icon: Sandwich,        count: 7,  color: '#38bdf8', accent: 'from-sky-500 to-cyan-400',        tag: 'Fresh'     },
  { id: 'stuffed-bread',      name: 'Stuffed Bread',   Icon: Wheat,           count: 6,  color: '#d4b89a', accent: 'from-stone-400 to-amber-300',     tag: 'Baked'     },
  { id: 'chicken-wings',      name: 'Wings',           Icon: Flame,           count: 13, color: '#ef4444', accent: 'from-red-600 to-orange-400',      tag: 'Crispy'    },
  { id: 'salads',             name: 'Salads',          Icon: Salad,           count: 8,  color: '#2dd4bf', accent: 'from-teal-500 to-green-400',      tag: 'Light'     },
  { id: 'drinks',             name: 'Drinks',          Icon: Wine,            count: 15, color: '#a78bfa', accent: 'from-violet-500 to-purple-400',   tag: 'Cool'      },
];

const stats = [
  { value: '14+',    label: 'Categories'       },
  { value: '50+',    label: 'Menu Items'       },
  { value: '100%',   label: 'Halal Certified'  },
  { value: 'Fresh',  label: 'Ingredients Daily' },
];

function MagneticBtn({ children, className, style, to, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 25 });
  const sy = useSpring(y, { stiffness: 300, damping: 25 });
  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.25);
    y.set(dy * 0.25);
  };
  const handleLeave = () => { x.set(0); y.set(0); };
  const inner = (
    <motion.span
      ref={ref}
      style={{ x: sx, y: sy, ...style }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.span>
  );
  if (to) return <Link to={to}>{inner}</Link>;
  return <button onClick={onClick}>{inner}</button>;
}

function CategoryCard({ cat, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.045, ease: 'easeOut' }}
    >
      <Link
        to={`/menu?category=${cat.id}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative flex flex-col gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
        style={{
          background: hovered
            ? `linear-gradient(145deg, ${cat.color}18 0%, #111111 100%)`
            : 'linear-gradient(145deg, #1a1a1a 0%, #111111 100%)',
          border: `1px solid ${hovered ? cat.color + '45' : 'rgba(255,255,255,0.06)'}`,
          boxShadow: hovered ? `0 20px 60px ${cat.color}22, 0 0 0 1px ${cat.color}22` : '0 4px 20px rgba(0,0,0,0.4)',
          transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Glow orb behind icon */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full blur-[40px] transition-opacity duration-500 pointer-events-none"
          style={{ background: cat.color, opacity: hovered ? 0.18 : 0 }}
        />

        {/* Tag */}
        <span
          className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded-full transition-opacity duration-300"
          style={{ color: cat.color, background: `${cat.color}18`, opacity: hovered ? 1 : 0.5 }}
        >
          {cat.tag}
        </span>

        {/* Icon container */}
        <div className="relative z-10 mt-2">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${cat.color}28 0%, ${cat.color}10 100%)`,
              border: `1px solid ${cat.color}30`,
              transform: hovered ? 'scale(1.12) rotate(-4deg)' : 'scale(1) rotate(0deg)',
              boxShadow: hovered ? `0 8px 28px ${cat.color}35` : 'none',
            }}
          >
            <cat.Icon size={24} strokeWidth={1.6} style={{ color: cat.color }} />
          </div>
        </div>

        {/* Text */}
        <div className="relative z-10">
          <p
            className="font-bold text-sm leading-snug transition-colors duration-200"
            style={{ color: hovered ? '#ffffff' : '#c4bab0' }}
          >
            {cat.name}
          </p>
          <p
            className="text-xs font-medium mt-1 transition-colors duration-200"
            style={{ color: hovered ? cat.color : '#6b6560' }}
          >
            {cat.count} Items
          </p>
        </div>

        {/* Bottom accent bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] transition-all duration-500 rounded-b-2xl"
          style={{
            background: `linear-gradient(90deg, ${cat.color}, ${cat.color}00)`,
            width: hovered ? '100%' : '0%',
          }}
        />
      </Link>
    </motion.div>
  );
}

export default function Categories() {
  return (
    <section
      className="relative overflow-hidden py-32"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, #1a1200 0%, #0a0a0a 55%)' }}
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full opacity-[0.06] blur-[160px]"
          style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[160px]"
          style={{ background: 'radial-gradient(circle, #ef4444 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] opacity-[0.03] blur-[100px]"
          style={{ background: 'radial-gradient(ellipse, #f59e0b 0%, transparent 70%)' }} />
      </div>

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Header Block ─── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-20">

          {/* Left — Copy */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Crafted Fresh Daily
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="font-display font-black leading-[1.02] mb-6"
              style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}
            >
              <span className="text-white">Every </span>
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #ef4444 100%)' }}
              >
                Craving.
              </span>
              <br />
              <span className="text-white">One Destination.</span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="text-stone-400 text-lg leading-relaxed max-w-xl"
            >
              From signature biryanis and smoky grills to handcrafted desserts and refreshing beverages — every dish prepared with passion and the finest ingredients.
            </motion.p>
          </div>

          {/* Right — CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0"
          >
            <MagneticBtn
              to="/menu"
              className="items-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm text-stone-950 shadow-2xl shadow-amber-900/30 hover:shadow-amber-900/50 transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)' }}
            >
              Explore Full Menu
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </MagneticBtn>

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm text-stone-300 hover:text-white border border-white/10 hover:border-white/25 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 hover:scale-105"
            >
              <CalendarCheck size={16} />
              Reserve a Table
            </Link>
          </motion.div>
        </div>

        {/* ─── Thin divider ─── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-14" />

        {/* ─── Category Grid ─── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

        {/* ─── Stats Strip ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 relative"
        >
          {/* Glassmorphism panel */}
          <div
            className="flex flex-wrap items-center justify-around gap-6 px-10 py-8 rounded-3xl border border-white/8"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.25 }}
                className="flex flex-col items-center gap-1 group"
              >
                <span
                  className="font-display font-black text-3xl md:text-4xl bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundImage: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)' }}
                >
                  {s.value}
                </span>
                <span className="text-stone-500 text-xs font-semibold uppercase tracking-widest">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
}
