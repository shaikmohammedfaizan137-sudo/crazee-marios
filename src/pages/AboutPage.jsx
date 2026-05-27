import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Heart, ChefHat, Leaf, Star, ThumbsUp, Utensils, Home, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

const features = [
  { icon: ChefHat,     title: 'Expert Chefs',     desc: 'Masters of authentic South Asian spices and global comfort food.', bg: 'bg-amber-50',  color: 'text-amber-600' },
  { icon: ShieldCheck, title: '100% Halal',        desc: 'Strictly sourced premium certified halal ingredients only.',        bg: 'bg-green-50',  color: 'text-crazee-green' },
  { icon: Leaf,        title: 'Fresh Daily',       desc: 'Everything prepared fresh every day — never pre-cooked.',           bg: 'bg-lime-50',   color: 'text-lime-600' },
  { icon: Clock,       title: 'Fast Service',      desc: 'Hot, flavorful food served quickly without compromising quality.',  bg: 'bg-blue-50',   color: 'text-blue-600' },
  { icon: Heart,       title: 'Family Friendly',   desc: 'A warm, welcoming atmosphere for the whole family.',               bg: 'bg-rose-50',   color: 'text-rose-600' },
  { icon: Star,        title: 'Top Rated',         desc: 'Loved by our community with hundreds of 5-star reviews.',          bg: 'bg-yellow-50', color: 'text-yellow-600' },
];

const cuisines = [
  { name: 'Indian' },
  { name: 'Pakistani' },
  { name: 'Italian' },
  { name: 'American' },
  { name: 'Middle Eastern' },
  { name: 'Mediterranean' },
];

