import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Instagram
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

 const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const messageText = `Olá! Meu nome é ${formData.name}.\n Email: ${formData.email}.\n Telefone: ${formData.phone}.\n Mensagem: ${formData.message}`;
    const encodedMessage = encodeURIComponent(messageText);
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5581991577470&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(81) 99157-7470',
      link: 'tel:81991577470'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '(81) 99157-7470',
      link: 'https://wa.me/5581991577470'
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'Todo Território Nacional',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Atendimento',
      value: '24 horas por dia',
      link: '#'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@clinicatransformacao01',
      link: 'https://instagram.com/clinicatransformacao01'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Contatos
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Entre em contato conosco. Respondemos rapidamente!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="bg-blue-100 px-3 py-1 rounded-full">Todo Território Nacional</span>
            <span className="bg-green-100 px-3 py-1 rounded-full">Respondemos Rapidamente</span>
            <span className="bg-red-100 px-3 py-1 rounded-full">24 horas</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {info.title}
                        </h4>
                        {info.link !== '#' ? (
                          <a 
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 text-sm">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Fale Conosco Agora
              </h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/5581991577470?text=Olá, gostaria de saber mais sobre o Grupo Bem-Estar Internações!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-green-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-600 transition duration-300 w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Fale Conosco pelo WhatsApp</span>
                </a>
                <a
                  href="tel:81991577470"
                  className="flex items-center justify-center space-x-3 bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 w-full"
                >
                  <Phone className="w-5 h-5" />
                  <span>Ligar Agora</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Digite seu email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Digite seu telefone"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Conte-nos como podemos ajudar..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                <span>Enviar via WhatsApp</span>
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                Ao enviar o formulário, você será redirecionado para o WhatsApp 
                com sua mensagem preenchida automaticamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;