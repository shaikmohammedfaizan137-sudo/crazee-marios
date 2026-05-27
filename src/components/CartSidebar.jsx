import { AnimatePresence, motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, X, MessageCircle, ChevronRight, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartSidebar({ isOpen, onClose }) {
  const { cart, totalItems, subtotal, removeItem, increment, decrement, clearCart } = useCart();

  const whatsappUrl = () => {
    const itemLines = cart
      .map((i) => {
        let line = `*${i.qty}x ${i.name}*\n💰 $${(i.price * i.qty).toFixed(2)}`;
        if (i.spiceLevel) line += `\n🌶️ Spice: ${i.spiceLevel}`;
        if (i.addons) line += `\n➕ Add-ons: ${i.addons.replace(/ \| /g, ', ')}`;
        if (i.specialInstructions) line += `\n📝 Note: ${i.specialInstructions}`;
        return line;
      })
      .join('\n\n');
      
    const msg = `*NEW ORDER - CRAZEE MARIOS* 🛒\n------------------------------\n\n${itemLines}\n\n------------------------------\n*Order Total:* $${subtotal.toFixed(2)}`;
    return `https://wa.me/15612943062?text=${encodeURIComponent(msg)}`;
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100 bg-stone-900">
              <div className="flex items-center gap-3">
                <ShoppingBag size={22} className="text-crazee-yellow" />
                <h2 className="text-white font-display font-black text-xl">Your Cart</h2>
                {totalItems > 0 && (
                  <span className="bg-crazee-red text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {totalItems} item{totalItems !== 1 ? 's' : ''}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="text-stone-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              >
                <X size={22} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mb-5">
                    <ShoppingBag size={40} className="text-stone-300" />
                  </div>
                  <p className="text-xl font-display font-black text-stone-700 mb-2">Your cart is empty</p>
                  <p className="text-stone-400 text-sm mb-6">Add some delicious items from our menu!</p>
                  <button
                    onClick={onClose}
                    className="inline-flex items-center gap-2 bg-crazee-red text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition-colors"
                  >
                    Browse Menu <ChevronRight size={16} />
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <AnimatePresence initial={false}>
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 40, height: 0, marginBottom: 0 }}
                        transition={{ duration: 0.22 }}
                        className="flex gap-3 bg-stone-50 rounded-2xl p-3 border border-stone-100"
                      >
                        {/* Image */}
                        <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-stone-200">
                          {item.image ? (
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <ShoppingBag size={20} className="text-stone-400" />
                            </div>
                          )}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="font-display font-bold text-stone-900 text-sm leading-tight truncate">{item.name}</p>

                          {/* Add-ons / Spice / Notes */}
                          {item.addons && (
                            <p className="text-[11px] text-stone-400 truncate mt-0.5">+ {item.addons}</p>
                          )}
                          {item.spiceLevel && (
                            <span className="inline-flex items-center gap-0.5 text-[10px] text-crazee-red font-semibold mt-0.5">
                              <Flame size={8} /> {item.spiceLevel}
                            </span>
                          )}

                          <div className="flex items-center justify-between mt-1.5">
                            <p className="text-crazee-green font-black text-sm">${(item.price * item.qty).toFixed(2)}</p>

                            {/* Qty Controls */}
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => decrement(item.id)}
                                className="w-7 h-7 rounded-lg bg-stone-200 hover:bg-crazee-red hover:text-white text-stone-700 flex items-center justify-center transition-colors"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="w-6 text-center font-bold text-stone-900 text-sm">{item.qty}</span>
                              <button
                                onClick={() => increment(item.id)}
                                className="w-7 h-7 rounded-lg bg-stone-200 hover:bg-crazee-green hover:text-white text-stone-700 flex items-center justify-center transition-colors"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-stone-300 hover:text-red-500 transition-colors self-start mt-1"
                        >
                          <Trash2 size={14} />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Clear Cart */}
                  <button
                    onClick={clearCart}
                    className="w-full text-stone-400 hover:text-red-500 text-xs font-semibold flex items-center justify-center gap-1 py-2 transition-colors"
                  >
                    <Trash2 size={12} /> Clear all items
                  </button>
                </div>
              )}
            </div>

            {/* Footer — Checkout */}
            {cart.length > 0 && (
              <div className="border-t border-stone-100 px-6 py-5 bg-stone-50 space-y-4">
                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <span className="text-stone-500 font-semibold">Subtotal</span>
                  <span className="text-2xl font-black text-stone-900">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-stone-400 -mt-2">Final price may vary. Taxes and fees applied at checkout.</p>

                {/* WhatsApp Checkout */}
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  onClick={onClose}
                  className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-black text-lg py-4 rounded-2xl transition-all transform hover:scale-[1.02] shadow-lg shadow-green-500/30"
                >
                  <MessageCircle size={22} />
                  Order via WhatsApp
                </a>
                <p className="text-xs text-stone-400 text-center">
                  You'll be redirected to WhatsApp with your complete order.
                </p>
              </div>
            )}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
