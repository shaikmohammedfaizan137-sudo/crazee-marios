import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, X, Flame, Pizza, Soup, Beef, Sandwich, UtensilsCrossed, Salad, Wine, Star, Wheat, Leaf, Plus, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menu';
import ItemDetailModal from '../components/ItemDetailModal';

const categoryIcon = {
  'appetizers':         UtensilsCrossed,
  'biryani':            Soup,
  'naan':               Wheat,
  'chef-special':       Star,
  'veg-curry':          Leaf,
  'curry':              Soup,
  'kabob':              Beef,
  'masala-spicy-pizza': Pizza,
  'pizza':              Pizza,
  'burgers':            Beef,
  'subs':               Sandwich,
  'stuffed-bread':      Wheat,
  'chicken-wings':      Flame,
  'salads':             Salad,
  'sides':              UtensilsCrossed,
  'drinks':             Wine,
};

// ── Menu Card — horizontal layout ────────────────────────────────────────────
function MenuCard({ item, onSelect }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
      onClick={() => onSelect(item)}
      className="group bg-white rounded-2xl border border-stone-100 hover:border-crazee-green/30 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-row h-[180px] cursor-pointer"
    >
      {/* Left: Text Content */}
      <div className="flex-1 p-5 flex flex-col justify-between min-w-0">
        <div>
          <div className="flex items-start gap-2 mb-1.5">
            <h3 className="font-display font-bold text-stone-900 leading-snug group-hover:text-crazee-green transition-colors text-[15px] line-clamp-2 flex-1">
              {item.name}
            </h3>
            {item.popular && (
              <span className="shrink-0 inline-flex items-center gap-0.5 bg-crazee-red/10 text-crazee-red text-[10px] font-bold px-1.5 py-0.5 rounded-md mt-0.5">
                <Flame size={9} /> Popular
              </span>
            )}
          </div>

          {item.description && (
            <p className="text-stone-400 text-xs leading-relaxed mb-2 line-clamp-2">{item.description}</p>
          )}

          {item.sizes && (
            <div className="flex flex-wrap gap-1 mb-2">
              {item.sizes.map((s) => (
                <span key={s.label} className="text-[10px] bg-stone-100 text-stone-500 font-semibold px-1.5 py-0.5 rounded">{s.label}</span>
              ))}
            </div>
          )}
        </div>

        {/* Price + Add button */}
        <div className="flex items-center gap-3">
          <span className="font-black text-lg text-crazee-green">${item.price.toFixed(2)}</span>
          <div
            className="w-9 h-9 rounded-full bg-stone-900 group-hover:bg-crazee-green text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110"
            title="Customize & Add"
          >
            <Plus size={18} />
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-[160px] shrink-0 relative overflow-hidden">
        {item.image ? (
          <img
            src={encodeURI(item.image)}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center">
            <Coffee size={32} className="text-stone-300" />
          </div>
        )}
        {/* Subtle left fade */}
        <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent" />
      </div>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function MenuPage() {
  const location = useLocation();
  const queryCategory = new URLSearchParams(location.search).get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(queryCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => { setActiveCategory(queryCategory); }, [queryCategory]);

  const filtered = menuData.items.filter((item) => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const activeCatName = activeCategory === 'all'
    ? 'All Items'
    : menuData.categories.find((c) => c.id === activeCategory)?.name || activeCategory;

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <div className="bg-stone-50 min-h-screen">

      {/* Header */}
      <section className="bg-stone-900 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-crazee-yellow font-bold uppercase tracking-widest text-sm mb-3">Explore</p>
          <h1 className="text-5xl md:text-6xl font-display font-black mb-6">Our Full Menu</h1>
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search biryani, wings, pizza..."
              className="w-full bg-white/10 backdrop-blur border border-white/20 rounded-2xl py-4 pl-12 pr-12 text-white placeholder-stone-400 focus:outline-none focus:border-crazee-green transition-colors"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white">
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <button
            onClick={() => setActiveCategory('all')}
            className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
              activeCategory === 'all' ? 'bg-stone-900 text-white shadow-lg' : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
            }`}
          >
            <UtensilsCrossed size={15} /> All Items
          </button>
          {menuData.categories.map((cat) => {
            const Icon = categoryIcon[cat.id] || UtensilsCrossed;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                  activeCategory === cat.id ? 'bg-crazee-red text-white shadow-lg' : 'bg-white text-stone-600 border border-stone-200 hover:border-crazee-red'
                }`}
              >
                <Icon size={15} /> {cat.name}
              </button>
            );
          })}
        </div>

        {/* Results count + Category title */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-display font-black text-stone-900">{activeCatName}</h2>
            <p className="text-stone-400 text-sm mt-0.5">
              {filtered.length} item{filtered.length !== 1 ? 's' : ''}
              {searchQuery && <span className="text-crazee-red ml-1">for "{searchQuery}"</span>}
            </p>
          </div>
          {(searchQuery || activeCategory !== 'all') && (
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="text-sm text-stone-500 hover:text-crazee-red font-semibold flex items-center gap-1 transition-colors"
            >
              <X size={14} /> Clear filters
            </button>
          )}
        </div>

        {/* Items Grid — 2-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <AnimatePresence>
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <MenuCard key={item.id} item={item} onSelect={handleSelectItem} />
              ))
            ) : (
              <div className="col-span-full py-24 text-center">
                <Search size={48} className="text-stone-300 mx-auto mb-4" />
                <p className="text-xl font-display font-bold text-stone-700 mb-2">No items found</p>
                <p className="text-stone-400 mb-6">Try a different keyword or browse all categories.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="bg-crazee-red text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition-colors"
                >
                  Show All Items
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Item Detail Modal */}
      <ItemDetailModal
        item={selectedItem}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
