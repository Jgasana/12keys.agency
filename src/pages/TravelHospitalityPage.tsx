import { Header } from '../components/landing/Header';
import { Footer } from '../components/landing/Footer';
import { ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { Modal } from '../components/ui/Modal';
import { ServiceContactForm } from '../components/forms/ServiceContactForm';

export function TravelHospitalityPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      title: 'Hotel & Luxury Accommodation Coordination',
      image: 'https://images.pexels.com/photos/7363066/pexels-photo-7363066.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'We coordinate accommodation that suits your preferences and itinerary, ensuring modern aesthetics, comfort standards, and discreet arrival support. Whether you prefer established luxury chains or exclusive boutique properties, we match you with properties that align with your expectations and provide seamless check-in experiences.'
    },
    {
      title: 'Chauffeured & Executive Transport',
      image: 'https://images.pexels.com/photos/8425051/pexels-photo-8425051.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'Whether it\'s an airport arrival, business meeting, or multi-stop day, our team plans and confirms transport, matching vehicle style and professionalism to your needs. We ensure reliable service, knowledgeable drivers familiar with local routes, and vehicles maintained to the highest standards.'
    },
    {
      title: 'Priority Reservations & Curated Rwanda Experiences',
      image: 'https://images.pexels.com/photos/16251530/pexels-photo-16251530.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'We arrange bookings and partner access, from high-demand restaurants to tailored cultural or business experiences, through trusted local networks. Our curated experiences showcase Rwanda\'s finest venues and authentic local expertise, ensuring access to establishments that match your preferences.'
    },
    {
      title: 'Airport Meet-and-Assist & Facilitation Services',
      image: 'https://images.pexels.com/photos/4173209/pexels-photo-4173209.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'We help eliminate travel friction by coordinating pre-arrival details, baggage collection, and on-ground support that streamline transitions upon arrival and departure. Our team ensures smooth customs and immigration processes with dedicated assistance.'
    },
    {
      title: 'Itinerary Planning & 24/7 Guest Support',
      image: 'https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'We create detailed, realistic itineraries, confirm all arrangements, and provide an on-call point of contact throughout your stay to handle any changes or requests. Our team is available around the clock to ensure your experience remains seamless and responsive to your evolving needs.'
    }
  ];

  const keyBenefits = [
    {
      title: 'Seamless Travel Experience',
      description: 'Every aspect of your journey is coordinated with precision, from arrival to departure, eliminating logistical stress'
    },
    {
      title: 'Luxury Comfort & Convenience',
      description: 'Access to premium accommodation, reliable transport, and curated experiences designed for discerning travelers'
    },
    {
      title: 'Local Expertise',
      description: 'Deep knowledge of Rwanda\'s venues, cultural dynamics, best restaurants, and exclusive access through trusted networks'
    },
    {
      title: 'Flexible & Responsive Service',
      description: 'We adapt itineraries and arrangements to your evolving preferences with 24/7 on-call support'
    },
    {
      title: 'Discreet & Professional Management',
      description: 'Confidential handling of all arrangements with attention to privacy and personal preferences'
    },
    {
      title: 'Time Efficiency',
      description: 'Focus on your objectives while we handle planning, coordination, and logistics with expert precision'
    }
  ];

  const subservices = [
    'Hotel & Luxury Accommodation Coordination',
    'Chauffeured & Executive Transport',
    'Priority Reservations & Curated Experiences',
    'Airport Meet-and-Assist & Facilitation',
    'Itinerary Planning & 24/7 Guest Support'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative text-white py-40 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(142,109,70,0.4) 0%, rgba(162,136,106,0.4) 100%), url(https://images.pexels.com/photos/24827415/pexels-photo-24827415.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop)',
            backgroundAttachment: 'fixed',
            minHeight: '500px',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8e6d46]/30 to-[#a2886a]/30"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-light tracking-widest uppercase mb-6">
                Travel & Hospitality Experience Management
              </h1>
              <p className="text-xl font-light max-w-3xl mx-auto mb-4">
                Exceptional service and bespoke experiences for executives and private clients
              </p>
              <p className="text-lg font-light max-w-3xl mx-auto mb-8 text-gray-100">
                We coordinate the complete travel and hospitality journey with precision, ensuring seamless movements, accurate planning, and refined service
              </p>
              <button
                onClick={() => setSelectedService('Travel & Hospitality Inquiry')}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#8e6d46] rounded-lg font-light uppercase tracking-wider hover:bg-[#f3f3f3] transition-colors"
              >
                Plan Your Experience <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                At 12Keys, travel is more than a booking—it's a structured experience designed for clarity, comfort, and continuity.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                Our Travel & Hospitality service ensures every aspect of your guest's journey is managed with precision, from the moment of arrival to their departure, so they can focus on what matters most.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20 bg-[#f3f3f3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-gray-800 mb-4">
                Our Core Services
              </h2>
              <p className="text-lg font-light text-gray-600">
                Comprehensive travel and hospitality management tailored to your needs
              </p>
            </div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <div key={service.title} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-light uppercase tracking-wider text-gray-800 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-gray-800 mb-4">
                Why Choose 12Keys
              </h2>
              <p className="text-lg font-light text-gray-600">
                Your dedicated partner in seamless travel and hospitality experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyBenefits.map((benefit) => (
                <div key={benefit.title} className="bg-[#f3f3f3] p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-4">
                    <CheckCircle className="w-6 h-6 text-[#8e6d46] flex-shrink-0 mr-3 mt-0.5" />
                    <h3 className="text-lg font-light uppercase tracking-wider text-gray-800">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 font-light text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subservices Section */}
        <section className="py-20 bg-[#f3f3f3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-gray-800 mb-4">
                What We Provide
              </h2>
            </div>

            <div className="space-y-4">
              {subservices.map((service) => (
                <div key={service} className="bg-white border-l-4 border-[#8e6d46] p-6 rounded-lg hover:shadow-md transition-shadow">
                  <p className="text-gray-800 font-light text-lg">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-[#8e6d46] to-[#a2886a] text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase mb-6">
              Ready to Elevate Your Travel Experience?
            </h2>
            <p className="text-lg font-light mb-8">
              Let's discuss your travel objectives and how we can ensure every detail of your journey is handled with precision and care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setSelectedService('Travel & Hospitality Inquiry')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#8e6d46] rounded-lg font-light uppercase tracking-wider hover:bg-[#f3f3f3] transition-colors"
              >
                Plan Your Experience <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="mailto:info@12keys.agency"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white rounded-lg font-light uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                <MessageSquare className="w-5 h-5" /> Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        title="Travel & Hospitality Inquiry"
      >
        <ServiceContactForm
          serviceName={selectedService || ''}
          onSubmit={(data) => {
            console.log('Travel & Hospitality inquiry submitted:', data);
            setTimeout(() => setSelectedService(null), 2000);
          }}
        />
      </Modal>

      <Footer />
    </div>
  );
}
