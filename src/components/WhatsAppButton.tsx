import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="https://wa.me/5581991577470?text=Olá, gostaria de saber mais sobre o Grupo Bem Estar Internações!" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group block w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 animate-pulse"
      >
        <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale conosco no WhatsApp
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>

        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25"></div>
      </a>
    </div>
  );
};

export default WhatsAppButton;