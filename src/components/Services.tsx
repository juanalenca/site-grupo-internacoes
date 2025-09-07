import React from 'react';
import { 
  Phone, 
  Stethoscope, 
  UserCheck, 
  Brain, 
  Users, 
  BookOpen 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: 'Contato Rápido! Atendimento 24h',
      description: 'Você rapidamente consegue contato em nossa central de atendimento da clínica de recuperação.'
    },
    {
      icon: Stethoscope,
      title: 'Tratamento Médico Psiquiatra',
      description: 'Em nossa unidade de tratamento temos psiquiatra que irá analisar caso a caso.'
    },
    {
      icon: UserCheck,
      title: 'Enfermeiros e Auxiliares',
      description: 'Nossa unidade possui equipe de enfermagem para administrar a medicação e acompanhar o paciente.'
    },
    {
      icon: Brain,
      title: 'Consultório de Psicologia',
      description: 'Atendimento psicológico semanal e reuniões terapêuticas em grupo.'
    },
    {
      icon: Users,
      title: 'Terapeutas Qualificados',
      description: 'Nossos Terapeutas são todos certificados com CRT e ministram reuniões diárias, realizando atendimentos individuais e em grupo.'
    },
    {
      icon: BookOpen,
      title: 'Terapia Cognitiva Comportamental',
      description: 'A TCC é uma abordagem psicoterapêutica que ajuda a identificar e modificar padrões de pensamento e comportamento disfuncionais.'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-2xl text-blue-600 font-semibold mb-6">
            TRATAMENTO INOVADOR E DIFERENCIADO!
          </p>
          <a
            href="https://wa.me/5581991577470?text=Olá, gostaria de saber mais sobre o Grupo Bem-Estar Internações!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 text-lg"
          >
            Fale Conosco pelo WhatsApp
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;