import React from 'react';
import { 
  Phone, 
  TrendingUp, 
  Stethoscope, 
  Brain, 
  Shield, 
  BookOpen 
} from 'lucide-react';

const Methodology = () => {
  const methodologySteps = [
    {
      icon: Phone,
      title: 'LIGAÇÕES SEMANAIS',
      description: 'A família poderá acompanhar a evolução através de ligações e visitas.',
      step: '01'
    },
    {
      icon: TrendingUp,
      title: 'EVOLUÇÃO TERAPÊUTICA',
      description: 'O paciente é acompanhado pela equipe terapêutica com evolução.',
      step: '02'
    },
    {
      icon: Stethoscope,
      title: 'CONSULTAS COM PSIQUIATRA',
      description: 'Ajustes de medicação e acompanhamento psiquiátrico.',
      step: '03'
    },
    {
      icon: Brain,
      title: 'CONSULTAS COM PSICÓLOGO',
      description: 'Consultas individuais e em grupo.',
      step: '04'
    },
    {
      icon: Shield,
      title: 'EQUIPE DE MONITORIA',
      description: 'Segurança do paciente em primeiro lugar.',
      step: '05'
    },
    {
      icon: BookOpen,
      title: 'PLANO TERAPÊUTICO EFICAZ',
      description: 'Tratamento baseado em 12 Passos de A.A. (Alcoólicos Anônimos) e N.A. (Narcóticos Anônimos) bem como Terapia Cognitiva Comportamental (TCC).',
      step: '06'
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossa Metodologia
          </h2>
          <p className="text-2xl text-blue-600 font-semibold mb-6">
            Plano Terapêutico
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Nosso plano terapêutico é estruturado e baseado em metodologias comprovadas, 
            garantindo um tratamento eficaz e humanizado.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-blue-200 hidden lg:block"></div>
          
          <div className="space-y-8">
            {methodologySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="relative flex items-start space-x-6 lg:space-x-8"
                >
                  {/* Step number */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg lg:relative lg:z-10">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Quer saber mais sobre nosso plano terapêutico?
          </h3>
          <p className="text-gray-600 mb-6">
            Entre em contato conosco e conheça detalhadamente como funcionam 
            nossas etapas de tratamento.
          </p>
          <a
            href="https://wa.me/5581991577470?text=Olá, gostaria de saber mais sobre o plano terapêutico!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
          >
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Methodology;