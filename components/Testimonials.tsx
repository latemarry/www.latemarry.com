import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Vikram, 36",
    role: "IT Consultant",
    image: "https://picsum.photos/100/100?random=1",
    text: "After 35, dating apps felt too casual. Late Marry connected me with women who were actually serious about marriage. I met my wife Anjali here within 2 months."
  },
  {
    name: "Meera, 41",
    role: "Professor",
    image: "https://picsum.photos/100/100?random=2",
    text: "As a divorcee, I was hesitant. The privacy controls here gave me the confidence to put myself out there again. It’s a very respectful community."
  },
  {
    name: "Rajesh, 52",
    role: "Business Owner",
    image: "https://picsum.photos/100/100?random=3",
    text: "Looking for companionship in your 50s is tough. Late Marry made it dignified. I found a partner who understands my life stage perfectly."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-surface relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-brand-blue mb-4">Success Stories</h2>
          <p className="text-gray-600">Real people finding real love.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-green relative"
            >
              <Quote className="absolute top-6 right-6 text-brand-green/20" size={48} />
              
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-brand-green" />
                <div>
                  <h4 className="font-serif text-lg font-bold text-brand-charcoal">{t.name}</h4>
                  <p className="text-xs text-brand-blue uppercase font-semibold">{t.role}</p>
                </div>
              </div>
              
              <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;