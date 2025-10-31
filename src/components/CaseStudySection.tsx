import { ScrollAnimation } from './ScrollAnimation';
import { ExternalLink } from 'lucide-react';

export function CaseStudySection() {
  const caseStudies = [
    {
      title: 'Case Study 1: Herogame',
      link: 'https://herogame.vn/',
      content: (
        <>
          <p className="mb-3">
            Verza đồng hành cùng HeroGame xây dựng bộ nhận diện hiện đại – trẻ trung – đúng tinh thần game thủ. Bộ nhận diện mới giúp thương hiệu tạo dấu ấn mạnh mẽ ngay từ giai đoạn ra mắt sản phẩm.
          </p>
          <div className="space-y-1 mb-3">
            <p>✅ +65% mức độ ghi nhớ thương hiệu</p>
            <p>✅ +40% tương tác cộng đồng trong 3 tuần đầu</p>
            <p>✅ +30% người chơi mới đến từ kênh social</p>
          </div>
          <p className="text-xs italic">
            Dịch vụ thực hiện: Brand Strategy · Logo & Identity Design · UI/UX Assets · Social Media Key Visuals
          </p>
        </>
      ),
      image: '/img/case_study_1.jpg'
    },
    {
      title: 'Case Study 2: HC Thiện',
      link: 'https://www.facebook.com/hc.thien.925002#',
      content: (
        <div className="space-y-2">
          <p>✅ Co-Founder, Mango Cruise, Founder/Manager tại TIT Travel - Personalize Your Experience</p>
          <p>✅ Lĩnh vực: Du lịch</p>
          <p>✅ Đồng hành cùng Verza từ những ngày thành lập thương hiệu cá nhân</p>
          <p>✅ Đang sở hữu trang cá nhân, cộng đồng Cát bà review Tất Tần Tật ~ 580.000 thành viên và thương hiệu cá nhân TIT Travel</p>
        </div>
      ),
      image: '/img/case_study_2.jpg'
    },
    {
      title: 'Case Study 3: Calligraffiti by Nads',
      link: 'https://www.instagram.com/calligraffitibynads?igsh=bzJxOWcwZ3J0a2I2',
      content: (
        <div className="space-y-2">
          <p className="font-semibold">Dịch vụ: Xây dựng thương hiệu tổng thể – Logo, Bộ nhận diện, Social Key Visual, Visual Direction</p>
          <p className="mb-2">Thời gian: 2025</p>
          <p className="mb-2">Calligraffiti by Nads là art gallery & clothing brand tại Hà Nội, kết hợp nghệ thuật chữ viết và văn hóa đường phố.</p>
          <p className="font-semibold">Kết quả:</p>
          <p>✅ Hệ thống hình ảnh nhất quán, dễ nhận diện trong cộng đồng streetwear Việt.</p>
          <p>✅ Doanh thu mùa mở bán đầu tiên tăng hơn 60% so với dự kiến.</p>
          <p>✅ Calligraffiti by Nads nhanh chóng được xem như thương hiệu nghệ thuật trẻ tiên phong, kết nối văn hóa viết tay và phong cách sống đô thị.</p>
        </div>
      ),
      image: '/img/case_study_3.jpg'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-center mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Case Study Thành Công với Verza
            </span>
          </h2>
        </ScrollAnimation>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((study, index) => (
            <ScrollAnimation key={index} delay={index * 0.2}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <a 
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 mb-2 sm:mb-3 text-base sm:text-lg font-bold flex items-center justify-center gap-2 hover:text-blue-700 transition-colors group"
                >
                  {study.title}
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="text-gray-600 text-sm sm:text-base">{study.content}</div>
              </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
