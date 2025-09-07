import React from 'react';
import { Heart, Phone, MessageCircle, Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Grupo Transformação</h3>
                <p className="text-sm text-gray-400">Internações</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Somos Nº1 em Clínicas de Recuperação. Mais de 12 anos de experiência 
              transformando vidas com técnicas humanizadas e modernas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/5581991577470"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/clinicatransformacao01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('inicio');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('sobre');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('servicos');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('clinicas');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Clínicas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('metodologia');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Metodologia
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Internação Masculina</li>
              <li>Internação Feminina</li>
              <li>Internação para Menores</li>
              <li>Transtornos Mentais</li>
              <li>Clínica de Alto Padrão</li>
              <li>Remoção Compulsória</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">Telefone</p>
                  <a href="tel:81991577470" className="text-white hover:text-blue-400 transition-colors">
                    (81) 99157-7470
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">Localização</p>
                  <p className="text-white">Todo Território Nacional</p>
                </div>
              </div>

              <div className="bg-green-900 p-4 rounded-lg">
                <p className="text-green-100 text-sm mb-2">Atendimento 24h</p>
                <a
                  href="https://wa.me/5581991577470?text=Olá, preciso de ajuda!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-green-100 transition-colors text-sm"
                >
                  Fale conosco pelo WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Grupo Transformação Internações. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Transformando vidas há mais de 12 anos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;