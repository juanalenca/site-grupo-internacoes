import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Building2, Bed, Coffee, Users, Gamepad2, TreePine } from 'lucide-react';

// Importe as 15 imagens locais (ajuste os nomes conforme suas fotos)
import imagem1 from '../assets/images/1.jpg';
import imagem2 from '../assets/images/2.jpg';
import imagem3 from '../assets/images/3.jpg';
import imagem4 from '../assets/images/4.jpg';
import imagem5 from '../assets/images/5.jpg';
import imagem6 from '../assets/images/6.jpg';
import imagem7 from '../assets/images/7.jpg';
import imagem8 from '../assets/images/8.jpg';
import imagem9 from '../assets/images/9.jpg';
import imagem10 from '../assets/images/10.jpg';
import imagem11 from '../assets/images/11.jpg';
import imagem12 from '../assets/images/12.jpg';
import imagem13 from '../assets/images/13.jpg';
import imagem14 from '../assets/images/14.jpg';
import imagem15 from '../assets/images/15.jpg';

const Unit = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { url: imagem1, title: 'Imagem 1' },
    { url: imagem2, title: 'Imagem 2' },
    { url: imagem3, title: 'Imagem 3' },
    { url: imagem4, title: 'Imagem 4' },
    { url: imagem5, title: 'Imagem 5' },
    { url: imagem6, title: 'Imagem 6' },
    { url: imagem7, title: 'Imagem 7' },
    { url: imagem8, title: 'Imagem 8' },
    { url: imagem9, title: 'Imagem 9' },
    { url: imagem10, title: 'Imagem 10' },
    { url: imagem11, title: 'Imagem 11' },
    { url: imagem12, title: 'Imagem 12' },
    { url: imagem13, title: 'Imagem 13' },
    { url: imagem14, title: 'Imagem 14' },
    { url: imagem15, title: 'Imagem 15' },
  ];

  const facilities = [
    { icon: Building2, title: 'Infraestrutura Moderna', description: 'Instalações novas e bem equipadas' },
    { icon: Bed, title: 'Acomodações Confortáveis', description: 'Quartos individuais e compartilhados' },
    { icon: Coffee, title: 'Refeitório Completo', description: 'Alimentação balanceada e nutritiva' },
    { icon: Users, title: 'Salas de Terapia', description: 'Espaços adequados para tratamento' },
    { icon: Gamepad2, title: 'Área de Lazer', description: 'Atividades recreativas e esportivas' },
    { icon: TreePine, title: 'Área Verde', description: 'Contato com a natureza' }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="unidade" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossa Unidade
          </h2>
          <p className="text-xl text-gray-600">
            Conheça nossas instalações modernas e acolhedoras
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src={images[currentImage].url} 
                alt={images[currentImage].title}
                className="w-full h-full object-cover transition-transform duration-500"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x450'; console.log('Imagem falhou ao carregar', images[currentImage].url); }}
              />
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentImage ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View image ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nossas Instalações
              </h3>
              <p className="text-gray-600 text-lg">
                Nossa unidade foi projetada para oferecer o melhor ambiente de 
                recuperação, combinando conforto, segurança e profissionalismo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facilities.map((facility, index) => {
                const Icon = facility.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">
                          {facility.title}
                        </h4>
                        <p className="text-gray-600 text-xs">
                          {facility.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">
                Quer conhecer nossa unidade?
              </h4>
              <p className="text-gray-600 mb-4">
                Agende uma visita e conheça pessoalmente nossas instalações.
              </p>
              <a
                href="https://wa.me/5581991577470?text=Olá, gostaria de agendar uma visita à unidade!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Agendar Visita
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unit;