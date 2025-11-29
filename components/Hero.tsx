import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-brand-surface to-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green/5 opacity-50 rounded-bl-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-blue/5 rounded-tr-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-greenDark mb-6 border border-brand-green/20">
              <Star size={16} className="fill-brand-green text-brand-green" />
              <span className="text-sm font-semibold tracking-wide uppercase">Exclusive for 30+ Singles</span>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-brand-blue leading-tight mb-6">
              It’s Never Too Late for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-500">Right Match.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              India’s dedicated matrimony app for mature singles. Find meaningful, respectful, and compatibility-driven connections without the pressure.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="https://play.google.com/store/apps/details?id=com.latemarry" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-brand-green text-white rounded-full font-semibold shadow-lg shadow-brand-green/20 hover:bg-brand-greenDark hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                <span>Download App</span>
                <ArrowRight size={20} />
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.latemarry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-brand-blue border-2 border-brand-blue/10 rounded-full font-semibold hover:border-brand-blue hover:bg-brand-blue/5 transition-all text-center"
              >
                Get Started
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 text-sm text-gray-500">
               <ShieldCheck className="text-brand-green" size={20} />
               <p>Secure, Verified, and Private</p>
            </div>
          </motion.div>

          {/* Hero Image / Composition */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <div className="relative mx-auto w-full max-w-md aspect-[4/5]">
               {/* Main image with styling */}
               <div className="absolute inset-0 bg-brand-blue/5 rounded-[40px] transform rotate-3"></div>
               <img 
                 src="https://picsum.photos/600/750?random=50" 
                 alt="Happy couple" 
                 className="absolute inset-0 w-full h-full object-cover rounded-[40px] shadow-2xl border-4 border-white"
               />
               
               {/* Floating Card 1 */}
               <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 1, duration: 0.5 }}
                 className="absolute bottom-10 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100"
               >
                 <div className="w-10 h-10 rounded-full bg-brand-greenLight flex items-center justify-center text-brand-greenDark">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 font-semibold uppercase">Status</p>
                   <p className="text-sm font-bold text-brand-charcoal">Verified Profile</p>
                 </div>
               </motion.div>

               {/* Floating Card 2 */}
               <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute top-10 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-[150px]"
               >
                 <p className="text-xs font-serif text-brand-blue font-bold mb-1">Premium Matchmaking</p>
                 <div className="flex gap-1">
                   {[1,2,3,4,5].map(i => (
                     <Star key={i} size={10} className="fill-brand-green text-brand-green" />
                   ))}
                 </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;