import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Grupo Bem-Estar</h1>
              <p className="text-xs text-gray-600">Internações</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('clinicas')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Clínicas
            </button>
            <button onClick={() => scrollToSection('metodologia')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Metodologia
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:81991577470"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(81) 99157-7470</span>
            </a>
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Fale Conosco
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('clinicas')} className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Clínicas
              </button>
              <button onClick={() => scrollToSection('metodologia')} className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Metodologia
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contato
              </button>
              <div className="pt-4 border-t border-gray-200">
                <a 
                  href="tel:81991577470"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors mb-3"
                >
                  <Phone className="w-4 h-4" />
                  <span>(81) 99157-7470</span>
                </a>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="w-full bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Fale Conosco
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;