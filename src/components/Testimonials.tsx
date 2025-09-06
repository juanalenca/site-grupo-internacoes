import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'João Silva',
      role: 'Paciente Recuperado',
      content: 'Graças ao Grupo Bem Estar, recuperei minha vida. A equipe é incrível e o tratamento realmente funciona. Hoje sou uma pessoa totalmente diferente.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Maria Santos',
      role: 'Mãe de Paciente',
      content: 'Não tenho palavras para agradecer o cuidado que tiveram com meu filho. Profissionais extremamente capacitados e um ambiente acolhedor.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Pedro Oliveira',
      role: 'Familiar',
      content: 'O apoio à família foi fundamental no processo de recuperação. Sempre nos mantiveram informados e acolheram nossa angústia com muito carinho.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ana Rodrigues',
      role: 'Paciente Recuperada',
      content: 'Encontrei aqui não apenas tratamento, mas uma nova família. O programa de 12 passos mudou completamente minha perspectiva de vida.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Carlos Mendes',
      role: 'Paciente Recuperado',
      content: 'Já havia tentado tratamento em outros lugares, mas só aqui consegui realmente me recuperar. A abordagem humanizada faz toda a diferença.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Luciana Costa',
      role: 'Esposa de Paciente',
      content: 'Ver meu marido se transformar foi emocionante. A clínica não só cuida do paciente, mas de toda a família. Somos gratos eternamente.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`} 
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Depoimentos
          </h2>
          <p className="text-xl text-gray-600">
            Veja o que nossos pacientes e familiares têm a dizer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="w-6 h-6 text-blue-200" />
              </div>

              {/* Avatar */}
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Você também pode ter sua história de sucesso
          </h3>
          <p className="text-gray-600 mb-6">
            Entre em contato conosco e dê o primeiro passo rumo à sua recuperação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5581991577470?text=Olá, gostaria de começar meu tratamento!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
            >
              Começar Tratamento
            </a>
            <button 
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;