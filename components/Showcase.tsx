import React from 'react';
import { CheckCircle2, User } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  "Intuitive Profile Creation",
  "Strict Identity Verification",
  "Smart Match Discovery",
  "Granular Privacy Settings",
  "Secure In-App Chat",
  "Interest-Based Connections"
];

const Showcase: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-brand-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 order-2 lg:order-1 relative flex justify-center lg:justify-end"
          >
            {/* Phone Mockup Container */}
            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[45px] border-8 border-gray-900 shadow-2xl overflow-hidden z-10">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>
              
              {/* Screen Content */}
              <div className="w-full h-full bg-white relative">
                {/* Header inside phone */}
                <div className="h-16 bg-brand-blue flex items-end pb-3 px-4">
                    <div className="w-6 h-6 rounded-full bg-white/20"></div>
                    <div className="flex-1 text-center text-white font-serif font-bold">Late Marry</div>
                    <div className="w-6 h-6 rounded-full bg-white/20"></div>
                </div>
                {/* Mock Profile Card */}
                <div className="p-4 space-y-4">
                    <div className="w-full aspect-square bg-gray-100 rounded-xl overflow-hidden relative flex items-center justify-center">
                        <User size={80} className="text-gray-300" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue/90 to-transparent p-4 text-white">
                            <h3 className="font-bold text-lg">Verified Member</h3>
                            <p className="text-xs opacity-90">34 Yrs • Professional</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex-1 h-10 bg-brand-green rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">Connect</div>
                        <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400">✕</div>
                    </div>
                    <div className="space-y-2 pt-2">
                        <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                        <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                        <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                    </div>
                </div>
              </div>
            </div>

            {/* Decorative background circle behind phone */}
            <div className="absolute top-1/2 left-1/2 lg:left-2/3 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-green/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
                <h2 className="font-serif text-4xl font-bold text-brand-blue mb-6">Designed for a Seamless Experience</h2>
                <p className="text-gray-600 text-lg mb-10">
                    Navigate your journey to love with an app interface that is as elegant as it is functional. We prioritize clarity, ease of use, and quick access to the features that matter most.
                </p>

                <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
                    {features.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            <CheckCircle2 className="text-brand-green flex-shrink-0" size={24} />
                            <span className="text-brand-charcoal font-medium">{item}</span>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12">
                     <p className="text-sm text-gray-500 mb-2 italic">Available on Android</p>
                     <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                        alt="Get it on Google Play" 
                        className="h-16 -ml-3 cursor-pointer hover:opacity-80 transition-opacity"
                     />
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;