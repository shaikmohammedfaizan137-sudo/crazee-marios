import { motion } from 'framer-motion';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

// Gallery items 
const galleryItems = [
  { src: `${import.meta.env.BASE_URL}imagess/WhatsApp Image 2026-05-24 at 12.15.34 PM (1).jpeg`, label: 'BBQ Chicken Wings', span: 'md:col-span-2 md:row-span-2' },
  { src: `${import.meta.env.BASE_URL}imagess/WhatsApp Image 2026-05-24 at 12.15.22 PM.jpeg`, label: 'Chicken Tikka Masala', span: '' },
  { src: `${import.meta.env.BASE_URL}imagess/WhatsApp Image 2026-05-24 at 12.15.34 PM.jpeg`, label: 'Beef Seekh Kabob', span: '' },
  { src: `${import.meta.env.BASE_URL}imagess/WhatsApp Image 2026-05-24 at 12.15.36 PM.jpeg`, label: 'Steak & Cheese Sub', span: '' },
  { src: `${import.meta.env.BASE_URL}imagess/WhatsApp Image 2026-05-24 at 12.15.53 PM.jpeg`, label: 'Prawn Biryani', span: '' },
  { src: `${import.meta.env.BASE_URL}imagess/WhatsApp Image 2026-05-24 at 12.15.57 PM (1).jpeg`, label: 'Palak Paneer', span: '' },
  { src: `${import.meta.env.BASE_URL}imagess/WhatsApp Image 2026-05-24 at 12.16.05 PM.jpeg`, label: 'Chicken Tikka Pizza', span: 'md:col-span-2' },
];

export default function Gallery() {
  const { setIsCartOpen } = useCart();

  return (
    <section className="py-28 bg-stone-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-10 bg-crazee-yellow" />
            <span className="text-crazee-yellow font-bold uppercase tracking-widest text-xs">Visual Feast</span>
            <div className="h-px w-10 bg-crazee-yellow" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-black text-white leading-tight mb-4"
          >
            A Feast for the <span className="gradient-text-fire italic">Eyes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 text-lg max-w-lg mx-auto"
          >
            Fresh, bold, and made to impress — every plate is a work of art.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3 mb-14">
          {galleryItems.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Base overlay */}
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors duration-300" />
              {/* Bottom gradient always visible */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-950/80 to-transparent" />

              {/* Label - always visible at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="text-white font-bold text-sm drop-shadow-lg">{img.label}</span>
              </div>

              {/* Hover overlay: order button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => { e.stopPropagation(); setIsCartOpen(true); }}
                  className="bg-white text-stone-900 font-bold text-sm px-5 py-2.5 rounded-full shadow-2xl hover:bg-crazee-yellow transition-colors translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2"
                >
                  <ShoppingCart size={14} />
                  Order
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => setIsCartOpen(true)}
            className="group inline-flex items-center gap-3 bg-crazee-yellow text-stone-950 font-bold text-lg px-10 py-4 rounded-2xl hover:brightness-105 transition-all hover:scale-[1.03] shadow-xl shadow-yellow-500/20"
          >
            <ShoppingCart size={22} />
            Open Cart to Order
          </button>
          <Link
            to="/menu"
            className="group inline-flex items-center gap-2 text-stone-400 hover:text-white font-semibold transition-colors"
          >
            Browse Full Menu
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
