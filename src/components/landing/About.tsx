import { Award, Clock, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Award,
      title: 'Quality',
      description: 'Structured, SOP-driven execution and Identity-shielded communication',
    },
    {
      icon: Clock,
      title: 'Availability',
      description: '24/7 support during active engagements',
    },
    {
      icon: Users,
      title: 'Expertise',
      description: 'One dedicated concierge for every engagement',
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
              12 Keys is a private executive concierge agency serving high-net-worth individuals, corporate boards, regional headquarters, diplomatic guests, and relocating executives in Rwanda.
            </p>
            <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
              We operate as a single point of accountability, anticipating needs, managing details, and delivering seamless coordination across travel, residence, business engagement, and personal support.
            </p>
            <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
              The name 12 Keys reflects our core belief: that a life well-orchestrated is unlocked through mastery across the essential domains of living, travel, business, and personal care. Each “key” represents a field of access, coordination, and elevated experience, ensuring nothing is left to uncertainty, delay, or compromise.
            </p>
            <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
              At 12 Keys, every interaction is a key, unlocking a world of tailored services. From seamless on-ground travel coordination to lifestyle management and executive support, our promise is simple: Behind every door, there’s a tailored attention.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-[#8e6d46] hover:bg-[#a2886a] text-white uppercase tracking-wider text-sm font-light transition-colors"
            >
              Request for a meeting
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