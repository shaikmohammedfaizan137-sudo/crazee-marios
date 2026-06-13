import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Globe, Clock, Send, ExternalLink, MessageCircle, ShieldCheck, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const contactCards = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '7667-A Lake Worth Road\nLake Worth, FL 33467',
    action: { label: 'Get Directions', href: 'https://www.google.com/maps/search/?api=1&query=7667-A+Lake+Worth+Road,+Lake+Worth,+FL+33467', icon: ExternalLink },
    color: 'text-crazee-red',
    bg: 'bg-red-50',
  },
  {
    icon: Phone,
    title: 'Call / WhatsApp',
    content: '+1 (561) 294-3062',
    action: { label: 'Call Now', href: 'tel:+15612943062', icon: Phone },
    color: 'text-crazee-green',
    bg: 'bg-green-50',
  },

  {
    icon: Clock,
    title: 'Hours',
    content: 'Mon – Sun\n11:00 AM – 11:00 PM',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const { setIsCartOpen } = useCart();
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: '2', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Crazee Marios!\n\nI would like to make a booking/order:\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Date:* ${form.date}\n*Time:* ${form.time}\n*Guests:* ${form.guests}\n*Message/Order:* ${form.message}`;
    window.open(`https://wa.me/15612943062?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-stone-50 min-h-screen">

      {/* Page Header */}
      <section className="bg-stone-900 text-white pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-crazee-yellow font-bold uppercase tracking-widest text-sm mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-black mb-4"
          >
            Book a Table or Order
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-stone-400 text-lg"
          >
            Reserve your spot or place a pickup order — all through WhatsApp.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {contactCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm"
            >
              <div className={`w-12 h-12 rounded-xl ${card.bg} ${card.color} flex items-center justify-center mb-4`}>
                <card.icon size={22} />
              </div>
              <h3 className="font-display font-bold text-stone-900 mb-2">{card.title}</h3>
              <p className="text-stone-500 text-sm mb-4 whitespace-pre-line">{card.content}</p>
              {card.action && (
                <a href={card.action.href} target="_blank" rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 ${card.color} font-semibold text-sm hover:underline`}
                >
                  {card.action.label} <card.action.icon size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Form + Quick Actions */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-stone-900 text-white rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#25D366] rounded-2xl flex items-center justify-center">
                <MessageCircle size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold">WhatsApp Booking Form</h2>
                <p className="text-stone-400 text-sm">We'll confirm your booking via WhatsApp.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-stone-300 mb-2">Your Name *</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-crazee-green transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-300 mb-2">Phone Number *</label>
                  <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                    placeholder="+1 234 567 8900"
                    className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-crazee-green transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-stone-300 mb-2">Date *</label>
                  <input type="date" name="date" required value={form.date} onChange={handleChange}
                    className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-crazee-green transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-300 mb-2">Time *</label>
                  <input type="time" name="time" required value={form.time} onChange={handleChange}
                    className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-crazee-green transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-300 mb-2">Guests</label>
                  <select name="guests" value={form.guests} onChange={handleChange}
                    className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-crazee-green transition-colors"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i+1} value={i+1}>{i+1} {i === 0 ? 'Person' : 'People'}</option>
                    ))}
                    <option value="10+">10+ People</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-300 mb-2">Order Details or Message *</label>
                <textarea name="message" required value={form.message} onChange={handleChange}
                  rows={4} placeholder="e.g. 2 Chicken Biryanis, 1 Large Masala Pizza, 10 Wings..."
                  className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-crazee-green transition-colors resize-none"
                />
              </div>

              <button type="submit"
                className={`w-full flex items-center justify-center gap-2 font-bold text-lg py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                  submitted ? 'bg-crazee-yellow text-stone-900' : 'bg-[#25D366] hover:bg-green-500 text-white shadow-lg'
                }`}
              >
                {submitted
                  ? <><ShieldCheck size={20} /> Sent! Check WhatsApp</>
                  : <><Send size={20} /> Send on WhatsApp</>
                }
              </button>
            </form>
          </motion.div>

          {/* Quick Actions + Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
              <h3 className="font-display font-bold text-xl text-stone-900 mb-5">Quick Actions</h3>
              <div className="space-y-3">
                <a href="tel:+15612943062"
                  className="flex items-center gap-3 bg-stone-50 hover:bg-stone-100 border border-stone-100 rounded-xl p-4 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-sm">Call Now</div>
                    <div className="text-stone-500 text-xs">+1 (561) 294-3062</div>
                  </div>
                </a>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="flex items-center gap-3 bg-green-50 hover:bg-green-100 border border-green-100 rounded-xl p-4 transition-colors w-full text-left"
                >
                  <div className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center shrink-0">
                    <ShoppingCart size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-sm">Online Order</div>
                    <div className="text-stone-500 text-xs">Fastest way to order</div>
                  </div>
                </button>
                <a href="https://www.google.com/maps/search/?api=1&query=7667-A+Lake+Worth+Road,+Lake+Worth,+FL+33467"
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 bg-stone-50 hover:bg-stone-100 border border-stone-100 rounded-xl p-4 transition-colors"
                >
                  <div className="w-10 h-10 bg-red-100 text-crazee-red rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-sm">Get Directions</div>
                    <div className="text-stone-500 text-xs">7667-A Lake Worth Rd</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-stone-200 rounded-2xl overflow-hidden h-56">
              <iframe
                title="Crazee Marios Location"
                width="100%" height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=7667-A+Lake+Worth+Road,+Lake+Worth,+FL+33467&output=embed"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
