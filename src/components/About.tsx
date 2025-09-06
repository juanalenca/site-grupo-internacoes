import React from 'react';
import { Shield, Heart, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Atendimento Emergencial',
      description: 'Suporte 24 horas para situações de emergência'
    },
    {
      icon: Users,
      title: 'Profissionais Qualificados',
      description: 'Equipe multidisciplinar especializada'
    },
    {
      icon: Heart,
      title: 'Prevenção e Segurança',
      description: 'Ambiente seguro e protegido para recuperação'
    },
    {
      icon: Award,
      title: 'Referência no Tratamento',
      description: 'Reconhecidos pela qualidade e eficácia'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nós</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Referência no Tratamento para Dependentes Químicos, Alcoólicos e também no 
            Tratamento de Transtornos Mentais. Nosso modelo de tratamento se diferencia 
            pela qualidade superior.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Clínica Diferenciada!
              </h3>
              <p className="text-gray-700 text-lg">
                Nossa unidade tem o que é necessário para um tratamento de qualidade! 
                Combinamos experiência, tecnologia e humanização para oferecer o melhor 
                cuidado aos nossos pacientes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600">12+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-green-600">1500+</div>
                <div className="text-gray-600">Vidas Transformadas</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Ambiente terapêutico acolhedor"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;