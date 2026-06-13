import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menuData } from '../data/menu';
import { ArrowRight, Flame, UtensilsCrossed, Pizza, Beef, Soup, Sandwich, Star, ShoppingCart, Plus } from 'lucide-react';
import ItemDetailModal from './ItemDetailModal';

const categoryIcon = {
  'masala-spicy-pizza': Pizza,
  'pizza':              Pizza,
  'biryani':            Soup,
  'chicken-wings':      Flame,
  'curry':              Soup,
  'stuffed-bread':      Sandwich,
  'kabob':              Beef,
  'burgers':            Beef,
  'chef-special':       Star,
  'appetizers':         UtensilsCrossed,
};

const categoryGradient = {
  'masala-spicy-pizza': 'from-red-500 to-orange-500',
  'biryani':            'from-amber-400 to-yellow-500',
  'chicken-wings':      'from-rose-500 to-red-600',
  'curry':              'from-orange-400 to-amber-500',
  'stuffed-bread':      'from-stone-400 to-stone-600',
  'kabob':              'from-pink-400 to-rose-500',
  'burgers':            'from-yellow-400 to-amber-500',
  'chef-special':       'from-green-400 to-emerald-500',
  'pizza':              'from-blue-400 to-indigo-500',
  'appetizers':         'from-orange-300 to-amber-400',
};

function SpecialCard({ item, index, onSelect }) {
  const IconComponent = categoryIcon[item.category] || UtensilsCrossed;
  const gradient = categoryGradient[item.category] || 'from-stone-400 to-stone-600';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onSelect(item)}
      className="group relative bg-white rounded-3xl overflow-hidden border border-stone-100 hover:border-transparent hover:shadow-2xl hover:shadow-stone-200/80 transition-all duration-400 cursor-pointer hover:-translate-y-2"
    >
      {/* Image area */}
      <div className="relative h-52 overflow-hidden">
        {item.image ? (
          <>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Image gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
          </>
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <IconComponent size={72} className="text-white/80" />
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-crazee-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-red-900/30">
          <Flame size={11} /> Popular
        </div>
        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-sm text-white text-sm font-black px-3 py-1.5 rounded-full">
          ${item.price.toFixed(2)}
        </div>

        {/* Stars at bottom of image */}
        <div className="absolute bottom-3 left-4 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={11} className="text-crazee-yellow fill-crazee-yellow drop-shadow" />
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display font-bold text-xl text-stone-900 mb-2 group-hover:text-crazee-red transition-colors duration-300">
          {item.name}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed mb-5 line-clamp-2">
          {item.description}
        </p>

        {/* CTA Button */}
        <div className="relative overflow-hidden flex items-center justify-center gap-2 w-full font-bold py-3.5 rounded-2xl bg-stone-950 group-hover:bg-crazee-red text-white transition-all duration-400 shadow-md group-hover:shadow-xl group-hover:shadow-red-900/30">
          <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
          <Plus size={18} className="relative z-10" />
          <span className="relative z-10">Customize & Add</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Specials() {
  const specials = menuData.items.filter((i) => i.popular).slice(0, 6);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSelect = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <section className="py-28 bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D92B3A 0%, transparent 70%)' }}
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
              <div className="h-px w-10 bg-crazee-green" />
              <span className="text-crazee-green font-bold uppercase tracking-widest text-xs">Most Loved</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-black text-stone-900 leading-tight"
            >
              Chef's Popular<br />
              <span className="gradient-text-fresh">Picks</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/menu"
              className="group inline-flex items-center gap-2 text-stone-700 hover:text-crazee-red font-bold transition-colors"
            >
              See All Menu Items
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specials.map((item, index) => (
            <SpecialCard key={item.id} item={item} index={index} onSelect={handleSelect} />
          ))}
        </div>
      </div>

      <ItemDetailModal
        item={selectedItem}
        isOpen={modalOpen}
        onClose={handleClose}
      />
    </section>
  );
}
