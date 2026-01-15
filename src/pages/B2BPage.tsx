import { Header } from '../components/landing/Header';
import { Footer } from '../components/landing/Footer';
import { ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { Modal } from '../components/ui/Modal';
import { ServiceContactForm } from '../components/forms/ServiceContactForm';

export function B2BPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      title: 'Targeted Partner Identification',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'We begin by understanding your objectives and the type of organization you wish to engage with. Our team conducts targeted research using industry networks, verified databases, chambers of commerce, and our private partner ecosystem. The outcome: a curated shortlist relevant partners aligned with your needs.'
    },
    {
      title: 'Professional Outreach & Communication',
      image: 'https://images.pexels.com/photos/3860937/pexels-photo-3860937.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'Once suitable partners are identified, we initiate confidential and professionally crafted outreach, ensuring your interests are represented with accuracy and discretion. We coordinate communication, request the right points of contact, and confirm willingness to engage, without disclosing confidential client details unless authorized.'
    },
    {
      title: 'Structured Meeting Facilitation',
      image: 'https://images.pexels.com/photos/30688596/pexels-photo-30688596.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'When both sides are ready to connect, we prepare and coordinate the engagement from end to end. We provide background notes for both parties, prepare clear meeting agendas, arrange chauffered & executive transport, and manage all logistics to ensure a seamless, professional experience.'
    },
    {
      title: 'Follow-Up & Outcome Tracking',
      image: 'https://images.pexels.com/photos/8067771/pexels-photo-8067771.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'After the engagement, we maintain momentum by sending structured follow-ups, tracking outcomes, and facilitating next steps when appropriate. We document agreements, coordinate any required introductions, and ensure clarity on next actions. Your success is our success.'
    }
  ];

  const keyBenefits = [
    {
      title: 'Discreet & Professional Process',
      description: 'We manage introductions with confidentiality and professionalism, protecting all parties involved'
    },
    {
      title: 'Curated Partnerships',
      description: 'Access to vetted organizations across hospitality, government, telecommunications, investment, medical sectors and more'
    },
    {
      title: 'Local Market Expertise',
      description: 'Deep knowledge of Rwanda\'s business landscape, cultural dynamics, and decision-making processes'
    },
    {
      title: 'Dedicated Account Management',
      description: 'Personal account managers ensure smooth communication and successful outcomes throughout the process'
    },
    {
      title: 'Outcome-Focused Approach',
      description: 'We don\'t just introduce—we facilitate lasting, productive partnerships with clear objectives'
    },
    {
      title: 'Strategic Flexibility',
      description: 'From initial introductions to investment facilitation, we adapt to your specific business needs'
    }
  ];

  const industries = [
    'Hospitality & Tourism',
    'Government & Public Sector',
    'Telecommunications',
    'Investment & Finance',
    'Medical & Pharmaceuticals',
    'Real Estate & Property',
    'Corporate Services',
    'Event Management',
    'Education & Training',
    'Import/Export & Trade',
    'Logistics & Transportation',
    'Technology & Innovation'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative text-white py-40 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(142,109,70,0.4) 0%, rgba(162,136,106,0.4) 100%), url(https://images.pexels.com/photos/7793999/pexels-photo-7793999.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop)',
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
                B2B Connector Service
              </h1>
              <p className="text-xl font-light max-w-3xl mx-auto mb-4">
                Strategic business introductions that open doors and create opportunities
              </p>
              <p className="text-lg font-light max-w-3xl mx-auto mb-8 text-gray-100">
                Link credible companies, institutions, experts, or strategic partners with discreet, professional facilitation
              </p>
              <button
                onClick={() => setSelectedService('B2B Connector Inquiry')}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#8e6d46] rounded-lg font-light uppercase tracking-wider hover:bg-[#f3f3f3] transition-colors"
              >
                Start Your Partnership <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                The 12Keys Agency Business-to-Business (B2B) Connector is a structured service designed to link clients with credible companies, institutions, experts, or strategic partners.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                Whether you require introductions in hospitality, government communications, investment, medical sectors, logistics, or other specialized industries, we manage the entire process with discretion, professionalism, and clarity.
              </p>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20 bg-[#f3f3f3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-gray-800 mb-4">
                How It Works
              </h2>
              <p className="text-lg font-light text-gray-600">
                A four-step structured process designed for your success
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
                      <div className="flex items-center mb-4">
                        <div className="text-[#8e6d46] font-light text-4xl mr-4 font-bold">
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

        {/* Key Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-gray-800 mb-4">
                Why Choose 12Keys
              </h2>
              <p className="text-lg font-light text-gray-600">
                Your dedicated partner in strategic business connections
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

        {/* Industries Section */}
        <section className="py-20 bg-[#f3f3f3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-gray-800 mb-4">
                Industries We Connect
              </h2>
              <p className="text-lg font-light text-gray-600">
                Specialized expertise across diverse sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {industries.map((industry) => (
                <div key={industry} className="bg-white p-6 rounded-lg text-center hover:shadow-md transition-shadow border-t-4 border-[#8e6d46]">
                  <p className="text-gray-800 font-light uppercase tracking-wider text-sm">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services List Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-gray-800 mb-4">
                Subservices List
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-light uppercase tracking-wider text-gray-800 mb-6">Core Offerings</h3>
                <div className="border-l-4 border-[#8e6d46] pl-6 py-3">
                  <p className="text-gray-700 font-light">Partner Sourcing & Shortlisting</p>
                </div>
                <div className="border-l-4 border-[#8e6d46] pl-6 py-3">
                  <p className="text-gray-700 font-light">Professional Outreach & Communication</p>
                </div>
                <div className="border-l-4 border-[#8e6d46] pl-6 py-3">
                  <p className="text-gray-700 font-light">Facilitated Introductions</p>
                </div>
                <div className="border-l-4 border-[#8e6d46] pl-6 py-3">
                  <p className="text-gray-700 font-light">Follow-Up Action Tracking & Outcome Reporting</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-light uppercase tracking-wider text-gray-800 mb-6">Add-On Services</h3>
                <div className="border-l-4 border-[#8e6d46] pl-6 py-3">
                  <p className="text-gray-700 font-light">Background Notes & Pre-Meeting Briefs</p>
                </div>
                <div className="border-l-4 border-[#8e6d46] pl-6 py-3">
                  <p className="text-gray-700 font-light">Clear Meeting Agenda Preparation</p>
                </div>
                <div className="border-l-4 border-[#8e6d46] pl-6 py-3">
                  <p className="text-gray-700 font-light">Chauffered & Executive Transport</p>
                </div>
                <div className="border-l-4 border-[#8e6d46] pl-6 py-3">
                  <p className="text-gray-700 font-light">Meeting Coordination & Logistics</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-[#8e6d46] to-[#a2886a] text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase mb-6">
              Ready to Connect?
            </h2>
            <p className="text-lg font-light mb-8">
              Let's discuss your business objectives and how we can facilitate the right partnerships for your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setSelectedService('B2B Connector Inquiry')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#8e6d46] rounded-lg font-light uppercase tracking-wider hover:bg-[#f3f3f3] transition-colors"
              >
                Schedule Consultation <ArrowRight className="w-5 h-5" />
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
        title="B2B Connector Inquiry"
      >
        <ServiceContactForm
          serviceName={selectedService || ''}
          onSubmit={(data) => {
            console.log('B2B inquiry submitted:', data);
            setTimeout(() => setSelectedService(null), 2000);
          }}
        />
      </Modal>

      <Footer />
    </div>
  );
}
