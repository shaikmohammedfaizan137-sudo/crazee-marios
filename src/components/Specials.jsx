import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menuData } from '../data/menu';
import { ArrowRight, Flame, UtensilsCrossed, Pizza, Beef, Soup, Sandwich, Star, Plus } from 'lucide-react';
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
  'masala-spicy-pizza': 'from-red-400 to-orange-500',
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
      key={item.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onSelect(item)}
      className="group bg-stone-50 rounded-3xl overflow-hidden border border-stone-100 hover:border-stone-200 hover:shadow-2xl hover:shadow-stone-200/80 transition-all duration-300 cursor-pointer"
    >
      {/* Visual Header */}
      <div className="relative h-44 overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <IconComponent size={72} className="text-white/80" />
          </div>
        )}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur text-crazee-red text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
          <Flame size={12} /> Popular
        </div>
        <div className="absolute top-4 right-4 bg-stone-900/80 backdrop-blur text-white text-sm font-black px-3 py-1.5 rounded-full">
          ${item.price.toFixed(2)}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display font-bold text-xl text-stone-900 mb-2 group-hover:text-crazee-green transition-colors">
          {item.name}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Customize & Add button */}
        <div className="flex items-center justify-center gap-2 w-full font-bold py-3 rounded-xl bg-stone-900 group-hover:bg-crazee-green text-white transition-all duration-300">
          <Plus size={18} /> Customize & Add
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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-crazee-green font-bold uppercase tracking-widest text-sm mb-3">Most Loved</p>
            <h2 className="text-4xl md:text-5xl font-display font-black text-stone-900 leading-tight">
              Chef's Popular<br />Picks
            </h2>
          </div>
          <Link to="/menu" className="inline-flex items-center gap-2 text-stone-700 hover:text-crazee-red font-semibold transition-colors">
            See All Menu Items <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specials.map((item, index) => (
            <SpecialCard key={item.id} item={item} index={index} onSelect={handleSelect} />
          ))}
        </div>
      </div>

      {/* Item Detail Modal */}
      <ItemDetailModal
        item={selectedItem}
        isOpen={modalOpen}
        onClose={handleClose}
      />
    </section>
  );
}
