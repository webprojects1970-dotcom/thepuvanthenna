
import { useState, useEffect } from 'react';
import { hotelInfo } from '@/lib/hotelData';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Automatic image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hotelInfo.heroImages.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image carousel */}
      {hotelInfo.heroImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
          <img
            src={image}
            alt={`${hotelInfo.name} - View ${index + 1}`}
            className="h-full w-full object-cover object-center"
          />
        </div>
      ))}

      {/* Image indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {hotelInfo.heroImages.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentSlide ? "w-8 bg-white" : "bg-white/40"
            )}
            onClick={() => setCurrentSlide(index)}
            aria-label={`View slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center max-w-4xl px-4 md:px-6">
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight">
            Experience Thepuvanthenna Villa Kandy Sri Lanka
            </h1>
            <h2 className="text-lg md:text-xl text-white/90 font-light max-w-xl mx-auto">
              {hotelInfo.tagline}
            </h2>
            <div className="h-px w-24 bg-primary/70 mx-auto"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              {hotelInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <a 
                href="#booking" 
                className="btn btn-primary px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Book Now
              </a>
              <a 
                href="#about" 
                className="btn text-white border border-white/30 hover:border-white hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <a 
          href="#about" 
          className="text-white/70 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="h-8 w-8"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
