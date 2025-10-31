import { Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

interface FooterProps {
  onConsultClick: () => void;
}

export function Footer({ onConsultClick }: FooterProps) {
  return (
    <footer id="contact" className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <ScrollAnimation direction="left">
            <div className="flex items-center gap-3 sm:gap-4 justify-center md:justify-start">
            <img 
              src="/logo_noname.png" 
              alt="Verza Logo" 
              className="h-14 sm:h-16 md:h-20 w-auto object-contain"
            />
            <div>
              <div className="tracking-wider mb-1 sm:mb-2 text-sm sm:text-base">VERZA</div>
              <p className="text-xs sm:text-sm text-gray-300">"not just a brand. That is reflection."</p>
            </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="right" delay={0.2}>
            <div className="text-center md:text-right md:ml-auto md:max-w-md">
            <h4 className="mb-3 sm:mb-4 text-sm sm:text-base">Địa chỉ: Tây Hồ, Thành phố Hà Nội</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 justify-center md:justify-end">
                <Phone size={18} />
                <span>Hotline: 033 877 0107</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-end">
                <Mail size={18} />
                <span>Email: Verzabrand@gmail.com</span>
              </div>
            </div>
            
            <div className="flex gap-4 mt-6 justify-center md:justify-end">
              <a href="https://www.facebook.com/profile.php?id=61580887100444" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/_verza_branding" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </footer>
  );
}
