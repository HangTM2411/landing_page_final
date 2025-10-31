import { Phone } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

interface AboutSectionProps {
  onConsultClick: () => void;
}

export function AboutSection({ onConsultClick }: AboutSectionProps) {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <ScrollAnimation direction="left">
          <div className="flex items-center justify-center">
            <img 
              src="/black_logo.png" 
              alt="Verza Logo" 
              className="w-48 sm:w-56 md:w-64 h-auto object-contain"
            />
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation direction="right" delay={0.2}>
          <div>
          <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">VERZA LÀ GÌ?</h2>
          <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
            <strong>Verza</strong> là đơn vị tư vấn và đồng hành xây dựng thương hiệu cá nhân - doanh nghiệp.
          </p>
          <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
            Verza tin <strong>mỗi thương hiệu</strong> đều là một <strong>gương phản chiếu</strong>. Chúng tôi <strong>giúp bạn hiểu</strong> về bản chất, <strong>giá trị rõ ràng</strong> nội tại của mình, để từ đó biến chúng thành một thương hiệu chân thực, <strong>hấp dẫn và bền vững</strong>.
          </p>
          <button 
            onClick={onConsultClick}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 text-sm sm:text-base"
          >
            <Phone size={18} />
            NHẬN TƯ VẤN NGAY
          </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
