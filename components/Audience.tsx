import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { label: "Age 30–35", desc: "Ready to settle down" },
  { label: "Age 35–40", desc: "Mature professionals" },
  { label: "Age 40–50", desc: "Second chances" },
  { label: "Age 50+", desc: "Companionship" },
];

const tags = [
  "Never Married", "Divorced", "Widowed", "Separated", "Single Parents", "Career Professionals"
];

const Audience: React.FC = () => {
  return (
    <section className="py-24 bg-brand-blueDark text-white text-center">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-4">Everyone Deserves Love</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            Whether you are focused on your career, starting fresh, or looking for companionship later in life, Late Marry is your safe haven.
            </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {categories.map((cat, idx) => (
            <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold text-brand-greenLight mb-1">{cat.label}</h3>
              <p className="text-sm text-gray-400">{cat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
            {tags.map((tag, idx) => (
                <span key={idx} className="px-4 py-2 rounded-full bg-brand-green/20 border border-brand-green/30 text-sm font-medium text-brand-greenLight">
                    {tag}
                </span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;