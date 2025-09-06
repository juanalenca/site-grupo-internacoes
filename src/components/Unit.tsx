import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Building2, Bed, Coffee, Users, Gamepad2, TreePine } from 'lucide-react';

const Unit = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      url: 'https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Fachada Principal',
      description: 'Entrada moderna e acolhedora'
    },
    {
      url: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Quartos Confortáveis',
      description: 'Ambiente privativo e tranquilo'
    },
    {
      url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sala de Terapia em Grupo',
      description: 'Espaço para atividades terapêuticas'
    },
    {
      url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Consultório Médico',
      description: 'Atendimento médico especializado'
    },
    {
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Área de Convivência',
      description: 'Espaço de socialização e lazer'
    },
    {
      url: 'https://images.pexels.com/photos/1698537/pexels-photo-1698537.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Jardim Terapêutico',
      description: 'Área verde para relaxamento'
    }
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
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={images[currentImage].url} 
                alt={images[currentImage].title}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold text-lg">{images[currentImage].title}</h3>
                <p className="text-sm text-gray-200">{images[currentImage].description}</p>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentImage ? 'ring-4 ring-blue-500 scale-105' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </button>
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