import { ScrollAnimation } from './ScrollAnimation';

export function WhyChooseSection() {
  const reasons = [
    {
      title: 'ĐỒNG HÀNH CÙNG BẠN TỪ NHỮNG BƯỚC ĐẦU TIÊN',
      description: 'Không quan trọng là bạn mới bắt đầu hay đang ở giai đoạn nào, chúng tôi sẽ hỗ trợ bạn ngay từ bước đầu: xây dựng chiến lược toàn diện, hiểu rõ tâm lý đối tượng khách hàng, phát triển bản sắc thương hiệu rõ ràng và định hướng chiến lược dài hạn.'
    },
    {
      title: 'Cá Nhân Hóa 100% Cho Mỗi Thương Hiệu',
      description: 'Mỗi dự án, Không làm theo cách chung chung, mà tận dụng từng điểm mạnh, khám phá các đặc điểm bản sắc riêng của từng doanh nghiệp. Không copy không "dùng lại" - mà xây dựng có yếu tố chứng minh rằng trên đời chỉ có một thương hiệu duy nhất đó.'
    },
    {
      title: 'Tối Ưu Trải Nghiệm - Tiết Kiệm Thời Gian',
      description: 'Thay vì tốn thời gian tự học các mảng chưa hiểu hết và cố gắng giải quyết từng vấn đề riêng lẻ, Verza giúp bạn triển khai nhanh chóng và hiệu quả. Không cần lo về đội nhóm riêng rẽ, bạn chỉ cần tập trung vào công việc kinh doanh - chúng tôi sẽ lo phần còn lại cho thương hiệu từ đầu đến cuối.'
    },
    {
      title: 'Giá Trị Dài Hạn - Hướng Đến Tương Lai',
      description: 'Công tác không chỉ tạo ra giá trị trước mắt, mà còn xây dựng hệ thống bền vững phát triển trong dài hạn của thương hiệu. Có định hướng rõ ràng, cơ sở dữ liệu được xây dựng đầu tư để bạn tiếp tục phát triển.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-center mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Vì sao bạn nên lựa chọn chúng tôi?
          </span>
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 mx-auto mb-8 sm:mb-12" />
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Left side - First 2 reasons */}
          <ScrollAnimation direction="left">
            <div className="space-y-6 sm:space-y-8">
            {reasons.slice(0, 2).map((reason, index) => (
              <div key={index}>
                <h3 className="text-gray-900 mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl font-bold">{reason.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{reason.description}</p>
              </div>
            ))}
            </div>
          </ScrollAnimation>
          
          {/* Center - Logo */}
          <ScrollAnimation delay={0.2}>
            <div className="flex items-center justify-center py-6 lg:py-0">
              <img 
                src="/img/white_logo_black_back.png" 
                alt="Verza Logo" 
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain rounded-full shadow-xl"
              />
            </div>
          </ScrollAnimation>
          
          {/* Right side - Last 2 reasons */}
          <ScrollAnimation direction="right" delay={0.4}>
            <div className="space-y-6 sm:space-y-8">
            {reasons.slice(2).map((reason, index) => (
              <div key={index}>
                <h3 className="text-gray-900 mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl font-bold">{reason.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{reason.description}</p>
              </div>
            ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
