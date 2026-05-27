import { MessageCircle, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function FloatingWhatsApp() {
  const { setIsCartOpen } = useCart();
  return (
    <motion.button
      onClick={() => setIsCartOpen(true)}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1EBE5D] transition-colors flex items-center justify-center group"
      aria-label="Open Cart"
    >
      <ShoppingCart size={32} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-stone-800 text-sm font-semibold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Open Cart
      </span>
      
      {/* Ping effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>
    </motion.button>
  );
}
