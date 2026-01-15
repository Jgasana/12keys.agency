import { Header } from '../components/landing/Header';
import { Footer } from '../components/landing/Footer';
import { ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { Modal } from '../components/ui/Modal';
import { ServiceContactForm } from '../components/forms/ServiceContactForm';

export function CorporateDelegationPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      title: 'Delegation Hosting Coordination',
      image: 'https://images.pexels.com/photos/7648001/pexels-photo-7648001.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'We support delegations, boards, and executive teams with structured, discreet coordination across multi-guest programs and time-sensitive agendas. Every aspect of your delegation visit is managed with cultural awareness and logistical precision, ensuring your team focuses on strategic objectives while we handle operational details.'
    },
    {
      title: 'Board-Level Mobility & On-Ground Logistics',
      image: 'https://images.pexels.com/photos/9651478/pexels-photo-9651478.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'We plan and confirm mobility for senior executives, supporting punctual arrivals, professional experiences, and coordinated movement that respects formal expectations and time sensitivities. Our team ensures reliable service with knowledgeable drivers familiar with local routes and vehicles maintained to the highest standards.'
    },
    {
      title: 'Venue & Operational Setup Support',
      image: 'https://images.pexels.com/photos/4940642/pexels-photo-4940642.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'We coordinate meeting spaces, event rooms, and dining reservations, ensuring each venue is prepared in advance and maintained clearly to support group progress. Our team handles all operational setup with attention to detail, from technology requirements to catering coordination.'
    },
    {
      title: 'On-Call Team Support Throughout the Engagement',
      image: 'https://images.pexels.com/photos/3865557/pexels-photo-3865557.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'We provide a central point of contact throughout a group\'s stay, ready to adjust schedules, resolve conflicting timings, or support last-minute changes. Our dedicated support team ensures seamless communication, quick decision-making, and responsive service throughout your engagement.'
    }
  ];

  const whyItMatters = [
    {
      title: 'Unified Coordination',
      description: 'All logistical elements from transport to calendars to accommodations are unified under one point of accountability'
    },
    {
      title: 'Reduced Surprises',
      description: 'Clear communication and precision planning minimize unexpected issues, ensuring continuity and reducing bandwidth strain'
    },
    {
      title: 'Schedule Alignment',
      description: 'We ensure every logistical element, from mobility needs to accommodations, is handled with precision and cultural awareness'
    },
    {
      title: 'Effective Focus',
      description: 'Your delegation can focus on strategic objectives without distraction, knowing all operational details are expertly managed'
    },
    {
      title: 'Cultural Competency',
      description: 'Deep understanding of Rwanda\'s business culture, protocols, and best practices ensures appropriate representation'
    },
    {
      title: 'Bandwidth Preservation',
      description: 'Your team maintains focus on strategic objectives while we handle planning, coordination, and logistics with expert precision'
    }
  ];

  const subservices = [
    'Delegation Hosting Coordination',
    'Board-Level Mobility & On-Ground Logistics',
    'Venue & Operational Setup Support',
    'On-Call Team Support Throughout the Engagement'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative text-white py-40 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(142,109,70,0.5) 0%, rgba(162,136,106,0.5) 100%), url(https://images.pexels.com/photos/8730327/pexels-photo-8730327.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop)',
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
                Corporate & Delegation Concierge
              </h1>
              <p className="text-xl font-light max-w-3xl mx-auto mb-4">
                Seamless coordination for delegations, boards, and executive teams
              </p>
              <p className="text-lg font-light max-w-3xl mx-auto mb-8 text-gray-100">
                Complete logistical management that ensures your delegation focuses on strategic objectives
              </p>
              <button
                onClick={() => setSelectedService('Corporate & Delegation Inquiry')}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#8e6d46] rounded-lg font-light uppercase tracking-wider hover:bg-[#f3f3f3] transition-colors"
              >
                Coordinate Your Delegation <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Managing a delegation or corporate visit requires seamless alignment across people, time, and protocol.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                12Keys provides a central point of coordination for corporate teams, boards, diplomatic delegations, and visiting executive groups. We ensure every logical element—from transport to calendars to accommodations—is handled with precision and cultural awareness, allowing your delegation to focus on strategic objectives without distraction.
              </p>
            </div>
          </div>
        </section>

        {/* Sub-section Copy */}
        <section className="py-20 bg-gradient-to-r from-[#f3f3f3] to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-light tracking-widest uppercase text-gray-800 mb-8 text-center">
              Our Approach
            </h2>
            <div className="space-y-6 text-gray-700 font-light">
              <p>
                We support delegations, boards, and executive teams with structured, discreet coordination across multi-guest programs and time-sensitive agendas.
              </p>
              <p>
                12Keys provides a central point of coordination for corporate teams, boards, diplomatic delegations, and visiting executive groups. We ensure every logical element, from transport to calendars to accommodations, are unified under one point of accountability, allowing your delegation to focus on strategic objectives without distraction.
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
                Comprehensive delegation management tailored to your needs
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
                        className={`w-full h-full ${index === 0 ? 'object-contain bg-gray-200' : 'object-cover'}`}
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
                Managing a delegation or corporate visit requires seamless alignment across people, time, and protocol. With 12Keys as your coordination partner, all logistical elements are unified under one point of accountability
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
                <h3 className="text-xl font-light uppercase tracking-wider text-gray-800 mb-4">Corporate & Executive Teams</h3>
                <p className="text-gray-600 font-light">Multi-day corporate visits, executive retreats, strategic planning sessions with multiple stakeholders requiring seamless coordination</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-light uppercase tracking-wider text-gray-800 mb-4">Government & Diplomatic Delegations</h3>
                <p className="text-gray-600 font-light">Official visits, protocol-sensitive engagements, multi-agency delegations requiring cultural awareness and diplomatic discretion</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-light uppercase tracking-wider text-gray-800 mb-4">Board Visits</h3>
                <p className="text-gray-600 font-light">Board meetings, organizational leadership visits, and executive site inspections requiring comprehensive logistical support</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-light uppercase tracking-wider text-gray-800 mb-4">Visiting International Groups</h3>
                <p className="text-gray-600 font-light">International delegations, partner organization visits, and cross-border business engagements requiring local expertise</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-[#8e6d46] to-[#a2886a] text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase mb-6">
              Ready to Coordinate Your Delegation?
            </h2>
            <p className="text-lg font-light mb-8">
              Let's discuss your delegation objectives and how we can ensure every detail is handled with precision, cultural awareness, and professionalism
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setSelectedService('Corporate & Delegation Inquiry')}
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
        title="Corporate & Delegation Inquiry"
      >
        <ServiceContactForm
          serviceName={selectedService || ''}
          onSubmit={(data) => {
            console.log('Corporate & Delegation inquiry submitted:', data);
            setTimeout(() => setSelectedService(null), 2000);
          }}
        />
      </Modal>

      <Footer />
    </div>
  );
}
