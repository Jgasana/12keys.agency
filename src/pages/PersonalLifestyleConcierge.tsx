import { Header } from '../components/landing/Header';
import { Footer } from '../components/landing/Footer';
import { ArrowRight, CheckCircle, Sparkles, Clock, User, Heart } from 'lucide-react';
import { useState } from 'react';
import { Modal } from '../components/ui/Modal';
import { ServiceContactForm } from '../components/forms/ServiceContactForm';

export function PersonalLifestyleConcierge() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      title: 'Private Dining Arrangements',
      image: 'https://images.pexels.com/photos/34104577/pexels-photo-34104577.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'From intimate dinners to exclusive tasting menus, we curate private dining experiences tailored to your preferences, dietary needs, and occasion. Our team coordinates with premium restaurants and private chefs, ensuring seamless service in refined settings.'
    },
    {
      title: 'Wellness & Appointment Coordination',
      image: 'https://images.pexels.com/photos/6998874/pexels-photo-6998874.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'We arrange spa treatments, wellness consultations, fitness sessions, and health appointments, managing your schedule to integrate wellness seamlessly into your lifestyle. From personal trainers to holistic practitioners, we connect you with trusted providers.'
    },
    {
      title: 'Bespoke Requests & On-call Assistant',
      image: 'https://images.pexels.com/photos/6868791/pexels-photo-6868791.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'Whether it\'s securing exclusive access, handling personal errands, coordinating gift procurement, or managing special requests, our team is available to support your lifestyle needs with discretion and professionalism.'
    },
    {
      title: 'Wardrobe & Personal Shopping',
      image: 'https://images.pexels.com/photos/5699060/pexels-photo-5699060.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'From personal styling consultations to curated shopping experiences, we help you refine your wardrobe and access exclusive collections. Our team works with boutiques and premium retailers to match your aesthetic and lifestyle needs.'
    }
  ];

  const whyItMatters = [
    {
      title: 'Time Reclamation',
      description: 'Delegate personal logistics and lifestyle management, freeing your time for what truly matters—business, family, and well-being'
    },
    {
      title: 'Personalized Service',
      description: 'Every arrangement reflects your preferences, standards, and lifestyle, creating experiences that feel naturally aligned with who you are'
    },
    {
      title: 'Trusted Coordination',
      description: 'We vet providers, manage relationships, and ensure quality across all wellness, dining, and personal services you engage'
    },
    {
      title: 'Discreet Management',
      description: 'All arrangements are handled with complete confidentiality and professionalism, respecting your privacy and preferences'
    },
    {
      title: 'Stress Reduction',
      description: 'No more juggling appointments, restaurant searches, or coordination—we manage the details so you can relax and enjoy'
    },
    {
      title: 'Lifestyle Optimization',
      description: 'Proactive recommendations and access to Rwanda\'s finest wellness venues, dining establishments, and luxury services'
    }
  ];

  const subservices = [
    'Private Dining Arrangements',
    'Wellness & Appointment Coordination',
    'Bespoke Requests & On-call Assistant',
    'Wardrobe & Personal Shopping'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative text-white py-40 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(142,109,70,0.45) 0%, rgba(162,136,106,0.45) 100%), url(https://images.pexels.com/photos/725255/pexels-photo-725255.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop)',
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
                Personal & Lifestyle Concierge
              </h1>
              <p className="text-xl font-light max-w-3xl mx-auto mb-4">
                Refined personal support for your wellness, dining, and lifestyle needs
              </p>
              <p className="text-lg font-light max-w-3xl mx-auto mb-8 text-gray-100">
                Available selectively for clients with existing engagements, providing personalized assistance across wellness, dining, and lifestyle management
              </p>
              <button
                onClick={() => setSelectedService('Personal & Lifestyle Concierge Inquiry')}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#8e6d46] rounded-lg font-light uppercase tracking-wider hover:bg-[#f3f3f3] transition-colors"
              >
                Explore Services <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Personal lifestyle management goes beyond logistics—it's about creating space for what matters most.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                For clients with existing engagements, our Personal & Lifestyle Concierge service handles the details that consume time: dining reservations, wellness appointments, personal errands, wardrobe coordination, and lifestyle preferences. We work discreetly behind the scenes, ensuring your personal life runs seamlessly while you focus on business, family, and well-being.
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
                Personal lifestyle management requires understanding your preferences, standards, and priorities. We begin with detailed conversations about your lifestyle needs, favorite restaurants, wellness practices, and personal style, building a profile that guides all future arrangements.
              </p>
              <p>
                From there, we proactively manage your calendar, coordinate appointments, make reservations, handle shopping coordination, and support your wellness journey—all with the discretion and polish expected of a professional personal concierge. You maintain full control; we handle the execution.
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
                Comprehensive personal lifestyle management tailored to your preferences
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
                In today's demanding world, personal lifestyle management is a practical investment in your well-being, time, and quality of life.
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
                Core Services
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
                <h3 className="text-xl font-light uppercase tracking-wider text-gray-800 mb-4">Busy Executives</h3>
                <p className="text-gray-600 font-light">High-pressure roles requiring someone to manage personal logistics so you can focus on business priorities and well-being</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-light uppercase tracking-wider text-gray-800 mb-4">Wellness-Focused Professionals</h3>
                <p className="text-gray-600 font-light">Leaders who prioritize health, wellness, and lifestyle balance but lack time to coordinate appointments and practices</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-light uppercase tracking-wider text-gray-800 mb-4">Discerning Individuals</h3>
                <p className="text-gray-600 font-light">Those with refined tastes and high standards who appreciate curated experiences and seamless personal service</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-light uppercase tracking-wider text-gray-800 mb-4">International Clients</h3>
                <p className="text-gray-600 font-light">Expatriates and travelers seeking familiar wellness standards, dining quality, and personal services in Rwanda</p>
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
                  <Sparkles className="w-12 h-12 text-[#8e6d46]" />
                </div>
                <h3 className="text-lg font-light uppercase tracking-wider text-gray-800 mb-2">Curated Experiences</h3>
                <p className="text-gray-600 font-light text-sm">Access to Rwanda's finest dining, wellness, and lifestyle venues through our trusted network</p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Clock className="w-12 h-12 text-[#8e6d46]" />
                </div>
                <h3 className="text-lg font-light uppercase tracking-wider text-gray-800 mb-2">Time Efficiency</h3>
                <p className="text-gray-600 font-light text-sm">Proactive coordination that eliminates time spent on scheduling and logistics</p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <User className="w-12 h-12 text-[#8e6d46]" />
                </div>
                <h3 className="text-lg font-light uppercase tracking-wider text-gray-800 mb-2">Personalization</h3>
                <p className="text-gray-600 font-light text-sm">Every arrangement reflects your preferences, standards, and lifestyle needs</p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Heart className="w-12 h-12 text-[#8e6d46]" />
                </div>
                <h3 className="text-lg font-light uppercase tracking-wider text-gray-800 mb-2">Well-being Focus</h3>
                <p className="text-gray-600 font-light text-sm">Dedicated support for your wellness, health, and lifestyle balance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Availability Section */}
        <section className="py-20 bg-gradient-to-r from-[#f3f3f3] to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-gray-800 mb-6">
                Availability
              </h2>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                Our Personal & Lifestyle Concierge service is available selectively for clients with existing 12Keys engagements. We integrate seamlessly with your current services, ensuring coordinated, comprehensive support across all areas of your relationship with 12Keys.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-[#8e6d46] to-[#a2886a] text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase mb-6">
              Enhance Your Lifestyle With Personal Concierge Support
            </h2>
            <p className="text-lg font-light mb-8">
              If you're an existing client interested in adding personal and lifestyle management to your relationship with 12Keys, let's discuss how we can support your wellness, dining preferences, and daily lifestyle needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setSelectedService('Personal & Lifestyle Concierge Inquiry')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#8e6d46] rounded-lg font-light uppercase tracking-wider hover:bg-[#f3f3f3] transition-colors"
              >
                Inquire About Services <ArrowRight className="w-5 h-5" />
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
        title="Personal & Lifestyle Concierge Inquiry"
      >
        <ServiceContactForm
          serviceName={selectedService || ''}
          onSubmit={(data) => {
            console.log('Personal & Lifestyle Concierge inquiry submitted:', data);
            setTimeout(() => setSelectedService(null), 2000);
          }}
        />
      </Modal>

      <Footer />
    </div>
  );
}
