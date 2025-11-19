import { useState } from 'react';
import { ServiceCard } from '../ui/ServiceCard';
import { Modal } from '../ui/Modal';
import { ServiceContactForm } from '../forms/ServiceContactForm';

export function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      title: 'Private Events',
      image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'Curated private events tailored to your specific requirements. From intimate gatherings to grand celebrations, we handle every detail with precision.',
    },
    {
      title: 'Corporate Functions',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'Professional corporate event planning and management. Impress your clients and colleagues with flawlessly executed business functions.',
    },
    {
      title: 'Luxury Experiences',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'Bespoke luxury experiences designed exclusively for you. Access to the most sought-after venues, services, and opportunities.',
    },
    {
      title: 'Venue Selection',
      image: 'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'Expert guidance in selecting the perfect venue for your event. Exclusive access to premium locations across the city.',
    },
    {
      title: 'Catering Services',
      image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'World-class catering from renowned chefs and culinary teams. Customized menus to suit every taste and dietary requirement.',
    },
    {
      title: 'Entertainment',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'Premium entertainment options for any occasion. From live music to performance artists, we provide unforgettable experiences.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#f3f3f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of concierge services designed to elevate your events and experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              image={service.image}
              description={service.description}
              ctaLabel="Inquire Now"
              onClick={() => setSelectedService(service.title)}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        title={selectedService || ''}
      >
        <ServiceContactForm
          serviceName={selectedService || ''}
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            setTimeout(() => setSelectedService(null), 2000);
          }}
        />
      </Modal>
    </section>
  );
}
