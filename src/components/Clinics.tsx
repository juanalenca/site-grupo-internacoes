import React, { useState } from 'react';
import { ChevronDown, ChevronUp, User, Users, Baby, Brain, Crown } from 'lucide-react';

const Clinics = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const clinics = [
    {
      icon: User,
      title: 'INTERNAÇÃO MASCULINA - CLÍNICA PARA HOMENS',
      subtitle: 'INTERNAÇÃO MASCULINA VOLUNTÁRIA OU INVOLUNTÁRIA',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'INTERNAÇÃO FEMININA - CLÍNICA PARA MULHERES',
      subtitle: 'INTERNAÇÃO FEMININA VOLUNTÁRIA OU INVOLUNTÁRIA',
      color: 'pink'
    },
    {
      icon: Baby,
      title: 'INTERNAÇÃO PARA MENORES - CLÍNICA PARA MENORES DE IDADE',
      subtitle: 'INTERNAÇÃO PARA MENORES VOLUNTÁRIA OU INVOLUNTÁRIA',
      color: 'green'
    },
    {
      icon: Brain,
      title: 'INTERNAÇÃO TRANSTORNOS MENTAIS - SAÚDE MENTAL',
      subtitle: 'INTERNAÇÃO VOLUNTÁRIA OU INVOLUNTÁRIA (Homens ou Mulheres)',
      color: 'purple'
    },
    {
      icon: Crown,
      title: 'CLÍNICA DE ALTO PADRÃO',
      subtitle: 'SOB CONSULTA - ENTRE EM CONTATO PARA MAIS INFORMAÇÕES',
      color: 'gold',
      isSpecial: true
    }
  ];

  const facilities = [
    'ENFERMARIA',
    'TÉC. ENFERMAGEM',
    'PSICÓLOGA',
    'PSIQUIATRA',
    'TERAPEUTA HOLÍSTICO',
    'MONITORES (24 HORAS)',
    'COZINHEIRO',
    'NUTRICIONISTA'
  ];

  const meals = [
    'CAFÉ DA MANHÃ',
    'ALMOÇO',
    'CAFÉ DA TARDE',
    'JANTAR',
    'CHÁ DA NOITE'
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'bg-blue-50 border-blue-200 text-blue-800',
      pink: 'bg-pink-50 border-pink-200 text-pink-800',
      green: 'bg-green-50 border-green-200 text-green-800',
      purple: 'bg-purple-50 border-purple-200 text-purple-800',
      gold: 'bg-yellow-50 border-yellow-200 text-yellow-800'
    };
    return colors[color] || colors.blue;
  };

  const getIconColorClass = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'text-blue-600',
      pink: 'text-pink-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      gold: 'text-yellow-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="clinicas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Clínicas de Recuperação
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            CLÍNICAS DE RECUPERAÇÃO DE ÁLCOOL E DROGAS - Modalidades que atendemos
          </p>
          <p className="text-lg text-gray-700">
            Escolha o plano mais compatível com as acomodações que você procura.
          </p>
        </div>

        <div className="space-y-6">
          {clinics.map((clinic, index) => {
            const Icon = clinic.icon;
            const isOpen = openAccordion === index;
            
            return (
              <div 
                key={index}
                className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                  clinic.isSpecial 
                    ? 'border-yellow-300 shadow-lg bg-gradient-to-r from-yellow-50 to-orange-50' 
                    : 'border-gray-200 hover:border-gray-300 shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpenAccordion(isOpen ? null : index)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${getColorClasses(clinic.color)}`}>
                        <Icon className={`w-6 h-6 ${getIconColorClass(clinic.color)}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {clinic.title}
                        </h3>
                        <p className="text-gray-600 mt-1">
                          {clinic.subtitle}
                        </p>
                      </div>
                    </div>
                    {!clinic.isSpecial && (
                      <div className="flex-shrink-0">
                        {isOpen ? (
                          <ChevronUp className="w-6 h-6 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-500" />
                        )}
                      </div>
                    )}
                  </div>
                </button>

                {isOpen && !clinic.isSpecial && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">
                          O QUE A CLÍNICA POSSUI:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {facilities.map((facility, fIndex) => (
                            <div 
                              key={fIndex}
                              className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg"
                            >
                              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{facility}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">
                          ALIMENTAÇÃO:
                        </h4>
                        <div className="space-y-2">
                          {meals.map((meal, mIndex) => (
                            <div 
                              key={mIndex}
                              className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg"
                            >
                              <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{meal}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {clinic.isSpecial && (
                  <div className="px-6 pb-6">
                    <div className="text-center py-8">
                      <p className="text-lg text-gray-700 mb-6">
                        Nossa clínica de alto padrão oferece acomodações e serviços premium 
                        para proporcionar máximo conforto durante o tratamento.
                      </p>
                      <a
                        href="https://wa.me/5581991577470?text=Olá, gostaria de saber mais sobre a Clínica de Alto Padrão!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-yellow-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
                      >
                        Consulte Disponibilidade
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clinics;