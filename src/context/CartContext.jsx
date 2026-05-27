import { createContext, useContext, useReducer, useEffect, useState } from 'react';

// ─── Context ────────────────────────────────────────────────────────────────
export const CartContext = createContext(null);

// ─── Reducer ────────────────────────────────────────────────────────────────
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.find((i) => i.id === action.item.id);
      if (existing) {
        return state.map((i) =>
          i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...state, { ...action.item, qty: 1 }];
    }
    case 'REMOVE':
      return state.filter((i) => i.id !== action.id);
    case 'INCREMENT':
      return state.map((i) =>
        i.id === action.id ? { ...i, qty: i.qty + 1 } : i
      );
    case 'DECREMENT':
      return state
        .map((i) => (i.id === action.id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0);
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

// ─── Provider ───────────────────────────────────────────────────────────────
const STORAGE_KEY = 'crazee_mario_cart';

function loadFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadFromStorage);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const addToCart   = (item) => dispatch({ type: 'ADD', item });
  const removeItem  = (id)   => dispatch({ type: 'REMOVE', id });
  const increment   = (id)   => dispatch({ type: 'INCREMENT', id });
  const decrement   = (id)   => dispatch({ type: 'DECREMENT', id });
  const clearCart   = ()     => dispatch({ type: 'CLEAR' });

  return (
    <CartContext.Provider
      value={{ 
        cart, totalItems, subtotal, 
        addToCart, removeItem, increment, decrement, clearCart,
        isCartOpen, setIsCartOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ─── Hook ───────────────────────────────────────────────────────────────────
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
