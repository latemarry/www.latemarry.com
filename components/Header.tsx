import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-default">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-blueDark rounded-full flex items-center justify-center text-brand-green font-serif font-bold text-xl border-2 border-brand-green group-hover:scale-105 transition-transform">
            LM
          </div>
          <span className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-brand-blue' : 'text-brand-blue'} lg:text-brand-blue`}>
            Late Marry
          </span>
        </div>

        {/* Desktop Nav - Only Download Button */}
        <nav className="flex items-center gap-8">
          <a
            href="https://play.google.com/store/apps/details?id=com.latemarry"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-green hover:bg-brand-greenDark text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <Download size={18} />
            <span>Download App</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;