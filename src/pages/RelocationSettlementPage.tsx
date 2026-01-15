import { Header } from '../components/landing/Header';
import { Footer } from '../components/landing/Footer';
import { ArrowRight, CheckCircle, Home, Users, Lightbulb, Heart } from 'lucide-react';
import { useState } from 'react';
import { Modal } from '../components/ui/Modal';
import { ServiceContactForm } from '../components/forms/ServiceContactForm';

export function RelocationSettlementPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      title: 'Housing Search, Lease Negotiation & Move-in Setup',
      image: 'https://images.pexels.com/photos/7414916/pexels-photo-7414916.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'We guide housing options that fit your family\'s needs, coordinate property viewings, support negotiations, and ensure that your new residence is ready before arrival, including essential furnishing and layout preferences when needed.'
    },
    {
      title: 'Utilities & Household Activation',
      image: 'https://images.pexels.com/photos/6196677/pexels-photo-6196677.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'We handle the setup of core services such as electricity, water, internet, and other household essentials. Our team coordinates with trusted local service providers to streamline procedures and avoid unnecessary delays.'
    },
    {
      title: 'Family Settling Assistance (Schools, Wellness, Memberships)',
      image: 'https://images.pexels.com/photos/8540368/pexels-photo-8540368.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'From identifying suitable schooling options to recommending wellness providers, social clubs, and community memberships, we guide families through local customs, schedules, and service onboarding, making the personal side of relocation easier and more comfortable.'
    },
    {
      title: 'First-90-Day Lifestyle Stabilization',
      image: 'https://images.pexels.com/photos/5082870/pexels-photo-5082870.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'The first three months of relocation are often the most demanding. We remain actively engaged during this period to adjust plans, refine preferences, troubleshoot issues, and ensure your family feels welcomed, oriented, and confident in your new home.'
    }
  ];

  const whyItMatters = [
    {
      title: 'Structured Support',
      description: 'Moving to a new country—especially as a busy executive and family—is complex. We break the journey into manageable phases with clear milestones'
    },
    {
      title: 'Cultural Awareness',
      description: 'Our team understands Rwanda\'s local customs, educational landscape, wellness services, and community norms, helping your family adapt faster'
    },
    {
      title: 'Time Efficiency',
      description: 'Coordinating housing, utilities, schools, and settling in takes time. We handle the logistics so you can focus on your role and family well-being'
    },
    {
      title: 'Local Expertise',
      description: 'Trusted relationships with property managers, service providers, schools, and wellness centers speed up every step of your transition'
    },
    {
      title: 'Family Peace of Mind',
      description: 'We support the personal side of relocation—helping families feel grounded, connected, and comfortable in their new environment'
    },
    {
      title: 'Post-Arrival Support',
      description: 'We don\'t disappear after move-in. Our 90-day engagement ensures issues are resolved and your family\'s preferences are refined as you settle in'
    }
  ];

  const subservices = [
    'Housing Search, Lease Negotiation & Move-in Setup',
    'Utilities & Household Activation',
    'Family Settling Assistance (Schools, Wellness, Memberships)',
    'First-90-Day Lifestyle Stabilization'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative text-white py-40 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(142,109,70,0.5) 0%, rgba(162,136,106,0.5) 100%), url(https://images.pexels.com/photos/7579193/pexels-photo-7579193.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop)',
            backgroundAttachment: 'fixed',
            minHeight: '500px',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8e6d46]/40 to-[#a2886a]/40"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-light tracking-widest uppercase mb-6">
                Relocation & Settlement Support
              </h1>
              <p className="text-xl font-light max-w-3xl mx-auto mb-4">
                Structured, culturally aware guidance for your transition to Rwanda
              </p>
              <p className="text-lg font-light max-w-3xl mx-auto mb-8 text-gray-100">
                We guide executives and families through their relocation with coordinated support from housing to schools to wellness
              </p>
              <button
                onClick={() => setSelectedService('Relocation & Settlement Inquiry')}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#8e6d46] rounded-lg font-light uppercase tracking-wider hover:bg-[#f3f3f3] transition-colors"
              >
                Start Your Relocation Journey <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Moving to a new country—especially for busy executives and their families—is more than a logistics challenge. It's a life transition.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                We guide executives and families through their transition to Rwanda with structured, culturally aware relocation support. From housing search and utilities activation to school selection and family settling assistance, we coordinate every element of your arrival and first 90 days in your new home, ensuring a comfortable, informed, and confident transition.
              </p>
            </div>
          </div>
        </section>

        {/* Sub-section Copy */}
        <section className="py-20 bg-gradient-to-r from-white to-[#f3f3f3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-light tracking-widest uppercase text-gray-800 mb-8 text-center">
              Our Approach
            </h2>
            <div className="space-y-6 text-gray-700 font-light">
              <p>
                We guide executives and families through their transition to Rwanda with structured, culturally aware relocation support. Moving to a new country—especially for busy executives and their families, is more than a logistics challenge. It's a life transition that requires planning, coordination, cultural awareness, and follow-through.
              </p>
              <p>
                12Keys provides comprehensive relocation support, addressing both the practical side (housing, utilities, logistics) and the personal side (schools, wellness, community integration). Throughout this journey, ensuring a comfortable, efficient, and informed relocation to Rwanda.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-gray-800 mb-4">
                What We Provide
              </h2>
              <p className="text-lg font-light text-gray-600">
                Comprehensive relocation support tailored to your family's needs
              </p>
            </div>

            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={service.title} className="bg-[#f3f3f3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-[#8e6d46] font-light text-3xl flex-shrink-0 pt-1">
                          {index + 1}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-light uppercase tracking-wider text-gray-800">
                          {service.title}
                        </h3>
                      </div>
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

        {/* Why It Matters Section */}
        <section className="py-20 bg-gradient-to-r from-[#8e6d46] to-[#a2886a] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase mb-4">
                Why It Matters
              </h2>
              <p className="text-lg font-light max-w-3xl mx-auto">
                Relocation is a multi-phase transition requiring coordination across housing, utilities, family needs, and cultural adaptation. With 12Keys as your relocation partner, every detail is handled with local expertise and cultural awareness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyItMatters.map((item) => (
                <div key={item.title} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="flex items-start mb-4">
                    <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mr-3 mt-0.5" />
                    <h3 className="text-lg font-light uppercase tracking-wider">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white/90 font-light text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subservices Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-gray-800 mb-4">
                Comprehensive Support
              </h2>
            </div>

            <div className="space-y-4">
              {subservices.map((service, index) => (
                <div key={service} className="bg-gradient-to-r from-[#8e6d46]/5 to-transparent border-l-4 border-[#8e6d46] p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="text-[#8e6d46] font-light text-2xl flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-800 font-light text-lg">{service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal For Section */}
        <section className="py-20 bg-[#f3f3f3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-gray-800 mb-4">
                Ideal For
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-light uppercase tracking-wider text-gray-800 mb-4">International Executives</h3>
                <p className="text-gray-600 font-light">Business leaders relocating to Rwanda for permanent roles or multi-year assignments requiring comprehensive settlement support</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-light uppercase tracking-wider text-gray-800 mb-4">Families with Children</h3>
                <p className="text-gray-600 font-light">Families needing school selection, family settling assistance, and community integration support during their transition</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-light uppercase tracking-wider text-gray-800 mb-4">Corporate Relocations</h3>
                <p className="text-gray-600 font-light">Organizations supporting employee relocations with structured, end-to-end relocation coordination and family support</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-light uppercase tracking-wider text-gray-800 mb-4">Long-Term Residents</h3>
                <p className="text-gray-600 font-light">Professionals establishing new homes in Rwanda and seeking guidance on local services, schools, and community integration</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-gray-800 mb-4">
                Key Features
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Home className="w-12 h-12 text-[#8e6d46]" />
                </div>
                <h3 className="text-lg font-light uppercase tracking-wider text-gray-800 mb-2">Housing</h3>
                <p className="text-gray-600 font-light text-sm">Property search, negotiations, and move-in coordination</p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Lightbulb className="w-12 h-12 text-[#8e6d46]" />
                </div>
                <h3 className="text-lg font-light uppercase tracking-wider text-gray-800 mb-2">Utilities</h3>
                <p className="text-gray-600 font-light text-sm">Electricity, water, internet setup and activation</p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Users className="w-12 h-12 text-[#8e6d46]" />
                </div>
                <h3 className="text-lg font-light uppercase tracking-wider text-gray-800 mb-2">Family</h3>
                <p className="text-gray-600 font-light text-sm">Schools, wellness, and community memberships</p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Heart className="w-12 h-12 text-[#8e6d46]" />
                </div>
                <h3 className="text-lg font-light uppercase tracking-wider text-gray-800 mb-2">Stabilization</h3>
                <p className="text-gray-600 font-light text-sm">90-day engagement for lifestyle adjustment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-[#8e6d46] to-[#a2886a] text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase mb-6">
              Ready to Begin Your Relocation?
            </h2>
            <p className="text-lg font-light mb-8">
              Let's discuss your relocation timeline, family needs, and how we can ensure your transition to Rwanda is smooth, informed, and supported every step of the way
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setSelectedService('Relocation & Settlement Inquiry')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#8e6d46] rounded-lg font-light uppercase tracking-wider hover:bg-[#f3f3f3] transition-colors"
              >
                Plan Your Relocation <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="mailto:info@12keys.agency"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white rounded-lg font-light uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        title="Relocation & Settlement Inquiry"
      >
        <ServiceContactForm
          serviceName={selectedService || ''}
          onSubmit={(data) => {
            console.log('Relocation & Settlement inquiry submitted:', data);
            setTimeout(() => setSelectedService(null), 2000);
          }}
        />
      </Modal>

      <Footer />
    </div>
  );
}