// ── Timeline Data ────────────────────────────────────────────────
const timeline = [
  {
    year: '2006',
    title: 'Humble Beginnings',
    desc: "Crazee Mario's opened its doors in 2006 with a dream: to bring the authentic flavors of Bangladesh, India, and Pakistan to the heart of West Palm Beach, Florida. Starting as a small family-owned restaurant, we focused on crafting homemade dishes that captured the rich and diverse flavors of South Asian cuisine.",
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    year: '2010',
    title: 'Growing Reputation',
    desc: 'By 2010, word had spread throughout the community. Our signature biryanis, freshly baked naan, and bold curries earned us a reputation as the go-to spot for authentic halal food. We expanded our menu to include pizzas and burgers, creating a unique fusion.',
    gradient: 'from-rose-500 to-red-500',
  },
  {
    year: '2016',
    title: 'A Decade of Flavor',
    desc: "Celebrating our 10th anniversary, we renovated and expanded our kitchen to serve more customers faster without compromising quality. Our delivery services grew, making Crazee Mario's flavors accessible to more neighborhoods across Palm Beach County.",
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    year: '2020',
    title: 'Resilience & Innovation',
    desc: 'Through challenging times, we adapted by strengthening our delivery partnerships with Uber Eats, DoorDash, Grubhub, and Slice. We introduced WhatsApp ordering, making it easier than ever for our loyal customers to enjoy their favorite dishes at home.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    year: '2024',
    title: '18 Years Strong',
    desc: "With over 18 years of experience, 50+ menu items, and thousands of happy customers, Crazee Mario's stands as a beloved institution in Lake Worth — still serving bold flavors with the same passion that started it all.",
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    year: '2027',
    title: 'The Future is Crazee',
    desc: "We're expanding our horizons with a brand-new digital experience, a bigger menu, and plans to bring Crazee Mario's flavors to even more communities across South Florida. The best is yet to come!",
    gradient: 'from-crazee-red to-crazee-green',
  },
];

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen">

      {/* ═══════════════════════════════════════════════════════════════
          Hero Banner
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-stone-900 text-white py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/imagess/WhatsApp Image 2026-05-24 at 12.15.34 PM.jpeg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950/80 to-crazee-green/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-crazee-yellow font-bold uppercase tracking-widest text-sm mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-black mb-6 leading-tight"
          >
            More Than a Restaurant.<br />
            <span className="text-crazee-green">It's an Experience.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-stone-300 leading-relaxed"
          >
            Bringing the boldest flavors and freshest ingredients to Lake Worth, Florida.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          Passionate About Fastfood — Chef Image + Text
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text Side */}
            <motion.div {...fadeUp(0)}>
              <p className="text-crazee-red font-bold uppercase tracking-widest text-sm mb-4">About Us</p>
              <h2 className="text-4xl md:text-5xl font-display font-black text-stone-900 leading-tight mb-8">
                We're Passionate About<br />
                Fastfood in <span className="text-crazee-green">18 Years</span>
              </h2>
              <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
                <p className="italic text-stone-800 font-semibold border-l-4 border-crazee-red pl-5">
                  As the premier Indian restaurant, Crazee Mario's stands alone in its attention to the delights of the senses.
                </p>
                <p>
                  The quality of halal food, the delightful atmosphere and the excellent service that Crazee Mario's provides are unmatched in West Palm Beach, Florida! The food you find at Crazee Mario's Pizza and Indian Restaurant is exactly like the food cooked in the homes of Bangladesh, India, and Pakistan.
                </p>
                <p>
                  Whether you're craving the aromatic layers of a slow-cooked Biryani, the rich warmth of a Curry, the cheesy crunch of a Masala Spicy Pizza, or the hearty satisfaction of an American Cheeseburger — we deliver bold taste every single time.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                {cuisines.map((c) => (
                  <span key={c.name} className="inline-flex items-center gap-2 bg-stone-100 text-stone-700 font-semibold px-4 py-2 rounded-full text-sm">
                    {c.name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Chef Image Side */}
            <motion.div {...fadeUp(0.2)} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/imagess/chef"
                  alt="Chef at Crazee Mario's"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur rounded-2xl p-5 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-crazee-red flex items-center justify-center shrink-0">
                        <ChefHat size={28} className="text-white" />
                      </div>
                      <div>
                        <p className="font-display font-black text-stone-900 text-lg">Master Chef</p>
                        <p className="text-stone-500 text-sm">18+ years of culinary excellence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating stat */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -top-6 -right-4 bg-crazee-green text-white rounded-2xl px-5 py-4 shadow-xl hidden lg:block"
              >
                <p className="font-display font-black text-3xl">18+</p>
                <p className="text-green-100 text-xs font-semibold">Years</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          About Crazee Mario — Red Banner
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-crazee-red to-red-700 py-16">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: `url('/imagess/WhatsApp Image 2026-05-24 at 12.15.53 PM.jpeg')` }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              {...fadeUp(0)}
              className="text-4xl md:text-5xl font-display font-black text-white mb-6"
            >
              About Crazee Mario
            </motion.h2>
            <motion.p
              {...fadeUp(0.1)}
              className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            >
              At Crazee Mario, we're all about bold flavors and fresh ingredients. With over 18 years of experience, we serve 100% Halal, hygienic meals with a unique Asian touch. Join us for an unforgettable dining experience that keeps you coming back for more!
            </motion.p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          Our Story — Vertical Timeline
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-stone-950 relative overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div {...fadeUp(0)} className="text-center mb-20">
            <p className="text-crazee-yellow font-bold uppercase tracking-widest text-sm mb-3">Our Journey</p>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white">
              Best Food Comes From{' '}
              <span className="text-crazee-green">Crazee Mario</span>
            </h2>
            <p className="text-stone-400 text-lg mt-4 max-w-xl mx-auto">Over two decades of passion, flavor, and community.</p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-crazee-red via-crazee-green to-crazee-yellow md:-translate-x-px" />

            <div className="space-y-12 md:space-y-16">
              {timeline.map((t, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={t.year}
                    {...fadeUp(i * 0.1)}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Year Badge — sits on the line */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center font-display font-black text-white text-xs shadow-lg shadow-stone-900/50 ring-4 ring-stone-950`}>
                        {t.year}
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${
                      isLeft ? 'md:pr-0 md:mr-auto' : 'md:pl-0 md:ml-auto'
                    }`}>
                      <div className="group bg-stone-900 border border-stone-800 hover:border-stone-600 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-900/50">
                        {/* Gradient top accent */}
                        <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${t.gradient} mb-5 group-hover:w-24 transition-all duration-500`} />
                        <h3 className="font-display font-black text-white text-xl md:text-2xl mb-3">{t.title}</h3>
                        <p className="text-stone-400 text-sm md:text-base leading-relaxed">{t.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          Features Grid — Why Choose Us
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">

          <motion.div {...fadeUp(0)}>
            <p className="text-crazee-red font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</p>
            <h2 className="text-4xl font-display font-black text-stone-900 mb-6 leading-tight">
              Where Bold Flavors<br />Meet Fresh Ingredients
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              We are proud to serve a 100% Halal menu, sourcing only certified, premium-quality ingredients so every guest can dine with complete confidence.
            </p>
            <div className="flex gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 bg-crazee-green hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                Browse Menu <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                Book a Table
              </Link>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="grid grid-cols-2 gap-5">
            {features.map((feat, idx) => (
              <div key={idx} className={`p-5 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow ${feat.bg}`}>
                <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 ${feat.color}`}>
                  <feat.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-stone-900 mb-1">{feat.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          Bottom CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-black text-stone-900 mb-4">Ready to Taste the Difference?</h2>
          <p className="text-stone-500 text-lg mb-8">Book a table or place your order today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-crazee-green text-white font-bold px-8 py-4 rounded-2xl hover:bg-green-700 transition-colors">
              Book a Table
            </Link>
            <Link to="/menu" className="bg-stone-900 text-white font-bold px-8 py-4 rounded-2xl hover:bg-stone-800 transition-colors">
              Browse Menu
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
