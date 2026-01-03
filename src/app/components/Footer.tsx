import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About Us', id: 'why-us' },
    { name: 'Contact', id: 'contact' },
  ];

  const countries = [
    { name: 'United Kingdom', id: 'countries' },
    { name: 'United States', id: 'countries' },
    { name: 'Canada', id: 'countries' },
    { name: 'Europe', id: 'countries' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };


  return (
    <footer className="bg-[#16213e] border-t-2 border-[#B00020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">HU</span>
              <span className="text-[#B00020]"> Consultants</span>
            </div>
            <p className="text-[#c7c7d9] mb-4">
              HU Consultants: Your partner in crafting a life-changing study abroad experience. We're here to support you every step of the way. Your dreams are within reach, let's make them a reality!
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-[#23234b] text-white rounded-lg hover:bg-[#B00020] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-[#23234b] text-white rounded-lg hover:bg-[#B00020] transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-[#23234b] text-white rounded-lg hover:bg-[#B00020] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-[#23234b] text-white rounded-lg hover:bg-[#B00020] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-[#c7c7d9] hover:text-[#B00020] transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h3 className="text-white mb-4">Study Destinations</h3>
            <ul className="space-y-2">
              {countries.map((country) => (
                <li key={country.name}>
                  <button
                    onClick={() => scrollToSection(country.id)}
                    className="text-[#c7c7d9] hover:text-[#B00020] transition-colors duration-300 cursor-pointer"
                  >
                    {country.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#c7c7d9]">
                <Phone size={18} className="mt-1 text-[#B00020]" />
                <div>
                  <a href="tel:+923122496574" className="hover:text-[#B00020] transition-colors">
                    +92 312 2496574
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-[#c7c7d9]">
                <Mail size={18} className="mt-1 text-[#B00020]" />
                <div>
                  <a href="mailto:huconsultantspvtltd@gmail.com" className="hover:text-[#B00020] transition-colors break-all">
                    huconsultantspvtltd@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-[#c7c7d9]">
                <MapPin size={18} className="mt-1 text-[#B00020]" />
                <div>
                  Shop# 1 ... Al Amin Market<br />
                  Dhendian Road, near sabzi mandi<br />
                  Pakistan
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#B00020]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#c7c7d9] text-center md:text-left">
              © 2026 HU Consultants. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[#c7c7d9] hover:text-[#B00020] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-[#c7c7d9] hover:text-[#B00020] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-[#c7c7d9] hover:text-[#B00020] transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

