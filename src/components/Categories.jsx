import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, UtensilsCrossed, Soup, Pizza, Sandwich, Beef, Salad, Wine, Wheat, Flame, Leaf, Coffee, ShoppingBag, Star } from 'lucide-react';

const categories = [
  { id: 'appetizers',         name: 'Appetizers',      Icon: UtensilsCrossed, from: '#FED7AA', to: '#FDBA74' },
  { id: 'biryani',            name: 'Biryani',          Icon: Soup,            from: '#FEF08A', to: '#FCD34D' },
  { id: 'chef-special',       name: 'Chef Special',     Icon: Star,            from: '#FECACA', to: '#F87171' },
  { id: 'veg-curry',          name: 'Veg Curry',        Icon: Leaf,            from: '#BBF7D0', to: '#4ADE80' },
  { id: 'curry',              name: 'Curry',            Icon: Flame,           from: '#FFEDD5', to: '#FB923C' },
  { id: 'kabob',              name: 'Kabob',            Icon: Beef,            from: '#FCE7F3', to: '#EC4899' },
  { id: 'masala-spicy-pizza', name: 'Masala Pizza',     Icon: Pizza,           from: '#FEE2E2', to: '#EF4444' },
  { id: 'pizza',              name: 'Pizza',            Icon: Pizza,           from: '#DBEAFE', to: '#60A5FA' },
  { id: 'burgers',            name: 'Burgers',          Icon: Beef,            from: '#FEF9C3', to: '#EAB308' },
  { id: 'subs',               name: '10" Subs',         Icon: Sandwich,        from: '#E0F2FE', to: '#38BDF8' },
  { id: 'stuffed-bread',      name: 'Stuffed Bread',    Icon: Wheat,           from: '#F5F5F4', to: '#A8A29E' },
  { id: 'chicken-wings',      name: 'Chicken Wings',    Icon: Flame,           from: '#FEE2E2', to: '#DC2626' },
  { id: 'salads',             name: 'Salads',           Icon: Salad,           from: '#DCFCE7', to: '#22C55E' },
  { id: 'drinks',             name: 'Drinks',           Icon: Wine,            from: '#EDE9FE', to: '#8B5CF6' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Categories() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-crazee-red font-bold uppercase tracking-widest text-sm mb-3">Explore</p>
            <h2 className="text-4xl md:text-5xl font-display font-black text-stone-900 leading-tight">
              Something for<br />Every Craving
            </h2>
          </div>
          <Link to="/menu" className="inline-flex items-center gap-2 text-stone-700 hover:text-crazee-red font-semibold transition-colors">
            Browse Full Menu <ArrowRight size={18} />
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
        >
          {categories.map((cat) => (
            <motion.div key={cat.id} variants={item}>
              <Link
                to={`/menu?category=${cat.id}`}
                className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white border border-stone-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg, ${cat.from}, ${cat.to})` }}
                >
                  <cat.Icon size={22} className="text-white drop-shadow" />
                </div>
                <span className="font-semibold text-stone-700 text-xs text-center leading-tight group-hover:text-crazee-green transition-colors">
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
