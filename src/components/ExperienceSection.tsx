import { ScrollAnimation } from './ScrollAnimation';

interface ExperienceSectionProps {
  onConsultClick: () => void;
}

export function ExperienceSection({ onConsultClick }: ExperienceSectionProps) {
  return (
    <section className="bg-gradient-to-br from-[#0a1a2a] via-[#1a2a3a] to-[#2a1a4a] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,30 Q300,0 600,30 T1200,30 L1200,60 L0,60 Z" fill="white"/>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10 mt-8">
        <ScrollAnimation>
          <h2 className="text-center bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-12 sm:mb-16 text-2xl sm:text-3xl md:text-4xl font-bold px-4 leading-snug sm:leading-snug md:leading-snug py-2">
          Trải nghiệm hành trình xây dựng thương hiệu phản chiếu chính bạn cùng Verza
        </h2>
        </ScrollAnimation>
        
        <div className="space-y-12 sm:space-y-16">
          {/* Experience Item 1 */}
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-full max-w-xs sm:max-w-md">
                <img 
                  src="/1.png" 
                  alt="Thương Hiệu Được Xây Dựng Trên Nền Tảng Hiểu Mình" 
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
            
            <div>
              <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl font-bold">
                Thương Hiệu Được Xây Dựng Trên Nền Tảng "Hiểu Mình"
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Verza tin mỗi thương hiệu xuất phát từ chính bạn. Thay vì sao chép khuôn mẫu, chiến lược phổ biến ra bên ngoài, Verza trước tiên giúp doanh nhân đào sâu, tìm kiếm ra những điểm độc đáo và giá trị khác biệt bên trong mỗi người. Những câu hỏi "Tôi là ai?", "Tôi mang lại điều gì?" sẽ được trả lời rõ ràng, để từ đó hình thành nên một "bản sắc thương hiệu thật", đồng nhất từ lõi bản chất đến hình ảnh bên ngoài.
              </p>
            </div>
            </div>
          </ScrollAnimation>
          
          {/* Experience Item 2 */}
          <ScrollAnimation delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl font-bold">
                Cơ Chế "Đồng Hành - Xây Dựng - Phản Chiếu"
              </h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Thay vì cung cấp giải pháp một chiều, Verza trở thành người đồng hành giám sát toàn bộ hành trình thương hiệu.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>• Bước đầu tiên: Thấu hiểu sâu sắc, phân tích, giải mã định hướng và tầm nhìn của bạn</li>
                <li>• Phát triển bề ngoài: Xây dựng các yếu tố nhận dạng thương hiệu chuyên nghiệp</li>
                <li>• Phản chiếu thị trường: Đa dạng hóa - Gia tăng - Tối ưu truyền thông</li>
                <li>• Đo lường hiệu quả và tối ưu hành trình - Verza giúp bạn giữ vững hướng đi trong tương lai.</li>
              </ul>
            </div>
            
            <div className="flex justify-center order-1 md:order-2">
              <div className="w-full max-w-xs sm:max-w-md">
                <img 
                  src="/2.png" 
                  alt="Cơ Chế Đồng Hành - Xây Dựng - Phân Chiếu" 
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
            </div>
          </ScrollAnimation>
          
          {/* Experience Item 3 */}
          <ScrollAnimation delay={0.4}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-full max-w-xs sm:max-w-md">
                <img 
                  src="/3.png" 
                  alt="Phương Pháp Làm Việc Dựa Trên Hiểu - Thực - Phản Chiếu" 
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
            
            <div>
              <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl font-bold">
                Phương Pháp Làm Việc Dựa Trên Hiểu - Thực - Phản Chiếu
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Không dùng công cụ lý thuyết, Verza triển khai phương pháp nghiên cứu - tư duy chiến lược - áp dụng chuyên sâu học thuật. Khái niệm: insight (thấu hiểu), chiến lược không chỉ là lý thuyết. Thực hiện: Khả năng triển khai một môi trường để thực hành đúng thương hiệu.
                <br/><br/>
                Thương hiệu không chỉ là một "project" - mà Verza giúp bạn từng bước định hình thích ứng trong từng giai đoạn phát triển.
              </p>
            </div>
            </div>
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation delay={0.6}>
          <div className="text-center mt-12">
          <button 
            onClick={onConsultClick}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            ĐĂNG KÝ NHẬN TƯ VẤN THƯƠNG HIỆU NGAY TẠI ĐÂY
          </button>
          </div>
        </ScrollAnimation>
      </div>
      
      {/* Wavy bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 Q300,30 600,0 T1200,0 L1200,60 L0,60 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
