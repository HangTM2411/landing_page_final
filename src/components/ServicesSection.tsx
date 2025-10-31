import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { ScrollAnimation } from './ScrollAnimation';
import { motion, AnimatePresence } from 'motion/react';

export function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const slides = [
    { title: 'Dịch vụ 1', image: '/Service1.png' },
    { title: 'Dịch vụ 2', image: '/Service2.png' },
    { title: 'Dịch vụ 3', image: '/Service3.png' },
    { title: 'Dịch vụ 4', image: '/Service4.png' },
    { title: 'Dịch vụ 5', image: '/Service5.png' }
  ];
  
  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,30 Q300,0 600,30 T1200,30 L1200,60 L0,60 Z" fill="white"/>
        </svg>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10 mt-8">
        <ScrollAnimation>
          <h2 className="text-center mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Gói dịch vụ của Verza
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 mx-auto mb-4 sm:mb-6" />
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <div className="relative flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
          
          <button 
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/30 hover:scale-110 p-2 sm:p-3 rounded-full transition-all duration-300 z-10 flex-shrink-0 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          
          <div className="relative rounded-3xl bg-white/5 backdrop-blur-sm p-4 sm:p-6 md:p-8 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center flex-1 max-w-3xl overflow-hidden shadow-2xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={currentSlide}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title}
                className="w-full h-full object-contain max-h-[280px] sm:max-h-[380px] md:max-h-[480px] rounded-2xl"
              />
            </AnimatePresence>
          </div>
          
          <button 
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/30 hover:scale-110 p-2 sm:p-3 rounded-full transition-all duration-300 z-10 flex-shrink-0 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
          
          </div>
        </ScrollAnimation>
        
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/30 w-3 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Wavy bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 Q300,30 600,0 T1200,0 L1200,60 L0,60 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
