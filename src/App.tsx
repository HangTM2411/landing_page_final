import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ValuesSection } from './components/ValuesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ServicesSection } from './components/ServicesSection';
import { CaseStudySection } from './components/CaseStudySection';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Tự động hiện popup sau 10 giây
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 10000); // 10 giây = 10000 ms

    // Cleanup timer khi component unmount
    return () => clearTimeout(timer);
  }, []); // Chỉ chạy 1 lần khi component mount

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation onConsultClick={() => setIsModalOpen(true)} />
      <div className="pt-16">
        <HeroSection onConsultClick={() => setIsModalOpen(true)} />
      <AboutSection onConsultClick={() => setIsModalOpen(true)} />
      <ExperienceSection onConsultClick={() => setIsModalOpen(true)} />
      <ValuesSection />
      <WhyChooseSection />
      <ServicesSection />
      <CaseStudySection />
      <Footer onConsultClick={() => setIsModalOpen(true)} />
      </div>
      <ConsultationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
