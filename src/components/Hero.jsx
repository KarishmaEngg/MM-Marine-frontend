import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // High-definition clear image URLs use karein
  const slides = [
    {
      imgUrl: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    }
  ];

  // 5 seconds auto slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[250px] sm:h-[600px] bg-slate-950 overflow-hidden pt-20">
      {/* Slider Images with correct z-index for crystal clear rendering */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.imgUrl}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle dark overlay for professional contrast */}
          <div className="absolute inset-0 bg-slate-950/20"></div>
        </div>
      ))}

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'w-8 bg-orange-500' : 'w-3 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}