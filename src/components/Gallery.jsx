import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Gallery items — each image verified by visual inspection
const galleryItems = [
  // Large hero tile: BBQ Chicken Wings on foil tray (12.15.34 PM (1))
  { src: '/imagess/WhatsApp Image 2026-05-24 at 12.15.34 PM (1).jpeg', label: 'BBQ Chicken Wings', span: 'md:col-span-2 md:row-span-2' },
  // Chicken Tikka Masala (12.15.22 PM) — rich orange curry
  { src: '/imagess/WhatsApp Image 2026-05-24 at 12.15.22 PM.jpeg', label: 'Chicken Tikka Masala', span: '' },
  // Beef Seekh Kabob plate (12.15.34 PM) — grilled kabobs
  { src: '/imagess/WhatsApp Image 2026-05-24 at 12.15.34 PM.jpeg', label: 'Beef Seekh Kabob', span: '' },
  // Steak & Cheese Sub (12.15.36 PM)
  { src: '/imagess/WhatsApp Image 2026-05-24 at 12.15.36 PM.jpeg', label: 'Steak & Cheese Sub', span: '' },
  // Prawn Biryani (12.15.53 PM)
  { src: '/imagess/WhatsApp Image 2026-05-24 at 12.15.53 PM.jpeg', label: 'Prawn Biryani', span: '' },
  // Palak Paneer (12.15.57 PM (1)) — bright green
  { src: '/imagess/WhatsApp Image 2026-05-24 at 12.15.57 PM (1).jpeg', label: 'Palak Paneer', span: '' },
  // Masala Chicken Pizza (12.16.05 PM) — tikka pizza
  { src: '/imagess/WhatsApp Image 2026-05-24 at 12.16.05 PM.jpeg', label: 'Chicken Tikka Pizza', span: 'md:col-span-2' },
];

export default function Gallery() {
  const { setIsCartOpen } = useCart();
  return (
    <section className="py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-crazee-yellow font-bold uppercase tracking-widest text-sm mb-3">Visual Feast</p>
          <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
            A Feast for the Eyes
          </h2>
          <p className="text-stone-400 mt-4 text-lg max-w-xl mx-auto">
            Fresh, bold, and made to impress — every plate at Crazee Marios is a work of art.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4">
          {galleryItems.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

              <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-4 w-full">
                  <span className="text-white font-display font-bold text-lg drop-shadow-lg">{img.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setIsCartOpen(true)}
            className="inline-flex items-center gap-3 bg-crazee-yellow text-stone-900 font-bold text-lg px-10 py-4 rounded-2xl hover:brightness-105 transition-all transform hover:scale-[1.02] shadow-xl shadow-yellow-500/20"
          >
            <ShoppingCart size={22} /> Open Cart to Order
          </button>
        </div>
      </div>
    </section>
  );
}
