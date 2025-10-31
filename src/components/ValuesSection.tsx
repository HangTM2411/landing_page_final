import { Users, TrendingUp, Laptop, Target, Lightbulb, Award } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

export function ValuesSection() {
  const values = [
    {
      icon: Users,
      title: 'PHẢN CHIẾU BẢN SẮC THƯƠNG HIỆU',
      points: [
        'Khai thác "Verza\'s" - chân thật nơi gốc rễ',
        'Biến đổi doanh nghiệp bạn "mình là ai"',
        'Tư vấn xây dựng thương hiệu đầu tiên từ căn bản lõi: Nhận diện thương hiệu.',
        'Xây dựng định vị thương hiệu chính xác nhất từ trong ra ngoài'
      ]
    },
    {
      icon: TrendingUp,
      title: 'ĐỒNG HÀNH CHIẾN LƯỢC CÙNG DOANH NGHIỆP',
      points: [
        'Không chỉ tư vấn - mà cùng hành động xây dựng thương hiệu.',
        'Đồng hành trong mọi giai đoạn kinh doanh.',
        'Cố vấn xuyên suốt từ giai đoạn khởi đầu, vận hành đến mở rộng.',
        'Góp phần "Partner", không phải "đơn vị làm thuê"'
      ]
    },
    {
      icon: Laptop,
      title: 'GIẢI PHÁP LINH HOẠT - PHÙ HỢP TỪNG GIAI ĐOẠN',
      points: [
        'Dù đang ở giai đoạn nào, luôn có giải pháp phù hợp linh hoạt',
        'Gói khởi đầu: Xây dựng nền tảng thương hiệu.',
        'Gói gia tăng: Duy trì và gia tăng hiệu ứng thương hiệu',
        'Gói Rebranding: Tái định vị, chuyển đổi chính diện thương hiệu'
      ]
    },
    {
      icon: Target,
      title: 'ĐỘI NGŨ ĐA NGÀNH THỰC CHIẾN',
      points: [
        'Kinh nghiệm thực tế trong nhiều ngành nghề: thực phẩm, công nghệ, startups, SME, cá nhân.',
        'Công nghệ, hiểu rõ mong đợi - và khó khăn trong hai định vị.',
        'Mọi đội góp phần từ cả phía chuyên môn đến hành động cùng tập kiện hành động.'
      ]
    },
    {
      icon: Lightbulb,
      title: 'TƯ DUY SÁNG TẠO DỰA TRÊN DỮ LIỆU',
      points: [
        'Phân tích hành động, dựa vào động thực tế và dữ liệu thị trường cụ thể.',
        'Mọi sáng tạo được lược hóa sáng tạo biến thành dữ liệu chuyên sâu thực tế cụ thể. Không feeling.',
        'Nội dung hướng tới: Nghiên cứu thị trường sâu rộng phương pháp sản xuất giữa mạng và phân.',
        'Đảm bảo tăng cao hiệu quả thương hiệu mong muốn từ mọi chiến lược suất'
      ]
    },
    {
      icon: Award,
      title: 'QUY TRÌNH PHẢN CHIẾU - ĐO LƯỜNG - TỐI ƯU LIÊN TỤC',
      points: [
        'Theo dõi và đánh giá hiệu quả toàn thời điểm theo từng giai đoạn.',
        'Đo lường mọi bộ phận và đảm bảo theo thương hiệu.',
        'Tiếu chỉnh chiến lược báo cáo theo tích hợp thị trường và động tác.',
        'Đảng bảo công suất nghĩa trong quản lý chiến lược của bạn và phát triển'
      ]
    }
  ];

  return (
    <section id="values" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-50 relative">
      {/* Decorative spheres */}
      <div className="absolute top-20 left-10 w-12 h-12 sm:w-16 sm:h-16 bg-blue-400 rounded-full opacity-60 blur-xl" />
      <div className="absolute bottom-32 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-purple-400 rounded-full opacity-40 blur-lg" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollAnimation>
          <h2 className="text-center mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            💎 Giá Trị Nổi Bật Tạo Nên Verza 💎
          </span>
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 mx-auto mb-8 sm:mb-12" />
        </ScrollAnimation>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <Icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-center text-gray-900 mb-4 sm:mb-6 text-lg sm:text-xl font-bold">{value.title}</h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                  {value.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1 flex-shrink-0">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
