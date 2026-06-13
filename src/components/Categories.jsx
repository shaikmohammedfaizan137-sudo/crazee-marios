import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, UtensilsCrossed, Soup, Pizza, Sandwich, Beef, Salad, Wine, Wheat, Flame, Leaf, Coffee, Star } from 'lucide-react';

const categories = [
  { id: 'appetizers',         name: 'Appetizers',      Icon: UtensilsCrossed, gradient: 'from-orange-400 to-amber-500',   glow: 'shadow-orange-500/30' },
  { id: 'biryani',            name: 'Biryani',          Icon: Soup,            gradient: 'from-yellow-400 to-amber-500',   glow: 'shadow-yellow-500/30' },
  { id: 'chef-special',       name: 'Chef Special',     Icon: Star,            gradient: 'from-rose-400 to-red-500',        glow: 'shadow-red-500/30' },
  { id: 'veg-curry',          name: 'Veg Curry',        Icon: Leaf,            gradient: 'from-green-400 to-emerald-600',  glow: 'shadow-green-500/30' },
  { id: 'curry',              name: 'Curry',            Icon: Flame,           gradient: 'from-orange-500 to-red-500',     glow: 'shadow-orange-500/30' },
  { id: 'kabob',              name: 'Kabob',            Icon: Beef,            gradient: 'from-pink-400 to-rose-500',      glow: 'shadow-pink-500/30' },
  { id: 'masala-spicy-pizza', name: 'Masala Pizza',     Icon: Pizza,           gradient: 'from-red-500 to-rose-600',       glow: 'shadow-red-500/30' },
  { id: 'pizza',              name: 'Pizza',            Icon: Pizza,           gradient: 'from-blue-400 to-indigo-500',    glow: 'shadow-blue-500/30' },
  { id: 'burgers',            name: 'Burgers',          Icon: Beef,            gradient: 'from-amber-400 to-yellow-500',   glow: 'shadow-amber-500/30' },
  { id: 'subs',               name: '10" Subs',         Icon: Sandwich,        gradient: 'from-sky-400 to-blue-500',       glow: 'shadow-sky-500/30' },
  { id: 'stuffed-bread',      name: 'Stuffed Bread',    Icon: Wheat,           gradient: 'from-stone-400 to-stone-600',    glow: 'shadow-stone-500/30' },
  { id: 'chicken-wings',      name: 'Wings',            Icon: Flame,           gradient: 'from-red-500 to-rose-700',       glow: 'shadow-red-600/30' },
  { id: 'salads',             name: 'Salads',           Icon: Salad,           gradient: 'from-green-400 to-teal-500',     glow: 'shadow-green-500/30' },
  { id: 'drinks',             name: 'Drinks',           Icon: Wine,            gradient: 'from-violet-400 to-purple-600',  glow: 'shadow-purple-500/30' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function Categories() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F7F4F0 0%, #FAFAF8 100%)' }}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F5C518 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-10 bg-crazee-red" />
              <span className="text-crazee-red font-bold uppercase tracking-widest text-xs">Explore</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-black text-stone-900 leading-tight"
            >
              Something for<br />
              <span className="gradient-text-fire">Every Craving</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/menu" 
              className="group inline-flex items-center gap-2 bg-stone-900 hover:bg-crazee-red text-white font-bold text-sm px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              Browse Full Menu
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Category Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3"
        >
          {categories.map((cat) => (
            <motion.div key={cat.id} variants={item}>
              <Link
                to={`/menu?category=${cat.id}`}
                className={`group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white border-2 border-transparent hover:border-transparent hover:shadow-xl ${cat.glow} hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Icon circle with gradient */}
                <div className="relative">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${cat.gradient} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}
                  >
                    <cat.Icon size={24} className="text-white drop-shadow" strokeWidth={2} />
                  </div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
                <span className="font-bold text-stone-700 text-xs text-center leading-tight group-hover:text-crazee-red transition-colors">
                  {cat.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
