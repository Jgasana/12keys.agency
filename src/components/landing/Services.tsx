import { useState } from 'react';
import { ServiceCard } from '../ui/ServiceCard';
import { Modal } from '../ui/Modal';
import { ServiceContactForm } from '../forms/ServiceContactForm';

export function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      title: 'Travel & Hospitality',
      image: 'https://images.pexels.com/photos/8069368/pexels-photo-8069368.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'Seamless travel, mobility, and hospitality planning with refined coordination',
      href: '/travel-hospitality',
    },
    {
      title: 'Corporate & Delegation Concierge',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'Structured support for boards, executive teams, and visiting delegations',
    },
    {
      title: 'Relocation & Settlement Support',
      image: 'https://images.pexels.com/photos/7464736/pexels-photo-7464736.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'Smooth transitions for executives and families relocating to Rwanda',
    },
    {
      title: 'Business-to-Business (B2B) Connector',
      image: 'https://images.pexels.com/photos/6077647/pexels-photo-6077647.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'Strategic introductions connecting credible companies and institutions across sectors',
      href: '/b2b',
    },
    {
      title: 'Personal & Lifestyle Concierge',
      image: 'https://images.pexels.com/photos/3727469/pexels-photo-3727469.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'Bespoke support for lifestyle, dining, and personal arrangements (by request).',
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
              ctaLabel="Learn More"
              href={(service as any).href}
              onClick={() => !((service as any).href) && setSelectedService(service.title)}
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