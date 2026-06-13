import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingCart, Flame, MessageCircle, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

// ── Add-on options by category ───────────────────────────────────────────────
const addonsByCategory = {
  'appetizers': [
    { id: 'extra-chutney', name: 'Extra Chutney', price: 0.50 },
    { id: 'raita-side', name: 'Raita Side', price: 1.50 },
    { id: 'extra-sauce', name: 'Extra Dipping Sauce', price: 0.75 },
  ],
  'biryani': [
    { id: 'raita', name: 'Raita', price: 1.50 },
    { id: 'extra-rice', name: 'Extra Rice', price: 3.00 },
    { id: 'boiled-egg', name: 'Add Boiled Egg', price: 1.00 },
    { id: 'side-salad', name: 'Side Salad', price: 2.50 },
  ],
  'naan': [
    { id: 'extra-butter', name: 'Extra Butter', price: 0.50 },
    { id: 'extra-cheese', name: 'Extra Cheese', price: 1.50 },
    { id: 'garlic-topping', name: 'Add Garlic Topping', price: 0.75 },
  ],
  'chef-special': [
    { id: 'naan-side', name: 'Add Naan', price: 1.50 },
    { id: 'rice-side', name: 'Add Rice', price: 3.00 },
    { id: 'extra-spicy', name: 'Make Extra Spicy', price: 0.00 },
    { id: 'raita', name: 'Raita', price: 1.50 },
  ],
  'veg-curry': [
    { id: 'naan-side', name: 'Add Naan', price: 1.50 },
    { id: 'rice-side', name: 'Add Rice', price: 3.00 },
    { id: 'extra-spicy', name: 'Make Extra Spicy', price: 0.00 },
    { id: 'paneer-add', name: 'Add Paneer', price: 2.50 },
  ],
  'curry': [
    { id: 'naan-side', name: 'Add Naan', price: 1.50 },
    { id: 'rice-side', name: 'Add Rice', price: 3.00 },
    { id: 'extra-spicy', name: 'Make Extra Spicy', price: 0.00 },
    { id: 'raita', name: 'Raita', price: 1.50 },
  ],
  'kabob': [
    { id: 'naan-side', name: 'Add Naan', price: 1.50 },
    { id: 'rice-side', name: 'Add Rice', price: 3.00 },
    { id: 'extra-chutney', name: 'Extra Chutney', price: 0.50 },
    { id: 'side-salad', name: 'Side Salad', price: 2.50 },
  ],
  'masala-spicy-pizza': [
    { id: 'extra-cheese', name: 'Extra Cheese', price: 2.00 },
    { id: 'extra-jalapeño', name: 'Add Jalapeños', price: 1.00 },
    { id: 'ranch-side', name: 'Ranch Dipping Sauce', price: 0.75 },
    { id: 'garlic-sauce', name: 'Garlic Sauce', price: 0.75 },
  ],
  'pizza': [
    { id: 'extra-cheese', name: 'Extra Cheese', price: 2.00 },
    { id: 'extra-jalapeño', name: 'Add Jalapeños', price: 1.00 },
    { id: 'ranch-side', name: 'Ranch Dipping Sauce', price: 0.75 },
    { id: 'garlic-sauce', name: 'Garlic Sauce', price: 0.75 },
  ],
  'burgers': [
    { id: 'extra-patty', name: 'Extra Patty', price: 3.00 },
    { id: 'extra-cheese', name: 'Add Cheese', price: 1.00 },
    { id: 'bacon', name: 'Add Bacon', price: 1.50 },
    { id: 'fries-side', name: 'Add Fries', price: 2.50 },
  ],
  'subs': [
    { id: 'extra-cheese', name: 'Extra Cheese', price: 1.00 },
    { id: 'extra-meat', name: 'Extra Meat', price: 2.50 },
    { id: 'add-avocado', name: 'Add Avocado', price: 1.50 },
  ],
  'stuffed-bread': [
    { id: 'extra-filling', name: 'Extra Filling', price: 1.50 },
    { id: 'extra-cheese', name: 'Extra Cheese', price: 1.50 },
    { id: 'chutney', name: 'Side Chutney', price: 0.50 },
  ],
  'chicken-wings': [
    { id: 'extra-sauce', name: 'Extra Sauce', price: 0.75 },
    { id: 'ranch-dip', name: 'Ranch Dip', price: 0.75 },
    { id: 'blue-cheese', name: 'Blue Cheese Dip', price: 0.75 },
    { id: 'fries-side', name: 'Add Fries', price: 2.50 },
  ],
  'salads': [
    { id: 'extra-dressing', name: 'Extra Dressing', price: 0.75 },
    { id: 'add-chicken', name: 'Add Grilled Chicken', price: 3.00 },
    { id: 'add-paneer', name: 'Add Paneer', price: 2.50 },
  ],
  'sides': [
    { id: 'extra-sauce', name: 'Extra Sauce', price: 0.50 },
  ],
  'drinks': [],
};

