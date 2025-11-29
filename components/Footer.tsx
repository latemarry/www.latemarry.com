import React from 'react';
import { Mail, Facebook, Instagram, Twitter, Download } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-brand-blue text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        {/* Main CTA Block */}
        <div className="bg-brand-green rounded-3xl p-8 md:p-12 text-center -mt-32 mb-16 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-white/10 pointer-events-none"></div>
             <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
               Begin your journey today.
             </h2>
             <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto font-medium relative z-10">
               Find a partner who truly understands your pace, your life, and your maturity.
             </p>
             <a 
               href="https://play.google.com/store/apps/details?id=com.latemarry" 
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-white text-brand-green px-8 py-4 rounded-full font-bold hover:bg-brand-surface transition-colors shadow-lg relative z-10"
             >
               <Download size={20} />
               Download on Play Store
             </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 border-b border-brand-green/30 pb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center text-white font-serif font-bold">LM</div>
               <span className="font-serif text-2xl font-bold text-brand-green">Late Marry</span>
            </div>
            <p className="text-brand-greenLight/80 leading-relaxed mb-6 max-w-sm">
              India’s exclusive matrimony platform designed specifically for singles over 30. Owned and operated by Destiny Connect Private Limited.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-60"><Facebook size={18} /></div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-60"><Instagram size={18} /></div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-60"><Twitter size={18} /></div>
            </div>
          </div>

          <div className="md:text-right">
            <h4 className="font-serif text-lg font-bold text-brand-green mb-6">Contact</h4>
            <ul className="space-y-3 text-brand-greenLight/80">
              <li className="flex items-center gap-2 md:justify-end">
                <Mail size={16} />
                <span className="cursor-text">info@latemarry.com</span>
              </li>
              <li>Destiny Connect Pvt Ltd.<br/>Kerala, India</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-greenLight/60">
          <p>&copy; {new Date().getFullYear()} Destiny Connect Private Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-default">Privacy Policy</span>
            <span className="cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;