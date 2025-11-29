import React from 'react';
import { ShieldCheck, Users, EyeOff, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const featureData = [
  {
    icon: <Users size={32} />,
    title: "Only 30+ Community",
    description: "A dedicated space for serious, mature singles. No casual dating, just people looking for life partners."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Verified & Authentic",
    description: "Rigorous profile verification including ID, employment, and photo checks to ensure you meet real people."
  },
  {
    icon: <EyeOff size={32} />,
    title: "Strong Privacy Controls",
    description: "Your privacy is paramount. Control who sees your photos and details with our advanced visibility settings."
  },
  {
    icon: <HeartHandshake size={32} />,
    title: "Compatibility Matching",
    description: "Our algorithm focuses on lifestyle, mindset, and long-term goals to find you a partner who truly fits."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-brand-blue mb-4">Why Choose Late Marry?</h2>
          <p className="text-gray-600 text-lg">We understand the unique needs of mature singles. Our platform is built on the pillars of trust, respect, and compatibility.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-brand-surface rounded-2xl p-8 hover:shadow-xl transition-shadow border border-transparent hover:border-brand-green/30 group"
            >
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-brand-green shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;