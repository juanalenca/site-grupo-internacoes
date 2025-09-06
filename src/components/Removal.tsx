import React from 'react';
import { Truck, Shield, Clock, Phone } from 'lucide-react';

const Removal = () => {
  return (
    <section className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Remoção Compulsória
          </h2>
          <p className="text-2xl text-red-600 font-semibold mb-6">
            REMOÇÃO 24H
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Oferecemos o serviço de <strong>REMOÇÃO COMPULSÓRIA (Resgate)</strong> desfrutando 
                de uma equipe preparada para trazer o residente em segurança até a clínica, 
                sempre com procedimentos voltados para preservação da integridade física e psíquica.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">24 Horas</div>
                  <div className="text-sm text-gray-600">Disponível</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Segurança</div>
                  <div className="text-sm text-gray-600">Garantida</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <Truck className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Equipe</div>
                  <div className="text-sm text-gray-600">Especializada</div>
                </div>
              </div>

              <div className="bg-red-100 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Nossos Diferenciais:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                    Equipe treinada e qualificada
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                    Procedimentos seguros e humanizados
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                    Preservação da integridade do paciente
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                    Acompanhamento psicológico durante o transporte
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:81991577470"
                  className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Ligar Agora</span>
                </a>
                <a
                  href="https://wa.me/5581991577470?text=Preciso de remoção compulsória urgente!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Equipe de remoção especializada"
              className="w-full rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">24h</div>
                <div className="text-gray-600">Disponível</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">!</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Importante:</h3>
              <p className="text-gray-700">
                A remoção compulsória é realizada sempre dentro dos parâmetros legais e com total 
                respeito aos direitos humanos. Nossa equipe é treinada para situações delicadas 
                e prioriza sempre o bem-estar do paciente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Removal;