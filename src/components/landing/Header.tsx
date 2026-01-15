import { Menu, X, MessageCircle, Mail, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '#about' },
    { label: 'Contact us', href: '#contact' },
  ];

  const services = [
    { label: 'B2B Connector', href: '/b2b' },
    { label: 'Travel & Hospitality', href: '/travel-hospitality' },
    { label: 'Corporate & Delegation', href: '/corporate-delegation' },
    { label: 'Relocation & Settlement', href: '/relocation-settlement' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/">
              <img src="/logo.jpeg" alt="12 Keys Concierge" className="h-[80px]" />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-sm uppercase tracking-wider font-light text-gray-700 hover:text-[#8e6d46] transition-colors"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-sm uppercase tracking-wider font-light text-gray-700 hover:text-[#8e6d46] transition-colors py-2"
              >
                Services
                <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {services.map((service) => (
                  <a
                    key={service.label}
                    href={service.href}
                    className="block px-4 py-3 text-sm uppercase tracking-wider font-light text-gray-700 hover:bg-[#f3f3f3] hover:text-[#8e6d46] transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {service.label}
                  </a>
                ))}
              </div>
            </div>

            {navItems.slice(1).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-wider font-light text-gray-700 hover:text-[#8e6d46] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => {
                if (window.$chatwoot) {
                  window.$chatwoot.toggle();
                }
              }}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#8e6d46] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="font-light">Chat</span>
            </button>
            <a
              href="mailto:info@12keys.agency"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#8e6d46] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-light">Email</span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#8e6d46] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-6 space-y-4">
            <a
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm uppercase tracking-wider font-light text-gray-700 hover:text-[#8e6d46] transition-colors py-2"
            >
              Home
            </a>

            {/* Mobile Services Dropdown */}
            <div className="py-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-2 text-sm uppercase tracking-wider font-light text-gray-700 hover:text-[#8e6d46] transition-colors w-full py-2"
              >
                Services
                <ChevronDown className={`w-4 h-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="pl-6 space-y-2 mt-2 border-l-2 border-[#8e6d46]">
                  {services.map((service) => (
                    <a
                      key={service.label}
                      href={service.href}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesOpen(false);
                      }}
                      className="block text-sm uppercase tracking-wider font-light text-gray-600 hover:text-[#8e6d46] transition-colors py-2"
                    >
                      {service.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navItems.slice(1).map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm uppercase tracking-wider font-light text-gray-700 hover:text-[#8e6d46] transition-colors py-2"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 border-t border-gray-200 space-y-3">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  if (window.$chatwoot) {
                    window.$chatwoot.toggle();
                  }
                }}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#8e6d46] transition-colors py-2 w-full"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="font-light">Chat</span>
              </button>
              <a
                href="mailto:info@12keys.agency"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#8e6d46] transition-colors py-2"
              >
                <Mail className="w-4 h-4" />
                <span className="font-light">Email</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}