const spiceLevels = ['Mild', 'Medium', 'Spicy', 'Extra Spicy'];
const spiceCategories = ['biryani', 'chef-special', 'veg-curry', 'curry', 'kabob', 'masala-spicy-pizza'];

// ── Modal Component ──────────────────────────────────────────────────────────
export default function ItemDetailModal({ item, isOpen, onClose }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedChoices, setSelectedChoices] = useState({});
  const [spiceLevel, setSpiceLevel] = useState('Medium');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [justAdded, setJustAdded] = useState(false);
  const overlayRef = useRef(null);

  // Reset when item changes
  useEffect(() => {
    if (isOpen && item) {
      setQuantity(1);
      setSelectedAddons([]);
      setSpiceLevel('Medium');
      setSpecialInstructions('');
      setJustAdded(false);
      // Initialize defaults for size and choices
      setSelectedSize(item.sizes && item.sizes.length > 0 ? item.sizes[0] : null);
      if (item.choices) {
        const initialChoices = {};
        item.choices.forEach(choiceGroup => {
          if (choiceGroup.options && choiceGroup.options.length > 0) {
            initialChoices[choiceGroup.group] = choiceGroup.options[0];
          }
        });
        setSelectedChoices(initialChoices);
      } else {
        setSelectedChoices({});
      }
    }
  }, [isOpen, item]);

  if (!item) return null;

  const addons = addonsByCategory[item.category] || [];
  const showSpice = spiceCategories.includes(item.category);

  const toggleAddon = (addon) => {
    setSelectedAddons((prev) =>
      prev.find((a) => a.id === addon.id)
        ? prev.filter((a) => a.id !== addon.id)
        : [...prev, addon]
    );
  };

  const addonTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const sizeExtra = selectedSize ? selectedSize.extra : 0;
  const choicesExtra = Object.values(selectedChoices).reduce((sum, c) => sum + (c.extra || 0), 0);
  
  const basePrice = item.price;
  const itemTotal = (basePrice + addonTotal + sizeExtra + choicesExtra) * quantity;

  const handleAddToCart = () => {
    // Build a unique id for this combination
    const addonSuffix = selectedAddons.map((a) => a.id).sort().join('+');
    const sizeStr = selectedSize ? `__size_${selectedSize.label}` : '';
    const choiceStr = Object.entries(selectedChoices).map(([k,v]) => `__${k}_${v.label}`).sort().join('');
    const uniqueId = `${item.id}${sizeStr}${choiceStr}${addonSuffix ? `__${addonSuffix}` : ''}${showSpice ? `__${spiceLevel}` : ''}`;

    const addonNames = selectedAddons.map((a) => a.name).join(', ');
    const choiceNames = Object.entries(selectedChoices).map(([k,v]) => `${k}: ${v.label}`).join(', ');
    
    let combinedAddons = [];
    if (addonNames) combinedAddons.push(addonNames);
    if (choiceNames) combinedAddons.push(choiceNames);

    const cartItem = {
      ...item,
      id: uniqueId,
      originalId: item.id,
      name: selectedSize ? `${item.name} (${selectedSize.label})` : item.name,
      price: basePrice + addonTotal + sizeExtra + choicesExtra,
      addons: combinedAddons.join(' | ') || null,
      spiceLevel: showSpice ? spiceLevel : null,
      specialInstructions: specialInstructions.trim() || null,
    };

    for (let i = 0; i < quantity; i++) {
      addToCart(cartItem);
    }

    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={(e) => e.target === overlayRef.current && onClose()}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-white w-full sm:max-w-lg sm:rounded-3xl rounded-t-3xl max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            >
              <X size={20} className="text-stone-700" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1">

              {/* Image */}
              {item.image ? (
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={encodeURI(item.image)}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  {item.popular && (
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1 bg-crazee-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      <Flame size={12} /> Popular
                    </span>
                  )}
                </div>
              ) : (
                <div className="h-8" />
              )}

              <div className="p-6 space-y-6">
                {/* Name & Price */}
                <div>
                  <h2 className="font-display font-black text-2xl text-stone-900 mb-1.5">{item.name}</h2>
                  <p className="text-stone-500 text-sm leading-relaxed mb-3">{item.description}</p>
                  <div className="flex items-center gap-3">
                    <span className="font-black text-2xl text-crazee-green">${(item.price + sizeExtra + choicesExtra).toFixed(2)}</span>
                  </div>
                </div>

                {/* Size Selection */}
                {item.sizes && item.sizes.length > 0 && (
                  <div>
                    <h3 className="font-display font-bold text-stone-900 text-sm mb-3 flex items-center gap-2">
                      Size Selection
                      <span className="text-[10px] font-bold text-[#b45309] bg-[#fef3c7] px-1.5 py-0.5 rounded">Required</span>
                    </h3>
                    <div className="space-y-0">
                      {item.sizes.map((sz, idx) => {
                        const isSelected = selectedSize?.label === sz.label;
                        return (
                          <label key={sz.label} className={`flex items-center justify-between p-4 cursor-pointer hover:bg-stone-50 transition-colors ${idx !== 0 ? 'border-t border-stone-100' : ''}`}>
                            <div className="flex items-center gap-4">
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'border-stone-900' : 'border-stone-300'}`}>
                                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-stone-900" />}
                              </div>
                              <div className="flex flex-col">
                                <span className={`text-sm font-semibold ${isSelected ? 'text-stone-900' : 'text-stone-700'}`}>
                                  {sz.label}
                                </span>
                                {sz.extra > 0 && <span className="text-stone-500 text-xs">+${sz.extra.toFixed(2)}</span>}
                              </div>
                            </div>
                            <input
                              type="radio"
                              name="size"
                              value={sz.label}
                              checked={isSelected}
                              onChange={() => setSelectedSize(sz)}
                              className="hidden"
                            />
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Choices (Meat, Flavors, etc.) */}
                {item.choices && item.choices.map((choiceGroup, groupIdx) => (
                  <div key={choiceGroup.group} className={groupIdx > 0 ? 'mt-6' : ''}>
                    <h3 className="font-display font-bold text-stone-900 text-sm mb-3 flex items-center gap-2">
                      {choiceGroup.group} Selection
                      {choiceGroup.required && (
                        <span className="text-[10px] font-bold text-[#b45309] bg-[#fef3c7] px-1.5 py-0.5 rounded">Required</span>
                      )}
                    </h3>
                    <div className="space-y-0">
                      {choiceGroup.options.map((opt, idx) => {
                        const isSelected = selectedChoices[choiceGroup.group]?.label === opt.label;
                        return (
                          <label key={opt.label} className={`flex items-center justify-between p-4 cursor-pointer hover:bg-stone-50 transition-colors ${idx !== 0 ? 'border-t border-stone-100' : ''}`}>
                            <div className="flex items-center gap-4">
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'border-stone-900' : 'border-stone-300'}`}>
                                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-stone-900" />}
                              </div>
                              <div className="flex flex-col">
                                <span className={`text-sm font-semibold ${isSelected ? 'text-stone-900' : 'text-stone-700'}`}>
                                  {opt.label}
                                </span>
                                {opt.extra > 0 && <span className="text-stone-500 text-xs">+${opt.extra.toFixed(2)}</span>}
                              </div>
                            </div>
                            <input
                              type="radio"
                              name={choiceGroup.group}
                              value={opt.label}
                              checked={isSelected}
                              onChange={() => setSelectedChoices(prev => ({ ...prev, [choiceGroup.group]: opt }))}
                              className="hidden"
                            />
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Spice Level */}
                {showSpice && (
                  <div>
                    <h3 className="font-display font-bold text-stone-900 text-sm mb-3">
                      🌶️ Spice Level
                    </h3>
                    <div className="flex gap-2">
                      {spiceLevels.map((level) => (
                        <button
                          key={level}
                          onClick={() => setSpiceLevel(level)}
                          className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                            spiceLevel === level
                              ? 'bg-crazee-red text-white shadow-md scale-105'
                              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add-ons */}
                {addons.length > 0 && (
                  <div>
                    <h3 className="font-display font-bold text-stone-900 text-sm mb-3">
                      ✨ Add-ons <span className="text-stone-400 font-normal">(Optional)</span>
                    </h3>
                    <div className="space-y-2">
                      {addons.map((addon) => {
                        const isSelected = selectedAddons.find((a) => a.id === addon.id);
                        return (
                          <button
                            key={addon.id}
                            onClick={() => toggleAddon(addon)}
                            className={`w-full flex items-center justify-between p-3.5 rounded-xl border-2 transition-all duration-200 ${
                              isSelected
                                ? 'border-crazee-green bg-green-50'
                                : 'border-stone-100 bg-white hover:border-stone-200'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                                isSelected
                                  ? 'bg-crazee-green border-crazee-green'
                                  : 'border-stone-300'
                              }`}>
                                {isSelected && <Check size={13} className="text-white" />}
                              </div>
                              <span className={`text-sm font-semibold ${isSelected ? 'text-stone-900' : 'text-stone-700'}`}>
                                {addon.name}
                              </span>
                            </div>
                            <span className={`text-sm font-bold ${addon.price === 0 ? 'text-crazee-green' : 'text-stone-500'}`}>
                              {addon.price === 0 ? 'Free' : `+$${addon.price.toFixed(2)}`}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Special Instructions */}
                <div>
                  <h3 className="font-display font-bold text-stone-900 text-sm mb-3">
                    📝 Special Instructions <span className="text-stone-400 font-normal">(Optional)</span>
                  </h3>
                  <textarea
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    placeholder="e.g. No onions, extra spicy, allergy notes..."
                    rows={2}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:border-crazee-green transition-colors resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Bottom — Quantity + Add to Cart */}
            <div className="border-t border-stone-100 bg-white p-5 space-y-4">

              {/* Quantity Control */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-stone-700">Quantity</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-xl bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-8 text-center font-black text-xl text-stone-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-xl bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={justAdded}
                className={`w-full flex items-center justify-center gap-3 font-bold text-lg py-4 rounded-2xl transition-all duration-300 transform ${
                  justAdded
                    ? 'bg-crazee-green text-white scale-95'
                    : 'bg-stone-900 hover:bg-crazee-green text-white hover:scale-[1.02] shadow-xl'
                }`}
              >
                {justAdded ? (
                  <>
                    <Check size={22} /> Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} />
                    Add to Cart — ${itemTotal.toFixed(2)}
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
