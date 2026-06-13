import { motion } from 'framer-motion';
import { ThumbsUp, ShieldCheck, Utensils, Home, Users, BookOpen, Car, Bike, ArrowRight, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

// ─────────────────────────────────────────────────────────────
// SECTION 1: Our Commitment to Quality
// ─────────────────────────────────────────────────────────────
const commitments = [
  {
    icon: ThumbsUp,
    label: '18 Years of Experience',
    desc: 'Serving bold, authentic flavors since 2006.',
    gradient: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-500/10',
    border: 'hover:border-amber-400/30',
  },
  {
    icon: ShieldCheck,
    label: '100% Halal Certified',
    desc: 'Every ingredient is certified halal — always.',
    gradient: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-500/10',
    border: 'hover:border-emerald-400/30',
  },
  {
    icon: Utensils,
    label: 'Hygienic Kitchen',
    desc: 'Prepared in a spotlessly clean, safe kitchen.',
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-500/10',
    border: 'hover:border-blue-400/30',
  },
  {
    icon: Home,
    label: 'Authentic Asian Touch',
    desc: 'Genuine South Asian and Eastern recipes.',
    gradient: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-500/10',
    border: 'hover:border-purple-400/30',
  },
];

function CommitmentSection() {
  return (
    <section className="py-28 bg-stone-950 relative overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-[160px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00843D 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-crazee-yellow" />
            <span className="text-crazee-yellow font-bold uppercase tracking-widest text-xs">Why Choose Us</span>
            <div className="h-px w-10 bg-crazee-yellow" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
            Our Commitment to<br />
            <span className="gradient-text-fresh">Quality & Tradition</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {commitments.map((c, i) => (
            <motion.div
              key={c.label}
              {...fadeUp(i * 0.1)}
              className={`group relative bg-stone-900/80 backdrop-blur border-2 border-stone-800 ${c.border} rounded-3xl p-8 text-center transition-all duration-400 hover:-translate-y-2 overflow-hidden`}
            >
              {/* Glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-400 rounded-3xl`} />
              
              {/* Icon */}
              <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <c.icon size={36} className="text-white" />
              </div>

              <h3 className="relative font-display font-black text-white text-lg mb-3 leading-tight">{c.label}</h3>
              <p className="relative text-stone-400 text-sm leading-relaxed">{c.desc}</p>

              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-20 h-1 bg-gradient-to-r ${c.gradient} rounded-full transition-all duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION 2: Order Platforms
// ─────────────────────────────────────────────────────────────
const platforms = [
  { name: 'Uber Eats', href: 'https://www.ubereats.com/', img: '/crazee-marios/imagess/uber eats.png' },
  { name: 'Grubhub', href: 'https://www.grubhub.com/', img: '/crazee-marios/imagess/Grubhub.png' },
  { name: 'BentoBox', href: 'https://www.bentobox.net/', img: '/crazee-marios/imagess/bentobox.jfif' },
  { name: 'DoorDash', href: 'https://www.doordash.com/', img: '/crazee-marios/imagess/Doordash.png' },
  { name: 'Slice', href: 'https://slicelife.com/', img: '/crazee-marios/imagess/Slice.png' },
];

function OrderPlatformsSection() {
  const { setIsCartOpen } = useCart();
  return (
    <section className="py-28 bg-crazee-cream relative overflow-hidden">
      {/* Wave/blob decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F5C518 0%, transparent 70%)' }}
      />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeUp()}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-crazee-red" />
            <span className="text-crazee-red font-bold uppercase tracking-widest text-xs">Delivery</span>
            <div className="h-px w-10 bg-crazee-red" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-stone-900 mb-4">
            Order From Your<br />
            <span className="gradient-text-fire">Favorite Platform</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto mb-14">
            Fresh, hot, and straight to your door — choose your preferred delivery app.
          </p>
        </motion.div>

        {/* Platform logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-14">
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              {...fadeUp(i * 0.08)}
              whileHover={{ y: -8, scale: 1.08 }}
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-20 h-20 rounded-3xl shadow-xl bg-white overflow-hidden flex items-center justify-center group-hover:shadow-2xl transition-all duration-300 border border-stone-100">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover rounded-3xl" />
              </div>
              <span className="font-bold text-stone-700 text-sm group-hover:text-stone-900 transition-colors">{p.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-stone-200" />
          <span className="text-stone-400 text-sm font-medium px-4">or order directly</span>
          <div className="flex-1 h-px bg-stone-200" />
        </div>

        {/* Direct order via WhatsApp/Cart */}
        <motion.div {...fadeUp(0.4)}>
          <button
            onClick={() => setIsCartOpen(true)}
            className="group inline-flex items-center gap-3 bg-crazee-green hover:bg-green-700 text-white font-bold text-lg px-10 py-4 rounded-2xl transition-all hover:scale-[1.03] shadow-xl shadow-green-900/20"
          >
            <ShoppingCart size={22} className="group-hover:animate-bounce" />
            Open Cart to Order Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION 3: Why Dine With Us
// ─────────────────────────────────────────────────────────────
const features = [
  { icon: Users, label: 'Friendly Service', desc: 'Our welcoming team ensures you always feel right at home.', gradient: 'from-rose-500 to-pink-600' },
  { icon: BookOpen, label: 'Original Recipes', desc: 'Distinctive, authentic recipes crafted with care for a truly memorable experience.', gradient: 'from-amber-500 to-orange-600' },
  { icon: Car, label: 'Comfort Awaits', desc: 'A cozy atmosphere where great food and company create lasting memories.', gradient: 'from-blue-500 to-indigo-600' },
  { icon: Bike, label: 'Fast Delivery', desc: 'Count on us for quick delivery — fresh, hot, and delicious every time.', gradient: 'from-green-500 to-teal-600' },
];

function FeaturesSection() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00843D 0%, transparent 70%)' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-crazee-green" />
            <span className="text-crazee-green font-bold uppercase tracking-widest text-xs">The Crazee Difference</span>
            <div className="h-px w-10 bg-crazee-green" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-stone-900">
            Why Dine <span className="gradient-text-fresh">With Us?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              {...fadeUp(i * 0.1)}
              className="group relative bg-stone-50 hover:bg-white rounded-3xl p-8 border-2 border-transparent hover:border-stone-100 hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-400 rounded-3xl`} />

              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <f.icon size={28} className="text-white" />
              </div>
              <h3 className="relative font-display font-black text-stone-900 text-xl mb-3">{f.label}</h3>
              <p className="relative text-stone-500 text-sm leading-relaxed">{f.desc}</p>

              <div className={`absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-gradient-to-r ${f.gradient} transition-all duration-500 rounded-b-3xl`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION 4: Dual CTA — Best Cooks + Fast Delivery
// ─────────────────────────────────────────────────────────────
function DualCtaSection() {
  const { setIsCartOpen } = useCart();
  return (
    <section className="py-10 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">

          {/* Left Panel */}
          <motion.div
            {...fadeUp(0)}
            className="relative rounded-3xl overflow-hidden min-h-[380px] flex items-center group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url('/crazee-marios/imagess/WhatsApp Image 2026-05-24 at 12.15.34 PM.jpeg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-stone-950/20" />

            <div className="relative z-10 p-10">
              <span className="inline-block text-crazee-yellow font-bold uppercase tracking-widest text-xs mb-4 bg-crazee-yellow/10 border border-crazee-yellow/20 px-4 py-1.5 rounded-full">Our Kitchen</span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight mb-5">
                Best Cooks<br />Taste Like<br />
                <span className="gradient-text-fresh">Home!</span>
              </h2>
              <p className="text-stone-300 text-base leading-relaxed mb-8 max-w-sm">
                The best cooks bring the warmth of home to every dish — with passion and skill to create flavors that remind us of cherished memories.
              </p>
              <Link
                to="/about"
                className="group/btn inline-flex items-center gap-2 bg-white text-stone-900 font-bold text-sm px-7 py-3.5 rounded-full transition-all hover:bg-crazee-yellow hover:scale-105 shadow-xl"
              >
                Find More
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            {...fadeUp(0.15)}
            className="relative rounded-3xl overflow-hidden min-h-[380px] flex items-center group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url('/crazee-marios/imagess/WhatsApp Image 2026-05-24 at 12.15.53 PM.jpeg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-stone-950/20" />

            <div className="relative z-10 p-10">
              <span className="inline-block text-emerald-300 font-bold uppercase tracking-widest text-xs mb-4 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">Delivery</span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight mb-5">
                Fast &<br />
                <span className="gradient-text-fresh">Home Delivery</span>
              </h2>
              <p className="text-stone-300 text-base leading-relaxed mb-8 max-w-sm">
                Enjoy fast delivery of fresh, hot meals straight to your doorstep — no waiting, no hassle. Wherever you are, we bring the flavors to you!
              </p>
              <button
                onClick={() => setIsCartOpen(true)}
                className="group/btn inline-flex items-center gap-2 bg-crazee-green hover:bg-green-600 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all hover:scale-105 shadow-xl shadow-green-900/30"
              >
                Order Now
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function TrustAndOrder() {
  return (
    <>
      <CommitmentSection />
      <OrderPlatformsSection />
      <FeaturesSection />
      <DualCtaSection />
    </>
  );
}
