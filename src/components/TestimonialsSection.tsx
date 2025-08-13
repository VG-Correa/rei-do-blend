import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../core/testimonials.mock';

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-red-900 to-red-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Histórias reais de empreendedores que transformaram seus negócios conosco
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 italic mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].texto}"
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].nome}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-bold text-red-900">
                    {testimonials[currentTestimonial].nome}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].negocio}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-white' : 'bg-white opacity-30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
