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
// SECTION 1: Our Commitment to Quality and Tradition
// ─────────────────────────────────────────────────────────────
const commitments = [
  {
    icon: ThumbsUp,
    label: '18 Years of Experience',
    desc: 'Serving bold, authentic flavors since 2006.',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'shadow-amber-500/30',
  },
  {
    icon: ShieldCheck,
    label: '100% Halal Food',
    desc: 'Every ingredient is certified halal — always.',
    gradient: 'from-green-500 to-emerald-600',
    glow: 'shadow-green-500/30',
  },
  {
    icon: Utensils,
    label: 'Hygienic Kitchen',
    desc: 'Prepared in a spotlessly clean, safe kitchen.',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/30',
  },
  {
    icon: Home,
    label: 'Asian Touch',
    desc: 'Authentic South Asian and Eastern recipes.',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'shadow-purple-500/30',
  },
];

function CommitmentSection() {
  return (
    <section className="py-24 bg-stone-950 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-crazee-yellow font-bold uppercase tracking-widest text-sm mb-3">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
            Our Commitment to<br />
            <span className="text-crazee-green">Quality & Tradition</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((c, i) => (
            <motion.div
              key={c.label}
              {...fadeUp(i * 0.1)}
              className={`group relative bg-stone-900 border border-stone-800 hover:border-stone-600 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${c.glow}`}
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <c.icon size={36} className="text-white" />
              </div>
              <h3 className="font-display font-black text-white text-lg mb-3 leading-tight">{c.label}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{c.desc}</p>
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-16 h-1 bg-gradient-to-r ${c.gradient} rounded-full transition-all duration-500`} />
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
  {
    name: 'Uber Eats',
    href: 'https://www.ubereats.com/',
    img: '/imagess/uber eats.png',
  },
  {
    name: 'Grubhub',
    href: 'https://www.grubhub.com/',
    img: '/imagess/Grubhub.png',
  },
  {
    name: 'BentoBox',
    href: 'https://www.bentobox.net/',
    img: '/imagess/bentobox.jfif',
  },
  {
    name: 'DoorDash',
    href: 'https://www.doordash.com/',
    img: '/imagess/Doordash.png',
  },
  {
    name: 'Slice',
    href: 'https://slicelife.com/',
    img: '/imagess/Slice.png',
  },
];

function OrderPlatformsSection() {
  const { setIsCartOpen } = useCart();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeUp()}>
          <p className="text-crazee-red font-bold uppercase tracking-widest text-sm mb-3">Delivery</p>
          <h2 className="text-4xl md:text-5xl font-display font-black text-stone-900 mb-4">
            Place Your Order Now!
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto mb-14">
            Order from your favorite delivery platform — fresh, hot, and straight to your door.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              {...fadeUp(i * 0.08)}
              whileHover={{ y: -6, scale: 1.05 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-20 h-20 rounded-2xl shadow-xl overflow-hidden flex items-center justify-center group-hover:shadow-2xl transition-shadow duration-300 bg-white">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover rounded-2xl" />
              </div>
              <span className="font-display font-bold text-stone-700 text-sm group-hover:text-stone-900 transition-colors">
                {p.name}
              </span>
            </motion.a>
          ))}
        </div>

        {/* WhatsApp direct order option */}
        <motion.div {...fadeUp(0.4)} className="mt-14">
          <div className="inline-flex items-center gap-3 bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4">
            <span className="text-stone-500 text-sm font-medium">Or order directly via</span>
            <button
              onClick={() => setIsCartOpen(true)}
              className="inline-flex items-center gap-2 bg-crazee-green hover:bg-green-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all hover:scale-105"
            >
              <ShoppingCart size={16} className="text-white" />
              Open Cart
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION 3: Why Dine With Us features
// ─────────────────────────────────────────────────────────────
const features = [
  {
    icon: Users,
    label: 'Friendly Service',
    desc: 'Our welcoming team goes the extra mile to ensure you always feel completely right at home.',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    icon: BookOpen,
    label: 'Original Recipes',
    desc: 'Indulge in distinctive, authentic recipes crafted with care, bringing you a truly memorable experience.',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: Car,
    label: 'Comfort Awaits',
    desc: 'Enjoy a cozy atmosphere where delicious food and great company create lasting memories together.',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Bike,
    label: 'Fast Delivery',
    desc: 'Count on us for quick delivery, bringing your favorite meals fresh, hot, and delicious.',
    gradient: 'from-green-500 to-teal-600',
  },
];

function FeaturesSection() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-crazee-green font-bold uppercase tracking-widest text-sm mb-3">The Crazee Difference</p>
          <h2 className="text-4xl md:text-5xl font-display font-black text-stone-900">
            Why Dine With Us?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              {...fadeUp(i * 0.1)}
              className="group relative bg-white rounded-3xl p-8 border border-stone-100 hover:border-transparent hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-400`} />

              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <f.icon size={28} className="text-white" />
              </div>
              <h3 className="relative font-display font-black text-stone-900 text-xl mb-3">{f.label}</h3>
              <p className="relative text-stone-500 text-sm leading-relaxed">{f.desc}</p>

              {/* Bottom border accent */}
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
    <section className="py-4 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">

          {/* Left Panel — Best Cooks */}
          <motion.div
            {...fadeUp(0)}
            className="relative rounded-3xl overflow-hidden min-h-[340px] flex items-center"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/imagess/WhatsApp Image 2026-05-24 at 12.15.34 PM.jpeg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-stone-950/30" />

            <div className="relative z-10 p-10">
              <p className="text-crazee-yellow font-bold uppercase tracking-widest text-xs mb-4">Our Kitchen</p>
              <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight mb-5">
                Best Cooks<br />Are Like<br />
                <span className="text-crazee-green">Home!</span>
              </h2>
              <p className="text-stone-300 text-base leading-relaxed mb-8 max-w-sm">
                The best cooks bring the warmth of home to every dish. With passion and skill, they create flavors that remind us of cherished memories and comfort.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-crazee-red hover:bg-red-700 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-red-900/40"
              >
                Find More <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Right Panel — Fast Delivery */}
          <motion.div
            {...fadeUp(0.15)}
            className="relative rounded-3xl overflow-hidden min-h-[340px] flex items-center"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/imagess/WhatsApp Image 2026-05-24 at 12.15.53 PM.jpeg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-stone-950/30" />

            <div className="relative z-10 p-10">
              <p className="text-crazee-yellow font-bold uppercase tracking-widest text-xs mb-4">Delivery</p>
              <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight mb-5">
                Fast &amp; Free<br />
                <span className="text-crazee-green">Home Delivery</span>
              </h2>
              <p className="text-stone-300 text-base leading-relaxed mb-8 max-w-sm">
                Enjoy fast, free delivery of fresh, hot meals straight to your doorstep — no waiting, no hassle. Wherever you are, we bring the flavors to you!
              </p>
              <button
                onClick={() => setIsCartOpen(true)}
                className="inline-flex items-center gap-2 bg-crazee-green hover:bg-green-600 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-900/40"
              >
                Order Online Delivery <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Default Export — all 4 sections together
// ─────────────────────────────────────────────────────────────
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
