import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface NavigationProps {
  onConsultClick: () => void;
}

export function Navigation({ onConsultClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#0a0a1a] text-white py-4 px-4 sm:px-6 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="/img/white_logo.png" 
            alt="Logo" 
            className="h-12 w-auto object-contain"
          />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#about" className="hover:text-blue-400 transition-colors text-sm lg:text-base">GIỚI THIỆU</a>
          <a href="#values" className="hover:text-blue-400 transition-colors text-sm lg:text-base">GIÁ TRỊ</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors text-sm lg:text-base">LIÊN HỆ</a>
          <a href="#services" className="hover:text-blue-400 transition-colors text-sm lg:text-base">SẢN PHẨM</a>
          <button 
            onClick={onConsultClick}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 lg:px-6 py-2 rounded-full transition-all flex items-center gap-2 text-sm lg:text-base whitespace-nowrap shadow-lg"
          >
            <Phone size={16} />
            NHẬN TƯ VẤN
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top-5 duration-200">
          <a 
            href="#about" 
            className="block py-2 hover:text-blue-400 transition-colors"
            onClick={handleNavClick}
          >
            GIỚI THIỆU
          </a>
          <a 
            href="#values" 
            className="block py-2 hover:text-blue-400 transition-colors"
            onClick={handleNavClick}
          >
            GIÁ TRỊ
          </a>
          <a 
            href="#contact" 
            className="block py-2 hover:text-blue-400 transition-colors"
            onClick={handleNavClick}
          >
            LIÊN HỆ
          </a>
          <a 
            href="#services" 
            className="block py-2 hover:text-blue-400 transition-colors"
            onClick={handleNavClick}
          >
            SẢN PHẨM
          </a>
          <button 
            onClick={() => {
              onConsultClick();
              handleNavClick();
            }}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Phone size={16} />
            NHẬN TƯ VẤN
          </button>
        </div>
      )}
    </nav>
  );
}
