import React from 'react';
import { Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Somos Nº1 em{' '}
                <span className="text-blue-600">Clínicas de Recuperação</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Dependência Química, Alcoólica e Transtornos Mentais têm <strong>TRATAMENTO!</strong>
              </p>
              <p className="text-lg text-gray-600">
                Somos uma equipe especializada e viemos trazer um novo conceito em saúde mental, 
                com técnicas humanizadas e modernas abrangendo por completo o ser humano.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">12+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">1500+</div>
                <div className="text-gray-600">Pacientes Atendidos</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">24h</div>
                <div className="text-gray-600">Atendimento</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Fale Conosco Agora
              </button>
              <a
                href="https://wa.me/5581991577470?text=Olá, gostaria de saber mais sobre o Grupo Bem Estar Internações!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Profissionais de saúde mental em ambiente terapêutico"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-gray-600">Dedicação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;