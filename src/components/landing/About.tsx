import { Award, Clock, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Award,
      title: 'Quality',
      description: 'Unwavering commitment to delivering exceptional service and unforgettable experiences',
    },
    {
      icon: Clock,
      title: 'Availability',
      description: 'Round-the-clock support ensuring your events run seamlessly at any time',
    },
    {
      icon: Users,
      title: 'Expertise',
      description: 'Seasoned professionals with extensive experience in luxury event management',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-gray-800 mb-6">
              About Us
            </h2>
            <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
              We are a premier concierge service specializing in curating extraordinary private events and bespoke experiences. With years of expertise in the luxury sector, we pride ourselves on delivering impeccable service tailored to your unique vision.
            </p>
            <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
              Our team of dedicated professionals works tirelessly to ensure every detail is perfect, from venue selection to entertainment coordination. We transform your ideas into unforgettable moments.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-[#8e6d46] hover:bg-[#a2886a] text-white uppercase tracking-wider text-sm font-light transition-colors"
            >
              Start Planning
            </a>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1560424/pexels-photo-1560424.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury venue"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center p-6 group">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-[#8e6d46]/10 group-hover:bg-[#8e6d46] transition-colors">
                  <Icon className="w-8 h-8 text-[#8e6d46] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-light tracking-wider uppercase text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
