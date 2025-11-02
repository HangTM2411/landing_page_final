import { ArrowRight, Check } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

interface HeroSectionProps {
  onConsultClick: () => void;
}

export function HeroSection({ onConsultClick }: HeroSectionProps) {
  // Hàm scroll mượt mà xuống AboutSection
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <section className="bg-gradient-to-br from-[#0a0a2a] via-[#1a2a4a] to-[#2a1a5a] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden w-full">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 sm:w-32 sm:h-32 bg-blue-500/20 rounded-lg transform rotate-45" />
      <div className="absolute bottom-10 left-10 w-16 h-16 sm:w-24 sm:h-24 bg-purple-600/20 rounded-lg transform -rotate-12" />
      <div className="absolute bottom-20 right-1/4 w-24 h-24 sm:w-40 sm:h-40 bg-blue-400/10 rounded-lg transform rotate-12" />
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
        <ScrollAnimation direction="left">
          <div className="max-w-full">
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="block mb-2 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">VERZA AGENCY</span>
            <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">BRANDING</span>
          </h1>
          <p className="mb-4 sm:mb-6 text-yellow-400 text-xs sm:text-sm md:text-base leading-relaxed">
            GIẢI PHÁP XÂY DỰNG & PHÁT TRIỂN<br />
            THƯƠNG HIỆU CÁ NHÂN - DOANH NGHIỆP
          </p>
          
          <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
            <div className="flex items-start gap-2 sm:gap-3">
              <Check className="text-green-400 flex-shrink-0 mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm md:text-base leading-relaxed">Tư vấn giám sát thương hiệu toàn diện</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <Check className="text-green-400 flex-shrink-0 mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm md:text-base leading-relaxed">Thiết kế nhận diện thương hiệu chuyên nghiệp</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <Check className="text-green-400 flex-shrink-0 mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm md:text-base leading-relaxed">Phát triển toàn bộ thương hiệu</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <Check className="text-green-400 flex-shrink-0 mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm md:text-base leading-relaxed">Cung cấp công cụ & tài nguyên hỗ trợ xây dựng thương hiệu</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <Check className="text-green-400 flex-shrink-0 mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm md:text-base leading-relaxed">Đồng hành phát triển dài hạn cùng doanh nghiệp và cá nhân bền vững</span>
            </div>
          </div>
          
          <button 
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 text-xs sm:text-sm md:text-base"
          >
            TÌM HIỂU NGAY
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation direction="right" delay={0.2}>
          <div className="relative hidden md:block">
            <div className="relative z-10 flex items-center justify-center">
              <img 
                src="/Up Web 2.png" 
                alt="Verza Logo" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
