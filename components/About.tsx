import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-blue text-white overflow-hidden relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#16C47F_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=800&auto=format&fit=crop" 
                alt="Traditional Marriage Ceremony Stage" 
                className="rounded-lg shadow-2xl border-4 border-brand-green/30 w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-green rounded-full flex items-center justify-center shadow-lg hidden md:flex">
                <div className="text-center text-white font-serif">
                    <span className="block text-3xl font-bold">100%</span>
                    <span className="text-xs font-bold uppercase tracking-widest">Secure</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-brand-green">About Destiny Connect</h2>
            <h3 className="text-xl font-light mb-8 text-brand-greenLight opacity-90">Bridging Hearts with Dignity and Trust</h3>
            
            <div className="space-y-6 text-gray-200 leading-relaxed text-lg">
              <p>
                Late Marry Matrimony is the flagship initiative of Destiny Connect Private Limited. Born from the realization that the search for love doesn't have an expiration date, we created a sanctuary for mature singles who value substance over superficiality.
              </p>
              <p>
                Our mission is simple yet profound: to restore dignity to the matchmaking process for individuals aged 30 and above. Whether you are never married, divorced, or widowed, we believe your second chapter (or your late first) deserves the utmost care, privacy, and respect.
              </p>
              <p>
                We are not just an algorithm; we are a community dedicated to helping you find a partner who understands your pace, respects your journey, and shares your vision for a future together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;